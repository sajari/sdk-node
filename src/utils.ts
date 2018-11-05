import { ServiceError, status as grpcCodes } from "grpc";
import { sajari } from "../generated/proto";

export type Value = string | string[] | null;

export namespace Value {
  export function toProto(v: Value): sajari.engine.Value {
    if (Array.isArray(v)) {
      return new sajari.engine.Value({ repeated: { values: v } });
    } else if (typeof v === "string") {
      return new sajari.engine.Value({ single: v });
    } else if (v === null) {
      return sajari.engine.Value.create({ null: true });
    }

    throw new Error(
      `argument passed to "Value.toProto" must be a string, Array<string>, or null`
    );
  }

  export function fromProto(v: sajari.engine.IValue): Value {
    const value = v as sajari.engine.Value;
    if (value === null || value.value === undefined) {
      return null;
    }
    switch (value.value) {
      case "single":
        return value.single;
      case "repeated":
        return (value.repeated as sajari.engine.Value.Repeated).values;
      case "null":
        return null;
    }

    throw new Error(
      `argument passed to "Value.fromProto" must being either null, single or repeated`
    );
  }
}

/**
 * @hidden
 */
export const errorFromStatus = (status: sajari.rpc.IStatus): Error | null => {
  const err = sajari.rpc.Status.verify(status);
  if (err) {
    throw new Error(`sajari: failed to verify Status message: ${err}`);
  }

  const s = status as sajari.rpc.Status;
  switch (s.code) {
    case grpcCodes.OK:
      return null;
    default:
      const error: ServiceError = new Error(s.message);
      error.code = s.code;
      return error;
  }
};

/**
 * @hidden
 */
export const errorFromStatuses = (
  status: sajari.rpc.IStatus[]
): MultiError | null => {
  // reducing errors to an object with their index as the key,
  // so that the end user can map the error index to a record index
  const errors = status.map(errorFromStatus).reduce(
    (obj, error, idx) => {
      if (error) {
        obj[idx] = error;
      }
      return obj;
    },
    {} as { [k: number]: Error }
  );

  if (Object.keys(errors).length === 0) {
    return null;
  }
  return new MultiError(errors);
};

export class MultiError extends Error {
  public errors: { [k: number]: Error };

  constructor(errors: { [k: number]: Error }) {
    super();

    this.errors = errors;
    this.message = this.messageCreator();
  }

  /**
   * @hidden
   */
  private messageCreator = (): string => {
    const n = Object.keys(this.errors).length;
    const firstErrorKey = parseInt(Object.keys(this.errors)[0], 10);
    const msg = this.errors[firstErrorKey].message;

    if (n === 1) {
      return msg;
    } else if (n === 2) {
      return `${msg} (and 1 other error)`;
    }
    return `${msg} (and ${n - 1} other errors)`;
  };
}

/**
 * @hidden
 */
export const deadline = (seconds: number) =>
  new Date().setSeconds(new Date().getSeconds() + seconds);

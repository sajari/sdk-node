import { ServiceError, status as grpcCodes } from "grpc";
import { sajari } from "../generated/proto";

/**
 * @hidden
 */
export const valueFromProto = (
  v: sajari.engine.IValue
): string[] | string | null => {
  // We are casting to sajari.engine.Value straight away here
  // as it appears that the node implementation of grpc or protobufjs
  // is translating the protobuf messages to simplified objects
  // automatically.
  const value = v as sajari.engine.Value;
  if (value === null) {
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
    `argument passed to "valueFromProto" must being either null, single or repeated`
  );
};

/**
 * @hidden
 */
export const valueToProto = (
  v: string[] | string | null
): sajari.engine.Value => {
  if (Array.isArray(v)) {
    return new sajari.engine.Value({ repeated: { values: v } });
  } else if (typeof v === "string") {
    return new sajari.engine.Value({ single: v });
  } else if (v === null) {
    return sajari.engine.Value.create({ null: true });
  }

  throw new Error(
    `argument passed to "valueToProto" must be a string, Array<string>, or null`
  );
};

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

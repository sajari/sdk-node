// tslint:disable:max-classes-per-file

import { ServiceError, status as grpcCodes } from "grpc";
import { sajari } from "../generated/proto";

export type Value = string | string[] | null;

export namespace Value {
  /**
   * @hidden
   */
  export function toProto(v: Value): sajari.engine.Value | undefined {
    const value = convertTypes(v);
    if (Array.isArray(value)) {
      return new sajari.engine.Value({ repeated: { values: value } });
    } else if (typeof value === "string") {
      return new sajari.engine.Value({ single: value });
    }
    return undefined;
  }

  /**
   * @hidden
   */
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
  }

  /**
   * convertTypes takes in any value and converts the underlaying value
   * into its string representation
   * @hidden
   */
  function convertTypes(v: any): Value {
    if (Array.isArray(v)) {
      return v.map((x) => String(x));
    } else if (v instanceof Date) {
      return String(Math.floor(v.valueOf() / 1000));
    } else if (v === null || v === undefined) {
      return null;
    } else {
      return String(v);
    }
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
  public errors: Errors;

  constructor(errors: { [k: number]: Error }) {
    super();

    this.errors = new Errors(errors);
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
export class Errors extends Array<Error> {
  constructor(errors: { [k: number]: Error }) {
    const lastIdx = Object.keys(errors).pop();
    super(parseInt(lastIdx || "", 10));

    Object.keys(errors).forEach((key) => {
      const idx = parseInt(key, 10);
      this[idx] = errors[idx];
    });
  }
}

/**
 * @hidden
 */
export const deadline = (seconds: number) =>
  new Date().setSeconds(new Date().getSeconds() + seconds);

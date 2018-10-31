import { ServiceError, status as grpcCodes } from "grpc";
import { sajari } from "../generated/proto";

/**
 * @hidden
 */
export const valueFromProto = (
  v: sajari.engine.Value
): string[] | string | null => {
  switch (v.value) {
    case "single":
      return v.single;
    case "repeated":
      return (v.repeated as sajari.engine.Value.Repeated).values;
    default:
      return null;
  }
};

/**
 * @hidden
 */
export const valueToProto = (
  v: string[] | string
): sajari.engine.Value | null => {
  if (Array.isArray(v)) {
    return new sajari.engine.Value({ repeated: { values: v } });
  } else if (typeof v === "string") {
    return new sajari.engine.Value({ single: v });
  }
  return null;
};

/**
 * @hidden
 */
export const errorFromStatus = (status: sajari.rpc.Status): Error | null => {
  switch (status.code) {
    case grpcCodes.OK:
      return null;
    case grpcCodes.NOT_FOUND:
      return new Error("sajari: no such record");
    default:
      const error: ServiceError = new Error(status.message);
      error.code = status.code;
      return error;
  }
};

/**
 * @hidden
 */
export const errorFromStatuses = (
  status: sajari.rpc.Status[]
): MultiError | null => {
  const errors = status.map(errorFromStatus).filter((x) => !!x);

  if (errors.length === 0) {
    return null;
  }
  return new MultiError(errors as Error[]);
};

export class MultiError extends Error {
  public errors: Error[];

  constructor(errors: Error[]) {
    super();

    this.errors = errors;
    this.message = this.messageCreator();
  }

  private messageCreator = (): string => {
    const n = this.errors.length;
    const msg = this.errors[0].message;

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

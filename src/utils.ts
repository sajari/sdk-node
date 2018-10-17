import { ServiceError, status as grpcCodes } from "grpc";
import { sajari } from "../generated/proto";

export interface IValues {
  [id: string]: string;
}

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

export const errorFromStatus = (
  status: sajari.rpc.Status[]
): MultiError | null => {
  const errors = status
    .map((callStatus) => {
      switch (callStatus.code) {
        case grpcCodes.OK:
          return null;
        case grpcCodes.NOT_FOUND:
          return new Error("sajari: no such record");
        default:
          const error: ServiceError = new Error(callStatus.message);
          error.code = callStatus.code;
          return error;
      }
    })
    .filter((x) => !!x);

  if (errors.length < 1) {
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
  }
}

export const deadline = (seconds: number) =>
  new Date().setSeconds(new Date().getSeconds() + seconds);

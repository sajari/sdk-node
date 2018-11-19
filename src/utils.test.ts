import { sajari } from "../generated/proto";
import {
  Value,
  Errors,
  errorFromStatus,
  deadline,
  errorFromStatuses,
  MultiError
} from "./utils";
import { status, ServiceError } from "grpc";

describe("Value.fromProto", () => {
  test("single value", () => {
    expect(
      Value.fromProto(sajari.engine.Value.create({ single: "hello" }))
    ).toBe("hello");
  });

  test("repeated value", () => {
    expect(
      Value.fromProto(
        sajari.engine.Value.create({ repeated: { values: ["hello", "world"] } })
      )
    ).toEqual(["hello", "world"]);
  });

  test("null value", () => {
    expect(
      Value.fromProto(sajari.engine.Value.create({ null: true }))
    ).toBeNull();
  });
});

describe("Value.toProto", () => {
  test("number array", () => {
    // @ts-ignore
    expect(Value.toProto([1, 4, "4.4"])).toEqual(
      sajari.engine.Value.create({ repeated: { values: ["1", "4", "4.4"] } })
    );
  });
  test("number", () => {
    // @ts-ignore
    expect(Value.toProto(1)).toEqual(
      sajari.engine.Value.create({ single: "1" })
    );
  });
  test("boolean", () => {
    // @ts-ignore
    expect(Value.toProto(false)).toEqual(
      sajari.engine.Value.create({ single: "false" })
    );
  });
  test("date", () => {
    const date = new Date("2018-11-07T07:51:31+0000");
    const unix = "1541577091";
    // @ts-ignore
    expect(Value.toProto(date)).toEqual(
      sajari.engine.Value.create({ single: unix })
    );
  });
});

describe("errors", () => {
  test("create Errors", () => {
    const errs = new Errors({ 0: new Error("hello"), 2: new Error("world") });
    expect(errs.length).toBe(3);
    expect(errs[0]).toEqual(new Error("hello"));
    expect(errs[2]).toEqual(new Error("world"));
  });

  test("errorFromStatus error", () => {
    const error: ServiceError | null = errorFromStatus(
      sajari.rpc.Status.create({
        code: status.INVALID_ARGUMENT,
        message: "invalid argument"
      })
    );
    expect(error).not.toBeNull();
    // XXX: casting to ServiceError after null check
    const err = error as ServiceError;
    expect(err.message).toBe("invalid argument");
    expect(err.code).toBe(status.INVALID_ARGUMENT);
  });

  test("errorFromStatus null", () => {
    const error = errorFromStatus(
      sajari.rpc.Status.create({ code: status.OK })
    );
    expect(error).toBeNull();
  });

  test("errorFromStatus throw", () => {
    // @ts-ignore: purposefully incorrect
    expect(() => errorFromStatus(null)).toThrowError();
  });

  test("errorFromStatuses null", () => {
    const statuses = [sajari.rpc.Status.create({ code: status.OK })];

    const error: MultiError | null = errorFromStatuses(statuses);
    expect(error).toBeNull();
  });

  test("errorFromStatuses error:one", () => {
    const statuses = [sajari.rpc.Status.create({ code: status.ABORTED })];

    const error: MultiError | null = errorFromStatuses(statuses);
    expect(error).not.toBeNull();
    // XXX: casting to MultiError after null check
    const err = error as MultiError;
    expect(err.errors.length).toBe(1);
  });

  test("errorFromStatuses error:two", () => {
    const statuses = [
      sajari.rpc.Status.create({ code: status.ABORTED }),
      sajari.rpc.Status.create({ code: status.NOT_FOUND })
    ];

    const error: MultiError | null = errorFromStatuses(statuses);
    expect(error).not.toBeNull();
    // XXX: casting to MultiError after null check
    const err = error as MultiError;
    expect(err.errors.length).toBe(2);
  });

  test("errorFromStatuses error:many", () => {
    const statuses = [
      sajari.rpc.Status.create({ code: status.ABORTED }),
      sajari.rpc.Status.create({ code: status.NOT_FOUND }),
      sajari.rpc.Status.create({ code: status.OK }),
      sajari.rpc.Status.create({ code: status.DATA_LOSS })
    ];

    const error: MultiError | null = errorFromStatuses(statuses);
    expect(error).not.toBeNull();
    // XXX: casting to MultiError after null check
    const err = error as MultiError;
    expect(err.errors.length).toBe(4);
    expect(err.errors[2]).toBeUndefined();
  });
});

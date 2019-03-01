import { sajari } from "../generated/proto";
import {
  ValueFromProto,
  ValueToProto,
  KeyToProto,
  KeyFromProto
} from "./types";

describe("ValueFromProto", () => {
  test("single value", () => {
    expect(
      ValueFromProto(sajari.engine.v2.Value.create({ single: "hello" }))
    ).toBe("hello");
  });

  test("repeated value", () => {
    expect(
      ValueFromProto(
        sajari.engine.v2.Value.create({
          repeated: { values: ["hello", "world"] }
        })
      )
    ).toEqual(["hello", "world"]);
  });

  test("null value", () => {
    expect(
      ValueFromProto(sajari.engine.v2.Value.create({ null: true }))
    ).toBeNull();
  });
});

describe("ValueToProto", () => {
  test("number array", () => {
    // Casting as any for test
    expect(ValueToProto([1, 4, "4.4"] as any)).toEqual(
      sajari.engine.v2.Value.create({ repeated: { values: ["1", "4", "4.4"] } })
    );
  });
  test("number", () => {
    // Casting as any for test
    expect(ValueToProto(1 as any)).toEqual(
      sajari.engine.v2.Value.create({ single: "1" })
    );
  });
  test("boolean", () => {
    // Casting as any for test
    expect(ValueToProto(false as any)).toEqual(
      sajari.engine.v2.Value.create({ single: "false" })
    );
  });
  test("date", () => {
    const date = new Date("2018-11-07T07:51:31+0000");
    const unix = "1541577091";

    // Casting as any for test
    expect(ValueToProto(date as any)).toEqual(
      sajari.engine.v2.Value.create({ single: unix })
    );
  });
});

describe("Key", () => {
  const key = { field: "_id", value: "123" };
  const proto = sajari.engine.v2.Key.create({
    field: "_id",
    value: sajari.engine.v2.Value.create({ single: "123" })
  });

  test("KeyToProto", () => {
    expect(KeyToProto(key)).toEqual(proto);
  });

  test("KeyFromProto", () => {
    expect(KeyFromProto(proto)).toEqual(key);
  });
});

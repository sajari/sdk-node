import { sajari } from "../generated/proto";

import { valueFromProto } from "./utils";

describe("valueFromProto", () => {
  test("single value", () => {
    expect(
      valueFromProto(sajari.engine.Value.create({ single: "hello" }))
    ).toBe("hello");
  });

  test("repeated value", () => {
    expect(
      valueFromProto(
        sajari.engine.Value.create({ repeated: { values: ["hello", "world"] } })
      )
    ).toEqual(["hello", "world"]);
  });

  test("null value", () => {
    expect(
      valueFromProto(sajari.engine.Value.create({ null: true }))
    ).toBeNull();
  });
});

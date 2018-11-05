import { sajari } from "../generated/proto";
import { Value } from "./utils";

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

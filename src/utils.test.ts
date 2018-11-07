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

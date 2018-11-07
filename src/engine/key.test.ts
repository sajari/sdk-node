import { sajari } from "../../generated/proto";
import { Key } from "./key";

describe("Key", () => {
  const key = { field: "_id", value: "123" };
  const proto = sajari.engine.Key.create({
    field: "_id",
    value: sajari.engine.Value.create({ single: "123" })
  });

  test("Key.toProto", () => {
    expect(Key.toProto(key)).toEqual(proto);
  });

  test("Key.fromProto", () => {
    expect(Key.fromProto(proto)).toEqual(key);
  });
});

import { sajari } from "../../generated/proto";
import { Record } from "./record";
import { Value } from "../utils";

describe("Record", () => {
  const record = {
    hello: "world",
    list: ["of", "items"]
  };
  const proto = sajari.engine.store.record.Record.create({
    values: {
      hello: Value.toProto("world"),
      list: Value.toProto(["of", "items"])
    }
  });

  test("Record.fromProto", () => {
    expect(Record.fromProto(proto)).toEqual(record);
  });
  test("Record.toProto", () => {
    expect(Record.toProto(record)).toEqual(proto);
  });
});

import { sajari } from "../../generated/proto";
import { Record } from "./record";
import { Value } from "../utils";

describe("Record", () => {
  test("Record.fromProto", () => {
    const proto = sajari.engine.store.record.Record.create({
      values: {
        hello: Value.toProto("world") as sajari.engine.Value,
        list: Value.toProto(["of", "items"]) as sajari.engine.Value,
        nope: { null: null }
      }
    });

    expect(Record.fromProto(proto)).toEqual({
      hello: "world",
      list: ["of", "items"]
    });
  });
  test("Record.toProto", () => {
    const record = {
      hello: "world",
      list: ["of", "items"],
      nope: undefined,
      alsoNope: null
    };
    const proto = sajari.engine.store.record.Record.create({
      values: {
        hello: Value.toProto("world") as sajari.engine.Value,
        list: Value.toProto(["of", "items"]) as sajari.engine.Value
      }
    });

    // @ts-ignore: record purposefully has incorrect key:value pairs
    expect(Record.toProto(record)).toEqual(proto);
  });
});

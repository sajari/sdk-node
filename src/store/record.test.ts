import { sajari } from "../../generated/proto";
import { RecordToProto, RecordFromProto } from "./record";
import { ValueToProto } from "../types";

describe("Record", () => {
  test("RecordFromProto", () => {
    const proto = sajari.engine.v2.Record.create({
      values: {
        hello: ValueToProto("world"),
        list: ValueToProto(["of", "items"]),
        nope: ValueToProto(null)
      } as { [k: string]: sajari.engine.v2.IValue }
    });

    expect(RecordFromProto(proto)).toEqual({
      hello: "world",
      list: ["of", "items"]
    });
  });

  test("RecordToProto", () => {
    const record = {
      hello: "world",
      list: ["of", "items"],
      nope: undefined,
      alsoNope: null
    };
    const proto = sajari.engine.v2.Record.create({
      values: {
        hello: ValueToProto("world"),
        list: ValueToProto(["of", "items"])
      } as { [k: string]: sajari.engine.v2.IValue }
    });

    expect(RecordToProto(record as any)).toEqual(proto);
  });
});

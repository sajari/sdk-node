import { sajari } from "../../generated/proto";
import { ValueFromProto, ValueToProto } from "../types";

export interface Record {
  [id: string]: string | string[];
}

/**
 * @hidden
 */
export function RecordToProto(r: Record): sajari.engine.v2.Record {
  const values = Object.keys(r).reduce<{
    [k: string]: sajari.engine.v2.IValue;
  }>((obj, key) => {
    const v = ValueToProto(r[key]);
    if (v === undefined) {
      return obj;
    }
    obj[key] = v;
    return obj;
  }, {});

  return sajari.engine.v2.Record.create({
    values
  });
}

/**
 * @hidden
 */
export function RecordFromProto(
  pb: sajari.engine.v2.IRecord | null | undefined
): Record {
  if (pb == null || pb.values == null) {
    return {};
  }

  const x = pb.values;
  return Object.keys(x).reduce<Record>((obj, key) => {
    const v = ValueFromProto(x[key]);
    if (v === null) {
      return obj;
    }
    obj[key] = v;
    return obj;
  }, {});
}

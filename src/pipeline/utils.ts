import { sajari } from "../../generated/proto";
import { valueFromProto, valueToProto } from "../utils";

export interface Key {
  field: string;
  value: string;
}

export interface Record {
  [id: string]: string | string[];
}

/**
 * @hidden
 */
export function parseEngineRecord(
  record: sajari.engine.store.record.Record
): Record {
  return Object.keys(record.values).reduce(
    (r, key) => {
      const value = valueFromProto(record.values[key] as sajari.engine.Value);
      if (value === null) {
        return r;
      }
      r[key] = value;
      return r;
    },
    {} as Record
  );
}

/**
 * @hidden
 */
export function parseEngineKey(key: sajari.engine.IKey): Key {
  if (key.field == null || key.value == null) {
    return { field: "", value: "" };
  }
  const value = valueFromProto(key.value as sajari.engine.Value);
  if (value === null) {
    return { field: key.field, value: "" };
  }

  return {
    field: key.field,
    value: value as string
  };
}

/**
 * @hidden
 */
export function createEngineRecord(
  record: Record
): sajari.engine.store.record.Record {
  const values = Object.keys(record).reduce(
    (obj: { [k: string]: sajari.engine.IValue }, key) => {
      const value = record[key];

      if (typeof value === "string") {
        obj[key] = { single: value as string };
        return obj;
      } else if (value instanceof Array) {
        obj[key] = { repeated: { values: value as string[] } };
        return obj;
      }

      return obj;
    },
    {}
  );

  return new sajari.engine.store.record.Record({ values });
}

/**
 * @hidden
 */
export function createEngineKey(key: Key): sajari.engine.Key {
  return new sajari.engine.Key({
    field: key.field,
    value: valueToProto(key.value)
  });
}

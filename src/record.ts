import { sajari } from "../generated/proto";
import { valueFromProto, valueToProto } from "./utils";

export interface Record {
  [id: string]: string | string[];
}

/**
 * @hidden
 */
export function parseEngineRecord(
  record: sajari.engine.store.record.IRecord
): Record {
  const rec = record as sajari.engine.store.record.Record;
  return Object.keys(rec.values).reduce(
    (r, key) => {
      if (rec.values == null) {
        return r;
      }

      const value = valueFromProto(rec.values[key]);
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
export function createEngineRecord(
  record: Record
): sajari.engine.store.record.Record {
  const values = Object.keys(record).reduce(
    (obj, key) => {
      const value = valueToProto(record[key]);
      if (value == null) {
        return obj;
      }

      obj[key] = value;
      return obj;
    },
    {} as { [k: string]: sajari.engine.IValue }
  );

  return new sajari.engine.store.record.Record({ values });
}

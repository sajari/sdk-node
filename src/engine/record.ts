import { sajari } from "../../generated/proto";
import { Value } from "../utils";

export interface Record {
  [id: string]: string | string[];
}

export namespace Record {
  /**
   * @hidden
   */
  export function toProto(r: Record): sajari.engine.store.record.Record {
    const values = Object.keys(r).reduce(
      (obj, key) => {
        const value = Value.toProto(r[key]);
        if (value === undefined) {
          return obj;
        }
        obj[key] = value;
        return obj;
      },
      {} as { [k: string]: sajari.engine.IValue }
    );

    return new sajari.engine.store.record.Record({ values });
  }

  /**
   * @hidden
   */
  export function fromProto(r: sajari.engine.store.record.IRecord): Record {
    const record = r as sajari.engine.store.record.Record;
    return Object.keys(record.values).reduce(
      (rec, key) => {
        const value = Value.fromProto(record.values[key]);
        if (value === null) {
          return rec;
        }
        rec[key] = value;
        return rec;
      },
      {} as Record
    );
  }
}

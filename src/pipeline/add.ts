import { sajari } from "../../generated/proto";
import { errorFromStatus, valueFromProto } from "../utils";

export interface Key {
  field: string;
  value: any;
}

export interface Record {
  [id: string]: string | string[];
}

/**
 * @hidden
 */
export const createAddRequest = (
  pipeline: string,
  values: { [k: string]: string },
  records: Record[]
): { [k: string]: any } => {
  return {
    pipeline: { name: pipeline },
    records: records.map((record) => createEngineRecord(record)),
    values
  };
};

/**
 * @hidden
 */
const createEngineRecord = (
  record: Record
): sajari.engine.store.record.IRecord => {
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

  return { values };
};

/**
 * @hidden
 */
export const processAddResponse = (
  response: sajari.engine.store.record.AddResponse
): Error | Key => {
  const keys = response.keys
    .map((resKey) => {
      if (
        (resKey as sajari.engine.Key).field === "" &&
        ((resKey as sajari.engine.Key).value === undefined ||
          (resKey as sajari.engine.Key).value === null)
      ) {
        return null;
      }
      const value = valueFromProto(resKey.value as sajari.engine.Value);
      if (!value) {
        return null;
      }
      return { field: (resKey as sajari.engine.Key).field, value };
    })
    .filter((x) => !!x);

  const key = keys[0];
  if (!key) {
    const err = errorFromStatus(response.status as sajari.rpc.Status[]);
    if (!!err) {
      return err as Error;
    }
  }
  return key as Key;
};

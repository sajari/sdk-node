import { sajari } from "../../generated/proto";
import { errorFromStatus, IValues, valueFromProto } from "../utils";

export interface IKey {
  field: string;
  value: any;
}

export interface IRecord {
  [id: string]: string | string[];
}

export const createAddRequest = (
  pipeline: string,
  values: IValues,
  records: IRecord[]
): { [k: string]: any } => {
  return {
    pipeline: { name: pipeline },
    records: records.map((record) => createEngineRecord(record)),
    values
  };
};

const createEngineRecord = (
  record: IRecord
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

export const processAddResponse = (
  response: sajari.engine.store.record.AddResponse
): Error | IKey => {
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
  return key as IKey;
};

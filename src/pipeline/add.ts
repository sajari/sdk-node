import { sajari } from "../../generated/proto";
import { errorFromStatuses, valueFromProto } from "../utils";
import { createEngineRecord, Key, Record } from "./utils";

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
    const err = errorFromStatuses(response.status as sajari.rpc.Status[]);
    if (!!err) {
      return err as Error;
    }
  }
  return key as Key;
};

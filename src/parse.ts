import { sajari } from "../generated/proto";
import { Key, parseEngineKey } from "./key";
import { parseEngineRecord, Record } from "./record";
import { errorFromStatus } from "./utils";

/**
 * @hidden
 */
export function parseRecordResponse(response: {
  records: sajari.engine.store.record.IRecord[];
  status: sajari.rpc.IStatus[];
}): Array<{ record: Record; error: Error | null }> {
  const records = response.records.map(parseEngineRecord);
  const errors = response.status.map(errorFromStatus);

  return records.map((record, idx) => {
    return {
      record,
      error: errors[idx]
    };
  });
}

/**
 * @hidden
 */
export function parseKeyResponse(response: {
  keys: sajari.engine.IKey[];
  status: sajari.rpc.IStatus[];
}): Array<{ key: Key; error: Error | null }> {
  const keys = response.keys.map(parseEngineKey);
  const errors = response.status.map(errorFromStatus);

  return keys.map((key, idx) => {
    return {
      key,
      error: errors[idx]
    };
  });
}

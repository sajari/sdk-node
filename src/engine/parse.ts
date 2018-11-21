import { sajari } from "../../generated/proto";
import { errorFromStatus } from "../utils";
import { Key } from "./key";
import { Record } from "./record";

/**
 * @hidden
 */
export function parseRecordResponse(response: {
  records: sajari.engine.store.record.IRecord[];
  status: sajari.rpc.IStatus[];
}): Array<{ record: Record; error: Error | null }> {
  const records = response.records.map(Record.fromProto);
  const errors = response.status.map(errorFromStatus);

  return records.map((record, idx) => ({
    record,
    error: errors[idx]
  }));
}

/**
 * @hidden
 */
export function parseKeyResponse(response: {
  keys: sajari.engine.IKey[];
  status: sajari.rpc.IStatus[];
}): Array<{ key: Key; error: Error | null }> {
  const keys = response.keys.map(Key.fromProto);
  const errors = response.status.map(errorFromStatus);

  return keys.map((key, idx) => ({
    key,
    error: errors[idx]
  }));
}

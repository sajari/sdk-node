import { sajari } from "../../generated/proto";
import { errorFromStatus } from "../utils";
import {
  createEngineKey,
  createEngineRecord,
  Key,
  parseEngineKey,
  Record
} from "./utils";

export interface KeyRecord {
  key: Key;
  record: Record;
}

/**
 * @hidden
 */
interface ReplaceRequest {
  pipeline: { name: string };
  keyRecords: Array<{
    key: sajari.engine.IKey;
    record: sajari.engine.store.record.IRecord;
  }>;
  values: { [k: string]: string };
}

/**
 * @hidden
 */
export function createReplaceRequest(
  pipeline: string,
  keyRecords: KeyRecord[],
  values: { [k: string]: string } = {}
): ReplaceRequest {
  const engineKeyRecords = keyRecords.map(({ key, record }) => {
    return {
      key: createEngineKey(key),
      record: createEngineRecord(record)
    };
  });

  return {
    pipeline: { name: pipeline },
    keyRecords: engineKeyRecords,
    values
  };
}

export interface ReplaceResponse {
  key: Key;
  error: Error | null;
}

/**
 * @hidden
 */
export function parseReplaceResponse(
  response: sajari.engine.store.record.ReplaceResponse
): ReplaceResponse[] {
  const keys = response.keys.map(parseEngineKey);
  const status = response.status.map((status) =>
    errorFromStatus(status as sajari.rpc.Status)
  );

  return keys.map((key, idx) => {
    return {
      key,
      error: status[idx]
    };
  });
}

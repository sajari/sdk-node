import { sajari } from "../../generated/proto";
import { Key } from "../engine/key";
import { Record } from "../engine/record";
import { errorFromStatus } from "../utils";

/**
 * KeyRecord is a key-record pair.
 */
export interface KeyRecord {
  key: Key;
  record: Record;
}

/**
 * @hidden
 */
export function createReplaceRequest(
  pipeline: { name: string },
  values: { [k: string]: string },
  keyRecords: KeyRecord[]
): sajari.api.pipeline.v1.ReplaceRequest {
  const engineKeyRecords = keyRecords.map(({ key, record }) => ({
    key: Key.toProto(key),
    record: Record.toProto(record)
  }));

  const req = {
    pipeline,
    keyRecords: engineKeyRecords,
    values
  };

  const err = sajari.api.pipeline.v1.ReplaceRequest.verify(req);
  if (err) {
    throw new Error(`sajari: failed to verify ReplaceRequest message: ${err}`);
  }
  return sajari.api.pipeline.v1.ReplaceRequest.create(req);
}

export interface ReplaceResponse {
  key: Key;
  error: Error | null;
}

/**
 * @hidden
 */
export async function parseReplaceResponse(
  response: sajari.engine.store.record.IReplaceResponse
): Promise<ReplaceResponse[]> {
  const res = response as sajari.engine.store.record.ReplaceResponse;
  const keys = res.keys.map(Key.fromProto);
  const errors = res.status.map(errorFromStatus);

  return keys.map((key, idx) => ({
    key,
    error: errors[idx]
  }));
}

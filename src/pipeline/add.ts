import { sajari } from "../../generated/proto";
import { Key } from "../engine/key";
import { Record } from "../engine/record";
import { errorFromStatus } from "../utils";

/**
 * @hidden
 */
export const createAddRequest = (
  pipeline: { name: string },
  values: { [k: string]: string },
  records: Record[]
): sajari.api.pipeline.v1.AddRequest => {
  const req = {
    pipeline,
    records: records.map((record) => Record.toProto(record)),
    values
  };
  const err = sajari.api.pipeline.v1.AddRequest.verify(req);
  if (err) {
    throw new Error(`sajari: failed to verify AddRequest message: ${err}`);
  }
  return sajari.api.pipeline.v1.AddRequest.create(req);
};

export interface AddResponse {
  key: Key;
  error: Error | null;
}

/**
 * @hidden
 */
export async function parseAddResponse(
  response: sajari.engine.store.record.IAddResponse
): Promise<AddResponse[]> {
  const res = response as sajari.engine.store.record.AddResponse;
  const keys = res.keys.map(Key.fromProto);
  const errors = res.status.map(errorFromStatus);

  return keys.map((key, idx) => {
    return {
      key,
      error: errors[idx]
    };
  });
}

import { sajari } from "../generated/proto";
import { APIClient } from "./api";
import { createMutationRequest, FieldMutation } from "./fieldMutation";
import { GetResponse, RecordMutation } from "./interfaces";
import { createEngineKey, Key } from "./key";
import { parseRecordResponse } from "./parse";
import { Record } from "./record";
import { errorFromStatuses } from "./utils";
import { Pipeline, PipelineImpl } from "./pipeline";

export class Client {
  private client: APIClient;

  constructor(
    project: string,
    collection: string,
    credentials: { key: string; secret: string },
    endpoint?: string
  ) {
    this.client = new APIClient(project, collection, credentials, endpoint);
  }

  public close(): void {
    this.client.close();
  }

  public async get(key: Key): Promise<Record> {
    const response = await this.getMulti([key]);
    const res = response[0];
    if (res.error) {
      throw res.error;
    }
    return res.record;
  }

  public async getMulti(keys: Key[]): Promise<GetResponse[]> {
    const req = new sajari.engine.store.record.Keys({
      keys: keys.map(createEngineKey)
    });

    const response = await this.client.call<
      sajari.engine.store.record.Keys,
      sajari.engine.store.record.GetResponse
    >(
      "sajari.engine.store.record.Store/Get",
      req,
      sajari.engine.store.record.Keys.encode,
      sajari.engine.store.record.GetResponse.decode
    );

    return parseRecordResponse(response);
  }

  public async mutate(key: Key, fieldMutation: FieldMutation): Promise<null> {
    return this.mutateMulti([{ key, mutations: [fieldMutation] }]);
  }

  public async mutateMulti(recordMutations: RecordMutation[]): Promise<null> {
    const req = createMutationRequest(recordMutations);

    const response = await this.client.call<
      sajari.engine.store.record.MutateRequest,
      sajari.engine.store.record.MutateResponse
    >(
      "sajari.engine.store.record.Store/Mutate",
      req,
      sajari.engine.store.record.MutateRequest.encode,
      sajari.engine.store.record.MutateResponse.decode
    );

    const err = errorFromStatuses(response.status);
    if (err) {
      throw err;
    }

    return null;
  }

  public pipeline(pipeline: { name: string }): Pipeline {
    return new PipelineImpl(pipeline, this.client);
  }
}

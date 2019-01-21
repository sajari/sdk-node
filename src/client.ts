import { sajari } from "../generated/proto";
import { APIClient } from "./api";
import { createMutationRequest, FieldMutation } from "./engine/fieldMutation";
import { GetResponse, RecordMutation } from "./engine/interfaces";
import { Key } from "./engine/key";
import { parseRecordResponse } from "./engine/parse";
import { Record } from "./engine/record";
import { Interaction } from "./interaction";
import { Pipeline, PipelineImpl } from "./pipeline";
import { Schema } from "./schema";
import { errorFromStatuses } from "./utils";

/**
 * grpc method endpoint for record mutation
 * @hidden
 */
const MutateRecordMethod = "sajari.engine.store.record.Store/Mutate";
/**
 * grpc method endpoint for record retrieval
 * @hidden
 */
const GetRecordMethod = "sajari.engine.store.record.Store/Get";

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

  public wait(seconds: number): Promise<void> {
    return this.client.wait(seconds);
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
    const request = new sajari.engine.store.record.Keys({
      keys: keys.map(Key.toProto)
    });

    const response = await this.client.call(
      GetRecordMethod,
      request,
      sajari.engine.store.record.Keys.encode,
      sajari.engine.store.record.GetResponse.decode
    );

    return parseRecordResponse(response);
  }

  public async mutate(key: Key, fieldMutation: FieldMutation): Promise<void> {
    return this.mutateMulti([{ key, mutations: [fieldMutation] }]);
  }

  public async mutateMulti(recordMutations: RecordMutation[]): Promise<void> {
    const request = createMutationRequest(recordMutations);

    const response = await this.client.call(
      MutateRecordMethod,
      request,
      sajari.engine.store.record.MutateRequest.encode,
      sajari.engine.store.record.MutateResponse.decode
    );

    const err = errorFromStatuses(response.status);
    if (err) {
      throw err;
    }

    return;
  }

  public pipeline(pipeline: { name: string }): Pipeline {
    return new PipelineImpl(pipeline, this.client);
  }

  public schema(): Schema {
    return new Schema(this.client);
  }

  public interaction(): Interaction {
    return new Interaction(this.client);
  }
}

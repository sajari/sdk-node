import { sajari } from "../../generated/proto";
import { APIClient, CallOptions } from "../api";
import { Key, KeyToProto } from "../types";
import { FieldMutation, FieldMutationToProto } from "./fieldMutation";
import { Record, RecordFromProto } from "./record";

/**
 * grpc method endpoint for record retrieval
 * @hidden
 */
export const GetRecordMethod = "sajari.engine.v2.Store/GetRecord";
/**
 * grpc method endpoint for record deletion
 * @hidden
 */
export const DeleteRecordMethod = "sajari.engine.v2.Store/DeleteRecord";
/**
 * grpc method endpoint for record mutation
 * @hidden
 */
export const MutateRecordMethod = "sajari.engine.v2.Store/MutateRecord";

export class Store {
  /**
   * @hidden
   */
  private client: APIClient;

  /**
   * @hidden
   */
  constructor(client: APIClient) {
    this.client = client;
  }

  /**
   * get retrieves the record corresponding to the key.
   */
  public async get(key: Key, callOptions?: CallOptions): Promise<Record> {
    const request = sajari.engine.v2.GetRecordRequest.create({
      key: KeyToProto(key)
    });

    const response = await this.client.call(
      GetRecordMethod,
      request,
      sajari.engine.v2.GetRecordRequest.encode,
      sajari.engine.v2.GetRecordResponse.decode,
      callOptions
    );

    return RecordFromProto(response.record);
  }

  /**
   * delete removes the record corresponding to the key.
   */
  public async delete(key: Key, callOptions?: CallOptions) {
    const request = sajari.engine.v2.DeleteRecordRequest.create({
      key: KeyToProto(key)
    });

    await this.client.call(
      DeleteRecordMethod,
      request,
      sajari.engine.v2.DeleteRecordRequest.encode,
      sajari.engine.v2.DeleteRecordResponse.decode,
      callOptions
    );
  }

  /**
   * mutate applies key-value updates to the record corresponding to
   * the key.
   */
  public async mutate(
    key: Key,
    fieldMutations: FieldMutation[],
    callOptions?: CallOptions
  ) {
    const request = sajari.engine.v2.MutateRecordRequest.create({
      key: KeyToProto(key),
      fieldMutations: fieldMutations.map(FieldMutationToProto)
    });

    await this.client.call(
      MutateRecordMethod,
      request,
      sajari.engine.v2.MutateRecordRequest.encode,
      sajari.engine.v2.MutateRecordResponse.decode,
      callOptions
    );
  }
}

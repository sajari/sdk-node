import { sajari } from "../../generated/proto";
import { APIClient, CallOptions } from "../api";
import { Key } from "../key";
import { Record } from "../record";
import { AddResponse, createAddRequest, parseAddResponse } from "./add";
import {
  KeyRecord,
  ReplaceResponse,
  createReplaceRequest,
  parseReplaceResponse
} from "./replace";

export interface Pipeline {
  search(): Promise<any>;

  add(
    values: { [k: string]: string },
    record: Record,
    options?: CallOptions
  ): Promise<Key>;

  addMulti(
    values: { [k: string]: string },
    records: Record[],
    options?: CallOptions
  ): Promise<AddResponse[]>;

  replace(
    values: { [k: string]: string },
    keyRecord: KeyRecord,
    options?: CallOptions
  ): Promise<Key>;

  replaceMulti(
    values: { [k: string]: string },
    keyRecords: KeyRecord[],
    options?: CallOptions
  ): Promise<ReplaceResponse[]>;
}

export class PipelineImpl implements Pipeline {
  private pipeline: { name: string };
  private client: APIClient;

  constructor(pipeline: { name: string }, client: APIClient) {
    this.pipeline = pipeline;
    this.client = client;
  }

  async search() {
    throw new Error("sajari: search not implemented");
  }

  async add(
    values: { [k: string]: string },
    record: Record,
    options?: CallOptions
  ): Promise<Key> {
    const response = await this.addMulti(values, [record], options);
    const res = response[0];
    if (res.error) {
      throw res.error;
    }
    return res.key;
  }

  async addMulti(
    values: { [k: string]: string },
    records: Record[],
    options?: CallOptions
  ): Promise<AddResponse[]> {
    let req = createAddRequest(this.pipeline, values, records);

    let response = await this.client.call<
      sajari.api.pipeline.v1.AddRequest,
      sajari.api.pipeline.v1.AddResponse
    >(
      "sajari.api.pipeline.v1.Store/Add",
      req,
      sajari.api.pipeline.v1.AddRequest.encode,
      sajari.api.pipeline.v1.AddResponse.decode,
      options
    );

    if (response.response == null) {
      throw new Error("sajari: empty response");
    }

    return parseAddResponse(response.response);
  }

  async replace(
    values: { [k: string]: string },
    keyRecord: KeyRecord,
    options?: CallOptions
  ): Promise<Key> {
    const response = await this.replaceMulti(values, [keyRecord], options);
    const res = response[0];
    if (res.error) {
      throw res.error;
    }
    return res.key;
  }

  async replaceMulti(
    values: { [k: string]: string },
    keyRecords: KeyRecord[],
    options?: CallOptions
  ): Promise<ReplaceResponse[]> {
    let req = createReplaceRequest(this.pipeline, values, keyRecords);

    let response = await this.client.call<
      sajari.api.pipeline.v1.ReplaceRequest,
      sajari.api.pipeline.v1.ReplaceResponse
    >(
      "sajari.api.pipeline.v1.Store/Replace",
      req,
      sajari.api.pipeline.v1.ReplaceRequest.encode,
      sajari.api.pipeline.v1.ReplaceResponse.decode,
      options
    );

    if (response.response == null) {
      throw new Error("sajari: empty response");
    }

    return parseReplaceResponse(response.response);
  }
}

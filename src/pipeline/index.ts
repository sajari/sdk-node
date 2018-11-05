import { sajari } from "../../generated/proto";
import { APIClient, CallOptions } from "../api";
import { Key } from "../engine/key";
import { Record } from "../engine/record";
import { AddResponse, createAddRequest, parseAddResponse } from "./add";
import {
  createReplaceRequest,
  KeyRecord,
  parseReplaceResponse,
  ReplaceResponse
} from "./replace";
import {
  createSearchRequest,
  parseSearchResponse,
  SearchResponse
} from "./search";
import { Tracking } from "./session";

/**
 * Pipeline is a handler for a named pipeline.
 */
export interface Pipeline {
  /**
   * search runs a search query defined by a pipline with the given values and
   * tracking configuration.  Returns the query results and returned values
   * (which could have been modified in the pipeline).
   */
  search(
    values: { [k: string]: string },
    tracking: Tracking,
    options?: CallOptions
  ): Promise<SearchResponse>;

  /**
   * Add a record to a collection using a pipeline, returning the unique key
   * which can be used to retrieve the respective record.
   */
  add(
    values: { [k: string]: string },
    record: Record,
    options?: CallOptions
  ): Promise<Key>;

  /**
   * AddMulti adds multiple records to a collection using a pipeline, returning
   * a list of AddResponse objects which either contain the Key for the
   * respective record, or an Error if the add fails.
   */
  addMulti(
    values: { [k: string]: string },
    records: Record[],
    options?: CallOptions
  ): Promise<AddResponse[]>;

  /**
   * Replace a record to a collection using a pipeline, returning the unique
   * Key which can be used to retrieve the respective record.
   */
  replace(
    values: { [k: string]: string },
    keyRecord: KeyRecord,
    options?: CallOptions
  ): Promise<Key>;

  /**
   * ReplaceMulti replaces multiple records in a collection using a pipeline,
   * returning a list of ReplaceResponse objects which either contain the Key
   * for the new record created, and empty Key if the record already exists
   * and was replaced, or an Error if the replace fails.
   */
  replaceMulti(
    values: { [k: string]: string },
    keyRecords: KeyRecord[],
    options?: CallOptions
  ): Promise<ReplaceResponse[]>;
}

/**
 * grpc method path for record ingestetion via a pipeline
 * @hidden
 */
const PipelineAddMethod = "sajari.api.pipeline.v1.Store/Add";
/**
 * grpc method path for replace
 * @hidden
 */
const PipelineReplaceMethod = "sajari.api.pipeline.v1.Store/Replace";
/**
 * grpc method path for querying records
 * @hidden
 */
const PipelineSearchMethod = "sajari.api.pipeline.v1.Query/Search";

/**
 * PipelineImpl is the implementation of a Pipeline
 * @hidden
 */
export class PipelineImpl implements Pipeline {
  private pipeline: { name: string };
  private client: APIClient;

  constructor(pipeline: { name: string }, client: APIClient) {
    this.pipeline = pipeline;
    this.client = client;
  }

  public async search(
    values: { [k: string]: string },
    tracking: Tracking,
    options?: CallOptions
  ): Promise<SearchResponse> {
    const request = createSearchRequest(this.pipeline, values, tracking);

    const response = await this.client.call(
      PipelineSearchMethod,
      request,
      sajari.api.pipeline.v1.SearchRequest.encode,
      sajari.api.pipeline.v1.SearchResponse.decode,
      options
    );

    const results = parseSearchResponse(response);
    return { results, values: response.values };
  }

  public async add(
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

  public async addMulti(
    values: { [k: string]: string },
    records: Record[],
    options?: CallOptions
  ): Promise<AddResponse[]> {
    const request = createAddRequest(this.pipeline, values, records);

    const response = await this.client.call(
      PipelineAddMethod,
      request,
      sajari.api.pipeline.v1.AddRequest.encode,
      sajari.api.pipeline.v1.AddResponse.decode,
      options
    );

    if (response.response == null) {
      throw new Error("sajari: empty response");
    }

    return parseAddResponse(response.response);
  }

  public async replace(
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

  public async replaceMulti(
    values: { [k: string]: string },
    keyRecords: KeyRecord[],
    options?: CallOptions
  ): Promise<ReplaceResponse[]> {
    const request = createReplaceRequest(this.pipeline, values, keyRecords);

    const response = await this.client.call(
      PipelineReplaceMethod,
      request,
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

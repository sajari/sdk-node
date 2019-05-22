import { sajari } from "../../generated/proto";
import { APIClient, CallOptions } from "../api";
import { objectToStruct, structToObject } from "../protoUtils";
import { Record, RecordToProto } from "../store/record";
import { Key, KeyFromProto, KeyToProto } from "../types";
import { parseSearchResponse, SearchResponse } from "./search";
import { Tracking, TrackingToProto } from "./session";

/**
 * PipelineDefinition
 */
export interface PipelineIdentifier {
  name: string;
  version?: string;
}

/**
 * @hidden
 */
function PipelineIdentifierFromProto(
  v: sajari.pipeline.v2.IIdentifier | null | undefined
): PipelineIdentifier {
  if (v == null) {
    return { name: "", version: "" };
  }
  const x = sajari.pipeline.v2.Identifier.create(v);
  return {
    name: x.name,
    version: x.version
  };
}

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
  create(
    values: { [k: string]: string },
    record: Record,
    options?: CallOptions
  ): Promise<{
    pipeline: PipelineIdentifier;
    values: { [k: string]: any };
    key: Key;
  }>;

  /**
   * Replace a record to a collection using a pipeline, returning the unique
   * Key which can be used to retrieve the respective record.
   */
  replace(
    values: { [k: string]: string },
    key: Key,
    record: Record,
    options?: CallOptions
  ): Promise<{
    pipeline: PipelineIdentifier;
    values: { [k: string]: any };
    key: Key;
  }>;
}

/**
 * grpc method path for record ingestetion via a pipeline
 * @hidden
 */
const PipelineCreateRecordMethod = "sajari.pipeline.v2.Store/CreateRecord";
/**
 * grpc method path for replace
 * @hidden
 */
const PipelineReplaceRecordMethod = "sajari.pipeline.v2.Store/ReplaceRecord";
/**
 * grpc method path for querying records
 * @hidden
 */
const PipelineSearchMethod = "sajari.pipeline.v2.Query/Search";

/**
 * PipelineImpl is the implementation of a Pipeline
 * @hidden
 */
export class PipelineImpl implements Pipeline {
  private pipeline: PipelineIdentifier;
  private client: APIClient;

  constructor(pipeline: PipelineIdentifier, client: APIClient) {
    this.pipeline = pipeline;
    this.client = client;
  }

  public async search(
    values: { [k: string]: string },
    tracking: Tracking,
    options?: CallOptions
  ): Promise<SearchResponse> {
    const request = sajari.pipeline.v2.SearchRequest.create({
      pipeline: this.pipeline,
      values: objectToStruct(values),
      tracking: TrackingToProto(tracking)
    });

    const response = await this.client.call(
      PipelineSearchMethod,
      request,
      sajari.pipeline.v2.SearchRequest.encode,
      sajari.pipeline.v2.SearchResponse.decode,
      options
    );

    const results = parseSearchResponse(response);
    return {
      results,
      values: structToObject(response.values),
      pipeline: PipelineIdentifierFromProto(response.pipeline)
    };
  }

  public async create(
    values: { [k: string]: any },
    record: Record,
    options?: CallOptions
  ): Promise<{
    pipeline: PipelineIdentifier;
    values: { [k: string]: any };
    key: Key;
  }> {
    const request = sajari.pipeline.v2.CreateRecordRequest.create({
      pipeline: this.pipeline,
      values: objectToStruct(values),
      record: RecordToProto(record)
    });

    const response = await this.client.call(
      PipelineCreateRecordMethod,
      request,
      sajari.pipeline.v2.CreateRecordRequest.encode,
      sajari.pipeline.v2.CreateRecordResponse.decode,
      options
    );

    return {
      key: KeyFromProto(response.key),
      values: structToObject(response.values),
      pipeline: PipelineIdentifierFromProto(response.pipeline)
    };
  }

  public async replace(
    values: { [k: string]: string },
    key: Key,
    record: Record,
    options?: CallOptions
  ): Promise<{
    pipeline: PipelineIdentifier;
    values: { [k: string]: any };
    key: Key;
  }> {
    const request = sajari.pipeline.v2.ReplaceRecordRequest.create({
      pipeline: this.pipeline,
      values: objectToStruct(values),
      key: KeyToProto(key),
      record: RecordToProto(record)
    });

    const response = await this.client.call(
      PipelineReplaceRecordMethod,
      request,
      sajari.pipeline.v2.ReplaceRecordRequest.encode,
      sajari.pipeline.v2.ReplaceRecordResponse.decode,
      options
    );

    return {
      key: KeyFromProto(response.key),
      values: structToObject(response.values),
      pipeline: PipelineIdentifierFromProto(response.pipeline)
    };
  }
}

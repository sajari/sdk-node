import { sajari } from "../../generated/proto";
import { parseDuration } from "../protoUtils";
import { Value, ValueFromProto } from "../types";
import { PipelineIdentifier } from "./pipeline";
import { Token, TokenFromProto } from "./session";

export interface Result {
  score: number;
  indexScore: number;
  values: { [k: string]: string | string[] };
  token?: Token;
}

export interface Results {
  reads: number;
  totalResults: number;
  latency: number; // Latency in seconds
  aggregates: Aggregates;
  aggregateFilters: Aggregates;
  results: Result[];
}

export interface SearchResponse {
  pipeline: PipelineIdentifier;
  results: Results;
  values: { [k: string]: string | string[] };
}

/**
 * @hidden
 */
export function parseSearchResponse(
  raw: sajari.pipeline.v2.SearchResponse
): Results {
  const msg = sajari.pipeline.v2.SearchResponse.verify(raw);
  if (msg !== null) {
    throw new Error(msg);
  }

  const searchResponse = raw.queryResults as
    | sajari.pipeline.v2.QueryResults
    | null
    | undefined;

  let results: Result[] = [];
  let aggregates: Aggregates = {};
  let aggregateFilters: Aggregates = {};
  let reads = 0;
  let totalResults = 0;
  let latency = 0;
  if (searchResponse != null) {
    results = processResults(searchResponse.results, raw.tokens);
    reads = searchResponse.reads as number;
    totalResults = searchResponse.totalResults as number;
    latency = parseDuration(searchResponse.latency);

    if (Object.keys(searchResponse.aggregates).length > 0) {
      aggregates = processAggregatesResponse(
        searchResponse.aggregates as AggregateResponse
      );
    }

    if (Object.keys(searchResponse.aggregateFilters).length > 0) {
      aggregateFilters = processAggregatesResponse(
        searchResponse.aggregateFilters as AggregateResponse
      );
    }
  }

  return {
    reads,
    totalResults,
    latency,
    results,
    aggregates,
    aggregateFilters
  };
}

/**
 * @hidden
 */
function processResults(
  results: sajari.engine.v2.IQueryResult[],
  tokens: sajari.pipeline.v2.IToken[]
): Result[] {
  return results.map((res, idx) => {
    const err = sajari.engine.v2.QueryResult.verify(res);
    if (err) {
      throw new Error(`sajari: unable to verify Result message: ${err}`);
    }
    const result = res as sajari.engine.v2.QueryResult;
    const values = Object.keys(result.values).reduce<{ [k: string]: Value }>(
      (vals, key) => {
        vals[key] = ValueFromProto(result.values[key]);
        return vals;
      },
      {}
    );

    let token;
    if (tokens.length > idx) {
      token = TokenFromProto(tokens[idx]);
    }

    return {
      indexScore: result.indexScore,
      score: result.score,
      values,
      token
    } as Result;
  });
}

export interface Aggregates {
  [k: string]: BucketsResponse | CountResponse | number;
}

/**
 * BucketsResponse is a type returned from a query performing bucket aggregate.
 */
export interface BucketsResponse {
  [k: string]: BucketResponse;
}

export interface BucketResponse {
  /**
   * Name of the bucket.
   */
  name: string;

  /**
   * Number of records.
   */
  count: number;
}

/**
 * CountResponse is a type returned from a query which has
 * performed a count aggregate.
 */
export interface CountResponse {
  [k: string]: number;
}

/**
 * @hidden
 */
interface AggregateResponse {
  [k: string]: sajari.engine.v2.QueryAggregateResult;
}

// tslint:disable:max-line-length
/**
 * @hidden
 */
type AggregateResponseMetric = sajari.engine.v2.QueryAggregateResult.Metric;
/**
 * @hidden
 */
type AggregateResponseCount = sajari.engine.v2.QueryAggregateResult.Count;
/**
 * @hidden
 */
type AggregateResponseBuckets = sajari.engine.v2.QueryAggregateResult.Buckets;
/**
 * @hidden
 */
type AggregateResponseBucketsBucket = sajari.engine.v2.QueryAggregateResult.Buckets.Bucket;
// tslint:enable:max-line-length

/**
 * @hidden
 */
const processAggregatesResponse = (
  aggregates: AggregateResponse
): Aggregates => {
  return Object.keys(aggregates).reduce<Aggregates>((result, key) => {
    const value = aggregates[key];
    switch (value.aggregateResult) {
      case "metric":
        result[key] = (value.metric as AggregateResponseMetric).value;
        return result;
      case "count":
        result[key] = (value.count as AggregateResponseCount).counts;
        return result;
      case "buckets":
        const buckets = (value.buckets as AggregateResponseBuckets).buckets;
        result[key] = Object.keys(buckets).reduce<BucketsResponse>(
          (resp, bucketKey) => {
            const bucket = buckets[bucketKey] as AggregateResponseBucketsBucket;

            resp[bucketKey] = {
              count: bucket.count,
              name: bucket.name
            };
            return resp;
          },
          {}
        );
        return result;

      default:
        return result;
    }
  }, {});
};

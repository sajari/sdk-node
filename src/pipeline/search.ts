import { sajari } from "../../generated/proto";
import { Value } from "../utils";
import { PipelineDefinition } from "./pipeline";
import { Token, Tracking } from "./session";

export interface Result {
  score: number;
  indexScore: number;
  values: { [k: string]: string | string[] };
  tokens?: Token;
}

export interface Results {
  reads: number;
  totalResults: number;
  time: number;
  aggregates: Aggregates;
  aggregateFilters: CountResponse[];
  results: Result[];
}

export interface SearchResponse {
  results: Results;
  values: { [k: string]: string | string[] };
}

/**
 * @hidden
 */
export const createSearchRequest = (
  pipeline: PipelineDefinition,
  values: { [k: string]: string },
  tracking: Tracking
): sajari.api.pipeline.v1.SearchRequest => {
  const req = {
    pipeline,
    tracking: Tracking.toProto(tracking),
    values
  };
  const err = sajari.api.pipeline.v1.AddRequest.verify(req);
  if (err) {
    throw new Error(`sajari: failed to verify AddRequest message: ${err}`);
  }
  return sajari.api.pipeline.v1.SearchRequest.create(req);
};

/**
 * @hidden
 */
export function parseSearchResponse(
  raw: sajari.api.pipeline.v1.SearchResponse
): Results {
  const msg = sajari.api.pipeline.v1.SearchResponse.verify(raw);
  if (msg !== null) {
    throw new Error(msg);
  }

  const response = sajari.api.pipeline.v1.SearchResponse.create(raw);
  const searchResponse = response.searchResponse as sajari.engine.query.v1.SearchResponse;

  let results: Result[] = [];
  let aggregates: Aggregates = {};
  let aggregateFilters: CountResponse[] = [];
  let reads = 0;
  let totalResults = 0;
  let time = 0;
  if (searchResponse !== null) {
    results = processResults(searchResponse.results, response.tokens);
    reads = searchResponse.reads as number;
    totalResults = searchResponse.totalResults as number;
    time = parseFloat(searchResponse.time);

    if (Object.keys(searchResponse.aggregates).length > 0) {
      aggregates = processAggregatesResponse(
        searchResponse.aggregates as AggregateResponse
      );
    }

    if (searchResponse.aggregateFilters.length > 0) {
      aggregateFilters = parseAggregateFilterResponse(
        searchResponse.aggregateFilters
      );
    }
  }

  return {
    reads,
    totalResults,
    time,
    results,
    aggregates,
    aggregateFilters
  };
}

/**
 * @hidden
 */
function processResults(
  results: sajari.engine.query.v1.IResult[],
  tokens: sajari.api.query.v1.IToken[]
): Result[] {
  return results.map((res: sajari.engine.query.v1.IResult, idx: number) => {
    const err = sajari.engine.query.v1.Result.verify(res);
    if (err) {
      throw new Error(`sajari: unable to verify Result message: ${err}`);
    }
    const result = res as sajari.engine.query.v1.Result;
    const values = Object.keys(result.values).reduce(
      (vals, key: string) => {
        vals[key] = Value.fromProto(result.values[key]);
        return vals;
      },
      {} as { [k: string]: Value }
    );

    let token;
    if (tokens.length > idx) {
      token = Token.fromProto(tokens[idx]);
    }

    return {
      indexScore: result.indexScore,
      score: result.score,
      values,
      tokens: token
    } as Result;
  });
}

// BucketsResponse is a type returned from a query performing bucket aggregate.
export interface BucketsResponse {
  [k: string]: BucketResponse;
}

export interface BucketResponse {
  // Name of the bucket.
  name: string;

  // Number of records.
  count: number;
}

// CountResponse is a type returned from a query which has
// performed a count aggregate.
export interface CountResponse {
  [k: string]: number;
}

/**
 * @hidden
 */
interface AggregateResponse {
  [k: string]: sajari.engine.query.v1.AggregateResponse;
}

export interface Aggregates {
  [k: string]: BucketsResponse | CountResponse | number;
}

// tslint:disable:max-line-length
/**
 * @hidden
 */
type AggregateResponseMetric = sajari.engine.query.v1.AggregateResponse.Metric;
/**
 * @hidden
 */
type AggregateResponseCount = sajari.engine.query.v1.AggregateResponse.Count;
/**
 * @hidden
 */
type AggregateResponseBuckets = sajari.engine.query.v1.AggregateResponse.Buckets;
/**
 * @hidden
 */
type AggregateResponseBucketsBucket = sajari.engine.query.v1.AggregateResponse.Buckets.Bucket;
// tslint:enable:max-line-length

/**
 * @hidden
 */
const processAggregatesResponse = (
  aggregates: AggregateResponse
): Aggregates => {
  return Object.keys(aggregates).reduce((result: Aggregates, key) => {
    const value = aggregates[key];
    switch (value.aggregateResponse) {
      case "metric":
        result[key] = (value.metric as AggregateResponseMetric).value;
        return result;
      case "count":
        result[key] = (value.count as AggregateResponseCount).counts;
        return result;
      case "buckets":
        const buckets = (value.buckets as AggregateResponseBuckets).buckets;
        result[key] = Object.keys(buckets).reduce(
          (resp: BucketsResponse, bucketKey) => {
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

/**
 * @hidden
 */
function parseAggregateFilterResponse(
  resp: sajari.engine.query.v1.IAggregateResponse[]
): CountResponse[] {
  const aggResp = resp as sajari.engine.query.v1.AggregateResponse[];
  return aggResp
    .map((aggregate) => {
      switch (aggregate.aggregateResponse) {
        case "count":
          return (aggregate.count as AggregateResponseCount).counts;
        default:
          return null;
      }
    })
    .filter((x) => x !== null) as CountResponse[];
}

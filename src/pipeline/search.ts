import { sajari } from "../../generated/proto";
import { Token, Tracking } from "../session";
import { valueFromProto } from "../utils";

export interface ResultValues {
  [k: string]: string | string[];
}

export interface Result {
  score: number;
  indexScore: number;
  values: ResultValues;
  tokens: Token;
}

export interface Results {
  reads: number;
  totalResults: number;
  time: number;
  aggregates: Aggregates;
  results: Result[];
}

export interface SearchResponse {
  results: Results;
  values: ResultValues;
}

/**
 * @hidden
 */
export const createSearchRequest = (
  pipeline: string,
  values: { [k: string]: string },
  tracking: Tracking
): { [k: string]: any } => {
  return {
    pipeline: { name: pipeline },
    tracking,
    values
  };
};

/**
 * @hidden
 */
type SearchResponseResult = sajari.engine.query.v1.Result;

/**
 * @hidden
 */
export const processSearchResponse = (
  response: sajari.engine.query.v1.SearchResponse,
  tokens: sajari.api.query.v1.Token[]
): Results => {
  const results = response.results.map(
    (resResult: sajari.engine.query.v1.IResult, index: number): Result => {
      const values: ResultValues = Object.keys(
        (resResult as SearchResponseResult).values
      ).reduce((obj: ResultValues, key): ResultValues => {
        const value = valueFromProto((resResult as SearchResponseResult).values[
          key
        ] as sajari.engine.Value);
        if (!value) {
          return obj;
        } else {
          obj[key] = value;
          return obj;
        }
      }, {});

      const res = {
        indexScore: (resResult as SearchResponseResult).indexScore,
        score: (resResult as SearchResponseResult).score,
        tokens: {} as Token,
        values
      };

      if (tokens.length > index) {
        const token = tokens[index] as sajari.api.query.v1.Token;
        if (token.token === "click") {
          res.tokens = {
            click: (token.click as sajari.api.query.v1.Token.Click).token
          };
        } else if (token.token === "posNeg") {
          res.tokens = {
            neg: (token.posNeg as sajari.api.query.v1.Token.PosNeg).neg,
            pos: (token.posNeg as sajari.api.query.v1.Token.PosNeg).pos
          };
        }
      }

      return res;
    }
  );

  const result = {
    aggregates: {} as Aggregates,
    reads: response.reads as number,
    results,
    time: parseFloat(response.time),
    totalResults: response.totalResults as number
  };

  if (Object.keys(response.aggregates).length > 0) {
    result.aggregates = processAggregatesResponse(
      response.aggregates as AggregateResponse
    );
  }

  return result;
};

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

interface AggregateResponse {
  [k: string]: sajari.engine.query.v1.AggregateResponse;
}

export interface Aggregates {
  [k: string]: BucketsResponse | CountResponse | number;
}

// tslint:disable:max-line-length
type AggregateResponseMetric = sajari.engine.query.v1.AggregateResponse.Metric;
type AggregateResponseCount = sajari.engine.query.v1.AggregateResponse.Count;
type AggregateResponseBuckets = sajari.engine.query.v1.AggregateResponse.Buckets;
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

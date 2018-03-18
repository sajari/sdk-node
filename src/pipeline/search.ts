import { sajari } from "../../generated/proto";

import {
  ITracking,
  Token,
  TrackingClick,
  TrackingNone,
  TrackingPosNeg,
  TrackingType
} from "../session";

import { IValues, valueFromProto } from "../utils";

export interface IResultValues {
  [k: string]: string | string[];
}

export interface IResult {
  score: number;
  indexScore: number;
  values: IResultValues;
  tokens: Token;
}

export interface IResults {
  reads: number;
  totalResults: number;
  time: number;
  aggregates: IAggregates;
  results: IResult[];
}

export interface ISearchResponse {
  results: IResults;
  values: IResultValues;
}

export const createSearchRequest = (
  pipeline: string,
  values: IValues,
  tracking: ITracking
): { [k: string]: any } => {
  return {
    pipeline: { name: pipeline },
    tracking,
    values
  };
};

// tslint:disable-next-line:max-line-length
type SearchResponseResult = sajari.api.pipeline.v1.SearchResponse.SearchResponse.Result;

export const processSearchResponse = (
  response: sajari.api.pipeline.v1.SearchResponse.SearchResponse,
  tokens: sajari.api.pipeline.v1.Token[]
): IResults => {
  const results = response.results.map(
    (
      resResult: sajari.api.pipeline.v1.SearchResponse.SearchResponse.IResult,
      index: number
    ): IResult => {
      const values: IResultValues = Object.keys(
        (resResult as SearchResponseResult).values
      ).reduce((obj: IResultValues, key): IResultValues => {
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
        const token = tokens[index] as sajari.api.pipeline.v1.Token;
        if (token.token === "click") {
          res.tokens = {
            click: (token.click as sajari.api.pipeline.v1.Token.Click).token
          };
        } else if (token.token === "posNeg") {
          res.tokens = {
            neg: (token.posNeg as sajari.api.pipeline.v1.Token.PosNeg).neg,
            pos: (token.posNeg as sajari.api.pipeline.v1.Token.PosNeg).pos
          };
        }
      }

      return res;
    }
  );

  const result = {
    aggregates: {} as IAggregates,
    reads: response.reads as number,
    results,
    time: parseFloat(response.time),
    totalResults: response.totalResults as number
  };

  if (Object.keys(response.aggregates).length > 0) {
    result.aggregates = processAggregatesResponse(
      response.aggregates as IAggregateResponse
    );
  }

  return result;
};

// BucketsResponse is a type returned from a query performing bucket aggregate.
export interface IBucketsResponse {
  [k: string]: IBucketResponse;
}

export interface IBucketResponse {
  // Name of the bucket.
  name: string;

  // Number of records.
  count: number;
}

// CountResponse is a type returned from a query which has
// performed a count aggregate.
export interface ICountResponse {
  [k: string]: number;
}

interface IAggregateResponse {
  // tslint:disable-next-line:max-line-length
  [k: string]: sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse;
}

export interface IAggregates {
  [k: string]: IBucketsResponse | ICountResponse | number;
}

// tslint:disable:max-line-length
type AggregateResponseMetric = sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Metric;
type AggregateResponseCount = sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Count;
type AggregateResponseBuckets = sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Buckets;
type AggregateResponseBucketsBucket = sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Buckets.Bucket;
// tslint:enable:max-line-length

const processAggregatesResponse = (
  aggregates: IAggregateResponse
): IAggregates => {
  return Object.keys(aggregates).reduce((result: IAggregates, key) => {
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
          (resp: IBucketsResponse, bucketKey) => {
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

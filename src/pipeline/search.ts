import { sajari } from "../../generated/proto";

import {
	Tracking,
	TrackingType,
	TrackingNone,
	TrackingClick,
	TrackingPosNeg,
	TokenValues
} from "../session";

import { Values, valueFromProto } from "../utils";

export type ResultValues = { [k: string]: string | string[] };

export type SearchResult = {
	score: number;
	indexScore: number;
	values: ResultValues;
	tokens: TokenValues;
};

export type SearchResults = {
	reads: number;
	totalResults: number;
	time: number;
	aggregates: AggregateValues;
	results: SearchResult[];
};

export type SearchResponse = {
	results: SearchResults;
	values: ResultValues;
};

export const createSearchRequest = (
	pipeline: string,
	values: Values,
	tracking: Tracking
): { [k: string]: any } => {
	return {
		pipeline: { name: pipeline },
		tracking,
		values
	};
};

type SearchResponseResult = sajari.api.pipeline.v1.SearchResponse.SearchResponse.Result;

export const processSearchResponse = (
	response: sajari.api.pipeline.v1.SearchResponse.SearchResponse,
	tokens: sajari.api.pipeline.v1.Token[]
): SearchResults => {
	const results = response.results.map(
		(
			result: sajari.api.pipeline.v1.SearchResponse.SearchResponse.IResult,
			index: number
		): SearchResult => {
			const values: ResultValues = Object.keys(
				(<SearchResponseResult>result).values
			).reduce((obj: ResultValues, key): Object => {
				const value = valueFromProto(
					<sajari.engine.Value>(<SearchResponseResult>result).values[
						key
					]
				);
				if (!value) {
					return obj;
				} else {
					obj[key] = value;
					return obj;
				}
			}, {});

			const res = {
				score: (<SearchResponseResult>result).score,
				indexScore: (<SearchResponseResult>result).indexScore,
				values,
				tokens: <TokenValues>{}
			};

			if (tokens.length > index) {
				const token = <sajari.api.pipeline.v1.Token>tokens[index];
				switch (token.token) {
					case "click":
						res.tokens = {
							click: (<sajari.api.pipeline.v1.Token.Click>token.click)
								.token
						};
						break;

					case "posNeg":
						res.tokens = {
							pos: (<sajari.api.pipeline.v1.Token.PosNeg>token.posNeg)
								.pos,
							neg: (<sajari.api.pipeline.v1.Token.PosNeg>token.posNeg)
								.neg
						};
						break;

					default:
						break;
				}
			}

			return res;
		}
	);

	const result = {
		reads: <number>response.reads,
		totalResults: <number>response.totalResults,
		time: parseFloat(response.time),
		aggregates: <AggregateValues>{},
		results
	};

	if (Object.keys(response.aggregates).length > 0) {
		result.aggregates = processAggregatesResponse(
			<AggregateResponse>response.aggregates
		);
	}

	return result;
};

// BucketsResponse is a type returned from a query performing bucket aggregate.
export type BucketsResponse = { [k: string]: BucketResponse };

export type BucketResponse = {
	// Name of the bucket.
	name: string;

	// Number of records.
	count: number;
};

// CountResponse is a type returned from a query which has performed a count aggregate.
export type CountResponse = { [k: string]: number };

type AggregateResponse = {
	[k: string]: sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse;
};

export type AggregateValues = {
	[k: string]: BucketsResponse | CountResponse | number;
};

type AggregateResponseMetric = sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Metric;
type AggregateResponseCount = sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Count;
type AggregateResponseBuckets = sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Buckets;
type AggregateResponseBucketsBucket = sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Buckets.Bucket;

const processAggregatesResponse = (
	aggregates: AggregateResponse
): AggregateValues => {
	return Object.keys(aggregates).reduce((result: AggregateValues, key) => {
		const value = aggregates[key];
		switch (value.aggregateResponse) {
			case "metric":
				result[key] = (<AggregateResponseMetric>value.metric).value;
				return result;
			case "count":
				result[key] = (<AggregateResponseCount>value.count).counts;
				return result;
			case "buckets":
				const buckets = (<AggregateResponseBuckets>value.buckets)
					.buckets;
				result[key] = Object.keys(buckets).reduce(
					(resp: BucketsResponse, key) => {
						const bucket = <AggregateResponseBucketsBucket>buckets[
							key
						];

						resp[key] = {
							name: bucket.name,
							count: bucket.count
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

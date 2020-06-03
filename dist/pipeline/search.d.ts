import { sajari } from "../../generated/proto";
import { PipelineIdentifier } from "./pipeline";
import { Token } from "./session";
export interface Result {
    score: number;
    indexScore: number;
    values: {
        [k: string]: string | string[];
    };
    token?: Token;
}
export interface Results {
    reads: number;
    totalResults: number;
    latency: number;
    aggregates: Aggregates;
    aggregateFilters: Aggregates;
    results: Result[];
}
export interface SearchResponse {
    pipeline: PipelineIdentifier;
    results: Results;
    values: {
        [k: string]: string | string[];
    };
}
/**
 * @hidden
 */
export declare function parseSearchResponse(raw: sajari.pipeline.v2.SearchResponse): Results;
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

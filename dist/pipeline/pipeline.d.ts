import { APIClient, CallOptions } from "../api";
import { Record } from "../store/record";
import { Key } from "../types";
import { SearchResponse } from "./search";
import { Tracking } from "./session";
/**
 * PipelineDefinition
 */
export interface PipelineIdentifier {
    name: string;
    version?: string;
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
    search(values: {
        [k: string]: string;
    }, tracking: Tracking, options?: CallOptions): Promise<SearchResponse>;
    /**
     * Add a record to a collection using a pipeline, returning the unique key
     * which can be used to retrieve the respective record.
     */
    create(values: {
        [k: string]: string;
    }, record: Record, options?: CallOptions): Promise<{
        pipeline: PipelineIdentifier;
        values: {
            [k: string]: any;
        };
        key: Key;
    }>;
    /**
     * Replace a record to a collection using a pipeline, returning the unique
     * Key which can be used to retrieve the respective record.
     */
    replace(values: {
        [k: string]: string;
    }, key: Key, record: Record, options?: CallOptions): Promise<{
        pipeline: PipelineIdentifier;
        values: {
            [k: string]: any;
        };
        key: Key;
    }>;
}
/**
 * PipelineImpl is the implementation of a Pipeline
 * @hidden
 */
export declare class PipelineImpl implements Pipeline {
    private pipeline;
    private client;
    constructor(pipeline: PipelineIdentifier, client: APIClient);
    search(values: {
        [k: string]: string;
    }, tracking: Tracking, options?: CallOptions): Promise<SearchResponse>;
    create(values: {
        [k: string]: any;
    }, record: Record, options?: CallOptions): Promise<{
        pipeline: PipelineIdentifier;
        values: {
            [k: string]: any;
        };
        key: Key;
    }>;
    replace(values: {
        [k: string]: string;
    }, key: Key, record: Record, options?: CallOptions): Promise<{
        pipeline: PipelineIdentifier;
        values: {
            [k: string]: any;
        };
        key: Key;
    }>;
}

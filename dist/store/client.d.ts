import { APIClient, CallOptions } from "../api";
import { Key } from "../types";
import { FieldMutation } from "./fieldMutation";
import { Record } from "./record";
/**
 * grpc method endpoint for record retrieval
 * @hidden
 */
export declare const GetRecordMethod = "sajari.engine.v2.Store/GetRecord";
/**
 * grpc method endpoint for record deletion
 * @hidden
 */
export declare const DeleteRecordMethod = "sajari.engine.v2.Store/DeleteRecord";
/**
 * grpc method endpoint for record mutation
 * @hidden
 */
export declare const MutateRecordMethod = "sajari.engine.v2.Store/MutateRecord";
export declare class Store {
    /**
     * @hidden
     */
    private client;
    /**
     * @hidden
     */
    constructor(client: APIClient);
    /**
     * get retrieves the record corresponding to the key.
     */
    get(key: Key, callOptions?: CallOptions): Promise<Record>;
    /**
     * delete removes the record corresponding to the key.
     */
    delete(key: Key, callOptions?: CallOptions): Promise<void>;
    /**
     * mutate applies key-value updates to the record corresponding to
     * the key.
     */
    mutate(key: Key, fieldMutations: FieldMutation[], callOptions?: CallOptions): Promise<void>;
}

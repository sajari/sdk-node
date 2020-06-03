import { APIClient, CallOptions } from "../api";
import { Field } from "./field";
import { Mutation } from "./mutation";
export declare class Schema {
    /**
     * @hidden
     */
    private client;
    /**
     * @hidden
     */
    constructor(client: APIClient);
    /**
     * listFields returns the fields in the schema.
     */
    listFields(options?: CallOptions): Promise<Field[]>;
    /**
     * createField creates a new field in the schema.
     */
    createField(field: Field, options?: CallOptions): Promise<void>;
    /**
     * mutateField mutates a field in the schema.
     */
    mutateField(name: string, mutation: Mutation, options?: CallOptions): Promise<void>;
}

import { sajari } from "../../generated/proto";
export interface FieldMutation {
    field: string;
    mutation: "set" | "increment" | "append";
    set?: string | string[] | null;
    increment?: string | string[] | null;
    append?: string | string[] | null;
}
/**
 * setField is a FieldMutation which sets field to value.
 * If value is null then this unsets field.
 */
export declare function setField(field: string, value: string | string[] | null): FieldMutation;
/**
 * appendField is a FieldMutation which appends value to field.
 */
export declare function appendField(field: string, value: string | string[] | null): FieldMutation;
/**
 * incrementField is a FieldMutation which increments field by value.
 */
export declare function incrementField(field: string, value: string | string[] | null): FieldMutation;
/**
 * FieldMutationToProto turns a FieldMutation into a
 * sajari.engine.v2.MutateRecordRequest.FieldMutation
 * @hidden
 */
export declare function FieldMutationToProto(fm: FieldMutation): sajari.engine.v2.MutateRecordRequest.FieldMutation;

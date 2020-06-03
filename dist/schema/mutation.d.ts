import { sajari } from "../../generated/proto";
import { Type } from "./field";
/** Mutation is a mutation of a schema field. */
export declare type Mutation = NameMutation | DescriptionMutation | TypeMutation | RepeatedMutation;
/**
 * @hidden
 */
export declare function MutationToProto(m: Mutation): sajari.engine.v2.MutateFieldRequest.Mutation;
export interface NameMutation {
    /** Name is a new name for the field. */
    name: string;
}
export interface DescriptionMutation {
    /** Description is the new description for the field. */
    description: string;
}
export interface TypeMutation {
    /** Type changes the underlying type of the field. */
    type: Type;
}
export interface RepeatedMutation {
    /** Repeated sets whether the field values are repeated. */
    repeated: boolean;
}
declare function name(n: string): NameMutation;
declare function description(d: string): DescriptionMutation;
declare function type(t: Type): TypeMutation;
declare function repeated(b: boolean): RepeatedMutation;
export declare const mutation: {
    name: typeof name;
    description: typeof description;
    type: typeof type;
    repeated: typeof repeated;
};
export {};

import { sajari } from "../generated/proto";
export declare type Value = string | string[] | null;
/**
 * @hidden
 */
export declare function ValueToProto(v: Value): sajari.engine.v2.Value | undefined;
/**
 * @hidden
 */
export declare function ValueFromProto(v: sajari.engine.v2.IValue | null | undefined): Value;
export interface Key {
    field: string;
    value: Value;
}
/**
 * @hidden
 */
export declare function KeyToProto(k: Key): sajari.engine.v2.Key | undefined;
/**
 * @hidden
 */
export declare function KeyFromProto(k: sajari.engine.v2.IKey | null | undefined): Key;

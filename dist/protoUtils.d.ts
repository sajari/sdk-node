import { google } from "../generated/proto";
/**
 * @hidden
 */
export declare function objectToStruct(v: {
    [k: string]: any;
}): google.protobuf.Struct;
/**
 * @hidden
 */
export declare function structToObject(s: google.protobuf.IStruct | null | undefined): {
    [k: string]: any;
};
/**
 * @hidden
 */
export declare function parseDuration(d: google.protobuf.IDuration | null | undefined): number;

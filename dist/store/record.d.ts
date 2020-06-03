import { sajari } from "../../generated/proto";
export interface Record {
    [id: string]: string | string[];
}
/**
 * @hidden
 */
export declare function RecordToProto(r: Record): sajari.engine.v2.Record;
/**
 * @hidden
 */
export declare function RecordFromProto(pb: sajari.engine.v2.IRecord | null | undefined): Record;

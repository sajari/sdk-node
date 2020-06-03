import { sajari } from "../../generated/proto";
/**
 * Tracking defines behaviour for handling search sessions
 * and result interactions.
 */
export interface Tracking {
    type: TrackingType;
    queryId?: string;
    sequence?: number;
    /**
     * field is a unique field on each result used to associate
     * tracking information to the result.
     */
    field?: string;
    /** data values which will be recorded along with query requests. */
    data?: {
        [k: string]: string;
    };
}
/**
 * @hidden
 */
export declare function TrackingToProto(t: Tracking): sajari.pipeline.v2.Tracking;
/**
 * Session takes query values, maintains session state, and returns
 * tracking data to be sent with search requests.
 */
export interface Session {
    next(values: {
        [k: string]: string;
    }): Tracking;
    reset(): void;
}
/**
 * TrackingType defines the possible result-interaction tracking
 * types used by [[DefaultSession]]
 */
export declare enum TrackingType {
    /** None disables tracking. */
    None = 0,
    /** Click generates click tracking tokens. */
    Click = 1,
    /** PosNeg creates pos/neg tracking tokens. */
    PosNeg = 2
}
/**
 * @hidden
 */
export declare function TrackingTypeToProto(t: TrackingType): sajari.pipeline.v2.Tracking.Type;
export interface ClickToken {
    click: string;
}
export interface PosNegToken {
    pos: string;
    neg: string;
}
export declare type Token = ClickToken | PosNegToken;
/**
 * @hidden
 */
export declare function TokenFromProto(t: sajari.pipeline.v2.IToken): Token;
/** DefaultSession holds state of a sequence of searches. */
export declare class DefaultSession implements Session {
    /**
     * @hidden
     */
    private queryID;
    /**
     * @hidden
     */
    private sequence;
    /**
     * @hidden
     */
    private trackingType;
    /**
     * @hidden
     */
    private field;
    /**
     * @hidden
     */
    private sessionData;
    /** Constructs an instance of DefaultSession. */
    constructor(trackingType: TrackingType, field: string, data: {
        [k: string]: string;
    });
    /**
     * next merges new values into the session and returns tracking data
     * to be sent with search requests.
     */
    next(values: {
        [k: string]: string;
    }): Tracking;
    /** reset resets the session instance to its empty state. */
    reset(): void;
}

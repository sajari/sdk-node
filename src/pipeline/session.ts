import merge from "deepmerge";
import { sajari } from "../../generated/proto";

/* tslint:disable:max-classes-per-file */

/**
 * Tracking defines behaviour for handling search sessions and result interactions.
 */
export interface Tracking {
  /*
   * type specifies which kind of tokens (if any) should be generated and returned
   * with the query results.
   */
  type: TrackingType;

  /*
   * queryId is a unique identifier for a single search query.  In the
   * case of search-as-you-type style interactions, this is defined to be multiple
   * individual queries (i.e. as a user types the query is re-run).
   * To identify the individual queries use the [[Tracking.sequence]] number.
   */
  queryId?: string;

  /*
   * sequence (i.e. sequential identifier) in the context of a sequence of queries with
   * the same queryId.
   */
  sequence?: number;

  /** field is a unique field on each result used to associate tracking information to the result. */
  field?: string;

  /** data values which will be recorded along with query requests. */
  data?: { [k: string]: string };
}

/**
 * @hidden
 */
export function TrackingToProto(t: Tracking): sajari.pipeline.v2.Tracking {
  const tracking = merge(t, { type: TrackingTypeToProto(t.type) });
  return sajari.pipeline.v2.Tracking.create(tracking);
}

/**
 * Session takes query values, maintains session state, and returns tracking data
 * to be sent with search requests.
 */
export interface Session {
  next(values: { [k: string]: string }): Tracking;
  reset(): void;
}

/** TrackingType defines the possible result-interaction tracking types used by [[DefaultSession]] */
export enum TrackingType {
  /** None disables tracking. */
  None = sajari.pipeline.v2.Tracking.Type.NONE,
  /** Click generates click tracking tokens. */
  Click = sajari.pipeline.v2.Tracking.Type.CLICK,
  /** PosNeg creates pos/neg tracking tokens. */
  PosNeg = sajari.pipeline.v2.Tracking.Type.POS_NEG
}

/**
 * @hidden
 */
export function TrackingTypeToProto(
  t: TrackingType
): sajari.pipeline.v2.Tracking.Type {
  switch (t) {
    case TrackingType.Click:
      return sajari.pipeline.v2.Tracking.Type.CLICK;
    case TrackingType.PosNeg:
      return sajari.pipeline.v2.Tracking.Type.POS_NEG;
    case TrackingType.None:
    default:
      return sajari.pipeline.v2.Tracking.Type.NONE;
  }
}

export interface ClickToken {
  click: string;
}

export interface PosNegToken {
  pos: string;
  neg: string;
}

export type Token = ClickToken | PosNegToken;

/**
 * @hidden
 */
export function TokenFromProto(t: sajari.pipeline.v2.IToken): Token {
  if (t.click != null) {
    if (t.click.token === "" || t.click.token == null) {
      throw new Error("sajari: invalid click token");
    }
    return {
      click: t.click.token
    };
  } else if (t.posNeg != null) {
    if (
      t.posNeg.pos === "" ||
      t.posNeg.neg === "" ||
      (t.posNeg.pos == null || t.posNeg.neg == null)
    ) {
      throw new Error("sajari: invalid posNeg token");
    }
    return {
      pos: t.posNeg.pos,
      neg: t.posNeg.neg
    };
  }

  throw new Error("sajari: invalid token type");
}

/** DefaultSession holds state of a sequence of searches. */
export class DefaultSession implements Session {
  /**
   * @hidden
   */
  private queryID: string = "";
  /**
   * @hidden
   */
  private sequence: number = 0;
  /**
   * @hidden
   */
  private trackingType: TrackingType;
  /**
   * @hidden
   */
  private field: string;
  /**
   * @hidden
   */
  private sessionData: { [k: string]: string };

  /** Constructs an instance of DefaultSession. */
  public constructor(
    trackingType: TrackingType,
    field: string,
    data: { [k: string]: string }
  ) {
    this.trackingType = trackingType;
    this.field = field;
    this.sessionData = data;
  }

  /** next merges new values into the session and returns tracking data to be sent with search requests. */
  public next(values: { [k: string]: string }): Tracking {
    if (this.queryID === "") {
      this.queryID = newQueryID();
      this.sequence = 0;
    } else {
      this.sequence++;
    }

    return {
      type: this.trackingType,
      queryId: this.queryID,
      sequence: this.sequence,
      field: this.field,
      data: this.sessionData
    };
  }

  /** reset resets the session instance to its empty state. */
  public reset(): void {
    this.queryID = "";
    this.sequence = 0;
  }
}

/**
 * newQueryID constructs a new ID for a query.
 * @hidden
 */
function newQueryID(len: number = 16): string {
  let output = "";
  for (let i = 0; i < len; i++) {
    output += "abcdefghijklmnopqrstuvwxyz0123456789".charAt(
      Math.floor(Math.random() * 36)
    );
  }
  return output;
}

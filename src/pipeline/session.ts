import merge from "deepmerge";
import { sajari } from "../../generated/proto";
import { APIClient } from "../api";

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
   * query_id is a unique identifier for a single search query.  In the
   * case of search-as-you-type style interactions, this is defined to be multiple
   * individual queries (i.e. as a user types the query is re-run).
   * To identify the individual queries use the [[Tracking.sequence]] number.
   */
  query_id: string;

  /* 
   * sequence (i.e. sequential identifier) in the context of a sequence of queries with
   * the same query_id.
   */
  sequence: number;

  /** field is a unique field on each result used to associate tracking information to the result. */
  field: string;

  /** data values which will be recorded along with query requests. */
  data: { [k: string]: string };
}

export namespace Tracking {
  /**
   * @hidden
   */
  export function toProto(
    t: Tracking
  ): sajari.api.query.v1.SearchRequest.Tracking {
    const tracking = merge(t, { type: TrackingType.toProto(t.type) });
    return sajari.api.query.v1.SearchRequest.Tracking.create(tracking);
  }
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
  None = sajari.api.query.v1.SearchRequest.Tracking.Type.NONE,
  /** Click generates click tracking tokens. */
  Click = sajari.api.query.v1.SearchRequest.Tracking.Type.CLICK,
  /** PosNeg creates pos/neg tracking tokens. */
  PosNeg = sajari.api.query.v1.SearchRequest.Tracking.Type.POS_NEG
}

export namespace TrackingType {
  export function toProto(
    t: TrackingType
  ): sajari.api.query.v1.SearchRequest.Tracking.Type {
    switch (t) {
      case TrackingType.Click:
        return sajari.api.query.v1.SearchRequest.Tracking.Type.CLICK;
      case TrackingType.PosNeg:
        return sajari.api.query.v1.SearchRequest.Tracking.Type.POS_NEG;
      case TrackingType.None:
      default:
        return sajari.api.query.v1.SearchRequest.Tracking.Type.NONE;
    }
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

export namespace Token {
  export function fromProto(t: sajari.api.query.v1.IToken): Token {
    switch (t) {
      case sajari.api.query.v1.Token.Click:
        if (t.click == null || t.click.token == null) {
          throw new Error("sajari: invalid click token");
        }
        return {
          click: t.click.token
        };

      case sajari.api.query.v1.Token.PosNeg:
        if (t.posNeg == null || t.posNeg.pos == null || t.posNeg.neg == null) {
          throw new Error("sajari: invalid posNeg token");
        }
        return {
          pos: t.posNeg.pos,
          neg: t.posNeg.neg
        };

      default:
        throw new Error("sajari: invalid token type");
    }
  }
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
      query_id: this.queryID,
      sequence: this.sequence,
      field: this.field,
      data: this.sessionData
    } as Tracking;
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

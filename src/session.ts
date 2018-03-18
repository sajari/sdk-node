import { IValues } from "./utils";

export const TrackingNone = "";
export const TrackingClick = "CLICK";
export const TrackingPosNeg = "POS_NEG";

export type TrackingType = "" | "CLICK" | "POS_NEG";

export interface IPosNegToken {
  pos: string;
  neg: string;
}

export interface IClickToken {
  click: string;
}

export type Token = IPosNegToken | IClickToken;

export interface ITracking {
  type: TrackingType;
  queryId: string;
  sequence: number;
  field: string;
  data: IValues;
}

export interface ISession {
  next(values: IValues): ITracking;
  reset(): void;
}

const randString = (): string => {
  let queryID = "";
  for (let i = 0; i < 16; i++) {
    queryID += "abcdefghijklmnopqrstuvwxyz0123456789".charAt(
      Math.floor(Math.random() * 36)
    );
  }
  return queryID;
};

export class Session implements ISession {
  public queryID: string = "";
  public sequence: number = 0;

  public trackingType: TrackingType;
  public field: string;
  public sessionData: IValues;

  constructor(type: TrackingType, field: string = "", data?: IValues) {
    this.trackingType = type;
    this.field = field;
    this.sessionData = data || {};
  }

  public next(values: IValues): ITracking {
    if (this.queryID === "") {
      this.queryID = randString();
      this.sequence = 0;
    } else {
      this.sequence++;
    }

    return {
      data: this.sessionData,
      field: this.field,
      queryId: this.queryID,
      sequence: this.sequence,
      type: this.trackingType
    };
  }

  public reset(): void {
    this.queryID = "";
    this.sequence = 0;
  }
}

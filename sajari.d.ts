export as namespace sajari;

export type ClientOption = (client: Client) => void;

export function withEndpoint(endpoint: number): ClientOption;

export class Client {
  constructor(
    project: string,
    collection: string,
    credentials: { key: string; secret: string },
    ...options: ClientOption[]
  );

  pipeline(name: string): Pipeline;
}

export class Pipeline {
  search(values: Values, session: ISession): Promise<SearchResponse>;
  add(values: Values, record: Record): Promise<Key>;
}

export interface ISession {
  next(values: Values): Tracking;
  reset(): void;
}

export class Session implements ISession {
  constructor(type: TrackingType, field: string, data?: Values);

  next(values: Values): Tracking;
  reset(): void;
}

export const TrackingNone = "";
export const TrackingClick = "CLICK";
export const TrackingPosNeg = "POS_NEG";

export const enum TrackingType {
  NONE = "NONE",
  CLICK = "CLICK",
  POS_NEG = "POS_NEG"
}

export type PosNegToken = { pos: string; neg: string };
export type ClickToken = { click: string };
export type TokenValues = PosNegToken | ClickToken;

export type Tracking = {
  type: TrackingType;
  queryId: string;
  sequence: number;
  field: string;
  data: Values;
};

export type Values = { [k: string]: string };

export type Key = {
  field: string;
  value: any;
};

export type Record = { [id: string]: any };

export type ResultValues = { [k: string]: string | string[] };

export type AggregateValues = {
  [k: string]: BucketsResponse | CountResponse | number;
};

// BucketsResponse is a type returned from a query performing bucket aggregate.
export type BucketsResponse = { [k: string]: BucketResponse };

export type BucketResponse = {
  // Name of the bucket.
  name: string;

  // Number of records.
  count: number;
};

// CountResponse is a type returned from a query which has performed a count aggregate.
export type CountResponse = { [k: string]: number };

export type SearchResult = {
  score: number;
  indexScore: number;
  values: ResultValues;
  tokens: TokenValues;
};

export type SearchResults = {
  reads: number;
  totalResults: number;
  time: number;
  aggregates: AggregateValues;
  results: SearchResult[];
};

export type SearchResponse = {
  results: SearchResults;
  values: ResultValues;
};

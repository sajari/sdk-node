import { appendField, incrementField, setField } from "./store";

// re-export the grpc status code enum
export { status as statusCode } from "@grpc/grpc-js";

export { Client } from "./client";
export { Key, Value } from "./types";

export {
  Session,
  DefaultSession,
  Tracking,
  TrackingType
} from "./pipeline/session";

export {
  SearchResponse,
  Results,
  Result,
  Aggregates,
  CountResponse,
  BucketsResponse,
  BucketResponse
} from "./pipeline/search";

export { default as schema, FieldMode } from "./schema";

export { FieldMutation } from "./store";
export const store = {
  setField,
  appendField,
  incrementField
};

import { setField, appendField, incrementField } from "./store";

// re-export the grpc status code enum
export { status as statusCode } from "grpc";

export { Client } from "./client";
export { Key, Value } from "./types";

export {
  Session,
  DefaultSession,
  Tracking,
  TrackingType
} from "./pipeline/session";

export { default as schema } from "./schema";

export { FieldMutation } from "./store";
export const store = {
  setField,
  appendField,
  incrementField
};

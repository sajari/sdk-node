import { sajari } from "../generated/proto";
import { valueFromProto, valueToProto } from "./utils";

export interface Key {
  field: string;
  value: string;
}

/**
 * @hidden
 */
export function parseEngineKey(key: sajari.engine.IKey): Key {
  // We are casting to sajari.engine.Key straight away here
  // as it appears that the node implementation of grpc or protobufjs
  // is translating the protobuf messages to simplified objects
  // automatically.
  const k = key as sajari.engine.Key;
  const value = valueFromProto(k.value as sajari.engine.Value);
  if (value === null) {
    return { field: k.field, value: "" };
  }

  return {
    field: k.field,
    value: value as string
  };
}

/**
 * @hidden
 */
export function createEngineKey(key: Key): sajari.engine.Key {
  return new sajari.engine.Key({
    field: key.field,
    value: valueToProto(key.value)
  });
}

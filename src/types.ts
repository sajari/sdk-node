import { sajari } from "../generated/proto";

export type Value = string | string[] | null;

/**
 * @hidden
 */
export function ValueToProto(v: Value): sajari.engine.v2.Value | undefined {
  const value = convertTypes(v);
  if (Array.isArray(value)) {
    return sajari.engine.v2.Value.create({ repeated: { values: value } });
  } else if (typeof value === "string") {
    return sajari.engine.v2.Value.create({ single: value });
  }
  return undefined;
}

/**
 * @hidden
 */
export function ValueFromProto(
  v: sajari.engine.v2.IValue | null | undefined
): Value {
  if (v == null) {
    return null;
  }

  if (v.null) {
    return null;
  } else if (v.single) {
    return v.single;
  } else if (v.repeated && v.repeated.values) {
    return v.repeated.values;
  }

  return null;
}

/**
 * convertTypes takes in any value and converts the underlaying value
 * into its string representation
 * @hidden
 */
function convertTypes(v: any): Value {
  if (Array.isArray(v)) {
    return v.map((x) => String(x));
  } else if (v instanceof Date) {
    return String(Math.floor(v.valueOf() / 1000));
  } else if (v === null || v === undefined) {
    return null;
  } else {
    return String(v);
  }
}

export interface Key {
  field: string;
  value: Value;
}

/**
 * @hidden
 */
export function KeyToProto(k: Key): sajari.engine.v2.Key | undefined {
  return sajari.engine.v2.Key.create({
    field: k.field,
    value: ValueToProto(k.value)
  });
}

/**
 * @hidden
 */
export function KeyFromProto(k: sajari.engine.v2.IKey | null | undefined): Key {
  if (k === null) {
    // Return empty key
    return { field: "", value: "" };
  }
  const v = sajari.engine.v2.Key.create(k);
  return {
    field: v.field,
    value: ValueFromProto(v.value)
  };
}

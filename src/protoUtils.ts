import { google } from "../generated/proto";

/**
 * @hidden
 */
export function objectToStruct(v: {
  [k: string]: any;
}): google.protobuf.Struct {
  const fields = Object.keys(v).reduce<{ [k: string]: google.protobuf.Value }>(
    (obj, key) => {
      obj[key] = anyToProto(v[key]);
      return obj;
    },
    {}
  );

  return google.protobuf.Struct.create({
    fields
  });
}

/**
 * @hidden
 */
function anyToProto(x: any): google.protobuf.Value {
  const value: google.protobuf.IValue = {};
  switch (typeof x) {
    case "number":
      value.numberValue = x;
      break;
    case "boolean":
      value.boolValue = x;
      break;
    case "string":
      value.stringValue = x;
      break;

    default:
      if (x === null || x === undefined) {
        value.nullValue = google.protobuf.NullValue.NULL_VALUE;
      } else if (Array.isArray(x)) {
        value.listValue = google.protobuf.ListValue.create({
          values: x.map(anyToProto)
        });
      } else if (Object.keys(x).length > 0) {
        value.structValue = objectToStruct(x);
      }
  }

  return google.protobuf.Value.create(value);
}

/**
 * @hidden
 */
export function structToObject(
  s: google.protobuf.IStruct | null | undefined
): { [k: string]: any } {
  if (s == null) {
    return {};
  }

  if (s.fields == null || Object.keys(s.fields).length === 0) {
    return {};
  }

  const x = s.fields;
  return Object.keys(x).reduce<{ [k: string]: any }>((obj, key) => {
    obj[key] = valueToJS(x[key]);
    return obj;
  }, {});
}

/**
 * @hidden
 */
function valueToJS(v: google.protobuf.IValue): any {
  const f = google.protobuf.Value.create(v);
  switch (f.kind) {
    case "nullValue":
      return null;
    case "boolValue":
      return f.boolValue;
    case "numberValue":
      return f.numberValue;
    case "stringValue":
      return f.stringValue;
    case "structValue":
      return structToObject(f.structValue);
    case "listValue":
      return listValueToArray(f.listValue);
  }
}

/**
 * @hidden
 */
function listValueToArray(
  v: google.protobuf.IListValue | null | undefined
): any[] {
  if (v == null) {
    return [];
  }

  return google.protobuf.ListValue.create(v).values.map(valueToJS);
}

/**
 * @hidden
 */
export function parseDuration(
  d: google.protobuf.IDuration | null | undefined
): number {
  if (d == null) {
    return 0;
  }

  const s = Number(d.seconds || 0);
  let duration = s * second;

  const n = Number(d.nanos || 0);
  if (n !== 0) {
    duration += n * nanosecond;
  }

  return duration / second;
}

/**
 * @hidden
 */
const nanosecond = 1;
/**
 * @hidden
 */
const microsecond = 1000 * nanosecond;
/**
 * @hidden
 */
const millisecond = 1000 * microsecond;
/**
 * @hidden
 */
const second = 1000 * millisecond;

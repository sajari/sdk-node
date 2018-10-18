import merge from "deepmerge";
import { sajari } from "../../generated/proto";

// Field represents a meta field which can be assigned in a collection record.
export interface Field {
  // Name is the name used to identify the field.
  name: string;

  // Description is a description of the field.
  description: string;

  // Type defines the type of the field.
  type: Type;

  mode: FieldMode;

  // Repeated indicates that this field can hold a list of values.
  repeated: boolean;

  // Indexed indicates that the field should be indexed.
  indexed?: boolean;
}

// Type represents the underlying data type of the field. Default is a string.
export enum Type {
  String = "STRING",
  Integer = "INTEGER",
  Float = "FLOAT",
  Double = "DOUBLE",
  Boolean = "BOOLEAN",
  Timestamp = "TIMESTAMP"
}

export enum FieldMode {
  Nullable = sajari.engine.schema.Field.Mode.NULLABLE,
  // Required indicates that this field should always be set on all records.
  Required = sajari.engine.schema.Field.Mode.REQUIRED,
  // Unique indicates that the field is unique (and this will
  // be enforced when new records are added).  Unique fields can
  // be used to retrieve/delete records.
  Unique = sajari.engine.schema.Field.Mode.UNIQUE
}

interface FieldOptions {
  // Description is a description of the field.
  description: string;

  // Repeated indicates that this field can hold a list of values.
  repeated: boolean;

  mode: FieldMode;
}

/**
 * @hidden
 */
const defaultFieldOptions: FieldOptions = {
  description: "",
  repeated: false,
  mode: FieldMode.Nullable
};

/**
 * @hidden
 */
function field(type: Type, name: string, options: FieldOptions): Field {
  options = merge(defaultFieldOptions, options || {});

  return {
    type,
    name,
    description: options.description,
    repeated: options.repeated,
    mode: options.mode
  };
}

/**
 * @hidden
 */
export function string(name: string, options: FieldOptions): Field {
  return field(Type.String, name, options);
}

/**
 * @hidden
 */
export function integer(name: string, options: FieldOptions): Field {
  return field(Type.Integer, name, options);
}

/**
 * @hidden
 */
export function float(name: string, options: FieldOptions): Field {
  return field(Type.Float, name, options);
}

/**
 * @hidden
 */
export function double(name: string, options: FieldOptions): Field {
  return field(Type.Double, name, options);
}

/**
 * @hidden
 */
export function boolean(name: string, options: FieldOptions): Field {
  return field(Type.Boolean, name, options);
}

/**
 * @hidden
 */
export function timestamp(name: string, options: FieldOptions): Field {
  return field(Type.Timestamp, name, options);
}

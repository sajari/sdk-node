import merge from "deepmerge";

// Field represents a meta field which can be assigned in a collection record.
export interface Field {
  // Name is the name used to identify the field.
  name: string;

  // Description is a description of the field.
  description: string;

  // Type defines the type of the field.
  type: Type;

  // Repeated indicates that this field can hold a list of values.
  repeated: boolean;

  // Required indicates that this field should always be set on all records.
  required: boolean;

  // Indexed indicates that the field should be indexed.
  indexed?: boolean;

  // Unique indicates that the field is unique (and this will
  // be encoforced when new records are added).  Unique fields can
  // be used to retrieve/delete records.
  unique: boolean;
}

// Type represents the underlying data type of the field. Default is a string.
export type Type =
  | "STRING"
  | "INTEGER"
  | "FLOAT"
  | "DOUBLE"
  | "BOOLEAN"
  | "TIMESTAMP";

export const TypeString = "STRING";
export const TypeInteger = "INTEGER";
export const TypeFloat = "FLOAT";
export const TypeDouble = "DOUBLE";
export const TypeBoolean = "BOOLEAN";
export const TypeTimestamp = "TIMESTAMP";

interface FieldOptions {
  // Description is a description of the field.
  description: string;

  // Repeated indicates that this field can hold a list of values.
  repeated: boolean;

  // Required indicates that this field should always be set on all records.
  required: boolean;

  // Unique indicates that the field is unique (and this will
  // be encoforced when new records are added).  Unique fields can
  // be used to retrieve/delete records.
  unique: boolean;
}

const defaultFieldOptions: FieldOptions = {
  description: "",
  repeated: false,
  required: false,
  unique: false
};

export function string(name: string, options: FieldOptions): Field {
  options = merge(defaultFieldOptions, options || {});

  return {
    type: TypeString,
    name,
    description: options.description,
    repeated: options.repeated,
    required: options.required,
    unique: options.unique
  };
}

export function integer(name: string, options: FieldOptions): Field {
  options = merge(defaultFieldOptions, options || {});

  return {
    type: TypeInteger,
    name,
    description: options.description,
    repeated: options.repeated,
    required: options.required,
    unique: options.unique
  };
}

export function float(name: string, options: FieldOptions): Field {
  options = merge(defaultFieldOptions, options || {});

  return {
    type: TypeFloat,
    name,
    description: options.description,
    repeated: options.repeated,
    required: options.required,
    unique: options.unique
  };
}

export function double(name: string, options: FieldOptions): Field {
  options = merge(defaultFieldOptions, options || {});

  return {
    type: TypeDouble,
    name,
    description: options.description,
    repeated: options.repeated,
    required: options.required,
    unique: options.unique
  };
}

export function boolean(name: string, options: FieldOptions): Field {
  options = merge(defaultFieldOptions, options || {});

  return {
    type: TypeBoolean,
    name,
    description: options.description,
    repeated: options.repeated,
    required: options.required,
    unique: options.unique
  };
}

export function timestamp(name: string, options: FieldOptions): Field {
  options = merge(defaultFieldOptions, options || {});

  return {
    type: TypeTimestamp,
    name,
    description: options.description,
    repeated: options.repeated,
    required: options.required,
    unique: options.unique
  };
}

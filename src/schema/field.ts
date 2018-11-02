import merge from "deepmerge";
import { sajari } from "../../generated/proto";

// Mutation is a mutation of a schema field.
export type Mutation =
  | {
      // Name is a new name for the field.
      name: string;
    }
  | {
      // Description is the new description for the field.
      description: string;
    }
  | {
      // Type changes the underlying type of the field.
      type: Type;
    }
  | {
      // Repeated sets whether the field values are repeated.
      repeated: boolean;
    }
  | {
      // Required sets whether the field value is required for index records.
      required: boolean;
    }
  | {
      // Unique sets whether the field must contain unique values.
      unique: boolean;
    }
  | {
      // Indexed sets whether the field data is indexed.
      indexed: boolean;
    };

/**
 * Field represents a meta field which can be assigned in a collection record.
 */
export interface Field {
  // Name is the name used to identify the field.
  name: string;

  // Description is a description of the field.
  description: string;

  // Type defines the type of the field.
  type: Type;

  mode: FieldMode;

  /**
   * deprecated
   * @hidden
   */
  required: boolean;
  /**
   * deprecated
   * @hidden
   */
  unique: boolean;

  // Repeated indicates that this field can hold a list of values.
  repeated: boolean;

  // Indexed indicates that the field should be indexed.
  indexed?: boolean;
}

/**
 * Type represents the underlying data type of the field. Default is a string.
 * @hidden
 */
export enum Type {
  String = sajari.engine.schema.Field.Type.STRING,
  Integer = sajari.engine.schema.Field.Type.INTEGER,
  Float = sajari.engine.schema.Field.Type.FLOAT,
  Double = sajari.engine.schema.Field.Type.DOUBLE,
  Boolean = sajari.engine.schema.Field.Type.BOOLEAN,
  Timestamp = sajari.engine.schema.Field.Type.TIMESTAMP
}

export enum FieldMode {
  /**
   * Nullable fields do not need to be set.
   */
  Nullable = sajari.engine.schema.Field.Mode.NULLABLE,
  /**
   * Required fields must be specified (cannot be null).
   */
  Required = sajari.engine.schema.Field.Mode.REQUIRED,
  /**
   * Unique fields must be specified, and must be unique.
   * Unique fields can be used to retrieve/delete records.
   */
  Unique = sajari.engine.schema.Field.Mode.UNIQUE
}

export interface FieldOptions {
  // Description is a description of the field.
  description: string;

  // Repeated indicates that this field can hold a list of values.
  repeated: boolean;

  mode: FieldMode;

  /**
   * deprecated
   * @hidden
   */
  required: boolean;
  /**
   * deprecated
   * @hidden
   */
  unique: boolean;
}

/**
 * @hidden
 */
const defaultFieldOptions: FieldOptions = {
  description: "",
  repeated: false,
  mode: FieldMode.Nullable,
  required: false,
  unique: false
};

/**
 * @hidden
 */
export function field(type: Type, name: string, options: FieldOptions): Field {
  options = merge(defaultFieldOptions, options || {});

  switch (options.mode) {
    case FieldMode.Required:
      options.required = true;
      break;
    case FieldMode.Unique:
      options.unique = true;
    default:
      break;
  }

  return {
    type,
    name,
    description: options.description,
    repeated: options.repeated,
    mode: options.mode,
    unique: options.unique,
    required: options.required
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

/**
 * @hidden
 */
export function fieldToEngineField(F: Field): sajari.engine.schema.Field {
  const f = merge(F, {
    mode: fieldModeToProtoMode(F.mode),
    type: typeToProtoType(F.type)
  });
  return new sajari.engine.schema.Field(f);
}

/**
 * @hidden
 */
export function engineFieldToField(F: sajari.engine.schema.IField): Field {
  const err = sajari.engine.schema.Field.verify(F);
  if (err) {
    throw new Error(`sajari: failed to verify Field message: ${err}`);
  }

  const f = F as sajari.engine.schema.Field;
  return {
    name: f.name,
    description: f.description,
    type: protoFieldTypeToType(f.type),
    mode: protoFieldModeToFieldMode(f.mode),
    required: f.required,
    unique: f.unique,
    repeated: f.repeated,
    indexed: f.indexed
  };
}

/**
 * @hidden
 */
function protoFieldTypeToType(p: sajari.engine.schema.Field.Type): Type {
  switch (p) {
    case sajari.engine.schema.Field.Type.INTEGER:
      return Type.Integer;
    case sajari.engine.schema.Field.Type.FLOAT:
      return Type.Float;
    case sajari.engine.schema.Field.Type.DOUBLE:
      return Type.Double;
    case sajari.engine.schema.Field.Type.BOOLEAN:
      return Type.Boolean;
    case sajari.engine.schema.Field.Type.TIMESTAMP:
      return Type.Timestamp;

    default:
      return Type.String;
  }
}

/**
 * @hidden
 */
function protoFieldModeToFieldMode(
  t: sajari.engine.schema.Field.Mode
): FieldMode {
  switch (t) {
    case sajari.engine.schema.Field.Mode.REQUIRED:
      return FieldMode.Required;
    case sajari.engine.schema.Field.Mode.UNIQUE:
      return FieldMode.Unique;

    default:
      return FieldMode.Nullable;
  }
}

/**
 * @hidden
 */
export function typeToProtoType(p: Type): sajari.engine.schema.Field.Type {
  switch (p) {
    case Type.Integer:
      return sajari.engine.schema.Field.Type.INTEGER;
    case Type.Float:
      return sajari.engine.schema.Field.Type.FLOAT;
    case Type.Double:
      return sajari.engine.schema.Field.Type.DOUBLE;
    case Type.Boolean:
      return sajari.engine.schema.Field.Type.BOOLEAN;
    case Type.Timestamp:
      return sajari.engine.schema.Field.Type.TIMESTAMP;

    default:
      return sajari.engine.schema.Field.Type.STRING;
  }
}

/**
 * @hidden
 */
function fieldModeToProtoMode(t: FieldMode): sajari.engine.schema.Field.Mode {
  switch (t) {
    case FieldMode.Required:
      return sajari.engine.schema.Field.Mode.REQUIRED;
    case FieldMode.Unique:
      return sajari.engine.schema.Field.Mode.UNIQUE;

    default:
      return sajari.engine.schema.Field.Mode.NULLABLE;
  }
}

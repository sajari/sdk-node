import merge from "deepmerge";
import { sajari } from "../../generated/proto";

/**
 * Field defines the properties of a field in the schema.
 */
export interface Field {
  /** Name is the name used to identify the field. */
  name: string;

  /** Description is a description of the field. */
  description: string;

  /**
   * Type represents the underlying data type of the field.
   * Default is a string.
   */
  type: Type;

  /** Mode defines the mode of the field. */
  mode: FieldMode;

  /** Repeated indicates that this field can hold a list of values. */
  repeated: boolean;
}

/**
 * @hidden
 */
export function FieldToProto(f: Field): sajari.engine.v2.Field {
  return sajari.engine.v2.Field.create(
    merge(f, {
      mode: FieldModeToProto(f.mode),
      type: TypeToProto(f.type)
    })
  );
}

/**
 * @hidden
 */
export function FieldFromProto(f: sajari.engine.v2.IField): Field {
  const err = sajari.engine.v2.Field.verify(f);
  if (err) {
    throw new Error(`sajari: failed to verify Field message: ${err}`);
  }

  const engineField = f as sajari.engine.v2.Field;
  return {
    name: engineField.name,
    description: engineField.description,
    type: TypeFromProto(engineField.type),
    mode: FieldModeFromProto(engineField.mode),
    repeated: engineField.repeated
  };
}

/**
 * Type represents the underlying data type of the field. Default is a string.
 * @hidden
 */
export enum Type {
  String = sajari.engine.v2.Field.Type.STRING,
  Integer = sajari.engine.v2.Field.Type.INTEGER,
  Float = sajari.engine.v2.Field.Type.FLOAT,
  Double = sajari.engine.v2.Field.Type.DOUBLE,
  Boolean = sajari.engine.v2.Field.Type.BOOLEAN,
  Timestamp = sajari.engine.v2.Field.Type.TIMESTAMP
}

/**
 * @hidden
 */
export function TypeToProto(t: Type): sajari.engine.v2.Field.Type {
  switch (t) {
    case Type.Integer:
      return sajari.engine.v2.Field.Type.INTEGER;
    case Type.Float:
      return sajari.engine.v2.Field.Type.FLOAT;
    case Type.Double:
      return sajari.engine.v2.Field.Type.DOUBLE;
    case Type.Boolean:
      return sajari.engine.v2.Field.Type.BOOLEAN;
    case Type.Timestamp:
      return sajari.engine.v2.Field.Type.TIMESTAMP;

    default:
      return sajari.engine.v2.Field.Type.STRING;
  }
}

/**
 * @hidden
 */
export function TypeFromProto(t: sajari.engine.v2.Field.Type): Type {
  switch (t) {
    case sajari.engine.v2.Field.Type.INTEGER:
      return Type.Integer;
    case sajari.engine.v2.Field.Type.FLOAT:
      return Type.Float;
    case sajari.engine.v2.Field.Type.DOUBLE:
      return Type.Double;
    case sajari.engine.v2.Field.Type.BOOLEAN:
      return Type.Boolean;
    case sajari.engine.v2.Field.Type.TIMESTAMP:
      return Type.Timestamp;

    default:
      return Type.String;
  }
}

export enum FieldMode {
  /**
   * Nullable fields do not need to be set.
   */
  Nullable = sajari.engine.v2.Field.Mode.NULLABLE,
  /**
   * Required fields must be specified (cannot be null).
   */
  Required = sajari.engine.v2.Field.Mode.REQUIRED,
  /**
   * Unique fields must be specified, and must be unique.
   * Unique fields can be used to retrieve/delete records.
   */
  Unique = sajari.engine.v2.Field.Mode.UNIQUE
}

/**
 * @hidden
 */
export function FieldModeToProto(m: FieldMode): sajari.engine.v2.Field.Mode {
  switch (m) {
    case FieldMode.Required:
      return sajari.engine.v2.Field.Mode.REQUIRED;
    case FieldMode.Unique:
      return sajari.engine.v2.Field.Mode.UNIQUE;

    default:
      return sajari.engine.v2.Field.Mode.NULLABLE;
  }
}

/**
 * @hidden
 */
export function FieldModeFromProto(m: sajari.engine.v2.Field.Mode): FieldMode {
  switch (m) {
    case sajari.engine.v2.Field.Mode.REQUIRED:
      return FieldMode.Required;
    case sajari.engine.v2.Field.Mode.UNIQUE:
      return FieldMode.Unique;

    default:
      return FieldMode.Nullable;
  }
}

export interface FieldOptions {
  /** Description is a description of the field. */
  description?: string;

  /** Repeated indicates that this field can hold a list of values. */
  repeated?: boolean;

  mode?: FieldMode;
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
export function field(type: Type, name: string, options?: FieldOptions): Field {
  options = merge(defaultFieldOptions, options || {});

  // XXX: We are type casting bellow due to a limitation in the types
  // produced by the merge function above.
  return {
    type,
    name,
    description: options.description as string,
    repeated: options.repeated as boolean,
    mode: options.mode as FieldMode
  };
}

export const fields = {
  string(name: string, options?: FieldOptions): Field {
    return field(Type.String, name, options);
  },
  integer(name: string, options?: FieldOptions): Field {
    return field(Type.Integer, name, options);
  },
  float(name: string, options?: FieldOptions): Field {
    return field(Type.Float, name, options);
  },
  double(name: string, options?: FieldOptions): Field {
    return field(Type.Double, name, options);
  },
  boolean(name: string, options?: FieldOptions): Field {
    return field(Type.Boolean, name, options);
  },
  timestamp(name: string, options?: FieldOptions): Field {
    return field(Type.Timestamp, name, options);
  }
};

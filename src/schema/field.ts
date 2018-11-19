import merge from "deepmerge";
import { sajari } from "../../generated/proto";

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

export namespace Field {
  /**
   * @hidden
   */
  export function toProto(f: Field): sajari.engine.schema.Field {
    return new sajari.engine.schema.Field(
      merge(f, {
        mode: FieldMode.toProto(f.mode),
        type: Type.toProto(f.type)
      })
    );
  }

  /**
   * @hidden
   */
  export function fromProto(f: sajari.engine.schema.IField): Field {
    const err = sajari.engine.schema.Field.verify(f);
    if (err) {
      throw new Error(`sajari: failed to verify Field message: ${err}`);
    }

    const engineField = f as sajari.engine.schema.Field;
    return {
      name: engineField.name,
      description: engineField.description,
      type: Type.fromProto(engineField.type),
      mode: FieldMode.fromProto(engineField.mode),
      required: engineField.required,
      unique: engineField.unique,
      repeated: engineField.repeated,
      indexed: engineField.indexed
    };
  }
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

export namespace Type {
  /**
   * @hidden
   */
  export function toProto(t: Type): sajari.engine.schema.Field.Type {
    switch (t) {
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
  export function fromProto(t: sajari.engine.schema.Field.Type): Type {
    switch (t) {
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

export namespace FieldMode {
  /**
   * @hidden
   */
  export function toProto(m: FieldMode): sajari.engine.schema.Field.Mode {
    switch (m) {
      case FieldMode.Required:
        return sajari.engine.schema.Field.Mode.REQUIRED;
      case FieldMode.Unique:
        return sajari.engine.schema.Field.Mode.UNIQUE;

      default:
        return sajari.engine.schema.Field.Mode.NULLABLE;
    }
  }

  /**
   * @hidden
   */
  export function fromProto(m: sajari.engine.schema.Field.Mode): FieldMode {
    switch (m) {
      case sajari.engine.schema.Field.Mode.REQUIRED:
        return FieldMode.Required;
      case sajari.engine.schema.Field.Mode.UNIQUE:
        return FieldMode.Unique;

      default:
        return FieldMode.Nullable;
    }
  }
}

export interface FieldOptions {
  // Description is a description of the field.
  description?: string;

  // Repeated indicates that this field can hold a list of values.
  repeated?: boolean;

  mode?: FieldMode;

  /**
   * deprecated
   * @hidden
   */
  required?: boolean;
  /**
   * deprecated
   * @hidden
   */
  unique?: boolean;
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
export function field(type: Type, name: string, options?: FieldOptions): Field {
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

  // XXX: We are type casting bellow due to a limitation in the types
  // produced by the merge function above.
  return {
    type,
    name,
    description: options.description as string,
    repeated: options.repeated as boolean,
    mode: options.mode as FieldMode,
    unique: options.unique as boolean,
    required: options.required as boolean
  };
}

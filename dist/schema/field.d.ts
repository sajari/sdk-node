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
export declare function FieldToProto(f: Field): sajari.engine.v2.Field;
/**
 * @hidden
 */
export declare function FieldFromProto(f: sajari.engine.v2.IField): Field;
/**
 * Type represents the underlying data type of the field. Default is a string.
 * @hidden
 */
export declare enum Type {
    String = 0,
    Integer = 1,
    Float = 2,
    Double = 3,
    Boolean = 4,
    Timestamp = 5
}
/**
 * @hidden
 */
export declare function TypeToProto(t: Type): sajari.engine.v2.Field.Type;
/**
 * @hidden
 */
export declare function TypeFromProto(t: sajari.engine.v2.Field.Type): Type;
export declare enum FieldMode {
    /**
     * Nullable fields do not need to be set.
     */
    Nullable = 0,
    /**
     * Required fields must be specified (cannot be null).
     */
    Required = 1,
    /**
     * Unique fields must be specified, and must be unique.
     * Unique fields can be used to retrieve/delete records.
     */
    Unique = 2
}
/**
 * @hidden
 */
export declare function FieldModeToProto(m: FieldMode): sajari.engine.v2.Field.Mode;
/**
 * @hidden
 */
export declare function FieldModeFromProto(m: sajari.engine.v2.Field.Mode): FieldMode;
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
export declare function field(type: Type, name: string, options?: FieldOptions): Field;
export declare const fields: {
    string(name: string, options?: FieldOptions | undefined): Field;
    integer(name: string, options?: FieldOptions | undefined): Field;
    float(name: string, options?: FieldOptions | undefined): Field;
    double(name: string, options?: FieldOptions | undefined): Field;
    boolean(name: string, options?: FieldOptions | undefined): Field;
    timestamp(name: string, options?: FieldOptions | undefined): Field;
};

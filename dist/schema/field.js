"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fields = exports.field = exports.FieldModeFromProto = exports.FieldModeToProto = exports.FieldMode = exports.TypeFromProto = exports.TypeToProto = exports.Type = exports.FieldFromProto = exports.FieldToProto = void 0;
var deepmerge_1 = __importDefault(require("deepmerge"));
var proto_1 = require("../../generated/proto");
/**
 * @hidden
 */
function FieldToProto(f) {
    return proto_1.sajari.engine.v2.Field.create(deepmerge_1.default(f, {
        mode: FieldModeToProto(f.mode),
        type: TypeToProto(f.type)
    }));
}
exports.FieldToProto = FieldToProto;
/**
 * @hidden
 */
function FieldFromProto(f) {
    var err = proto_1.sajari.engine.v2.Field.verify(f);
    if (err) {
        throw new Error("sajari: failed to verify Field message: " + err);
    }
    var engineField = f;
    return {
        name: engineField.name,
        description: engineField.description,
        type: TypeFromProto(engineField.type),
        mode: FieldModeFromProto(engineField.mode),
        repeated: engineField.repeated
    };
}
exports.FieldFromProto = FieldFromProto;
/**
 * Type represents the underlying data type of the field. Default is a string.
 * @hidden
 */
var Type;
(function (Type) {
    Type[Type["String"] = 0] = "String";
    Type[Type["Integer"] = 1] = "Integer";
    Type[Type["Float"] = 2] = "Float";
    Type[Type["Double"] = 3] = "Double";
    Type[Type["Boolean"] = 4] = "Boolean";
    Type[Type["Timestamp"] = 5] = "Timestamp";
})(Type = exports.Type || (exports.Type = {}));
/**
 * @hidden
 */
function TypeToProto(t) {
    switch (t) {
        case Type.Integer:
            return proto_1.sajari.engine.v2.Field.Type.INTEGER;
        case Type.Float:
            return proto_1.sajari.engine.v2.Field.Type.FLOAT;
        case Type.Double:
            return proto_1.sajari.engine.v2.Field.Type.DOUBLE;
        case Type.Boolean:
            return proto_1.sajari.engine.v2.Field.Type.BOOLEAN;
        case Type.Timestamp:
            return proto_1.sajari.engine.v2.Field.Type.TIMESTAMP;
        default:
            return proto_1.sajari.engine.v2.Field.Type.STRING;
    }
}
exports.TypeToProto = TypeToProto;
/**
 * @hidden
 */
function TypeFromProto(t) {
    switch (t) {
        case proto_1.sajari.engine.v2.Field.Type.INTEGER:
            return Type.Integer;
        case proto_1.sajari.engine.v2.Field.Type.FLOAT:
            return Type.Float;
        case proto_1.sajari.engine.v2.Field.Type.DOUBLE:
            return Type.Double;
        case proto_1.sajari.engine.v2.Field.Type.BOOLEAN:
            return Type.Boolean;
        case proto_1.sajari.engine.v2.Field.Type.TIMESTAMP:
            return Type.Timestamp;
        default:
            return Type.String;
    }
}
exports.TypeFromProto = TypeFromProto;
var FieldMode;
(function (FieldMode) {
    /**
     * Nullable fields do not need to be set.
     */
    FieldMode[FieldMode["Nullable"] = 0] = "Nullable";
    /**
     * Required fields must be specified (cannot be null).
     */
    FieldMode[FieldMode["Required"] = 1] = "Required";
    /**
     * Unique fields must be specified, and must be unique.
     * Unique fields can be used to retrieve/delete records.
     */
    FieldMode[FieldMode["Unique"] = 2] = "Unique";
})(FieldMode = exports.FieldMode || (exports.FieldMode = {}));
/**
 * @hidden
 */
function FieldModeToProto(m) {
    switch (m) {
        case FieldMode.Required:
            return proto_1.sajari.engine.v2.Field.Mode.REQUIRED;
        case FieldMode.Unique:
            return proto_1.sajari.engine.v2.Field.Mode.UNIQUE;
        default:
            return proto_1.sajari.engine.v2.Field.Mode.NULLABLE;
    }
}
exports.FieldModeToProto = FieldModeToProto;
/**
 * @hidden
 */
function FieldModeFromProto(m) {
    switch (m) {
        case proto_1.sajari.engine.v2.Field.Mode.REQUIRED:
            return FieldMode.Required;
        case proto_1.sajari.engine.v2.Field.Mode.UNIQUE:
            return FieldMode.Unique;
        default:
            return FieldMode.Nullable;
    }
}
exports.FieldModeFromProto = FieldModeFromProto;
/**
 * @hidden
 */
var defaultFieldOptions = {
    description: "",
    repeated: false,
    mode: FieldMode.Nullable
};
/**
 * @hidden
 */
function field(type, name, options) {
    options = deepmerge_1.default(defaultFieldOptions, options || {});
    // XXX: We are type casting bellow due to a limitation in the types
    // produced by the merge function above.
    return {
        type: type,
        name: name,
        description: options.description,
        repeated: options.repeated,
        mode: options.mode
    };
}
exports.field = field;
exports.fields = {
    string: function (name, options) {
        return field(Type.String, name, options);
    },
    integer: function (name, options) {
        return field(Type.Integer, name, options);
    },
    float: function (name, options) {
        return field(Type.Float, name, options);
    },
    double: function (name, options) {
        return field(Type.Double, name, options);
    },
    boolean: function (name, options) {
        return field(Type.Boolean, name, options);
    },
    timestamp: function (name, options) {
        return field(Type.Timestamp, name, options);
    }
};

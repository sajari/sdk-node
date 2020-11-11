"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var proto_1 = require("../generated/proto");
/**
 * @hidden
 */
function ValueToProto(v) {
    var value = convertTypes(v);
    if (Array.isArray(value)) {
        return proto_1.sajari.engine.v2.Value.create({ repeated: { values: value } });
    }
    else if (typeof value === "string") {
        return proto_1.sajari.engine.v2.Value.create({ single: value });
    }
    return undefined;
}
exports.ValueToProto = ValueToProto;
/**
 * @hidden
 */
function ValueFromProto(v) {
    if (v == null) {
        return null;
    }
    if (v.null) {
        return null;
    }
    else if (v.single) {
        return v.single;
    }
    else if (v.repeated && v.repeated.values) {
        return v.repeated.values;
    }
    return null;
}
exports.ValueFromProto = ValueFromProto;
/**
 * convertTypes takes in any value and converts the underlaying value
 * into its string representation
 * @hidden
 */
function convertTypes(v) {
    if (Array.isArray(v)) {
        return v.map(function (x) { return String(x); });
    }
    else if (v instanceof Date) {
        return String(Math.floor(v.valueOf() / 1000));
    }
    else if (v === null || v === undefined) {
        return null;
    }
    else {
        return String(v);
    }
}
/**
 * @hidden
 */
function KeyToProto(k) {
    return proto_1.sajari.engine.v2.Key.create({
        field: k.field,
        value: ValueToProto(k.value)
    });
}
exports.KeyToProto = KeyToProto;
/**
 * @hidden
 */
function KeyFromProto(k) {
    if (k === null) {
        // Return empty key
        return { field: "", value: "" };
    }
    var v = proto_1.sajari.engine.v2.Key.create(k);
    return {
        field: v.field,
        value: ValueFromProto(v.value)
    };
}
exports.KeyFromProto = KeyFromProto;

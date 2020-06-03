"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDuration = exports.structToObject = exports.objectToStruct = void 0;
var proto_1 = require("../generated/proto");
/**
 * @hidden
 */
function objectToStruct(v) {
    var fields = Object.keys(v).reduce(function (obj, key) {
        obj[key] = anyToProto(v[key]);
        return obj;
    }, {});
    return proto_1.google.protobuf.Struct.create({
        fields: fields
    });
}
exports.objectToStruct = objectToStruct;
/**
 * @hidden
 */
function anyToProto(x) {
    var value = {};
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
                value.nullValue = proto_1.google.protobuf.NullValue.NULL_VALUE;
            }
            else if (Array.isArray(x)) {
                value.listValue = proto_1.google.protobuf.ListValue.create({
                    values: x.map(anyToProto)
                });
            }
            else if (Object.keys(x).length > 0) {
                value.structValue = objectToStruct(x);
            }
    }
    return proto_1.google.protobuf.Value.create(value);
}
/**
 * @hidden
 */
function structToObject(s) {
    if (s == null) {
        return {};
    }
    if (s.fields == null || Object.keys(s.fields).length === 0) {
        return {};
    }
    var x = s.fields;
    return Object.keys(x).reduce(function (obj, key) {
        obj[key] = valueToJS(x[key]);
        return obj;
    }, {});
}
exports.structToObject = structToObject;
/**
 * @hidden
 */
function valueToJS(v) {
    var f = proto_1.google.protobuf.Value.create(v);
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
function listValueToArray(v) {
    if (v == null) {
        return [];
    }
    return proto_1.google.protobuf.ListValue.create(v).values.map(valueToJS);
}
/**
 * @hidden
 */
function parseDuration(d) {
    if (d == null) {
        return 0;
    }
    var s = Number(d.seconds || 0);
    var duration = s * second;
    var n = Number(d.nanos || 0);
    if (n !== 0) {
        duration += n * nanosecond;
    }
    return duration / second;
}
exports.parseDuration = parseDuration;
/**
 * @hidden
 */
var nanosecond = 1;
/**
 * @hidden
 */
var microsecond = 1000 * nanosecond;
/**
 * @hidden
 */
var millisecond = 1000 * microsecond;
/**
 * @hidden
 */
var second = 1000 * millisecond;

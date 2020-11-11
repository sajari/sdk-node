"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var proto_1 = require("../../generated/proto");
var types_1 = require("../types");
/**
 * @hidden
 */
function RecordToProto(r) {
    var values = Object.keys(r).reduce(function (obj, key) {
        var v = types_1.ValueToProto(r[key]);
        if (v === undefined) {
            return obj;
        }
        obj[key] = v;
        return obj;
    }, {});
    return proto_1.sajari.engine.v2.Record.create({
        values: values
    });
}
exports.RecordToProto = RecordToProto;
/**
 * @hidden
 */
function RecordFromProto(pb) {
    if (pb == null || pb.values == null) {
        return {};
    }
    var x = pb.values;
    return Object.keys(x).reduce(function (obj, key) {
        var v = types_1.ValueFromProto(x[key]);
        if (v === null) {
            return obj;
        }
        obj[key] = v;
        return obj;
    }, {});
}
exports.RecordFromProto = RecordFromProto;

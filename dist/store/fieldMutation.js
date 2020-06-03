"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldMutationToProto = exports.incrementField = exports.appendField = exports.setField = void 0;
var proto_1 = require("../../generated/proto");
var types_1 = require("../types");
/**
 * setField is a FieldMutation which sets field to value.
 * If value is null then this unsets field.
 */
function setField(field, value) {
    return {
        field: field,
        mutation: "set",
        set: value
    };
}
exports.setField = setField;
/**
 * appendField is a FieldMutation which appends value to field.
 */
function appendField(field, value) {
    return {
        field: field,
        mutation: "append",
        append: value
    };
}
exports.appendField = appendField;
/**
 * incrementField is a FieldMutation which increments field by value.
 */
function incrementField(field, value) {
    return {
        field: field,
        mutation: "increment",
        increment: value
    };
}
exports.incrementField = incrementField;
/**
 * FieldMutationToProto turns a FieldMutation into a
 * sajari.engine.v2.MutateRecordRequest.FieldMutation
 * @hidden
 */
function FieldMutationToProto(fm) {
    var proto = {
        field: fm.field,
        mutation: fm.mutation
    };
    switch (fm.mutation) {
        case "set":
            if (fm.set === undefined) {
                throw new Error("sajari: set mutation created, but there is no value for set");
            }
            proto.set = types_1.ValueToProto(fm.set);
            break;
        case "increment":
            if (fm.increment === undefined) {
                throw new Error("sajari: increment mutation created, but there is no value for increment");
            }
            proto.increment = types_1.ValueToProto(fm.increment);
            break;
        case "append":
            if (fm.append === undefined) {
                throw new Error("sajari: append mutation created, but there is no value for append");
            }
            proto.append = types_1.ValueToProto(fm.append);
            break;
        default:
            throw new Error("sajari: invalid mutation type: " + fm.mutation);
    }
    return proto_1.sajari.engine.v2.MutateRecordRequest.FieldMutation.create(proto);
}
exports.FieldMutationToProto = FieldMutationToProto;

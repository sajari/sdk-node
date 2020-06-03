"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutation = exports.MutationToProto = void 0;
var proto_1 = require("../../generated/proto");
var field_1 = require("./field");
/**
 * @hidden
 */
function MutationToProto(m) {
    var mut = m;
    if ("type" in mut) {
        mut.type = field_1.TypeToProto(mut.type);
    }
    return proto_1.sajari.engine.v2.MutateFieldRequest.Mutation.create(mut);
}
exports.MutationToProto = MutationToProto;
function name(n) {
    return {
        name: n
    };
}
function description(d) {
    return {
        description: d
    };
}
function type(t) {
    return {
        type: t
    };
}
function repeated(b) {
    return {
        repeated: b
    };
}
exports.mutation = {
    name: name,
    description: description,
    type: type,
    repeated: repeated
};

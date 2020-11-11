"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("./store");
// TEMPORARY: Debug ALL sajari calls
process.env.DEBUG = process.env.DEBUG ? process.env.DEBUG + ',sajari:*' : 'sajari:*';
// re-export the grpc status code enum
var grpc_js_1 = require("@grpc/grpc-js");
exports.statusCode = grpc_js_1.status;
var client_1 = require("./client");
exports.Client = client_1.Client;
var session_1 = require("./pipeline/session");
exports.DefaultSession = session_1.DefaultSession;
exports.TrackingType = session_1.TrackingType;
var schema_1 = require("./schema");
exports.schema = schema_1.default;
exports.FieldMode = schema_1.FieldMode;
exports.store = {
    setField: store_1.setField,
    appendField: store_1.appendField,
    incrementField: store_1.incrementField
};

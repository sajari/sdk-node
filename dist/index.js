"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var store_1 = require("./store");
// re-export the grpc status code enum
var grpc_1 = require("grpc");
Object.defineProperty(exports, "statusCode", { enumerable: true, get: function () { return grpc_1.status; } });
var client_1 = require("./client");
Object.defineProperty(exports, "Client", { enumerable: true, get: function () { return client_1.Client; } });
var session_1 = require("./pipeline/session");
Object.defineProperty(exports, "DefaultSession", { enumerable: true, get: function () { return session_1.DefaultSession; } });
Object.defineProperty(exports, "TrackingType", { enumerable: true, get: function () { return session_1.TrackingType; } });
var schema_1 = require("./schema");
Object.defineProperty(exports, "schema", { enumerable: true, get: function () { return schema_1.default; } });
Object.defineProperty(exports, "FieldMode", { enumerable: true, get: function () { return schema_1.FieldMode; } });
exports.store = {
    setField: store_1.setField,
    appendField: store_1.appendField,
    incrementField: store_1.incrementField
};

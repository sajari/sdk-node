"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = exports.MutateRecordMethod = exports.DeleteRecordMethod = exports.GetRecordMethod = void 0;
var proto_1 = require("../../generated/proto");
var types_1 = require("../types");
var fieldMutation_1 = require("./fieldMutation");
var record_1 = require("./record");
/**
 * grpc method endpoint for record retrieval
 * @hidden
 */
exports.GetRecordMethod = "sajari.engine.v2.Store/GetRecord";
/**
 * grpc method endpoint for record deletion
 * @hidden
 */
exports.DeleteRecordMethod = "sajari.engine.v2.Store/DeleteRecord";
/**
 * grpc method endpoint for record mutation
 * @hidden
 */
exports.MutateRecordMethod = "sajari.engine.v2.Store/MutateRecord";
var Store = /** @class */ (function () {
    /**
     * @hidden
     */
    function Store(client) {
        this.client = client;
    }
    /**
     * get retrieves the record corresponding to the key.
     */
    Store.prototype.get = function (key, callOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var request, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = proto_1.sajari.engine.v2.GetRecordRequest.create({
                            key: types_1.KeyToProto(key)
                        });
                        return [4 /*yield*/, this.client.call(exports.GetRecordMethod, request, proto_1.sajari.engine.v2.GetRecordRequest.encode, proto_1.sajari.engine.v2.GetRecordResponse.decode, callOptions)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, record_1.RecordFromProto(response.record)];
                }
            });
        });
    };
    /**
     * delete removes the record corresponding to the key.
     */
    Store.prototype.delete = function (key, callOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = proto_1.sajari.engine.v2.DeleteRecordRequest.create({
                            key: types_1.KeyToProto(key)
                        });
                        return [4 /*yield*/, this.client.call(exports.DeleteRecordMethod, request, proto_1.sajari.engine.v2.DeleteRecordRequest.encode, proto_1.sajari.engine.v2.DeleteRecordResponse.decode, callOptions)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * mutate applies key-value updates to the record corresponding to
     * the key.
     */
    Store.prototype.mutate = function (key, fieldMutations, callOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = proto_1.sajari.engine.v2.MutateRecordRequest.create({
                            key: types_1.KeyToProto(key),
                            fieldMutations: fieldMutations.map(fieldMutation_1.FieldMutationToProto)
                        });
                        return [4 /*yield*/, this.client.call(exports.MutateRecordMethod, request, proto_1.sajari.engine.v2.MutateRecordRequest.encode, proto_1.sajari.engine.v2.MutateRecordResponse.decode, callOptions)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Store;
}());
exports.Store = Store;

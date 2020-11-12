"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var proto_1 = require("../../generated/proto");
var protoUtils_1 = require("../protoUtils");
var record_1 = require("../store/record");
var types_1 = require("../types");
var search_1 = require("./search");
var session_1 = require("./session");
/**
 * @hidden
 */
function PipelineIdentifierFromProto(v) {
    if (v == null) {
        return { name: "", version: "" };
    }
    var x = proto_1.sajari.pipeline.v2.Identifier.create(v);
    return {
        name: x.name,
        version: x.version
    };
}
/**
 * grpc method path for record ingestetion via a pipeline
 * @hidden
 */
var PipelineCreateRecordMethod = "sajari.pipeline.v2.Store/CreateRecord";
/**
 * grpc method path for replace
 * @hidden
 */
var PipelineReplaceRecordMethod = "sajari.pipeline.v2.Store/ReplaceRecord";
/**
 * grpc method path for querying records
 * @hidden
 */
var PipelineSearchMethod = "sajari.pipeline.v2.Query/Search";
/**
 * PipelineImpl is the implementation of a Pipeline
 * @hidden
 */
var PipelineImpl = /** @class */ (function () {
    function PipelineImpl(pipeline, client) {
        this.pipeline = pipeline;
        this.client = client;
    }
    PipelineImpl.prototype.search = function (values, tracking, options) {
        return __awaiter(this, void 0, void 0, function () {
            var request, response, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = proto_1.sajari.pipeline.v2.SearchRequest.create({
                            pipeline: this.pipeline,
                            values: protoUtils_1.objectToStruct(values),
                            tracking: session_1.TrackingToProto(tracking)
                        });
                        return [4 /*yield*/, this.client.call(PipelineSearchMethod, request, proto_1.sajari.pipeline.v2.SearchRequest.encode, proto_1.sajari.pipeline.v2.SearchResponse.decode, options)];
                    case 1:
                        response = _a.sent();
                        results = search_1.parseSearchResponse(response);
                        return [2 /*return*/, {
                                results: results,
                                values: protoUtils_1.structToObject(response.values),
                                pipeline: PipelineIdentifierFromProto(response.pipeline)
                            }];
                }
            });
        });
    };
    PipelineImpl.prototype.create = function (values, record, options) {
        return __awaiter(this, void 0, void 0, function () {
            var request, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = proto_1.sajari.pipeline.v2.CreateRecordRequest.create({
                            pipeline: this.pipeline,
                            values: protoUtils_1.objectToStruct(values),
                            record: record_1.RecordToProto(record)
                        });
                        return [4 /*yield*/, this.client.call(PipelineCreateRecordMethod, request, proto_1.sajari.pipeline.v2.CreateRecordRequest.encode, proto_1.sajari.pipeline.v2.CreateRecordResponse.decode, options)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, {
                                key: types_1.KeyFromProto(response.key),
                                values: protoUtils_1.structToObject(response.values),
                                pipeline: PipelineIdentifierFromProto(response.pipeline)
                            }];
                }
            });
        });
    };
    PipelineImpl.prototype.replace = function (values, key, record, options) {
        return __awaiter(this, void 0, void 0, function () {
            var request, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = proto_1.sajari.pipeline.v2.ReplaceRecordRequest.create({
                            pipeline: this.pipeline,
                            values: protoUtils_1.objectToStruct(values),
                            key: types_1.KeyToProto(key),
                            record: record_1.RecordToProto(record)
                        });
                        return [4 /*yield*/, this.client.call(PipelineReplaceRecordMethod, request, proto_1.sajari.pipeline.v2.ReplaceRecordRequest.encode, proto_1.sajari.pipeline.v2.ReplaceRecordResponse.decode, options)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, {
                                key: types_1.KeyFromProto(response.key),
                                values: protoUtils_1.structToObject(response.values),
                                pipeline: PipelineIdentifierFromProto(response.pipeline)
                            }];
                }
            });
        });
    };
    return PipelineImpl;
}());
exports.PipelineImpl = PipelineImpl;

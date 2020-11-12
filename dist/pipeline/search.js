"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var proto_1 = require("../../generated/proto");
var protoUtils_1 = require("../protoUtils");
var types_1 = require("../types");
var session_1 = require("./session");
/**
 * @hidden
 */
function parseSearchResponse(raw) {
    var msg = proto_1.sajari.pipeline.v2.SearchResponse.verify(raw);
    if (msg !== null) {
        throw new Error(msg);
    }
    var searchResponse = raw.queryResults;
    var results = [];
    var aggregates = {};
    var aggregateFilters = {};
    var reads = 0;
    var totalResults = 0;
    var latency = 0;
    if (searchResponse != null) {
        results = processResults(searchResponse.results, raw.tokens);
        reads = searchResponse.reads;
        totalResults = searchResponse.totalResults;
        latency = protoUtils_1.parseDuration(searchResponse.latency);
        if (Object.keys(searchResponse.aggregates).length > 0) {
            aggregates = processAggregatesResponse(searchResponse.aggregates);
        }
        if (Object.keys(searchResponse.aggregateFilters).length > 0) {
            aggregateFilters = processAggregatesResponse(searchResponse.aggregateFilters);
        }
    }
    return {
        reads: reads,
        totalResults: totalResults,
        latency: latency,
        results: results,
        aggregates: aggregates,
        aggregateFilters: aggregateFilters
    };
}
exports.parseSearchResponse = parseSearchResponse;
/**
 * @hidden
 */
function processResults(results, tokens) {
    return results.map(function (res, idx) {
        var err = proto_1.sajari.engine.v2.QueryResult.verify(res);
        if (err) {
            throw new Error("sajari: unable to verify Result message: " + err);
        }
        var result = res;
        var values = Object.keys(result.values).reduce(function (vals, key) {
            vals[key] = types_1.ValueFromProto(result.values[key]);
            return vals;
        }, {});
        var token;
        if (tokens.length > idx) {
            token = session_1.TokenFromProto(tokens[idx]);
        }
        return {
            indexScore: result.indexScore,
            score: result.score,
            values: values,
            token: token
        };
    });
}
// tslint:enable:max-line-length
/**
 * @hidden
 */
var processAggregatesResponse = function (aggregates) {
    return Object.keys(aggregates).reduce(function (result, key) {
        var value = aggregates[key];
        switch (value.aggregateResult) {
            case "metric":
                result[key] = value.metric.value;
                return result;
            case "count":
                result[key] = value.count.counts;
                return result;
            case "buckets":
                var buckets_1 = value.buckets.buckets;
                result[key] = Object.keys(buckets_1).reduce(function (resp, bucketKey) {
                    var bucket = buckets_1[bucketKey];
                    resp[bucketKey] = {
                        count: bucket.count,
                        name: bucket.name
                    };
                    return resp;
                }, {});
                return result;
            default:
                return result;
        }
    }, {});
};

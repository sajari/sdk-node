"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIClient = void 0;
var grpc_js_1 = __importDefault(require("@grpc/grpc-js"));
var debug_1 = __importDefault(require("debug"));
var deepmerge_1 = __importDefault(require("deepmerge"));
var retryInterceptor_1 = __importDefault(require("./retryInterceptor"));
var ua_1 = require("./ua");
/**
 * Custom formatter for call options.
 * By default we hide the credentials from being logged to the console.
 * @hidden
 */
debug_1.default.formatters.C = function callOptionsFormatter(options) {
    if (process.env.DEBUG_SHOW_CREDS &&
        process.env.DEBUG_SHOW_CREDS.toLowerCase() === "true") {
        return JSON.stringify(options);
    }
    return JSON.stringify({ deadline: options.deadline, credentials: "hidden" });
};
/**
 * debug message logger
 * @hidden
 */
var debug = debug_1.default("sajari:api");
/**
 * The default API endpoint
 * @hidden
 */
var API_ENDPOINT = "api.sajari.com:443";
/**
 * The deault grpc authority
 * @hidden
 */
var AUTHORITY = "api.sajari.com";
// @link https://github.com/grpc/grpc-node/blob/grpc%401.24.x/packages/grpc-native-core/src/constants.js#L169
/**
 * Propagation flags: these can be bitwise or-ed to form the propagation option
 * for calls.
 *
 * Users are encouraged to write propagation masks as deltas from the default.
 * i.e. write `grpc.propagate.DEFAULTS & ~grpc.propagate.DEADLINE` to disable
 * deadline propagation.
 * @memberof grpc
 * @alias grpc.propagate
 * @enum {number}
 */
var propagate = {
    DEADLINE: 1,
    CENSUS_STATS_CONTEXT: 2,
    CENSUS_TRACING_CONTEXT: 4,
    CANCELLATION: 8,
    DEFAULTS: 65535
};
/**
 * APIClient wraps the grpc client, providing a single call method for
 * creating an unary request.
 * @hidden
 */
var APIClient = /** @class */ (function () {
    function APIClient(project, collection, credentials, endpoint, insecure) {
        if (endpoint === void 0) { endpoint = API_ENDPOINT; }
        if (insecure === void 0) { insecure = false; }
        this.credentials = credentials;
        this.endpoint = endpoint;
        this.client = new grpc_js_1.default.Client(this.endpoint, insecure
            ? grpc_js_1.default.credentials.createInsecure()
            : grpc_js_1.default.credentials.createSsl(), {
            "grpc.default_authority": AUTHORITY,
            "grpc.primary_user_agent": ua_1.USER_AGENT
        });
        this.metadata = new grpc_js_1.default.Metadata();
        this.metadata.add("project", project);
        this.metadata.add("collection", collection);
    }
    APIClient.prototype.call = function (path, request, encoder, decoder, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return new Promise(function (resolve, reject) {
            var callOptions = deepmerge_1.default({
                deadline: 5,
                credentials: _this.credentials
            }, options);
            debug("endpoint: %j", _this.endpoint);
            debug("grpc method: %j", path);
            debug("call options: %C", callOptions);
            debug("request: %j", request);
            var metadata = _this.metadata.clone();
            metadata.set("authorization", "keysecret " + callOptions.credentials.key + " " + callOptions.credentials.secret);
            _this.client.makeUnaryRequest(path, wrapEncoder(encoder), decoder, request, metadata, {
                deadline: deadline(callOptions.deadline),
                // tslint:disable-next-line:no-bitwise
                propagate_flags: propagate.DEFAULTS & ~propagate.DEADLINE,
                // NOTE(@bhinchley): credentials is required by the type CallOptions,
                // but this appears to do nothing.
                credentials: createCallCredentials(callOptions.credentials.key, callOptions.credentials.secret),
                interceptors: [retryInterceptor_1.default(3)]
            }, function (err, value) {
                if (err) {
                    return reject(err);
                }
                debug("response: %j", value);
                return resolve(value);
            });
        });
    };
    /**
     * wait until the grpc socket is ready
     * @param seconds number of seconds to wait before erroring
     */
    APIClient.prototype.wait = function (seconds) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.client.waitForReady(deadline(seconds), function (err) {
                if (err) {
                    return reject(err);
                }
                return resolve();
            });
        });
    };
    APIClient.prototype.close = function () {
        this.client.close();
    };
    return APIClient;
}());
exports.APIClient = APIClient;
/**
 * createCallCredentials creates the grpc.CallCredientials from the
 * passed sajari credentials
 * @hidden
 */
function createCallCredentials(key, secret) {
    return grpc_js_1.default.credentials.createFromMetadataGenerator(function (_, callback) {
        var metadata = new grpc_js_1.default.Metadata();
        metadata.add("authorization", "keysecret " + key + " " + secret);
        callback(null, metadata);
    });
}
/**
 * wrapEncoder turns a protobufjs message encode fn into a grpc.serialize fn
 * @hidden
 */
function wrapEncoder(encode) {
    return function serialize(message) {
        var msg = encode(message).finish();
        return Buffer.from(msg);
    };
}
/**
 * @hidden
 */
function deadline(seconds) {
    return new Date().setSeconds(new Date().getSeconds() + seconds);
}

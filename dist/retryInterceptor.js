"use strict";
// tslint:disable:no-shadowed-variable
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var debug_1 = __importDefault(require("debug"));
var grpc_1 = require("grpc");
var debug = debug_1.default("sajari:api:retryInterceptor");
/**
 * https://github.com/grpc/proposal/pull/14/files#diff-c1aee0ddae63a3e9a9ba050796cd4b58R325
 * @hidden
 */
function retryInterceptor(maxRetries) {
    if (maxRetries === void 0) { maxRetries = 3; }
    return function interceptor(options, nextCall) {
        var savedMetadata;
        var savedSendMessage;
        var savedReceiveMessage;
        var savedMessageNext;
        var requester = {
            start: function (metadata, _, next) {
                savedMetadata = metadata;
                var newListener = {
                    onReceiveMessage: function (message, next) {
                        savedReceiveMessage = message;
                        savedMessageNext = next;
                    },
                    onReceiveStatus: function (status, next) {
                        var retries = 0;
                        function retry(message, metadata) {
                            retries++;
                            var newCall = nextCall(options);
                            var retryListener = {
                                onReceiveMessage: function (message) {
                                    savedReceiveMessage = message;
                                },
                                onReceiveStatus: function (status) {
                                    if (status.code !== grpc_1.status.OK) {
                                        if (retries <= maxRetries) {
                                            var retryDelay_1 = 10 * retries + Math.random() * 10;
                                            setTimeout(function () {
                                                debug("retry: %j", { num: retries, delay: retryDelay_1 });
                                                retry(message, metadata);
                                            }, retryDelay_1);
                                        }
                                        else {
                                            savedMessageNext(savedReceiveMessage);
                                            next(status);
                                        }
                                    }
                                    else {
                                        savedMessageNext(savedReceiveMessage);
                                        next({ code: grpc_1.status.OK });
                                    }
                                }
                            };
                            newCall.start(metadata, retryListener);
                            newCall.sendMessage(savedSendMessage);
                            newCall.halfClose();
                        }
                        if (status.code !== grpc_1.status.OK &&
                            status.code === grpc_1.status.UNAVAILABLE) {
                            retry(savedSendMessage, savedMetadata);
                        }
                        else {
                            savedMessageNext(savedReceiveMessage);
                            next(status);
                        }
                    }
                };
                next(metadata, newListener);
            },
            sendMessage: function (message, next) {
                savedSendMessage = message;
                next(message);
            }
        };
        return new grpc_1.InterceptingCall(nextCall(options), requester);
    };
}
exports.default = retryInterceptor;

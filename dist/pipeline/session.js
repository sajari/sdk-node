"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var deepmerge_1 = __importDefault(require("deepmerge"));
var proto_1 = require("../../generated/proto");
/**
 * @hidden
 */
function TrackingToProto(t) {
    var tracking = deepmerge_1.default(t, { type: TrackingTypeToProto(t.type) });
    return proto_1.sajari.pipeline.v2.Tracking.create(tracking);
}
exports.TrackingToProto = TrackingToProto;
/**
 * TrackingType defines the possible result-interaction tracking
 * types used by [[DefaultSession]]
 */
var TrackingType;
(function (TrackingType) {
    /** None disables tracking. */
    TrackingType[TrackingType["None"] = 0] = "None";
    /** Click generates click tracking tokens. */
    TrackingType[TrackingType["Click"] = 1] = "Click";
    /** PosNeg creates pos/neg tracking tokens. */
    TrackingType[TrackingType["PosNeg"] = 2] = "PosNeg";
})(TrackingType = exports.TrackingType || (exports.TrackingType = {}));
/**
 * @hidden
 */
function TrackingTypeToProto(t) {
    switch (t) {
        case TrackingType.Click:
            return proto_1.sajari.pipeline.v2.Tracking.Type.CLICK;
        case TrackingType.PosNeg:
            return proto_1.sajari.pipeline.v2.Tracking.Type.POS_NEG;
        case TrackingType.None:
        default:
            return proto_1.sajari.pipeline.v2.Tracking.Type.NONE;
    }
}
exports.TrackingTypeToProto = TrackingTypeToProto;
/**
 * @hidden
 */
function TokenFromProto(t) {
    if (t.click != null) {
        if (t.click.token === "" || t.click.token == null) {
            throw new Error("sajari: invalid click token");
        }
        return {
            click: t.click.token
        };
    }
    else if (t.posNeg != null) {
        if (t.posNeg.pos === "" ||
            t.posNeg.neg === "" ||
            (t.posNeg.pos == null || t.posNeg.neg == null)) {
            throw new Error("sajari: invalid posNeg token");
        }
        return {
            pos: t.posNeg.pos,
            neg: t.posNeg.neg
        };
    }
    throw new Error("sajari: invalid token type");
}
exports.TokenFromProto = TokenFromProto;
/** DefaultSession holds state of a sequence of searches. */
var DefaultSession = /** @class */ (function () {
    /** Constructs an instance of DefaultSession. */
    function DefaultSession(trackingType, field, data) {
        /**
         * @hidden
         */
        this.queryID = "";
        /**
         * @hidden
         */
        this.sequence = 0;
        this.trackingType = trackingType;
        this.field = field;
        this.sessionData = data;
    }
    /**
     * next merges new values into the session and returns tracking data
     * to be sent with search requests.
     */
    DefaultSession.prototype.next = function (values) {
        if (this.queryID === "") {
            this.queryID = newQueryID();
            this.sequence = 0;
        }
        else {
            this.sequence++;
        }
        return {
            type: this.trackingType,
            queryId: this.queryID,
            sequence: this.sequence,
            field: this.field,
            data: this.sessionData
        };
    };
    /** reset resets the session instance to its empty state. */
    DefaultSession.prototype.reset = function () {
        this.queryID = "";
        this.sequence = 0;
    };
    return DefaultSession;
}());
exports.DefaultSession = DefaultSession;
/**
 * newQueryID constructs a new ID for a query.
 * @hidden
 */
function newQueryID(len) {
    if (len === void 0) { len = 16; }
    var output = "";
    for (var i = 0; i < len; i++) {
        output += "abcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * 36));
    }
    return output;
}

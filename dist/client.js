"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("./api");
var interaction_1 = require("./interaction");
var pipeline_1 = require("./pipeline");
var schema_1 = require("./schema");
var client_1 = require("./store/client");
var Client = /** @class */ (function () {
    function Client(project, collection, credentials, endpoint, insecure) {
        if (insecure === void 0) { insecure = false; }
        this.client = new api_1.APIClient(project, collection, credentials, endpoint, insecure);
    }
    Client.prototype.close = function () {
        this.client.close();
    };
    Client.prototype.wait = function (seconds) {
        return this.client.wait(seconds);
    };
    Client.prototype.pipeline = function (pipeline) {
        return new pipeline_1.PipelineImpl(pipeline, this.client);
    };
    Client.prototype.schema = function () {
        return new schema_1.Schema(this.client);
    };
    Client.prototype.store = function () {
        return new client_1.Store(this.client);
    };
    Client.prototype.interaction = function () {
        return new interaction_1.Interaction(this.client);
    };
    return Client;
}());
exports.Client = Client;

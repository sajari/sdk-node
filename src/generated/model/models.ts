import localVarRequest from "request";

export * from "./batchUpsertRecordsResponseVariables";
export * from "./gatewayruntimeError";
export * from "./protobufAny";
export * from "./protobufNullValue";
export * from "./queryCollectionResponseResult";
export * from "./rpcStatus";
export * from "./rpcStatus1";
export * from "./rpcStatus2";
export * from "./rpcStatus3";
export * from "./sajariv4DeleteRecordRequest";
export * from "./sajariv4GetRecordRequest";
export * from "./sajariv4Key";
export * from "./sajariv4Pipeline";
export * from "./sajariv4Pipeline1";
export * from "./schemaFieldMode";
export * from "./stepParamBinding";
export * from "./tokenClick";
export * from "./tokenPosNeg";
export * from "./v2Token";
export * from "./v4BatchCreateSchemaFieldsRequest";
export * from "./v4BatchCreateSchemaFieldsResponse";
export * from "./v4BatchCreateSchemaFieldsResponseError";
export * from "./v4BatchUpsertRecordsRequest";
export * from "./v4BatchUpsertRecordsRequestPipeline";
export * from "./v4BatchUpsertRecordsResponse";
export * from "./v4BatchUpsertRecordsResponseError";
export * from "./v4BatchUpsertRecordsResponseKey";
export * from "./v4Collection";
export * from "./v4GeneratePipelinesRequest";
export * from "./v4GeneratePipelinesResponse";
export * from "./v4GetDefaultPipelineResponse";
export * from "./v4GetDefaultVersionRequestView";
export * from "./v4GetPipelineRequestView";
export * from "./v4ListCollectionsResponse";
export * from "./v4ListPipelinesRequestView";
export * from "./v4ListPipelinesResponse";
export * from "./v4ListSchemaFieldsResponse";
export * from "./v4PipelineType";
export * from "./v4QueryCollectionRequest";
export * from "./v4QueryCollectionRequestPipeline";
export * from "./v4QueryCollectionRequestTracking";
export * from "./v4QueryCollectionRequestTrackingType";
export * from "./v4QueryCollectionResponse";
export * from "./v4QueryCollectionResponsePipeline";
export * from "./v4QueryCollectionResponseQueryAggregateResult";
export * from "./v4QueryCollectionResponseQueryAggregateResultAnalysis";
export * from "./v4QueryCollectionResponseQueryAggregateResultBuckets";
export * from "./v4QueryCollectionResponseQueryAggregateResultBucketsBucket";
export * from "./v4QueryCollectionResponseQueryAggregateResultCount";
export * from "./v4QueryCollectionResponseQueryAggregateResultDate";
export * from "./v4QueryCollectionResponseQueryAggregateResultMetric";
export * from "./v4SchemaField";
export * from "./v4SchemaField1";
export * from "./v4SchemaFieldType";
export * from "./v4SetDefaultPipelineRequest";
export * from "./v4SetDefaultVersionRequest";
export * from "./v4Step";
export * from "./v4Step1";
export * from "./v4UpsertRecordRequest";
export * from "./v4UpsertRecordRequestPipeline";
export * from "./v4UpsertRecordResponse";

import * as fs from "fs";

export interface RequestDetailedFile {
  value: Buffer;
  options?: {
    filename?: string;
    contentType?: string;
  };
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

import { BatchUpsertRecordsResponseVariables } from "./batchUpsertRecordsResponseVariables";
import { GatewayruntimeError } from "./gatewayruntimeError";
import { ProtobufAny } from "./protobufAny";
import { ProtobufNullValue } from "./protobufNullValue";
import { QueryCollectionResponseResult } from "./queryCollectionResponseResult";
import { RpcStatus } from "./rpcStatus";
import { RpcStatus1 } from "./rpcStatus1";
import { RpcStatus2 } from "./rpcStatus2";
import { RpcStatus3 } from "./rpcStatus3";
import { Sajariv4DeleteRecordRequest } from "./sajariv4DeleteRecordRequest";
import { Sajariv4GetRecordRequest } from "./sajariv4GetRecordRequest";
import { Sajariv4Key } from "./sajariv4Key";
import { Sajariv4Pipeline } from "./sajariv4Pipeline";
import { Sajariv4Pipeline1 } from "./sajariv4Pipeline1";
import { SchemaFieldMode } from "./schemaFieldMode";
import { StepParamBinding } from "./stepParamBinding";
import { TokenClick } from "./tokenClick";
import { TokenPosNeg } from "./tokenPosNeg";
import { V2Token } from "./v2Token";
import { V4BatchCreateSchemaFieldsRequest } from "./v4BatchCreateSchemaFieldsRequest";
import { V4BatchCreateSchemaFieldsResponse } from "./v4BatchCreateSchemaFieldsResponse";
import { V4BatchCreateSchemaFieldsResponseError } from "./v4BatchCreateSchemaFieldsResponseError";
import { V4BatchUpsertRecordsRequest } from "./v4BatchUpsertRecordsRequest";
import { V4BatchUpsertRecordsRequestPipeline } from "./v4BatchUpsertRecordsRequestPipeline";
import { V4BatchUpsertRecordsResponse } from "./v4BatchUpsertRecordsResponse";
import { V4BatchUpsertRecordsResponseError } from "./v4BatchUpsertRecordsResponseError";
import { V4BatchUpsertRecordsResponseKey } from "./v4BatchUpsertRecordsResponseKey";
import { V4Collection } from "./v4Collection";
import { V4GeneratePipelinesRequest } from "./v4GeneratePipelinesRequest";
import { V4GeneratePipelinesResponse } from "./v4GeneratePipelinesResponse";
import { V4GetDefaultPipelineResponse } from "./v4GetDefaultPipelineResponse";
import { V4GetDefaultVersionRequestView } from "./v4GetDefaultVersionRequestView";
import { V4GetPipelineRequestView } from "./v4GetPipelineRequestView";
import { V4ListCollectionsResponse } from "./v4ListCollectionsResponse";
import { V4ListPipelinesRequestView } from "./v4ListPipelinesRequestView";
import { V4ListPipelinesResponse } from "./v4ListPipelinesResponse";
import { V4ListSchemaFieldsResponse } from "./v4ListSchemaFieldsResponse";
import { V4PipelineType } from "./v4PipelineType";
import { V4QueryCollectionRequest } from "./v4QueryCollectionRequest";
import { V4QueryCollectionRequestPipeline } from "./v4QueryCollectionRequestPipeline";
import { V4QueryCollectionRequestTracking } from "./v4QueryCollectionRequestTracking";
import { V4QueryCollectionRequestTrackingType } from "./v4QueryCollectionRequestTrackingType";
import { V4QueryCollectionResponse } from "./v4QueryCollectionResponse";
import { V4QueryCollectionResponsePipeline } from "./v4QueryCollectionResponsePipeline";
import { V4QueryCollectionResponseQueryAggregateResult } from "./v4QueryCollectionResponseQueryAggregateResult";
import { V4QueryCollectionResponseQueryAggregateResultAnalysis } from "./v4QueryCollectionResponseQueryAggregateResultAnalysis";
import { V4QueryCollectionResponseQueryAggregateResultBuckets } from "./v4QueryCollectionResponseQueryAggregateResultBuckets";
import { V4QueryCollectionResponseQueryAggregateResultBucketsBucket } from "./v4QueryCollectionResponseQueryAggregateResultBucketsBucket";
import { V4QueryCollectionResponseQueryAggregateResultCount } from "./v4QueryCollectionResponseQueryAggregateResultCount";
import { V4QueryCollectionResponseQueryAggregateResultDate } from "./v4QueryCollectionResponseQueryAggregateResultDate";
import { V4QueryCollectionResponseQueryAggregateResultMetric } from "./v4QueryCollectionResponseQueryAggregateResultMetric";
import { V4SchemaField } from "./v4SchemaField";
import { V4SchemaField1 } from "./v4SchemaField1";
import { V4SchemaFieldType } from "./v4SchemaFieldType";
import { V4SetDefaultPipelineRequest } from "./v4SetDefaultPipelineRequest";
import { V4SetDefaultVersionRequest } from "./v4SetDefaultVersionRequest";
import { V4Step } from "./v4Step";
import { V4Step1 } from "./v4Step1";
import { V4UpsertRecordRequest } from "./v4UpsertRecordRequest";
import { V4UpsertRecordRequestPipeline } from "./v4UpsertRecordRequestPipeline";
import { V4UpsertRecordResponse } from "./v4UpsertRecordResponse";

/* tslint:disable:no-unused-variable */
let primitives = [
  "string",
  "boolean",
  "double",
  "integer",
  "long",
  "float",
  "number",
  "any",
];

let enumsMap: { [index: string]: any } = {
  ProtobufNullValue: ProtobufNullValue,
  SchemaFieldMode: SchemaFieldMode,
  V4GetDefaultVersionRequestView: V4GetDefaultVersionRequestView,
  V4GetPipelineRequestView: V4GetPipelineRequestView,
  V4ListPipelinesRequestView: V4ListPipelinesRequestView,
  V4PipelineType: V4PipelineType,
  V4QueryCollectionRequestTrackingType: V4QueryCollectionRequestTrackingType,
  V4SchemaFieldType: V4SchemaFieldType,
};

let typeMap: { [index: string]: any } = {
  BatchUpsertRecordsResponseVariables: BatchUpsertRecordsResponseVariables,
  GatewayruntimeError: GatewayruntimeError,
  ProtobufAny: ProtobufAny,
  QueryCollectionResponseResult: QueryCollectionResponseResult,
  RpcStatus: RpcStatus,
  RpcStatus1: RpcStatus1,
  RpcStatus2: RpcStatus2,
  RpcStatus3: RpcStatus3,
  Sajariv4DeleteRecordRequest: Sajariv4DeleteRecordRequest,
  Sajariv4GetRecordRequest: Sajariv4GetRecordRequest,
  Sajariv4Key: Sajariv4Key,
  Sajariv4Pipeline: Sajariv4Pipeline,
  Sajariv4Pipeline1: Sajariv4Pipeline1,
  StepParamBinding: StepParamBinding,
  TokenClick: TokenClick,
  TokenPosNeg: TokenPosNeg,
  V2Token: V2Token,
  V4BatchCreateSchemaFieldsRequest: V4BatchCreateSchemaFieldsRequest,
  V4BatchCreateSchemaFieldsResponse: V4BatchCreateSchemaFieldsResponse,
  V4BatchCreateSchemaFieldsResponseError: V4BatchCreateSchemaFieldsResponseError,
  V4BatchUpsertRecordsRequest: V4BatchUpsertRecordsRequest,
  V4BatchUpsertRecordsRequestPipeline: V4BatchUpsertRecordsRequestPipeline,
  V4BatchUpsertRecordsResponse: V4BatchUpsertRecordsResponse,
  V4BatchUpsertRecordsResponseError: V4BatchUpsertRecordsResponseError,
  V4BatchUpsertRecordsResponseKey: V4BatchUpsertRecordsResponseKey,
  V4Collection: V4Collection,
  V4GeneratePipelinesRequest: V4GeneratePipelinesRequest,
  V4GeneratePipelinesResponse: V4GeneratePipelinesResponse,
  V4GetDefaultPipelineResponse: V4GetDefaultPipelineResponse,
  V4ListCollectionsResponse: V4ListCollectionsResponse,
  V4ListPipelinesResponse: V4ListPipelinesResponse,
  V4ListSchemaFieldsResponse: V4ListSchemaFieldsResponse,
  V4QueryCollectionRequest: V4QueryCollectionRequest,
  V4QueryCollectionRequestPipeline: V4QueryCollectionRequestPipeline,
  V4QueryCollectionRequestTracking: V4QueryCollectionRequestTracking,
  V4QueryCollectionResponse: V4QueryCollectionResponse,
  V4QueryCollectionResponsePipeline: V4QueryCollectionResponsePipeline,
  V4QueryCollectionResponseQueryAggregateResult: V4QueryCollectionResponseQueryAggregateResult,
  V4QueryCollectionResponseQueryAggregateResultAnalysis: V4QueryCollectionResponseQueryAggregateResultAnalysis,
  V4QueryCollectionResponseQueryAggregateResultBuckets: V4QueryCollectionResponseQueryAggregateResultBuckets,
  V4QueryCollectionResponseQueryAggregateResultBucketsBucket: V4QueryCollectionResponseQueryAggregateResultBucketsBucket,
  V4QueryCollectionResponseQueryAggregateResultCount: V4QueryCollectionResponseQueryAggregateResultCount,
  V4QueryCollectionResponseQueryAggregateResultDate: V4QueryCollectionResponseQueryAggregateResultDate,
  V4QueryCollectionResponseQueryAggregateResultMetric: V4QueryCollectionResponseQueryAggregateResultMetric,
  V4SchemaField: V4SchemaField,
  V4SchemaField1: V4SchemaField1,
  V4SetDefaultPipelineRequest: V4SetDefaultPipelineRequest,
  V4SetDefaultVersionRequest: V4SetDefaultVersionRequest,
  V4Step: V4Step,
  V4Step1: V4Step1,
  V4UpsertRecordRequest: V4UpsertRecordRequest,
  V4UpsertRecordRequestPipeline: V4UpsertRecordRequestPipeline,
  V4UpsertRecordResponse: V4UpsertRecordResponse,
};

export class ObjectSerializer {
  public static findCorrectType(data: any, expectedType: string) {
    if (data == undefined) {
      return expectedType;
    } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
      return expectedType;
    } else if (expectedType === "Date") {
      return expectedType;
    } else {
      if (enumsMap[expectedType]) {
        return expectedType;
      }

      if (!typeMap[expectedType]) {
        return expectedType; // w/e we don't know the type
      }

      // Check the discriminator
      let discriminatorProperty = typeMap[expectedType].discriminator;
      if (discriminatorProperty == null) {
        return expectedType; // the type does not have a discriminator. use it.
      } else {
        if (data[discriminatorProperty]) {
          var discriminatorType = data[discriminatorProperty];
          if (typeMap[discriminatorType]) {
            return discriminatorType; // use the type given in the discriminator
          } else {
            return expectedType; // discriminator did not map to a type
          }
        } else {
          return expectedType; // discriminator was not present (or an empty string)
        }
      }
    }
  }

  public static serialize(data: any, type: string) {
    if (data == undefined) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf("Array<", 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      let transformedData: any[] = [];
      for (let index in data) {
        let date = data[index];
        transformedData.push(ObjectSerializer.serialize(date, subType));
      }
      return transformedData;
    } else if (type === "Date") {
      return data.toISOString();
    } else {
      if (enumsMap[type]) {
        return data;
      }
      if (!typeMap[type]) {
        // in case we dont know the type
        return data;
      }

      // Get the actual type of this object
      type = this.findCorrectType(data, type);

      // get the map for the correct type.
      let attributeTypes = typeMap[type].getAttributeTypeMap();
      let instance: { [index: string]: any } = {};
      for (let index in attributeTypes) {
        let attributeType = attributeTypes[index];
        instance[attributeType.baseName] = ObjectSerializer.serialize(
          data[attributeType.name],
          attributeType.type
        );
      }
      return instance;
    }
  }

  public static deserialize(data: any, type: string) {
    // polymorphism may change the actual type.
    type = ObjectSerializer.findCorrectType(data, type);
    if (data == undefined) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf("Array<", 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      let transformedData: any[] = [];
      for (let index in data) {
        let date = data[index];
        transformedData.push(ObjectSerializer.deserialize(date, subType));
      }
      return transformedData;
    } else if (type === "Date") {
      return new Date(data);
    } else {
      if (enumsMap[type]) {
        // is Enum
        return data;
      }

      if (!typeMap[type]) {
        // dont know the type
        return data;
      }
      let instance = new typeMap[type]();
      let attributeTypes = typeMap[type].getAttributeTypeMap();
      for (let index in attributeTypes) {
        let attributeType = attributeTypes[index];
        instance[attributeType.name] = ObjectSerializer.deserialize(
          data[attributeType.baseName],
          attributeType.type
        );
      }
      return instance;
    }
  }
}

export interface Authentication {
  /**
   * Apply authentication settings to header and query params.
   */
  applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
  public username: string = "";
  public password: string = "";

  applyToRequest(requestOptions: localVarRequest.Options): void {
    requestOptions.auth = {
      username: this.username,
      password: this.password,
    };
  }
}

export class HttpBearerAuth implements Authentication {
  public accessToken: string | (() => string) = "";

  applyToRequest(requestOptions: localVarRequest.Options): void {
    if (requestOptions && requestOptions.headers) {
      const accessToken =
        typeof this.accessToken === "function"
          ? this.accessToken()
          : this.accessToken;
      requestOptions.headers["Authorization"] = "Bearer " + accessToken;
    }
  }
}

export class ApiKeyAuth implements Authentication {
  public apiKey: string = "";

  constructor(private location: string, private paramName: string) {}

  applyToRequest(requestOptions: localVarRequest.Options): void {
    if (this.location == "query") {
      (<any>requestOptions.qs)[this.paramName] = this.apiKey;
    } else if (
      this.location == "header" &&
      requestOptions &&
      requestOptions.headers
    ) {
      requestOptions.headers[this.paramName] = this.apiKey;
    } else if (
      this.location == "cookie" &&
      requestOptions &&
      requestOptions.headers
    ) {
      if (requestOptions.headers["Cookie"]) {
        requestOptions.headers["Cookie"] +=
          "; " + this.paramName + "=" + encodeURIComponent(this.apiKey);
      } else {
        requestOptions.headers["Cookie"] =
          this.paramName + "=" + encodeURIComponent(this.apiKey);
      }
    }
  }
}

export class OAuth implements Authentication {
  public accessToken: string = "";

  applyToRequest(requestOptions: localVarRequest.Options): void {
    if (requestOptions && requestOptions.headers) {
      requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
    }
  }
}

export class VoidAuth implements Authentication {
  public username: string = "";
  public password: string = "";

  applyToRequest(_: localVarRequest.Options): void {
    // Do nothing
  }
}

export type Interceptor = (
  requestOptions: localVarRequest.Options
) => Promise<void> | void;

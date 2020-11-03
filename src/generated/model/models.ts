import localVarRequest from "request";

export * from "./batchUpsertRecordsResponseVariables";
export * from "./bucketsBucket";
export * from "./enginev2Value";
export * from "./gatewayruntimeError";
export * from "./protobufAny";
export * from "./protobufNullValue";
export * from "./queryAggregateResultAnalysis";
export * from "./queryAggregateResultBuckets";
export * from "./queryAggregateResultCount";
export * from "./queryAggregateResultDate";
export * from "./queryAggregateResultMetric";
export * from "./rpcStatus";
export * from "./rpcStatus1";
export * from "./rpcStatus2";
export * from "./sajariv4beta1DeleteRecordRequest";
export * from "./sajariv4beta1GetRecordRequest";
export * from "./sajariv4beta1Key";
export * from "./sajariv4beta1Pipeline";
export * from "./sajariv4beta1Pipeline1";
export * from "./schemaFieldMode";
export * from "./stepParamBinding";
export * from "./tokenClick";
export * from "./tokenPosNeg";
export * from "./v2QueryAggregateResult";
export * from "./v2QueryResult";
export * from "./v2QueryResults";
export * from "./v2Token";
export * from "./v2Tracking";
export * from "./v2TrackingType";
export * from "./v4beta1BatchCreateSchemaFieldsRequest";
export * from "./v4beta1BatchCreateSchemaFieldsResponse";
export * from "./v4beta1BatchCreateSchemaFieldsResponseError";
export * from "./v4beta1BatchUpsertRecordsRequest";
export * from "./v4beta1BatchUpsertRecordsRequestPipeline";
export * from "./v4beta1BatchUpsertRecordsResponse";
export * from "./v4beta1BatchUpsertRecordsResponseError";
export * from "./v4beta1BatchUpsertRecordsResponseKey";
export * from "./v4beta1Collection";
export * from "./v4beta1GeneratePipelinesRequest";
export * from "./v4beta1GeneratePipelinesResponse";
export * from "./v4beta1GetPipelineRequestView";
export * from "./v4beta1ListCollectionsResponse";
export * from "./v4beta1ListPipelinesRequestView";
export * from "./v4beta1ListPipelinesResponse";
export * from "./v4beta1ListSchemaFieldsResponse";
export * from "./v4beta1PipelineType";
export * from "./v4beta1QueryCollectionRequest";
export * from "./v4beta1QueryCollectionRequestPipeline";
export * from "./v4beta1QueryCollectionResponse";
export * from "./v4beta1QueryCollectionResponsePipeline";
export * from "./v4beta1SchemaField";
export * from "./v4beta1SchemaField1";
export * from "./v4beta1SchemaFieldType";
export * from "./v4beta1SetDefaultPipelineRequest";
export * from "./v4beta1SetDefaultVersionRequest";
export * from "./v4beta1Step";
export * from "./v4beta1Step1";
export * from "./v4beta1UpsertRecordRequest";
export * from "./v4beta1UpsertRecordRequestPipeline";
export * from "./v4beta1UpsertRecordResponse";
export * from "./valueRepeated";

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
import { BucketsBucket } from "./bucketsBucket";
import { Enginev2Value } from "./enginev2Value";
import { GatewayruntimeError } from "./gatewayruntimeError";
import { ProtobufAny } from "./protobufAny";
import { ProtobufNullValue } from "./protobufNullValue";
import { QueryAggregateResultAnalysis } from "./queryAggregateResultAnalysis";
import { QueryAggregateResultBuckets } from "./queryAggregateResultBuckets";
import { QueryAggregateResultCount } from "./queryAggregateResultCount";
import { QueryAggregateResultDate } from "./queryAggregateResultDate";
import { QueryAggregateResultMetric } from "./queryAggregateResultMetric";
import { RpcStatus } from "./rpcStatus";
import { RpcStatus1 } from "./rpcStatus1";
import { RpcStatus2 } from "./rpcStatus2";
import { Sajariv4beta1DeleteRecordRequest } from "./sajariv4beta1DeleteRecordRequest";
import { Sajariv4beta1GetRecordRequest } from "./sajariv4beta1GetRecordRequest";
import { Sajariv4beta1Key } from "./sajariv4beta1Key";
import { Sajariv4beta1Pipeline } from "./sajariv4beta1Pipeline";
import { Sajariv4beta1Pipeline1 } from "./sajariv4beta1Pipeline1";
import { SchemaFieldMode } from "./schemaFieldMode";
import { StepParamBinding } from "./stepParamBinding";
import { TokenClick } from "./tokenClick";
import { TokenPosNeg } from "./tokenPosNeg";
import { V2QueryAggregateResult } from "./v2QueryAggregateResult";
import { V2QueryResult } from "./v2QueryResult";
import { V2QueryResults } from "./v2QueryResults";
import { V2Token } from "./v2Token";
import { V2Tracking } from "./v2Tracking";
import { V2TrackingType } from "./v2TrackingType";
import { V4beta1BatchCreateSchemaFieldsRequest } from "./v4beta1BatchCreateSchemaFieldsRequest";
import { V4beta1BatchCreateSchemaFieldsResponse } from "./v4beta1BatchCreateSchemaFieldsResponse";
import { V4beta1BatchCreateSchemaFieldsResponseError } from "./v4beta1BatchCreateSchemaFieldsResponseError";
import { V4beta1BatchUpsertRecordsRequest } from "./v4beta1BatchUpsertRecordsRequest";
import { V4beta1BatchUpsertRecordsRequestPipeline } from "./v4beta1BatchUpsertRecordsRequestPipeline";
import { V4beta1BatchUpsertRecordsResponse } from "./v4beta1BatchUpsertRecordsResponse";
import { V4beta1BatchUpsertRecordsResponseError } from "./v4beta1BatchUpsertRecordsResponseError";
import { V4beta1BatchUpsertRecordsResponseKey } from "./v4beta1BatchUpsertRecordsResponseKey";
import { V4beta1Collection } from "./v4beta1Collection";
import { V4beta1GeneratePipelinesRequest } from "./v4beta1GeneratePipelinesRequest";
import { V4beta1GeneratePipelinesResponse } from "./v4beta1GeneratePipelinesResponse";
import { V4beta1GetPipelineRequestView } from "./v4beta1GetPipelineRequestView";
import { V4beta1ListCollectionsResponse } from "./v4beta1ListCollectionsResponse";
import { V4beta1ListPipelinesRequestView } from "./v4beta1ListPipelinesRequestView";
import { V4beta1ListPipelinesResponse } from "./v4beta1ListPipelinesResponse";
import { V4beta1ListSchemaFieldsResponse } from "./v4beta1ListSchemaFieldsResponse";
import { V4beta1PipelineType } from "./v4beta1PipelineType";
import { V4beta1QueryCollectionRequest } from "./v4beta1QueryCollectionRequest";
import { V4beta1QueryCollectionRequestPipeline } from "./v4beta1QueryCollectionRequestPipeline";
import { V4beta1QueryCollectionResponse } from "./v4beta1QueryCollectionResponse";
import { V4beta1QueryCollectionResponsePipeline } from "./v4beta1QueryCollectionResponsePipeline";
import { V4beta1SchemaField } from "./v4beta1SchemaField";
import { V4beta1SchemaField1 } from "./v4beta1SchemaField1";
import { V4beta1SchemaFieldType } from "./v4beta1SchemaFieldType";
import { V4beta1SetDefaultPipelineRequest } from "./v4beta1SetDefaultPipelineRequest";
import { V4beta1SetDefaultVersionRequest } from "./v4beta1SetDefaultVersionRequest";
import { V4beta1Step } from "./v4beta1Step";
import { V4beta1Step1 } from "./v4beta1Step1";
import { V4beta1UpsertRecordRequest } from "./v4beta1UpsertRecordRequest";
import { V4beta1UpsertRecordRequestPipeline } from "./v4beta1UpsertRecordRequestPipeline";
import { V4beta1UpsertRecordResponse } from "./v4beta1UpsertRecordResponse";
import { ValueRepeated } from "./valueRepeated";

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
  V2TrackingType: V2TrackingType,
  V4beta1GetPipelineRequestView: V4beta1GetPipelineRequestView,
  V4beta1ListPipelinesRequestView: V4beta1ListPipelinesRequestView,
  V4beta1PipelineType: V4beta1PipelineType,
  V4beta1SchemaFieldType: V4beta1SchemaFieldType,
};

let typeMap: { [index: string]: any } = {
  BatchUpsertRecordsResponseVariables: BatchUpsertRecordsResponseVariables,
  BucketsBucket: BucketsBucket,
  Enginev2Value: Enginev2Value,
  GatewayruntimeError: GatewayruntimeError,
  ProtobufAny: ProtobufAny,
  QueryAggregateResultAnalysis: QueryAggregateResultAnalysis,
  QueryAggregateResultBuckets: QueryAggregateResultBuckets,
  QueryAggregateResultCount: QueryAggregateResultCount,
  QueryAggregateResultDate: QueryAggregateResultDate,
  QueryAggregateResultMetric: QueryAggregateResultMetric,
  RpcStatus: RpcStatus,
  RpcStatus1: RpcStatus1,
  RpcStatus2: RpcStatus2,
  Sajariv4beta1DeleteRecordRequest: Sajariv4beta1DeleteRecordRequest,
  Sajariv4beta1GetRecordRequest: Sajariv4beta1GetRecordRequest,
  Sajariv4beta1Key: Sajariv4beta1Key,
  Sajariv4beta1Pipeline: Sajariv4beta1Pipeline,
  Sajariv4beta1Pipeline1: Sajariv4beta1Pipeline1,
  StepParamBinding: StepParamBinding,
  TokenClick: TokenClick,
  TokenPosNeg: TokenPosNeg,
  V2QueryAggregateResult: V2QueryAggregateResult,
  V2QueryResult: V2QueryResult,
  V2QueryResults: V2QueryResults,
  V2Token: V2Token,
  V2Tracking: V2Tracking,
  V4beta1BatchCreateSchemaFieldsRequest: V4beta1BatchCreateSchemaFieldsRequest,
  V4beta1BatchCreateSchemaFieldsResponse: V4beta1BatchCreateSchemaFieldsResponse,
  V4beta1BatchCreateSchemaFieldsResponseError: V4beta1BatchCreateSchemaFieldsResponseError,
  V4beta1BatchUpsertRecordsRequest: V4beta1BatchUpsertRecordsRequest,
  V4beta1BatchUpsertRecordsRequestPipeline: V4beta1BatchUpsertRecordsRequestPipeline,
  V4beta1BatchUpsertRecordsResponse: V4beta1BatchUpsertRecordsResponse,
  V4beta1BatchUpsertRecordsResponseError: V4beta1BatchUpsertRecordsResponseError,
  V4beta1BatchUpsertRecordsResponseKey: V4beta1BatchUpsertRecordsResponseKey,
  V4beta1Collection: V4beta1Collection,
  V4beta1GeneratePipelinesRequest: V4beta1GeneratePipelinesRequest,
  V4beta1GeneratePipelinesResponse: V4beta1GeneratePipelinesResponse,
  V4beta1ListCollectionsResponse: V4beta1ListCollectionsResponse,
  V4beta1ListPipelinesResponse: V4beta1ListPipelinesResponse,
  V4beta1ListSchemaFieldsResponse: V4beta1ListSchemaFieldsResponse,
  V4beta1QueryCollectionRequest: V4beta1QueryCollectionRequest,
  V4beta1QueryCollectionRequestPipeline: V4beta1QueryCollectionRequestPipeline,
  V4beta1QueryCollectionResponse: V4beta1QueryCollectionResponse,
  V4beta1QueryCollectionResponsePipeline: V4beta1QueryCollectionResponsePipeline,
  V4beta1SchemaField: V4beta1SchemaField,
  V4beta1SchemaField1: V4beta1SchemaField1,
  V4beta1SetDefaultPipelineRequest: V4beta1SetDefaultPipelineRequest,
  V4beta1SetDefaultVersionRequest: V4beta1SetDefaultVersionRequest,
  V4beta1Step: V4beta1Step,
  V4beta1Step1: V4beta1Step1,
  V4beta1UpsertRecordRequest: V4beta1UpsertRecordRequest,
  V4beta1UpsertRecordRequestPipeline: V4beta1UpsertRecordRequestPipeline,
  V4beta1UpsertRecordResponse: V4beta1UpsertRecordResponse,
  ValueRepeated: ValueRepeated,
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

import localVarRequest from "request";

export * from "./batchPutRecordsResponseVariables";
export * from "./bucketsBucket";
export * from "./constantConfigsConstantConfig";
export * from "./enginev2Value";
export * from "./gatewayruntimeError";
export * from "./gatewayruntimeError1";
export * from "./gatewayruntimeError2";
export * from "./gatewayruntimeError3";
export * from "./gatewayruntimeError4";
export * from "./parameterConfigsParameterConfig";
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
export * from "./sajariv4alpha1DeleteRecordRequest";
export * from "./sajariv4alpha1GetRecordRequest";
export * from "./sajariv4alpha1Key";
export * from "./sajariv4alpha1Pipeline";
export * from "./sajariv4alpha1Pipeline1";
export * from "./schemaFieldMode";
export * from "./stepConfigConstantConfigs";
export * from "./stepConfigConstantConfigs1";
export * from "./stepConfigParameterConfigs";
export * from "./stepConfigParameterConfigs1";
export * from "./tokenClick";
export * from "./tokenPosNeg";
export * from "./v2QueryAggregateResult";
export * from "./v2QueryResult";
export * from "./v2QueryResults";
export * from "./v2Token";
export * from "./v2Tracking";
export * from "./v2TrackingType";
export * from "./v4alpha1BatchCreateSchemaFieldsRequest";
export * from "./v4alpha1BatchCreateSchemaFieldsResponse";
export * from "./v4alpha1BatchCreateSchemaFieldsResponseError";
export * from "./v4alpha1BatchPutRecordsRequest";
export * from "./v4alpha1BatchPutRecordsRequestPipeline";
export * from "./v4alpha1BatchPutRecordsResponse";
export * from "./v4alpha1BatchPutRecordsResponseError";
export * from "./v4alpha1BatchPutRecordsResponseKey";
export * from "./v4alpha1Collection";
export * from "./v4alpha1GeneratePipelinesRequest";
export * from "./v4alpha1GeneratePipelinesResponse";
export * from "./v4alpha1InferSchemaRequest";
export * from "./v4alpha1InferSchemaResponse";
export * from "./v4alpha1InferSchemaResponseError";
export * from "./v4alpha1ListCollectionsResponse";
export * from "./v4alpha1ListPipelinesResponse";
export * from "./v4alpha1ListSchemaFieldsResponse";
export * from "./v4alpha1PipelineType";
export * from "./v4alpha1PipelineView";
export * from "./v4alpha1PutRecordRequest";
export * from "./v4alpha1PutRecordRequestPipeline";
export * from "./v4alpha1PutRecordResponse";
export * from "./v4alpha1QueryCollectionRequest";
export * from "./v4alpha1QueryCollectionRequestPipeline";
export * from "./v4alpha1QueryCollectionResponse";
export * from "./v4alpha1QueryCollectionResponsePipeline";
export * from "./v4alpha1SchemaField";
export * from "./v4alpha1SchemaField1";
export * from "./v4alpha1SchemaFieldType";
export * from "./v4alpha1SetDefaultPipelineRequest";
export * from "./v4alpha1SetDefaultVersionRequest";
export * from "./v4alpha1StepConfig";
export * from "./v4alpha1StepConfig1";
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

import { BatchPutRecordsResponseVariables } from "./batchPutRecordsResponseVariables";
import { BucketsBucket } from "./bucketsBucket";
import { ConstantConfigsConstantConfig } from "./constantConfigsConstantConfig";
import { Enginev2Value } from "./enginev2Value";
import { GatewayruntimeError } from "./gatewayruntimeError";
import { GatewayruntimeError1 } from "./gatewayruntimeError1";
import { GatewayruntimeError2 } from "./gatewayruntimeError2";
import { GatewayruntimeError3 } from "./gatewayruntimeError3";
import { GatewayruntimeError4 } from "./gatewayruntimeError4";
import { ParameterConfigsParameterConfig } from "./parameterConfigsParameterConfig";
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
import { Sajariv4alpha1DeleteRecordRequest } from "./sajariv4alpha1DeleteRecordRequest";
import { Sajariv4alpha1GetRecordRequest } from "./sajariv4alpha1GetRecordRequest";
import { Sajariv4alpha1Key } from "./sajariv4alpha1Key";
import { Sajariv4alpha1Pipeline } from "./sajariv4alpha1Pipeline";
import { Sajariv4alpha1Pipeline1 } from "./sajariv4alpha1Pipeline1";
import { SchemaFieldMode } from "./schemaFieldMode";
import { StepConfigConstantConfigs } from "./stepConfigConstantConfigs";
import { StepConfigConstantConfigs1 } from "./stepConfigConstantConfigs1";
import { StepConfigParameterConfigs } from "./stepConfigParameterConfigs";
import { StepConfigParameterConfigs1 } from "./stepConfigParameterConfigs1";
import { TokenClick } from "./tokenClick";
import { TokenPosNeg } from "./tokenPosNeg";
import { V2QueryAggregateResult } from "./v2QueryAggregateResult";
import { V2QueryResult } from "./v2QueryResult";
import { V2QueryResults } from "./v2QueryResults";
import { V2Token } from "./v2Token";
import { V2Tracking } from "./v2Tracking";
import { V2TrackingType } from "./v2TrackingType";
import { V4alpha1BatchCreateSchemaFieldsRequest } from "./v4alpha1BatchCreateSchemaFieldsRequest";
import { V4alpha1BatchCreateSchemaFieldsResponse } from "./v4alpha1BatchCreateSchemaFieldsResponse";
import { V4alpha1BatchCreateSchemaFieldsResponseError } from "./v4alpha1BatchCreateSchemaFieldsResponseError";
import { V4alpha1BatchPutRecordsRequest } from "./v4alpha1BatchPutRecordsRequest";
import { V4alpha1BatchPutRecordsRequestPipeline } from "./v4alpha1BatchPutRecordsRequestPipeline";
import { V4alpha1BatchPutRecordsResponse } from "./v4alpha1BatchPutRecordsResponse";
import { V4alpha1BatchPutRecordsResponseError } from "./v4alpha1BatchPutRecordsResponseError";
import { V4alpha1BatchPutRecordsResponseKey } from "./v4alpha1BatchPutRecordsResponseKey";
import { V4alpha1Collection } from "./v4alpha1Collection";
import { V4alpha1GeneratePipelinesRequest } from "./v4alpha1GeneratePipelinesRequest";
import { V4alpha1GeneratePipelinesResponse } from "./v4alpha1GeneratePipelinesResponse";
import { V4alpha1InferSchemaRequest } from "./v4alpha1InferSchemaRequest";
import { V4alpha1InferSchemaResponse } from "./v4alpha1InferSchemaResponse";
import { V4alpha1InferSchemaResponseError } from "./v4alpha1InferSchemaResponseError";
import { V4alpha1ListCollectionsResponse } from "./v4alpha1ListCollectionsResponse";
import { V4alpha1ListPipelinesResponse } from "./v4alpha1ListPipelinesResponse";
import { V4alpha1ListSchemaFieldsResponse } from "./v4alpha1ListSchemaFieldsResponse";
import { V4alpha1PipelineType } from "./v4alpha1PipelineType";
import { V4alpha1PipelineView } from "./v4alpha1PipelineView";
import { V4alpha1PutRecordRequest } from "./v4alpha1PutRecordRequest";
import { V4alpha1PutRecordRequestPipeline } from "./v4alpha1PutRecordRequestPipeline";
import { V4alpha1PutRecordResponse } from "./v4alpha1PutRecordResponse";
import { V4alpha1QueryCollectionRequest } from "./v4alpha1QueryCollectionRequest";
import { V4alpha1QueryCollectionRequestPipeline } from "./v4alpha1QueryCollectionRequestPipeline";
import { V4alpha1QueryCollectionResponse } from "./v4alpha1QueryCollectionResponse";
import { V4alpha1QueryCollectionResponsePipeline } from "./v4alpha1QueryCollectionResponsePipeline";
import { V4alpha1SchemaField } from "./v4alpha1SchemaField";
import { V4alpha1SchemaField1 } from "./v4alpha1SchemaField1";
import { V4alpha1SchemaFieldType } from "./v4alpha1SchemaFieldType";
import { V4alpha1SetDefaultPipelineRequest } from "./v4alpha1SetDefaultPipelineRequest";
import { V4alpha1SetDefaultVersionRequest } from "./v4alpha1SetDefaultVersionRequest";
import { V4alpha1StepConfig } from "./v4alpha1StepConfig";
import { V4alpha1StepConfig1 } from "./v4alpha1StepConfig1";
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
  V4alpha1PipelineType: V4alpha1PipelineType,
  V4alpha1PipelineView: V4alpha1PipelineView,
  V4alpha1SchemaFieldType: V4alpha1SchemaFieldType,
};

let typeMap: { [index: string]: any } = {
  BatchPutRecordsResponseVariables: BatchPutRecordsResponseVariables,
  BucketsBucket: BucketsBucket,
  ConstantConfigsConstantConfig: ConstantConfigsConstantConfig,
  Enginev2Value: Enginev2Value,
  GatewayruntimeError: GatewayruntimeError,
  GatewayruntimeError1: GatewayruntimeError1,
  GatewayruntimeError2: GatewayruntimeError2,
  GatewayruntimeError3: GatewayruntimeError3,
  GatewayruntimeError4: GatewayruntimeError4,
  ParameterConfigsParameterConfig: ParameterConfigsParameterConfig,
  ProtobufAny: ProtobufAny,
  QueryAggregateResultAnalysis: QueryAggregateResultAnalysis,
  QueryAggregateResultBuckets: QueryAggregateResultBuckets,
  QueryAggregateResultCount: QueryAggregateResultCount,
  QueryAggregateResultDate: QueryAggregateResultDate,
  QueryAggregateResultMetric: QueryAggregateResultMetric,
  RpcStatus: RpcStatus,
  RpcStatus1: RpcStatus1,
  RpcStatus2: RpcStatus2,
  Sajariv4alpha1DeleteRecordRequest: Sajariv4alpha1DeleteRecordRequest,
  Sajariv4alpha1GetRecordRequest: Sajariv4alpha1GetRecordRequest,
  Sajariv4alpha1Key: Sajariv4alpha1Key,
  Sajariv4alpha1Pipeline: Sajariv4alpha1Pipeline,
  Sajariv4alpha1Pipeline1: Sajariv4alpha1Pipeline1,
  StepConfigConstantConfigs: StepConfigConstantConfigs,
  StepConfigConstantConfigs1: StepConfigConstantConfigs1,
  StepConfigParameterConfigs: StepConfigParameterConfigs,
  StepConfigParameterConfigs1: StepConfigParameterConfigs1,
  TokenClick: TokenClick,
  TokenPosNeg: TokenPosNeg,
  V2QueryAggregateResult: V2QueryAggregateResult,
  V2QueryResult: V2QueryResult,
  V2QueryResults: V2QueryResults,
  V2Token: V2Token,
  V2Tracking: V2Tracking,
  V4alpha1BatchCreateSchemaFieldsRequest: V4alpha1BatchCreateSchemaFieldsRequest,
  V4alpha1BatchCreateSchemaFieldsResponse: V4alpha1BatchCreateSchemaFieldsResponse,
  V4alpha1BatchCreateSchemaFieldsResponseError: V4alpha1BatchCreateSchemaFieldsResponseError,
  V4alpha1BatchPutRecordsRequest: V4alpha1BatchPutRecordsRequest,
  V4alpha1BatchPutRecordsRequestPipeline: V4alpha1BatchPutRecordsRequestPipeline,
  V4alpha1BatchPutRecordsResponse: V4alpha1BatchPutRecordsResponse,
  V4alpha1BatchPutRecordsResponseError: V4alpha1BatchPutRecordsResponseError,
  V4alpha1BatchPutRecordsResponseKey: V4alpha1BatchPutRecordsResponseKey,
  V4alpha1Collection: V4alpha1Collection,
  V4alpha1GeneratePipelinesRequest: V4alpha1GeneratePipelinesRequest,
  V4alpha1GeneratePipelinesResponse: V4alpha1GeneratePipelinesResponse,
  V4alpha1InferSchemaRequest: V4alpha1InferSchemaRequest,
  V4alpha1InferSchemaResponse: V4alpha1InferSchemaResponse,
  V4alpha1InferSchemaResponseError: V4alpha1InferSchemaResponseError,
  V4alpha1ListCollectionsResponse: V4alpha1ListCollectionsResponse,
  V4alpha1ListPipelinesResponse: V4alpha1ListPipelinesResponse,
  V4alpha1ListSchemaFieldsResponse: V4alpha1ListSchemaFieldsResponse,
  V4alpha1PutRecordRequest: V4alpha1PutRecordRequest,
  V4alpha1PutRecordRequestPipeline: V4alpha1PutRecordRequestPipeline,
  V4alpha1PutRecordResponse: V4alpha1PutRecordResponse,
  V4alpha1QueryCollectionRequest: V4alpha1QueryCollectionRequest,
  V4alpha1QueryCollectionRequestPipeline: V4alpha1QueryCollectionRequestPipeline,
  V4alpha1QueryCollectionResponse: V4alpha1QueryCollectionResponse,
  V4alpha1QueryCollectionResponsePipeline: V4alpha1QueryCollectionResponsePipeline,
  V4alpha1SchemaField: V4alpha1SchemaField,
  V4alpha1SchemaField1: V4alpha1SchemaField1,
  V4alpha1SetDefaultPipelineRequest: V4alpha1SetDefaultPipelineRequest,
  V4alpha1SetDefaultVersionRequest: V4alpha1SetDefaultVersionRequest,
  V4alpha1StepConfig: V4alpha1StepConfig,
  V4alpha1StepConfig1: V4alpha1StepConfig1,
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

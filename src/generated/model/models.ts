import localVarRequest from "request";

export * from "./batchCreateSchemaFieldsRequest";
export * from "./batchCreateSchemaFieldsResponse";
export * from "./batchCreateSchemaFieldsResponseError";
export * from "./batchUpsertRecordsRequest";
export * from "./batchUpsertRecordsRequestPipeline";
export * from "./batchUpsertRecordsResponse";
export * from "./batchUpsertRecordsResponseError";
export * from "./batchUpsertRecordsResponseKey";
export * from "./batchUpsertRecordsResponseVariables";
export * from "./collection";
export * from "./deleteRecordRequest";
export * from "./generatePipelinesRequest";
export * from "./generatePipelinesResponse";
export * from "./getDefaultPipelineResponse";
export * from "./getDefaultVersionRequestView";
export * from "./getPipelineRequestView";
export * from "./getRecordRequest";
export * from "./listCollectionsResponse";
export * from "./listPipelinesRequestView";
export * from "./listPipelinesResponse";
export * from "./listSchemaFieldsResponse";
export * from "./modelError";
export * from "./pipeline";
export * from "./pipelineStep";
export * from "./pipelineStepParamBinding";
export * from "./pipelineType";
export * from "./protobufAny";
export * from "./protobufNullValue";
export * from "./queryAggregateResult";
export * from "./queryAggregateResultAnalysis";
export * from "./queryAggregateResultBuckets";
export * from "./queryAggregateResultBucketsBucket";
export * from "./queryAggregateResultCount";
export * from "./queryAggregateResultDate";
export * from "./queryAggregateResultMetric";
export * from "./queryCollectionRequest";
export * from "./queryCollectionRequestPipeline";
export * from "./queryCollectionRequestTracking";
export * from "./queryCollectionRequestTrackingType";
export * from "./queryCollectionResponse";
export * from "./queryCollectionResponsePipeline";
export * from "./queryResult";
export * from "./queryResultToken";
export * from "./queryResultTokenClick";
export * from "./queryResultTokenPosNeg";
export * from "./recordKey";
export * from "./schemaField";
export * from "./schemaFieldMode";
export * from "./schemaFieldType";
export * from "./setDefaultPipelineRequest";
export * from "./setDefaultVersionRequest";
export * from "./status";
export * from "./upsertRecordRequest";
export * from "./upsertRecordRequestPipeline";
export * from "./upsertRecordResponse";

import * as fs from "fs";

export interface RequestDetailedFile {
  value: Buffer;
  options?: {
    filename?: string;
    contentType?: string;
  };
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

import { BatchCreateSchemaFieldsRequest } from "./batchCreateSchemaFieldsRequest";
import { BatchCreateSchemaFieldsResponse } from "./batchCreateSchemaFieldsResponse";
import { BatchCreateSchemaFieldsResponseError } from "./batchCreateSchemaFieldsResponseError";
import { BatchUpsertRecordsRequest } from "./batchUpsertRecordsRequest";
import { BatchUpsertRecordsRequestPipeline } from "./batchUpsertRecordsRequestPipeline";
import { BatchUpsertRecordsResponse } from "./batchUpsertRecordsResponse";
import { BatchUpsertRecordsResponseError } from "./batchUpsertRecordsResponseError";
import { BatchUpsertRecordsResponseKey } from "./batchUpsertRecordsResponseKey";
import { BatchUpsertRecordsResponseVariables } from "./batchUpsertRecordsResponseVariables";
import { Collection } from "./collection";
import { DeleteRecordRequest } from "./deleteRecordRequest";
import { GeneratePipelinesRequest } from "./generatePipelinesRequest";
import { GeneratePipelinesResponse } from "./generatePipelinesResponse";
import { GetDefaultPipelineResponse } from "./getDefaultPipelineResponse";
import { GetDefaultVersionRequestView } from "./getDefaultVersionRequestView";
import { GetPipelineRequestView } from "./getPipelineRequestView";
import { GetRecordRequest } from "./getRecordRequest";
import { ListCollectionsResponse } from "./listCollectionsResponse";
import { ListPipelinesRequestView } from "./listPipelinesRequestView";
import { ListPipelinesResponse } from "./listPipelinesResponse";
import { ListSchemaFieldsResponse } from "./listSchemaFieldsResponse";
import { ModelError } from "./modelError";
import { Pipeline } from "./pipeline";
import { PipelineStep } from "./pipelineStep";
import { PipelineStepParamBinding } from "./pipelineStepParamBinding";
import { PipelineType } from "./pipelineType";
import { ProtobufAny } from "./protobufAny";
import { ProtobufNullValue } from "./protobufNullValue";
import { QueryAggregateResult } from "./queryAggregateResult";
import { QueryAggregateResultAnalysis } from "./queryAggregateResultAnalysis";
import { QueryAggregateResultBuckets } from "./queryAggregateResultBuckets";
import { QueryAggregateResultBucketsBucket } from "./queryAggregateResultBucketsBucket";
import { QueryAggregateResultCount } from "./queryAggregateResultCount";
import { QueryAggregateResultDate } from "./queryAggregateResultDate";
import { QueryAggregateResultMetric } from "./queryAggregateResultMetric";
import { QueryCollectionRequest } from "./queryCollectionRequest";
import { QueryCollectionRequestPipeline } from "./queryCollectionRequestPipeline";
import { QueryCollectionRequestTracking } from "./queryCollectionRequestTracking";
import { QueryCollectionRequestTrackingType } from "./queryCollectionRequestTrackingType";
import { QueryCollectionResponse } from "./queryCollectionResponse";
import { QueryCollectionResponsePipeline } from "./queryCollectionResponsePipeline";
import { QueryResult } from "./queryResult";
import { QueryResultToken } from "./queryResultToken";
import { QueryResultTokenClick } from "./queryResultTokenClick";
import { QueryResultTokenPosNeg } from "./queryResultTokenPosNeg";
import { RecordKey } from "./recordKey";
import { SchemaField } from "./schemaField";
import { SchemaFieldMode } from "./schemaFieldMode";
import { SchemaFieldType } from "./schemaFieldType";
import { SetDefaultPipelineRequest } from "./setDefaultPipelineRequest";
import { SetDefaultVersionRequest } from "./setDefaultVersionRequest";
import { Status } from "./status";
import { UpsertRecordRequest } from "./upsertRecordRequest";
import { UpsertRecordRequestPipeline } from "./upsertRecordRequestPipeline";
import { UpsertRecordResponse } from "./upsertRecordResponse";

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
  GetDefaultVersionRequestView: GetDefaultVersionRequestView,
  GetPipelineRequestView: GetPipelineRequestView,
  ListPipelinesRequestView: ListPipelinesRequestView,
  PipelineType: PipelineType,
  ProtobufNullValue: ProtobufNullValue,
  QueryCollectionRequestTrackingType: QueryCollectionRequestTrackingType,
  SchemaFieldMode: SchemaFieldMode,
  SchemaFieldType: SchemaFieldType,
};

let typeMap: { [index: string]: any } = {
  BatchCreateSchemaFieldsRequest: BatchCreateSchemaFieldsRequest,
  BatchCreateSchemaFieldsResponse: BatchCreateSchemaFieldsResponse,
  BatchCreateSchemaFieldsResponseError: BatchCreateSchemaFieldsResponseError,
  BatchUpsertRecordsRequest: BatchUpsertRecordsRequest,
  BatchUpsertRecordsRequestPipeline: BatchUpsertRecordsRequestPipeline,
  BatchUpsertRecordsResponse: BatchUpsertRecordsResponse,
  BatchUpsertRecordsResponseError: BatchUpsertRecordsResponseError,
  BatchUpsertRecordsResponseKey: BatchUpsertRecordsResponseKey,
  BatchUpsertRecordsResponseVariables: BatchUpsertRecordsResponseVariables,
  Collection: Collection,
  DeleteRecordRequest: DeleteRecordRequest,
  GeneratePipelinesRequest: GeneratePipelinesRequest,
  GeneratePipelinesResponse: GeneratePipelinesResponse,
  GetDefaultPipelineResponse: GetDefaultPipelineResponse,
  GetRecordRequest: GetRecordRequest,
  ListCollectionsResponse: ListCollectionsResponse,
  ListPipelinesResponse: ListPipelinesResponse,
  ListSchemaFieldsResponse: ListSchemaFieldsResponse,
  ModelError: ModelError,
  Pipeline: Pipeline,
  PipelineStep: PipelineStep,
  PipelineStepParamBinding: PipelineStepParamBinding,
  ProtobufAny: ProtobufAny,
  QueryAggregateResult: QueryAggregateResult,
  QueryAggregateResultAnalysis: QueryAggregateResultAnalysis,
  QueryAggregateResultBuckets: QueryAggregateResultBuckets,
  QueryAggregateResultBucketsBucket: QueryAggregateResultBucketsBucket,
  QueryAggregateResultCount: QueryAggregateResultCount,
  QueryAggregateResultDate: QueryAggregateResultDate,
  QueryAggregateResultMetric: QueryAggregateResultMetric,
  QueryCollectionRequest: QueryCollectionRequest,
  QueryCollectionRequestPipeline: QueryCollectionRequestPipeline,
  QueryCollectionRequestTracking: QueryCollectionRequestTracking,
  QueryCollectionResponse: QueryCollectionResponse,
  QueryCollectionResponsePipeline: QueryCollectionResponsePipeline,
  QueryResult: QueryResult,
  QueryResultToken: QueryResultToken,
  QueryResultTokenClick: QueryResultTokenClick,
  QueryResultTokenPosNeg: QueryResultTokenPosNeg,
  RecordKey: RecordKey,
  SchemaField: SchemaField,
  SetDefaultPipelineRequest: SetDefaultPipelineRequest,
  SetDefaultVersionRequest: SetDefaultVersionRequest,
  Status: Status,
  UpsertRecordRequest: UpsertRecordRequest,
  UpsertRecordRequestPipeline: UpsertRecordRequestPipeline,
  UpsertRecordResponse: UpsertRecordResponse,
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

import localVarRequest from "request";

export * from "./activePromotion";
export * from "./banner";
export * from "./batchCreateSchemaFieldsRequest";
export * from "./batchCreateSchemaFieldsResponse";
export * from "./batchCreateSchemaFieldsResponseError";
export * from "./batchUpdateRecordsRequest";
export * from "./batchUpdateRecordsResponse";
export * from "./batchUpdateRecordsResponseError";
export * from "./batchUpdateRecordsResponseRecord";
export * from "./batchUpsertRecordsRequest";
export * from "./batchUpsertRecordsRequestPipeline";
export * from "./batchUpsertRecordsRequestVariablesValue";
export * from "./batchUpsertRecordsResponse";
export * from "./batchUpsertRecordsResponseError";
export * from "./batchUpsertRecordsResponseKey";
export * from "./batchUpsertRecordsResponseVariables";
export * from "./collection";
export * from "./collectionType";
export * from "./createSchemaFieldRequest";
export * from "./deleteRecordRequest";
export * from "./event";
export * from "./experimentRequest";
export * from "./experimentRequestPipeline";
export * from "./experimentResponse";
export * from "./generatePipelinesRequest";
export * from "./generatePipelinesResponse";
export * from "./getCollectionRequestView";
export * from "./getDefaultPipelineResponse";
export * from "./getDefaultVersionRequestView";
export * from "./getPipelineRequestView";
export * from "./getRecordRequest";
export * from "./listCollectionsRequestView";
export * from "./listCollectionsResponse";
export * from "./listPipelinesRequestView";
export * from "./listPipelinesResponse";
export * from "./listPromotionsRequestPromotionView";
export * from "./listPromotionsResponse";
export * from "./listRedirectsResponse";
export * from "./listSchemaFieldsResponse";
export * from "./apiError";
export * from "./percentileDataPoint";
export * from "./pipeline";
export * from "./pipelineStep";
export * from "./pipelineStepParamBinding";
export * from "./pipelineType";
export * from "./promotion";
export * from "./promotionCategory";
export * from "./promotionExclusion";
export * from "./promotionFilterBoost";
export * from "./promotionFilterCondition";
export * from "./promotionPin";
export * from "./promotionPinMode";
export * from "./promotionRangeBoost";
export * from "./protobufAny";
export * from "./protobufFieldMask";
export * from "./protobufNullValue";
export * from "./queryAggregateResult";
export * from "./queryAggregateResultAnalysis";
export * from "./queryAggregateResultBuckets";
export * from "./queryAggregateResultBucketsBucket";
export * from "./queryAggregateResultCount";
export * from "./queryAggregateResultDate";
export * from "./queryAggregateResultMetric";
export * from "./queryAggregateResultPercentile";
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
export * from "./redirect";
export * from "./redirectResult";
export * from "./schemaField";
export * from "./schemaFieldMode";
export * from "./schemaFieldType";
export * from "./sendEventRequest";
export * from "./setDefaultPipelineRequest";
export * from "./setDefaultVersionRequest";
export * from "./status";
export * from "./textPosition";
export * from "./updateRecordRequest";
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

import { ActivePromotion } from "./activePromotion";
import { Banner } from "./banner";
import { BatchCreateSchemaFieldsRequest } from "./batchCreateSchemaFieldsRequest";
import { BatchCreateSchemaFieldsResponse } from "./batchCreateSchemaFieldsResponse";
import { BatchCreateSchemaFieldsResponseError } from "./batchCreateSchemaFieldsResponseError";
import { BatchUpdateRecordsRequest } from "./batchUpdateRecordsRequest";
import { BatchUpdateRecordsResponse } from "./batchUpdateRecordsResponse";
import { BatchUpdateRecordsResponseError } from "./batchUpdateRecordsResponseError";
import { BatchUpdateRecordsResponseRecord } from "./batchUpdateRecordsResponseRecord";
import { BatchUpsertRecordsRequest } from "./batchUpsertRecordsRequest";
import { BatchUpsertRecordsRequestPipeline } from "./batchUpsertRecordsRequestPipeline";
import { BatchUpsertRecordsRequestVariablesValue } from "./batchUpsertRecordsRequestVariablesValue";
import { BatchUpsertRecordsResponse } from "./batchUpsertRecordsResponse";
import { BatchUpsertRecordsResponseError } from "./batchUpsertRecordsResponseError";
import { BatchUpsertRecordsResponseKey } from "./batchUpsertRecordsResponseKey";
import { BatchUpsertRecordsResponseVariables } from "./batchUpsertRecordsResponseVariables";
import { Collection } from "./collection";
import { CollectionType } from "./collectionType";
import { CreateSchemaFieldRequest } from "./createSchemaFieldRequest";
import { DeleteRecordRequest } from "./deleteRecordRequest";
import { Event } from "./event";
import { ExperimentRequest } from "./experimentRequest";
import { ExperimentRequestPipeline } from "./experimentRequestPipeline";
import { ExperimentResponse } from "./experimentResponse";
import { GeneratePipelinesRequest } from "./generatePipelinesRequest";
import { GeneratePipelinesResponse } from "./generatePipelinesResponse";
import { GetCollectionRequestView } from "./getCollectionRequestView";
import { GetDefaultPipelineResponse } from "./getDefaultPipelineResponse";
import { GetDefaultVersionRequestView } from "./getDefaultVersionRequestView";
import { GetPipelineRequestView } from "./getPipelineRequestView";
import { GetRecordRequest } from "./getRecordRequest";
import { ListCollectionsRequestView } from "./listCollectionsRequestView";
import { ListCollectionsResponse } from "./listCollectionsResponse";
import { ListPipelinesRequestView } from "./listPipelinesRequestView";
import { ListPipelinesResponse } from "./listPipelinesResponse";
import { ListPromotionsRequestPromotionView } from "./listPromotionsRequestPromotionView";
import { ListPromotionsResponse } from "./listPromotionsResponse";
import { ListRedirectsResponse } from "./listRedirectsResponse";
import { ListSchemaFieldsResponse } from "./listSchemaFieldsResponse";
import { ApiError } from "./apiError";
import { PercentileDataPoint } from "./percentileDataPoint";
import { Pipeline } from "./pipeline";
import { PipelineStep } from "./pipelineStep";
import { PipelineStepParamBinding } from "./pipelineStepParamBinding";
import { PipelineType } from "./pipelineType";
import { Promotion } from "./promotion";
import { PromotionCategory } from "./promotionCategory";
import { PromotionExclusion } from "./promotionExclusion";
import { PromotionFilterBoost } from "./promotionFilterBoost";
import { PromotionFilterCondition } from "./promotionFilterCondition";
import { PromotionPin } from "./promotionPin";
import { PromotionPinMode } from "./promotionPinMode";
import { PromotionRangeBoost } from "./promotionRangeBoost";
import { ProtobufAny } from "./protobufAny";
import { ProtobufFieldMask } from "./protobufFieldMask";
import { ProtobufNullValue } from "./protobufNullValue";
import { QueryAggregateResult } from "./queryAggregateResult";
import { QueryAggregateResultAnalysis } from "./queryAggregateResultAnalysis";
import { QueryAggregateResultBuckets } from "./queryAggregateResultBuckets";
import { QueryAggregateResultBucketsBucket } from "./queryAggregateResultBucketsBucket";
import { QueryAggregateResultCount } from "./queryAggregateResultCount";
import { QueryAggregateResultDate } from "./queryAggregateResultDate";
import { QueryAggregateResultMetric } from "./queryAggregateResultMetric";
import { QueryAggregateResultPercentile } from "./queryAggregateResultPercentile";
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
import { Redirect } from "./redirect";
import { RedirectResult } from "./redirectResult";
import { SchemaField } from "./schemaField";
import { SchemaFieldMode } from "./schemaFieldMode";
import { SchemaFieldType } from "./schemaFieldType";
import { SendEventRequest } from "./sendEventRequest";
import { SetDefaultPipelineRequest } from "./setDefaultPipelineRequest";
import { SetDefaultVersionRequest } from "./setDefaultVersionRequest";
import { Status } from "./status";
import { TextPosition } from "./textPosition";
import { UpdateRecordRequest } from "./updateRecordRequest";
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
  CollectionType: CollectionType,
  GetCollectionRequestView: GetCollectionRequestView,
  GetDefaultVersionRequestView: GetDefaultVersionRequestView,
  GetPipelineRequestView: GetPipelineRequestView,
  ListCollectionsRequestView: ListCollectionsRequestView,
  ListPipelinesRequestView: ListPipelinesRequestView,
  ListPromotionsRequestPromotionView: ListPromotionsRequestPromotionView,
  PipelineType: PipelineType,
  PromotionPinMode: PromotionPinMode,
  ProtobufNullValue: ProtobufNullValue,
  QueryCollectionRequestTrackingType: QueryCollectionRequestTrackingType,
  SchemaFieldMode: SchemaFieldMode,
  SchemaFieldType: SchemaFieldType,
  TextPosition: TextPosition,
};

let typeMap: { [index: string]: any } = {
  ActivePromotion: ActivePromotion,
  Banner: Banner,
  BatchCreateSchemaFieldsRequest: BatchCreateSchemaFieldsRequest,
  BatchCreateSchemaFieldsResponse: BatchCreateSchemaFieldsResponse,
  BatchCreateSchemaFieldsResponseError: BatchCreateSchemaFieldsResponseError,
  BatchUpdateRecordsRequest: BatchUpdateRecordsRequest,
  BatchUpdateRecordsResponse: BatchUpdateRecordsResponse,
  BatchUpdateRecordsResponseError: BatchUpdateRecordsResponseError,
  BatchUpdateRecordsResponseRecord: BatchUpdateRecordsResponseRecord,
  BatchUpsertRecordsRequest: BatchUpsertRecordsRequest,
  BatchUpsertRecordsRequestPipeline: BatchUpsertRecordsRequestPipeline,
  BatchUpsertRecordsRequestVariablesValue:
    BatchUpsertRecordsRequestVariablesValue,
  BatchUpsertRecordsResponse: BatchUpsertRecordsResponse,
  BatchUpsertRecordsResponseError: BatchUpsertRecordsResponseError,
  BatchUpsertRecordsResponseKey: BatchUpsertRecordsResponseKey,
  BatchUpsertRecordsResponseVariables: BatchUpsertRecordsResponseVariables,
  Collection: Collection,
  CreateSchemaFieldRequest: CreateSchemaFieldRequest,
  DeleteRecordRequest: DeleteRecordRequest,
  Event: Event,
  ExperimentRequest: ExperimentRequest,
  ExperimentRequestPipeline: ExperimentRequestPipeline,
  ExperimentResponse: ExperimentResponse,
  GeneratePipelinesRequest: GeneratePipelinesRequest,
  GeneratePipelinesResponse: GeneratePipelinesResponse,
  GetDefaultPipelineResponse: GetDefaultPipelineResponse,
  GetRecordRequest: GetRecordRequest,
  ListCollectionsResponse: ListCollectionsResponse,
  ListPipelinesResponse: ListPipelinesResponse,
  ListPromotionsResponse: ListPromotionsResponse,
  ListRedirectsResponse: ListRedirectsResponse,
  ListSchemaFieldsResponse: ListSchemaFieldsResponse,
  ApiError: ApiError,
  PercentileDataPoint: PercentileDataPoint,
  Pipeline: Pipeline,
  PipelineStep: PipelineStep,
  PipelineStepParamBinding: PipelineStepParamBinding,
  Promotion: Promotion,
  PromotionCategory: PromotionCategory,
  PromotionExclusion: PromotionExclusion,
  PromotionFilterBoost: PromotionFilterBoost,
  PromotionFilterCondition: PromotionFilterCondition,
  PromotionPin: PromotionPin,
  PromotionRangeBoost: PromotionRangeBoost,
  ProtobufAny: ProtobufAny,
  ProtobufFieldMask: ProtobufFieldMask,
  QueryAggregateResult: QueryAggregateResult,
  QueryAggregateResultAnalysis: QueryAggregateResultAnalysis,
  QueryAggregateResultBuckets: QueryAggregateResultBuckets,
  QueryAggregateResultBucketsBucket: QueryAggregateResultBucketsBucket,
  QueryAggregateResultCount: QueryAggregateResultCount,
  QueryAggregateResultDate: QueryAggregateResultDate,
  QueryAggregateResultMetric: QueryAggregateResultMetric,
  QueryAggregateResultPercentile: QueryAggregateResultPercentile,
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
  Redirect: Redirect,
  RedirectResult: RedirectResult,
  SchemaField: SchemaField,
  SendEventRequest: SendEventRequest,
  SetDefaultPipelineRequest: SetDefaultPipelineRequest,
  SetDefaultVersionRequest: SetDefaultVersionRequest,
  Status: Status,
  UpdateRecordRequest: UpdateRecordRequest,
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
      for (let index = 0; index < data.length; index++) {
        let datum = data[index];
        transformedData.push(ObjectSerializer.serialize(datum, subType));
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
      for (let index = 0; index < attributeTypes.length; index++) {
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
      for (let index = 0; index < data.length; index++) {
        let datum = data[index];
        transformedData.push(ObjectSerializer.deserialize(datum, subType));
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
      for (let index = 0; index < attributeTypes.length; index++) {
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

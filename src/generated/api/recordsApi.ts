/**
 * Sajari API
 * Sajari is a smart, highly-configurable, real-time search service that enables thousands of businesses worldwide to provide amazing search experiences on their websites, stores, and applications.
 *
 * The version of the OpenAPI document: v4
 * Contact: support@sajari.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest from "request";
import http from "http";

/* tslint:disable:no-unused-locals */
import { BatchUpsertRecordsRequest } from "../model/batchUpsertRecordsRequest";
import { BatchUpsertRecordsResponse } from "../model/batchUpsertRecordsResponse";
import { DeleteRecordRequest } from "../model/deleteRecordRequest";
import { GetRecordRequest } from "../model/getRecordRequest";
import { UpdateRecordRequest } from "../model/updateRecordRequest";
import { UpsertRecordRequest } from "../model/upsertRecordRequest";
import { UpsertRecordResponse } from "../model/upsertRecordResponse";

import {
  ObjectSerializer,
  Authentication,
  VoidAuth,
  Interceptor,
} from "../model/models";
import {
  HttpBasicAuth,
  HttpBearerAuth,
  ApiKeyAuth,
  OAuth,
} from "../model/models";

import { HttpError, RequestFile } from "./apis";

let defaultBasePath = "https://api-gateway.sajari.com";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum RecordsApiApiKeys {}

export class RecordsApi {
  protected _basePath = defaultBasePath;
  protected _defaultHeaders: any = {};
  protected _useQuerystring: boolean = false;

  protected authentications = {
    default: <Authentication>new VoidAuth(),
    BasicAuth: new HttpBasicAuth(),
  };

  protected interceptors: Interceptor[] = [];

  constructor(basePath?: string);
  constructor(username: string, password: string, basePath?: string);
  constructor(
    basePathOrUsername: string,
    password?: string,
    basePath?: string
  ) {
    if (password) {
      this.username = basePathOrUsername;
      this.password = password;
      if (basePath) {
        this.basePath = basePath;
      }
    } else {
      if (basePathOrUsername) {
        this.basePath = basePathOrUsername;
      }
    }
  }

  set useQuerystring(value: boolean) {
    this._useQuerystring = value;
  }

  set basePath(basePath: string) {
    this._basePath = basePath;
  }

  set defaultHeaders(defaultHeaders: any) {
    this._defaultHeaders = defaultHeaders;
  }

  get defaultHeaders() {
    return this._defaultHeaders;
  }

  get basePath() {
    return this._basePath;
  }

  public setDefaultAuthentication(auth: Authentication) {
    this.authentications.default = auth;
  }

  public setApiKey(key: RecordsApiApiKeys, value: string) {
    (this.authentications as any)[RecordsApiApiKeys[key]].apiKey = value;
  }

  set username(username: string) {
    this.authentications.BasicAuth.username = username;
  }

  set password(password: string) {
    this.authentications.BasicAuth.password = password;
  }

  public addInterceptor(interceptor: Interceptor) {
    this.interceptors.push(interceptor);
  }

  /**
   * The batch version of the [UpsertRecord](/api#operation/UpsertRecord) call.
   * @summary Batch upsert records
   * @param collectionId The collection to upsert the records in, e.g. &#x60;my-collection&#x60;.
   * @param batchUpsertRecordsRequest
   */
  public async batchUpsertRecords(
    collectionId: string,
    batchUpsertRecordsRequest: BatchUpsertRecordsRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: BatchUpsertRecordsResponse;
  }> {
    const localVarPath =
      this.basePath +
      "/v4/collections/{collection_id}/records:batchUpsert".replace(
        "{" + "collection_id" + "}",
        encodeURIComponent(String(collectionId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'collectionId' is not null or undefined
    if (collectionId === null || collectionId === undefined) {
      throw new Error(
        "Required parameter collectionId was null or undefined when calling batchUpsertRecords."
      );
    }

    // verify required parameter 'batchUpsertRecordsRequest' is not null or undefined
    if (
      batchUpsertRecordsRequest === null ||
      batchUpsertRecordsRequest === undefined
    ) {
      throw new Error(
        "Required parameter batchUpsertRecordsRequest was null or undefined when calling batchUpsertRecords."
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(
        batchUpsertRecordsRequest,
        "BatchUpsertRecordsRequest"
      ),
    };

    let authenticationPromise = Promise.resolve();
    if (
      this.authentications.BasicAuth.username &&
      this.authentications.BasicAuth.password
    ) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.BasicAuth.applyToRequest(localVarRequestOptions)
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: BatchUpsertRecordsResponse;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            body = ObjectSerializer.deserialize(
              body,
              "BatchUpsertRecordsResponse"
            );
            if (
              response.statusCode &&
              response.statusCode >= 200 &&
              response.statusCode <= 299
            ) {
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
  }
  /**
   * Delete a record with the given key.
   * @summary Delete record
   * @param collectionId The collection that contains the record to delete, e.g. &#x60;my-collection&#x60;.
   * @param deleteRecordRequest
   */
  public async deleteRecord(
    collectionId: string,
    deleteRecordRequest: DeleteRecordRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: any }> {
    const localVarPath =
      this.basePath +
      "/v4/collections/{collection_id}/records:delete".replace(
        "{" + "collection_id" + "}",
        encodeURIComponent(String(collectionId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'collectionId' is not null or undefined
    if (collectionId === null || collectionId === undefined) {
      throw new Error(
        "Required parameter collectionId was null or undefined when calling deleteRecord."
      );
    }

    // verify required parameter 'deleteRecordRequest' is not null or undefined
    if (deleteRecordRequest === null || deleteRecordRequest === undefined) {
      throw new Error(
        "Required parameter deleteRecordRequest was null or undefined when calling deleteRecord."
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(
        deleteRecordRequest,
        "DeleteRecordRequest"
      ),
    };

    let authenticationPromise = Promise.resolve();
    if (
      this.authentications.BasicAuth.username &&
      this.authentications.BasicAuth.password
    ) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.BasicAuth.applyToRequest(localVarRequestOptions)
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: any }>(
        (resolve, reject) => {
          localVarRequest(localVarRequestOptions, (error, response, body) => {
            if (error) {
              reject(error);
            } else {
              body = ObjectSerializer.deserialize(body, "any");
              if (
                response.statusCode &&
                response.statusCode >= 200 &&
                response.statusCode <= 299
              ) {
                resolve({ response: response, body: body });
              } else {
                reject(new HttpError(response, body, response.statusCode));
              }
            }
          });
        }
      );
    });
  }
  /**
   * Retrieve a record with the given key.
   * @summary Get record
   * @param collectionId The collection that contains the record to retrieve, e.g. &#x60;my-collection&#x60;.
   * @param getRecordRequest
   */
  public async getRecord(
    collectionId: string,
    getRecordRequest: GetRecordRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: object }> {
    const localVarPath =
      this.basePath +
      "/v4/collections/{collection_id}/records:get".replace(
        "{" + "collection_id" + "}",
        encodeURIComponent(String(collectionId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'collectionId' is not null or undefined
    if (collectionId === null || collectionId === undefined) {
      throw new Error(
        "Required parameter collectionId was null or undefined when calling getRecord."
      );
    }

    // verify required parameter 'getRecordRequest' is not null or undefined
    if (getRecordRequest === null || getRecordRequest === undefined) {
      throw new Error(
        "Required parameter getRecordRequest was null or undefined when calling getRecord."
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(getRecordRequest, "GetRecordRequest"),
    };

    let authenticationPromise = Promise.resolve();
    if (
      this.authentications.BasicAuth.username &&
      this.authentications.BasicAuth.password
    ) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.BasicAuth.applyToRequest(localVarRequestOptions)
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: object }>(
        (resolve, reject) => {
          localVarRequest(localVarRequestOptions, (error, response, body) => {
            if (error) {
              reject(error);
            } else {
              body = ObjectSerializer.deserialize(body, "object");
              if (
                response.statusCode &&
                response.statusCode >= 200 &&
                response.statusCode <= 299
              ) {
                resolve({ response: response, body: body });
              } else {
                reject(new HttpError(response, body, response.statusCode));
              }
            }
          });
        }
      );
    });
  }
  /**
   * Add or update specific fields within a record with the given values. The updated record is returned in the response.  To replace all fields in a record, you should use the [UpsertRecord](/api#operation/UpsertRecord) call.  Note that the update record call cannot be used to add or update indexed or unique fields. For this case use the [UpsertRecord](/api#operation/UpsertRecord) call.
   * @summary Update record
   * @param collectionId The collection that contains the record to update, e.g. &#x60;my-collection&#x60;.
   * @param updateRecordRequest
   */
  public async updateRecord(
    collectionId: string,
    updateRecordRequest: UpdateRecordRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: object }> {
    const localVarPath =
      this.basePath +
      "/v4/collections/{collection_id}/records:update".replace(
        "{" + "collection_id" + "}",
        encodeURIComponent(String(collectionId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'collectionId' is not null or undefined
    if (collectionId === null || collectionId === undefined) {
      throw new Error(
        "Required parameter collectionId was null or undefined when calling updateRecord."
      );
    }

    // verify required parameter 'updateRecordRequest' is not null or undefined
    if (updateRecordRequest === null || updateRecordRequest === undefined) {
      throw new Error(
        "Required parameter updateRecordRequest was null or undefined when calling updateRecord."
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(
        updateRecordRequest,
        "UpdateRecordRequest"
      ),
    };

    let authenticationPromise = Promise.resolve();
    if (
      this.authentications.BasicAuth.username &&
      this.authentications.BasicAuth.password
    ) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.BasicAuth.applyToRequest(localVarRequestOptions)
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: object }>(
        (resolve, reject) => {
          localVarRequest(localVarRequestOptions, (error, response, body) => {
            if (error) {
              reject(error);
            } else {
              body = ObjectSerializer.deserialize(body, "object");
              if (
                response.statusCode &&
                response.statusCode >= 200 &&
                response.statusCode <= 299
              ) {
                resolve({ response: response, body: body });
              } else {
                reject(new HttpError(response, body, response.statusCode));
              }
            }
          });
        }
      );
    });
  }
  /**
   * If the record does not exist in the collection it is inserted. If it does exist it is updated.  If no pipeline is specified, the default record pipeline is used to process the record.  If the record is inserted, the response contains the key of the inserted record. You can use this if you need to retrieve or delete the record. If the record is updated, the response does not contain a key. Callers can use this as a signal to determine if the record is inserted/created or updated.  For example, to add a single product from your ecommerce store to a collection, use the following call:  ```json {   \"pipeline\": {     \"name\": \"my-pipeline\",     \"version\": \"1\"   },   \"record\": {     \"id\": \"54hdc7h2334h\",     \"name\": \"Smart TV\",     \"price\": 1999,     \"brand\": \"Acme\",     \"description\": \"...\",     \"in_stock\": true   } } ```
   * @summary Upsert record
   * @param collectionId The collection to upsert the record in, e.g. &#x60;my-collection&#x60;.
   * @param upsertRecordRequest
   */
  public async upsertRecord(
    collectionId: string,
    upsertRecordRequest: UpsertRecordRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: UpsertRecordResponse }> {
    const localVarPath =
      this.basePath +
      "/v4/collections/{collection_id}/records:upsert".replace(
        "{" + "collection_id" + "}",
        encodeURIComponent(String(collectionId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'collectionId' is not null or undefined
    if (collectionId === null || collectionId === undefined) {
      throw new Error(
        "Required parameter collectionId was null or undefined when calling upsertRecord."
      );
    }

    // verify required parameter 'upsertRecordRequest' is not null or undefined
    if (upsertRecordRequest === null || upsertRecordRequest === undefined) {
      throw new Error(
        "Required parameter upsertRecordRequest was null or undefined when calling upsertRecord."
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(
        upsertRecordRequest,
        "UpsertRecordRequest"
      ),
    };

    let authenticationPromise = Promise.resolve();
    if (
      this.authentications.BasicAuth.username &&
      this.authentications.BasicAuth.password
    ) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.BasicAuth.applyToRequest(localVarRequestOptions)
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: UpsertRecordResponse;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            body = ObjectSerializer.deserialize(body, "UpsertRecordResponse");
            if (
              response.statusCode &&
              response.statusCode >= 200 &&
              response.statusCode <= 299
            ) {
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
  }
}

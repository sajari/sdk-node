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
import { Collection } from "../model/collection";
import { ListCollectionsResponse } from "../model/listCollectionsResponse";
import { QueryCollectionRequest } from "../model/queryCollectionRequest";
import { QueryCollectionResponse } from "../model/queryCollectionResponse";
import { Status } from "../model/status";

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

export enum CollectionsApiApiKeys {}

export class CollectionsApi {
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

  public setApiKey(key: CollectionsApiApiKeys, value: string) {
    (this.authentications as any)[CollectionsApiApiKeys[key]].apiKey = value;
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
   * Create an empty collection.  Before records can be added to a collection, the schema and pipelines for the collection have to be set up. Consider setting up new collections via the Sajari Console, which handles the creation of the schema and pipelines for you.
   * @summary Create collection
   * @param collectionId The ID to use for the collection.  This must start with an alphanumeric character followed by one or more alphanumeric or &#x60;-&#x60; characters. Strictly speaking, it must match the regular expression: &#x60;^[A-Za-z][A-Za-z0-9\\-]*$&#x60;.
   * @param collection Details of the collection to create.
   */
  public async createCollection(
    collectionId: string,
    collection: Collection,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Collection }> {
    const localVarPath = this.basePath + "/v4/collections";
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
        "Required parameter collectionId was null or undefined when calling createCollection."
      );
    }

    // verify required parameter 'collection' is not null or undefined
    if (collection === null || collection === undefined) {
      throw new Error(
        "Required parameter collection was null or undefined when calling createCollection."
      );
    }

    if (collectionId !== undefined) {
      localVarQueryParameters["collection_id"] = ObjectSerializer.serialize(
        collectionId,
        "string"
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
      body: ObjectSerializer.serialize(collection, "Collection"),
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
      return new Promise<{ response: http.IncomingMessage; body: Collection }>(
        (resolve, reject) => {
          localVarRequest(localVarRequestOptions, (error, response, body) => {
            if (error) {
              reject(error);
            } else {
              body = ObjectSerializer.deserialize(body, "Collection");
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
   * Delete a collection and all of its associated data.  > Note: this operation cannot be reversed.
   * @summary Delete collection
   * @param collectionId The collection to delete, e.g. &#x60;my-collection&#x60;.
   */
  public async deleteCollection(
    collectionId: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: any }> {
    const localVarPath =
      this.basePath +
      "/v4/collections/{collection_id}".replace(/{\w+}/, String(collectionId));
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
        "Required parameter collectionId was null or undefined when calling deleteCollection."
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "DELETE",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
   * Retrieve the details of a collection.
   * @summary Get collection
   * @param collectionId The collection to retrieve, e.g. &#x60;my-collection&#x60;.
   */
  public async getCollection(
    collectionId: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Collection }> {
    const localVarPath =
      this.basePath +
      "/v4/collections/{collection_id}".replace(/{\w+}/, String(collectionId));
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
        "Required parameter collectionId was null or undefined when calling getCollection."
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
      return new Promise<{ response: http.IncomingMessage; body: Collection }>(
        (resolve, reject) => {
          localVarRequest(localVarRequestOptions, (error, response, body) => {
            if (error) {
              reject(error);
            } else {
              body = ObjectSerializer.deserialize(body, "Collection");
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
   * Retrieve a list of collections in the account.
   * @summary List collections
   * @param pageSize The maximum number of collections to return. The service may return fewer than this value.  If unspecified, at most 50 collections are returned.  The maximum value is 100; values above 100 are coerced to 100.
   * @param pageToken A page token, received from a previous [ListCollections](/docs/api-reference#operation/ListCollections) call.  Provide this to retrieve the subsequent page.  When paginating, all other parameters provided to [ListCollections](/docs/api-reference#operation/ListCollections) must match the call that provided the page token.
   */
  public async listCollections(
    pageSize?: number,
    pageToken?: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: ListCollectionsResponse;
  }> {
    const localVarPath = this.basePath + "/v4/collections";
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

    if (pageSize !== undefined) {
      localVarQueryParameters["page_size"] = ObjectSerializer.serialize(
        pageSize,
        "number"
      );
    }

    if (pageToken !== undefined) {
      localVarQueryParameters["page_token"] = ObjectSerializer.serialize(
        pageToken,
        "string"
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
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
        body: ListCollectionsResponse;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            body = ObjectSerializer.deserialize(
              body,
              "ListCollectionsResponse"
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
   * Query the collection to search for records.  The following example demonstrates how to run a simple search for a particular string:  ```json {   \"variables\": { \"q\": \"search terms\" } } ```  For more information:  - See [filtering content](https://www.sajari.com/docs/user-guide/integrating-search/filters/) - See [tracking in the Go SDK](https://github.com/sajari/sdk-go/blob/v2/session.go) - See [tracking in the JS SDK](https://github.com/sajari/sajari-sdk-js/blob/master/src/session.ts)
   * @summary Query collection
   * @param collectionId The collection to query, e.g. &#x60;my-collection&#x60;.
   * @param queryCollectionRequest
   */
  public async queryCollection(
    collectionId: string,
    queryCollectionRequest: QueryCollectionRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: QueryCollectionResponse;
  }> {
    const localVarPath =
      this.basePath +
      "/v4/collections/{collection_id}:queryCollection".replace(
        /{\w+}/,
        String(collectionId)
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
        "Required parameter collectionId was null or undefined when calling queryCollection."
      );
    }

    // verify required parameter 'queryCollectionRequest' is not null or undefined
    if (
      queryCollectionRequest === null ||
      queryCollectionRequest === undefined
    ) {
      throw new Error(
        "Required parameter queryCollectionRequest was null or undefined when calling queryCollection."
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
        queryCollectionRequest,
        "QueryCollectionRequest"
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
        body: QueryCollectionResponse;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            body = ObjectSerializer.deserialize(
              body,
              "QueryCollectionResponse"
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
   * Update the details of a collection.
   * @summary Update collection
   * @param collectionId The collection to update, e.g. &#x60;my-collection&#x60;.
   * @param collection Details of the collection to update.
   * @param updateMask The list of fields to be updated, separated by a comma, e.g. &#x60;field1,field2&#x60;.  Each field should be in snake case, e.g. &#x60;display_name&#x60;.  For each field that you want to update, provide a corresponding value in the collection object containing the new value.
   */
  public async updateCollection(
    collectionId: string,
    collection: Collection,
    updateMask?: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Collection }> {
    const localVarPath =
      this.basePath +
      "/v4/collections/{collection_id}".replace(/{\w+}/, String(collectionId));
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
        "Required parameter collectionId was null or undefined when calling updateCollection."
      );
    }

    // verify required parameter 'collection' is not null or undefined
    if (collection === null || collection === undefined) {
      throw new Error(
        "Required parameter collection was null or undefined when calling updateCollection."
      );
    }

    if (updateMask !== undefined) {
      localVarQueryParameters["update_mask"] = ObjectSerializer.serialize(
        updateMask,
        "string"
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "PATCH",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(collection, "Collection"),
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
      return new Promise<{ response: http.IncomingMessage; body: Collection }>(
        (resolve, reject) => {
          localVarRequest(localVarRequestOptions, (error, response, body) => {
            if (error) {
              reject(error);
            } else {
              body = ObjectSerializer.deserialize(body, "Collection");
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
}

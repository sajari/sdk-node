/**
 * Search.io API
 * Search.io offers a search and discovery service with Neuralsearch®, the world\'s first instant AI search technology. Businesses of all sizes use Search.io to build site search and discovery solutions that maximize e-commerce revenue, optimize on-site customer experience, and scale their online presence.  # Authentication <!-- ReDoc-Inject: <SecurityDefinitions> -->  # Rate limiting  The Search.io API employs a number of safeguards against bursts of incoming traffic to help maximize its stability. Users who send many requests in quick succession may see error responses that show up as HTTP status code `429`.  For the [UpsertRecord](/docs/api#operation/UpsertRecord) call, Search.io allows up to 175 write operations per second.  Treat these limits as maximums and don\'t generate unnecessary load. See [Handling limiting gracefully](/docs/api/#section/Rate-limiting/Handling-limiting-gracefully) for advice on handling `429`s.  We may reduce limits to prevent abuse.  ## Common causes and mitigations  Rate limiting can occur under a variety of conditions, but it\'s most common in these scenarios:  - Running a large volume of closely-spaced requests. Often this is part of a user\'s long-running reindex job. When engaging in these activities, you should try to control the request rate (see [Handling limiting gracefully](/docs/api/#section/Rate-limiting/Handling-limiting-gracefully)). - Running batch operations in parallel. Often [BatchUpsertRecords](/docs/api#operation/BatchUpsertRecords) is used as part of a user\'s long-running reindex job. A batch of records of size `N` passed to [BatchUpsertRecords](/docs/api#operation/BatchUpsertRecords) is counted as `N` [UpsertRecord](/docs/api#operation/UpsertRecord) calls for the purposes of rate limiting, as opposed to a single call. Treat batch API calls as a convenience rather than a way to get more write throughput.  ## Handling limiting gracefully  A basic technique for integrations to gracefully handle limiting is to watch for `429` HTTP status codes and build in a retry mechanism. The retry mechanism should follow an exponential backoff schedule to reduce request volume when necessary. We also recommend building some randomness into the backoff schedule to avoid a [thundering herd effect](https://en.wikipedia.org/wiki/Thundering_herd_problem).
 *
 * The version of the OpenAPI document: 4.0.0
 * Contact: support@search.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest from "request";
import http from "http";

/* tslint:disable:no-unused-locals */
import { ListRedirectsResponse } from "../model/listRedirectsResponse";
import { Redirect } from "../model/redirect";

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

let defaultBasePath = "https://api.search.io";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum RedirectsApiApiKeys {}

export class RedirectsApi {
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

  public setApiKey(key: RedirectsApiApiKeys, value: string) {
    (this.authentications as any)[RedirectsApiApiKeys[key]].apiKey = value;
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
   * Create a new redirect in a collection.
   * @summary Create redirect
   * @param collectionId The collection to create a redirect in, e.g. &#x60;my-collection&#x60;.
   * @param redirect The redirect to create.
   * @param accountId The account that owns the collection, e.g. &#x60;1618535966441231024&#x60;.
   */
  public async createRedirect(
    collectionId: string,
    redirect: Redirect,
    accountId?: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Redirect }> {
    const localVarPath =
      this.basePath +
      "/v4/collections/{collection_id}/redirects".replace(
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
        "Required parameter collectionId was null or undefined when calling createRedirect."
      );
    }

    // verify required parameter 'redirect' is not null or undefined
    if (redirect === null || redirect === undefined) {
      throw new Error(
        "Required parameter redirect was null or undefined when calling createRedirect."
      );
    }

    localVarHeaderParams["Account-Id"] = ObjectSerializer.serialize(
      accountId,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(redirect, "Redirect"),
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
      return new Promise<{ response: http.IncomingMessage; body: Redirect }>(
        (resolve, reject) => {
          localVarRequest(localVarRequestOptions, (error, response, body) => {
            if (error) {
              reject(error);
            } else {
              if (
                response.statusCode &&
                response.statusCode >= 200 &&
                response.statusCode <= 299
              ) {
                body = ObjectSerializer.deserialize(body, "Redirect");
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
   * Delete a redirect and all of its associated data.  > Note: This operation cannot be reversed.
   * @summary Delete redirect
   * @param collectionId The collection the redirect belongs to, e.g. &#x60;my-collection&#x60;.
   * @param redirectId The redirect to delete, e.g. &#x60;1234&#x60;.
   * @param accountId The account that owns the collection, e.g. &#x60;1618535966441231024&#x60;.
   */
  public async deleteRedirect(
    collectionId: string,
    redirectId: string,
    accountId?: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: any }> {
    const localVarPath =
      this.basePath +
      "/v4/collections/{collection_id}/redirects/{redirect_id}"
        .replace(
          "{" + "collection_id" + "}",
          encodeURIComponent(String(collectionId))
        )
        .replace(
          "{" + "redirect_id" + "}",
          encodeURIComponent(String(redirectId))
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
        "Required parameter collectionId was null or undefined when calling deleteRedirect."
      );
    }

    // verify required parameter 'redirectId' is not null or undefined
    if (redirectId === null || redirectId === undefined) {
      throw new Error(
        "Required parameter redirectId was null or undefined when calling deleteRedirect."
      );
    }

    localVarHeaderParams["Account-Id"] = ObjectSerializer.serialize(
      accountId,
      "string"
    );
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
              if (
                response.statusCode &&
                response.statusCode >= 200 &&
                response.statusCode <= 299
              ) {
                body = ObjectSerializer.deserialize(body, "any");
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
   * Retrieve the details of a redirect.
   * @summary Get redirect
   * @param collectionId The collection that owns the redirect, e.g. &#x60;my-collection&#x60;.
   * @param redirectId The redirect to retrieve, e.g. &#x60;1234&#x60;.
   * @param accountId The account that owns the collection, e.g. &#x60;1618535966441231024&#x60;.
   */
  public async getRedirect(
    collectionId: string,
    redirectId: string,
    accountId?: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Redirect }> {
    const localVarPath =
      this.basePath +
      "/v4/collections/{collection_id}/redirects/{redirect_id}"
        .replace(
          "{" + "collection_id" + "}",
          encodeURIComponent(String(collectionId))
        )
        .replace(
          "{" + "redirect_id" + "}",
          encodeURIComponent(String(redirectId))
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
        "Required parameter collectionId was null or undefined when calling getRedirect."
      );
    }

    // verify required parameter 'redirectId' is not null or undefined
    if (redirectId === null || redirectId === undefined) {
      throw new Error(
        "Required parameter redirectId was null or undefined when calling getRedirect."
      );
    }

    localVarHeaderParams["Account-Id"] = ObjectSerializer.serialize(
      accountId,
      "string"
    );
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
      return new Promise<{ response: http.IncomingMessage; body: Redirect }>(
        (resolve, reject) => {
          localVarRequest(localVarRequestOptions, (error, response, body) => {
            if (error) {
              reject(error);
            } else {
              if (
                response.statusCode &&
                response.statusCode >= 200 &&
                response.statusCode <= 299
              ) {
                body = ObjectSerializer.deserialize(body, "Redirect");
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
   * Retrieve a list of redirects in a collection.
   * @summary List redirects
   * @param collectionId The collection that owns this set of redirects, e.g. &#x60;my-collection&#x60;.
   * @param accountId The account that owns the collection, e.g. &#x60;1618535966441231024&#x60;.
   * @param pageSize The maximum number of redirects to return. The service may return fewer than this value.  If unspecified, at most 50 redirects are returned.  The maximum value is 1000; values above 1000 are coerced to 1000.
   * @param pageToken A page token, received from a previous [ListRedirects](/docs/api#operation/ListRedirects) call.  Provide this to retrieve the subsequent page.  When paginating, all other parameters provided to [ListRedirects](/docs/api#operation/ListRedirects) must match the call that provided the page token.
   */
  public async listRedirects(
    collectionId: string,
    accountId?: string,
    pageSize?: number,
    pageToken?: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: ListRedirectsResponse }> {
    const localVarPath =
      this.basePath +
      "/v4/collections/{collection_id}/redirects".replace(
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
        "Required parameter collectionId was null or undefined when calling listRedirects."
      );
    }

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

    localVarHeaderParams["Account-Id"] = ObjectSerializer.serialize(
      accountId,
      "string"
    );
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
        body: ListRedirectsResponse;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (
              response.statusCode &&
              response.statusCode >= 200 &&
              response.statusCode <= 299
            ) {
              body = ObjectSerializer.deserialize(
                body,
                "ListRedirectsResponse"
              );
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
   * Update the details of a redirect.  Pass each field that you want to update in the request body. Also specify the name of each field that you want to update in the `update_mask` in the request URL query string. Separate multiple fields with a comma. Fields included in the request body, but not included in the field mask are not updated.  For example, to update the `condition` field, make a `PATCH` request to the URL:  ``` /v4/collections/{collection_id}/redirects/{redirect_id}?update_mask=condition ```  With the JSON body:  ``` {   \"condition\": \"new value\",   \"target\": \"...\" } ```  > Note: In this example `target` is not updated because it is not specified in the `update_mask`.
   * @summary Update redirect
   * @param collectionId The collection the redirect belongs to, e.g. &#x60;my-collection&#x60;.
   * @param redirectId The redirect to update, e.g. &#x60;1234&#x60;.
   * @param updateMask The list of fields to be updated, separated by a comma, e.g. &#x60;field1,field2&#x60;.  Each field should be in snake case, e.g. &#x60;condition&#x60;, &#x60;target&#x60;.  For each field that you want to update, provide a corresponding value in the redirect object containing the new value.
   * @param redirect Details of the redirect to update.
   * @param accountId The account that owns the collection, e.g. &#x60;1618535966441231024&#x60;.
   */
  public async updateRedirect(
    collectionId: string,
    redirectId: string,
    updateMask: string,
    redirect: Redirect,
    accountId?: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Redirect }> {
    const localVarPath =
      this.basePath +
      "/v4/collections/{collection_id}/redirects/{redirect_id}"
        .replace(
          "{" + "collection_id" + "}",
          encodeURIComponent(String(collectionId))
        )
        .replace(
          "{" + "redirect_id" + "}",
          encodeURIComponent(String(redirectId))
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
        "Required parameter collectionId was null or undefined when calling updateRedirect."
      );
    }

    // verify required parameter 'redirectId' is not null or undefined
    if (redirectId === null || redirectId === undefined) {
      throw new Error(
        "Required parameter redirectId was null or undefined when calling updateRedirect."
      );
    }

    // verify required parameter 'updateMask' is not null or undefined
    if (updateMask === null || updateMask === undefined) {
      throw new Error(
        "Required parameter updateMask was null or undefined when calling updateRedirect."
      );
    }

    // verify required parameter 'redirect' is not null or undefined
    if (redirect === null || redirect === undefined) {
      throw new Error(
        "Required parameter redirect was null or undefined when calling updateRedirect."
      );
    }

    if (updateMask !== undefined) {
      localVarQueryParameters["update_mask"] = ObjectSerializer.serialize(
        updateMask,
        "string"
      );
    }

    localVarHeaderParams["Account-Id"] = ObjectSerializer.serialize(
      accountId,
      "string"
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "PATCH",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(redirect, "Redirect"),
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
      return new Promise<{ response: http.IncomingMessage; body: Redirect }>(
        (resolve, reject) => {
          localVarRequest(localVarRequestOptions, (error, response, body) => {
            if (error) {
              reject(error);
            } else {
              if (
                response.statusCode &&
                response.statusCode >= 200 &&
                response.statusCode <= 299
              ) {
                body = ObjectSerializer.deserialize(body, "Redirect");
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

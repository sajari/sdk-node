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

import { RequestFile } from "./models";

/**
 *  - BASIC: Include basic information including name, start time and end time, but not detailed information about the promotion effects.  - FULL: Returns all information about a promotion. This is the default value.
 */
export enum ListPromotionsRequestPromotionView {
  PromotionViewUnspecified = <any>"PROMOTION_VIEW_UNSPECIFIED",
  Basic = <any>"BASIC",
  Full = <any>"FULL",
}
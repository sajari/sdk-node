/**
 * Search.io API
 * Search.io offers a search and discovery service with Neuralsearch®, the world\'s first instant AI search technology. Businesses of all sizes use Search.io to build site search and discovery solutions that maximize e-commerce revenue, optimize on-site customer experience, and scale their online presence.
 *
 * The version of the OpenAPI document: v4
 * Contact: support@search.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from "./models";

/**
 *  - VIEW_UNSPECIFIED: The default / unset value. The API defaults to the `BASIC` view.  - BASIC: Include basic information including type, name, version and description but not the full step configuration. This is the default value (for both [ListPipelines](/docs/api#operation/ListPipelines) and [GetPipeline](/docs/api#operation/GetPipeline)).  - FULL: Include the information from `BASIC`, plus full step configuration.
 */
export enum GetPipelineRequestView {
  ViewUnspecified = <any>"VIEW_UNSPECIFIED",
  Basic = <any>"BASIC",
  Full = <any>"FULL",
}

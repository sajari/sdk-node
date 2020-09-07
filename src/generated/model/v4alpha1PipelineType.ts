/**
 * Sajari API
 * Sajari is a smart, highly-configurable, real-time search service that enables thousands of businesses worldwide to provide amazing search experiences on their websites, stores, and applications.
 *
 * The version of the OpenAPI document: v4alpha1
 * Contact: support@sajari.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from "./models";

/**
 *  - TYPE_UNSPECIFIED: Pipeline type not specified.  - QUERY_PIPELINE: Query pipeline.  - RECORD_PIPELINE: Record pipeline.
 */
export enum V4alpha1PipelineType {
  TYPEUNSPECIFIED = <any>"TYPE_UNSPECIFIED",
  QUERYPIPELINE = <any>"QUERY_PIPELINE",
  RECORDPIPELINE = <any>"RECORD_PIPELINE",
}
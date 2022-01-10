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
import { Pipeline } from "./pipeline";

export class GeneratePipelinesResponse {
  "autocompletePipeline"?: Pipeline;
  "queryPipeline"?: Pipeline;
  "recordPipeline"?: Pipeline;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "autocompletePipeline",
      baseName: "autocomplete_pipeline",
      type: "Pipeline",
    },
    {
      name: "queryPipeline",
      baseName: "query_pipeline",
      type: "Pipeline",
    },
    {
      name: "recordPipeline",
      baseName: "record_pipeline",
      type: "Pipeline",
    },
  ];

  static getAttributeTypeMap() {
    return GeneratePipelinesResponse.attributeTypeMap;
  }
}

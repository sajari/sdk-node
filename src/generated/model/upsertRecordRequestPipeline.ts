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
 * The pipeline to use when upserting the record.  If not provided the default record pipeline is used.
 */
export class UpsertRecordRequestPipeline {
  /**
   * The record pipeline\'s name, e.g. `my-pipeline`.
   */
  "name": string;
  /**
   * The record pipeline\'s version, e.g. `42`.  If not provided the default version is used.
   */
  "version"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "name",
      baseName: "name",
      type: "string",
    },
    {
      name: "version",
      baseName: "version",
      type: "string",
    },
  ];

  static getAttributeTypeMap() {
    return UpsertRecordRequestPipeline.attributeTypeMap;
  }
}

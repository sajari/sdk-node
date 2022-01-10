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
 * Count contains the counts for the set of values returned.
 */
export class QueryAggregateResultCount {
  "counts"?: { [key: string]: number };

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "counts",
      baseName: "counts",
      type: "{ [key: string]: number; }",
    },
  ];

  static getAttributeTypeMap() {
    return QueryAggregateResultCount.attributeTypeMap;
  }
}

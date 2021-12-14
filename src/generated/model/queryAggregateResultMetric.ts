/**
 * Search.io API
 * Search.io is a smart, highly-configurable, real-time search service that enables thousands of businesses worldwide to provide amazing search experiences on their websites, stores, and applications.
 *
 * The version of the OpenAPI document: v4
 * Contact: support@sajari.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from "./models";

/**
 * Metric represents the metric type requested, represented by an Enumeration Type.
 */
export class QueryAggregateResultMetric {
  "value"?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "value",
      baseName: "value",
      type: "number",
    },
  ];

  static getAttributeTypeMap() {
    return QueryAggregateResultMetric.attributeTypeMap;
  }
}

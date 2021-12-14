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

export class PromotionFilterBoost {
  /**
   * Number that determines the size of the boost that is applied to matching records.  Must be greater than or equal to 0 and less than or equal to 1.
   */
  "boost"?: number;
  /**
   * Filter expression that applies a relevance boost to records matching this filter.  This is a filter expression much like the query filter expression.
   */
  "filter"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "boost",
      baseName: "boost",
      type: "number",
    },
    {
      name: "filter",
      baseName: "filter",
      type: "string",
    },
  ];

  static getAttributeTypeMap() {
    return PromotionFilterBoost.attributeTypeMap;
  }
}

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
 * A set of filters of the form `field = \'value\'`. Matches a query if the set of filters in the condition matches exactly the set of filters associated with it.
 */
export class PromotionFilterCondition {
  /**
   * A filter of the form `field = \'value\'`.
   */
  "filter"?: Array<string>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "filter",
      baseName: "filter",
      type: "Array<string>",
    },
  ];

  static getAttributeTypeMap() {
    return PromotionFilterCondition.attributeTypeMap;
  }
}

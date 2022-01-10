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

export class PromotionCategory {
  /**
   * The logical field that specifies a record\'s category, e.g. \"product_type\".
   */
  "idField"?: string;
  /**
   * The field that contains a human-readable rendering of a record\'s category, e.g. \"product_type_name\". When creating promotions, this field\'s text value is displayed instead of the `id_field`. If `mapping_field` is not provided, the text value of the record\'s `id_field` is displayed.
   */
  "mappingField"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "idField",
      baseName: "id_field",
      type: "string",
    },
    {
      name: "mappingField",
      baseName: "mapping_field",
      type: "string",
    },
  ];

  static getAttributeTypeMap() {
    return PromotionCategory.attributeTypeMap;
  }
}

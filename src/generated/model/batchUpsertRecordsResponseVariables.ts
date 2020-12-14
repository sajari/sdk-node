/**
 * Sajari API
 * Sajari is a smart, highly-configurable, real-time search service that enables thousands of businesses worldwide to provide amazing search experiences on their websites, stores, and applications.
 *
 * The version of the OpenAPI document: v4
 * Contact: support@sajari.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from "./models";

export class BatchUpsertRecordsResponseVariables {
  /**
   * Index of the record in `records` that these variables correspond to.
   */
  "index"?: number;
  /**
   * The variables.
   */
  "variables"?: object;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "index",
      baseName: "index",
      type: "number",
    },
    {
      name: "variables",
      baseName: "variables",
      type: "object",
    },
  ];

  static getAttributeTypeMap() {
    return BatchUpsertRecordsResponseVariables.attributeTypeMap;
  }
}
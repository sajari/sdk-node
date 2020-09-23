/**
 * Sajari API
 * Sajari is a smart, highly-configurable, real-time search service that enables thousands of businesses worldwide to provide amazing search experiences on their websites, stores, and applications.
 *
 * The version of the OpenAPI document: v4beta1
 * Contact: support@sajari.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from "./models";

/**
 * Bucket is the result of a bucket aggregate.
 */
export class BucketsBucket {
  /**
   * Name of bucket.
   */
  "name"?: string;
  /**
   * Number of records in the bucket.
   */
  "count"?: number;

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
      name: "count",
      baseName: "count",
      type: "number",
    },
  ];

  static getAttributeTypeMap() {
    return BucketsBucket.attributeTypeMap;
  }
}

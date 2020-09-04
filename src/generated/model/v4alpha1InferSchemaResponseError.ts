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

export class V4alpha1InferSchemaResponseError {
  /**
   * Name of the field in `record` that we failed to infer the type for.
   */
  "field"?: string;
  /**
   * The reason we failed to infer the type.
   */
  "message"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "field",
      baseName: "field",
      type: "string",
    },
    {
      name: "message",
      baseName: "message",
      type: "string",
    },
  ];

  static getAttributeTypeMap() {
    return V4alpha1InferSchemaResponseError.attributeTypeMap;
  }
}

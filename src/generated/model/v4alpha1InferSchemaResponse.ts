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
import { V4alpha1InferSchemaResponseError } from "./v4alpha1InferSchemaResponseError";
import { V4alpha1SchemaField } from "./v4alpha1SchemaField";

export class V4alpha1InferSchemaResponse {
  /**
   * Inferred fields of the schema.
   */
  "fields"?: Array<V4alpha1SchemaField>;
  /**
   * Errors that occurred.
   */
  "errors"?: Array<V4alpha1InferSchemaResponseError>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "fields",
      baseName: "fields",
      type: "Array<V4alpha1SchemaField>",
    },
    {
      name: "errors",
      baseName: "errors",
      type: "Array<V4alpha1InferSchemaResponseError>",
    },
  ];

  static getAttributeTypeMap() {
    return V4alpha1InferSchemaResponse.attributeTypeMap;
  }
}

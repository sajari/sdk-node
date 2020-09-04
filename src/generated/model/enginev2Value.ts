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
import { ValueRepeated } from "./valueRepeated";

/**
 * Value is the representation for record field values.
 */
export class Enginev2Value {
  "_null"?: boolean;
  "single"?: string;
  "repeated"?: ValueRepeated;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "_null",
      baseName: "null",
      type: "boolean",
    },
    {
      name: "single",
      baseName: "single",
      type: "string",
    },
    {
      name: "repeated",
      baseName: "repeated",
      type: "ValueRepeated",
    },
  ];

  static getAttributeTypeMap() {
    return Enginev2Value.attributeTypeMap;
  }
}

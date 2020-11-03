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
import { Sajariv4beta1Key } from "./sajariv4beta1Key";

export class Sajariv4beta1DeleteRecordRequest {
  "key": Sajariv4beta1Key;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "key",
      baseName: "key",
      type: "Sajariv4beta1Key",
    },
  ];

  static getAttributeTypeMap() {
    return Sajariv4beta1DeleteRecordRequest.attributeTypeMap;
  }
}
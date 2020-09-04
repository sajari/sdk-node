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
import { Sajariv4alpha1Key } from "./sajariv4alpha1Key";

export class Sajariv4alpha1DeleteRecordRequest {
  "key": Sajariv4alpha1Key;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "key",
      baseName: "key",
      type: "Sajariv4alpha1Key",
    },
  ];

  static getAttributeTypeMap() {
    return Sajariv4alpha1DeleteRecordRequest.attributeTypeMap;
  }
}

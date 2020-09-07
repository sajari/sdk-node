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

export class V4alpha1BatchPutRecordsResponseKey {
  /**
   * Index of the record in `records` that this key corresponds to.
   */
  "index"?: number;
  "key"?: Sajariv4alpha1Key;

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
      name: "key",
      baseName: "key",
      type: "Sajariv4alpha1Key",
    },
  ];

  static getAttributeTypeMap() {
    return V4alpha1BatchPutRecordsResponseKey.attributeTypeMap;
  }
}
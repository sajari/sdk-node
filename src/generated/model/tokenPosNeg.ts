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

/**
 * PosNeg is a pair of tokens which are used to mark a record as a good/bad result for a SearchRequest.
 */
export class TokenPosNeg {
  "pos"?: string;
  "neg"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "pos",
      baseName: "pos",
      type: "string",
    },
    {
      name: "neg",
      baseName: "neg",
      type: "string",
    },
  ];

  static getAttributeTypeMap() {
    return TokenPosNeg.attributeTypeMap;
  }
}

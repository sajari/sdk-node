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
import { QueryResultToken } from "./queryResultToken";

export class QueryResult {
  /**
   * Index score.
   */
  "indexScore"?: number;
  /**
   * An object made up of field-value pairs that contains the record data.
   */
  "record"?: object;
  /**
   * The normalized score attributed to this record. Combines the index score and feature score.
   */
  "score"?: number;
  "token"?: QueryResultToken;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "indexScore",
      baseName: "index_score",
      type: "number",
    },
    {
      name: "record",
      baseName: "record",
      type: "object",
    },
    {
      name: "score",
      baseName: "score",
      type: "number",
    },
    {
      name: "token",
      baseName: "token",
      type: "QueryResultToken",
    },
  ];

  static getAttributeTypeMap() {
    return QueryResult.attributeTypeMap;
  }
}

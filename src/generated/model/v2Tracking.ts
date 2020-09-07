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
import { V2TrackingType } from "./v2TrackingType";

export class V2Tracking {
  "type"?: V2TrackingType;
  /**
   * Query ID of the query.  If this is empty, then one is generated.
   */
  "queryId"?: string;
  /**
   * Sequence number of query.
   */
  "sequence"?: number;
  /**
   * Tracking field (must be unique in the collection) used to identify records in the collection.
   */
  "field"?: string;
  /**
   * Custom values to be included in tracking data.
   */
  "data"?: { [key: string]: string };

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "type",
      baseName: "type",
      type: "V2TrackingType",
    },
    {
      name: "queryId",
      baseName: "query_id",
      type: "string",
    },
    {
      name: "sequence",
      baseName: "sequence",
      type: "number",
    },
    {
      name: "field",
      baseName: "field",
      type: "string",
    },
    {
      name: "data",
      baseName: "data",
      type: "{ [key: string]: string; }",
    },
  ];

  static getAttributeTypeMap() {
    return V2Tracking.attributeTypeMap;
  }
}
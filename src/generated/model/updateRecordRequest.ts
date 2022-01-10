/**
 * Search.io API
 * Search.io offers a search and discovery service with Neuralsearch®, the world\'s first instant AI search technology. Businesses of all sizes use Search.io to build site search and discovery solutions that maximize e-commerce revenue, optimize on-site customer experience, and scale their online presence.
 *
 * The version of the OpenAPI document: v4
 * Contact: support@search.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from "./models";
import { RecordKey } from "./recordKey";

export class UpdateRecordRequest {
  "key": RecordKey;
  /**
   * The record to update.
   */
  "record": { [key: string]: object };
  /**
   * The list of fields to be updated, separated by a comma, e.g. `field1,field2`.  For each field that you want to update, provide a corresponding value in the record object containing the new value.
   */
  "updateMask": string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "key",
      baseName: "key",
      type: "RecordKey",
    },
    {
      name: "record",
      baseName: "record",
      type: "{ [key: string]: object; }",
    },
    {
      name: "updateMask",
      baseName: "update_mask",
      type: "string",
    },
  ];

  static getAttributeTypeMap() {
    return UpdateRecordRequest.attributeTypeMap;
  }
}

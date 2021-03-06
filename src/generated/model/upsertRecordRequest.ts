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
import { UpsertRecordRequestPipeline } from "./upsertRecordRequestPipeline";

export class UpsertRecordRequest {
  "pipeline"?: UpsertRecordRequestPipeline;
  /**
   * An object made up of field-value pairs that contains the record data.
   */
  "record": object;
  /**
   * The initial values for the variables the pipeline operates on and transforms throughout its steps.
   */
  "variables"?: object;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "pipeline",
      baseName: "pipeline",
      type: "UpsertRecordRequestPipeline",
    },
    {
      name: "record",
      baseName: "record",
      type: "object",
    },
    {
      name: "variables",
      baseName: "variables",
      type: "object",
    },
  ];

  static getAttributeTypeMap() {
    return UpsertRecordRequest.attributeTypeMap;
  }
}

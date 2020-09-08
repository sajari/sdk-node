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
import { V4alpha1PipelineType } from "./v4alpha1PipelineType";

export class V4alpha1SetDefaultPipelineRequest {
  "type": V4alpha1PipelineType;
  /**
   * The name of the pipeline to use when not otherwise specified.
   */
  "pipeline": string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "type",
      baseName: "type",
      type: "V4alpha1PipelineType",
    },
    {
      name: "pipeline",
      baseName: "pipeline",
      type: "string",
    },
  ];

  static getAttributeTypeMap() {
    return V4alpha1SetDefaultPipelineRequest.attributeTypeMap;
  }
}

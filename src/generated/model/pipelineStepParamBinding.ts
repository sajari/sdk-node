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

export class PipelineStepParamBinding {
  /**
   * Bind the step parameter to a pipeline variable.
   */
  "bind"?: string;
  /**
   * Set the description of the step parameter.
   */
  "description"?: string;
  /**
   * Set a default value for the step parameter.  This allows you to set a default value for the step parameter when it is not bound to a pipeline variable.
   */
  "defaultValue"?: string;
  /**
   * Bind the step parameter to a constant value.
   */
  "constant"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "bind",
      baseName: "bind",
      type: "string",
    },
    {
      name: "description",
      baseName: "description",
      type: "string",
    },
    {
      name: "defaultValue",
      baseName: "default_value",
      type: "string",
    },
    {
      name: "constant",
      baseName: "constant",
      type: "string",
    },
  ];

  static getAttributeTypeMap() {
    return PipelineStepParamBinding.attributeTypeMap;
  }
}

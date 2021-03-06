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
import { ProtobufAny } from "./protobufAny";

export class ApiError {
  "code"?: number;
  "message"?: string;
  "details"?: Array<ProtobufAny>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "code",
      baseName: "code",
      type: "number",
    },
    {
      name: "message",
      baseName: "message",
      type: "string",
    },
    {
      name: "details",
      baseName: "details",
      type: "Array<ProtobufAny>",
    },
  ];

  static getAttributeTypeMap() {
    return ApiError.attributeTypeMap;
  }
}

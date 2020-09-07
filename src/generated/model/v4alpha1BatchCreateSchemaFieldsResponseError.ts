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
import { RpcStatus2 } from "./rpcStatus2";

export class V4alpha1BatchCreateSchemaFieldsResponseError {
  /**
   * Index of the schema field in `fields` that this error corresponds to.
   */
  "index"?: number;
  "status"?: RpcStatus2;

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
      name: "status",
      baseName: "status",
      type: "RpcStatus2",
    },
  ];

  static getAttributeTypeMap() {
    return V4alpha1BatchCreateSchemaFieldsResponseError.attributeTypeMap;
  }
}
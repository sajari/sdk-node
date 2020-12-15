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
import { SchemaField } from "./schemaField";

export class BatchCreateSchemaFieldsRequest {
  /**
   * A list of fields to create.  A maximum of 1000 fields can be created in a batch.
   */
  "fields": Array<SchemaField>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "fields",
      baseName: "fields",
      type: "Array<SchemaField>",
    },
  ];

  static getAttributeTypeMap() {
    return BatchCreateSchemaFieldsRequest.attributeTypeMap;
  }
}

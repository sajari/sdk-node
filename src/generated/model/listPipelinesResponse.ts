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
import { Pipeline } from "./pipeline";

export class ListPipelinesResponse {
  /**
   * The pipelines from the specified collection.
   */
  "pipelines"?: Array<Pipeline>;
  /**
   * A token, which can be sent as `page_token` to retrieve the next page.  If this field is omitted, there are no subsequent pages.
   */
  "nextPageToken"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "pipelines",
      baseName: "pipelines",
      type: "Array<Pipeline>",
    },
    {
      name: "nextPageToken",
      baseName: "next_page_token",
      type: "string",
    },
  ];

  static getAttributeTypeMap() {
    return ListPipelinesResponse.attributeTypeMap;
  }
}

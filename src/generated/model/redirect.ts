/**
 * Search.io API
 * Search.io is a smart, highly-configurable, real-time search service that enables thousands of businesses worldwide to provide amazing search experiences on their websites, stores, and applications.
 *
 * The version of the OpenAPI document: v4
 * Contact: support@sajari.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from "./models";

/**
 * Redirect contains a target that you can redirect users to if their search query matches a certain condition.
 */
export class Redirect {
  /**
   * Output only. The ID of the collection that owns this redirect.
   */
  "collectionId"?: string;
  /**
   * A condition expression applied to a search request that determines whether a search is redirected.  For example, to redirect if the user\'s query is `apples`, set condition to `q = \'apples\'`.
   */
  "condition": string;
  /**
   * Output only. Time the redirect was created.
   */
  "createTime"?: Date;
  /**
   * If disabled, the redirect is never triggered.
   */
  "disabled"?: boolean;
  /**
   * Output only. The redirect\'s ID.
   */
  "id"?: string;
  /**
   * The target to redirect the user to if their query matches `condition`.  For searches performed in a browser, target is usually a URL but it can be any value that your integration can interpret as a redirect.  For example, for URLs that you need to resolve at runtime, target might be a URL template string. For apps, target might be a unique identifier used to send the user to the correct view.
   */
  "target": string;
  /**
   * Output only. Time the redirect was last updated.
   */
  "updateTime"?: Date;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "collectionId",
      baseName: "collection_id",
      type: "string",
    },
    {
      name: "condition",
      baseName: "condition",
      type: "string",
    },
    {
      name: "createTime",
      baseName: "create_time",
      type: "Date",
    },
    {
      name: "disabled",
      baseName: "disabled",
      type: "boolean",
    },
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "target",
      baseName: "target",
      type: "string",
    },
    {
      name: "updateTime",
      baseName: "update_time",
      type: "Date",
    },
  ];

  static getAttributeTypeMap() {
    return Redirect.attributeTypeMap;
  }
}

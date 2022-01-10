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

/**
 * RedirectResult indicates that a redirect has been triggered for a given query.
 */
export class RedirectResult {
  /**
   * The redirect\'s ID.
   */
  "id"?: string;
  /**
   * The target to redirect the user to.
   */
  "target"?: string;
  /**
   * A redirect token.  Call SendEvent with this token to indicate that a redirect has been performed.
   */
  "token"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
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
      name: "token",
      baseName: "token",
      type: "string",
    },
  ];

  static getAttributeTypeMap() {
    return RedirectResult.attributeTypeMap;
  }
}

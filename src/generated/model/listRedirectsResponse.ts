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
import { Redirect } from "./redirect";

export class ListRedirectsResponse {
  /**
   * A token, which can be sent as `page_token` to retrieve the next page.  If this field is omitted, there are no subsequent pages.
   */
  "nextPageToken"?: string;
  /**
   * The redirects.
   */
  "redirects"?: Array<Redirect>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "nextPageToken",
      baseName: "next_page_token",
      type: "string",
    },
    {
      name: "redirects",
      baseName: "redirects",
      type: "Array<Redirect>",
    },
  ];

  static getAttributeTypeMap() {
    return ListRedirectsResponse.attributeTypeMap;
  }
}

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

/**
 * The pipeline to use when querying the collection.  If not provided the default query pipeline is used.
 */
export class V4alpha1QueryCollectionRequestPipeline {
  /**
   * The query pipeline\'s name, e.g. `my-pipeline`.
   */
  "name": string;
  /**
   * The query pipeline\'s version, e.g. `42`.  If not provided the default version is used.
   */
  "version"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "name",
      baseName: "name",
      type: "string",
    },
    {
      name: "version",
      baseName: "version",
      type: "string",
    },
  ];

  static getAttributeTypeMap() {
    return V4alpha1QueryCollectionRequestPipeline.attributeTypeMap;
  }
}

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
import { QueryCollectionRequestPipeline } from "./queryCollectionRequestPipeline";
import { QueryCollectionRequestTracking } from "./queryCollectionRequestTracking";

/**
 * A request to perform a search using a pipeline.
 */
export class QueryCollectionRequest {
  "pipeline"?: QueryCollectionRequestPipeline;
  /**
   * The initial values for the variables the pipeline operates on and transforms throughout its steps.  A typical variable is `q` which is the query the user entered, for example:  ```json { \"q\": \"search terms\" } ```
   */
  "variables": object;
  "tracking"?: QueryCollectionRequestTracking;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "pipeline",
      baseName: "pipeline",
      type: "QueryCollectionRequestPipeline",
    },
    {
      name: "variables",
      baseName: "variables",
      type: "object",
    },
    {
      name: "tracking",
      baseName: "tracking",
      type: "QueryCollectionRequestTracking",
    },
  ];

  static getAttributeTypeMap() {
    return QueryCollectionRequest.attributeTypeMap;
  }
}

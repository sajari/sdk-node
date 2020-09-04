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
import { Sajariv4alpha1Pipeline } from "./sajariv4alpha1Pipeline";

export class V4alpha1GeneratePipelinesResponse {
  "recordPipeline"?: Sajariv4alpha1Pipeline;
  "queryPipeline"?: Sajariv4alpha1Pipeline;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "recordPipeline",
      baseName: "record_pipeline",
      type: "Sajariv4alpha1Pipeline",
    },
    {
      name: "queryPipeline",
      baseName: "query_pipeline",
      type: "Sajariv4alpha1Pipeline",
    },
  ];

  static getAttributeTypeMap() {
    return V4alpha1GeneratePipelinesResponse.attributeTypeMap;
  }
}

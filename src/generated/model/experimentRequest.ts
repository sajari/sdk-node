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
import { ExperimentRequestPipeline } from "./experimentRequestPipeline";
import { Pipeline } from "./pipeline";
import { Promotion } from "./promotion";

/**
 * A request to perform a query experiment on a collection using a pipeline.
 */
export class ExperimentRequest {
  "customPipeline"?: Pipeline;
  "pipeline"?: ExperimentRequestPipeline;
  /**
   * The promotions to consider active when running the search.  Provided promotions override existing promotions with the same ID.
   */
  "promotions"?: Array<Promotion>;
  /**
   * The initial values for the variables the pipeline operates on and transforms throughout its steps.  The most important variable is `q` which is the query the user entered, for example:  ```json { \"q\": \"search terms\" } ```  To paginate through results, set the variables `page` and `resultsPerPage`, for example:  ```json { \"q\": \"search terms\", \"page\": 5, \"resultsPerPage\": 20 } ```  To sort results, set the variable `sort` to the name of one of your collection\'s schema fields, for example:  ```json { \"q\": \"search terms\", \"sort\": \"name\" } ```  To sort in reverse, prefix the schema field with a minus sign `-`, for example:  ```json { \"q\": \"search terms\", \"sort\": \"-name\" } ```
   */
  "variables": { [key: string]: object };

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "customPipeline",
      baseName: "custom_pipeline",
      type: "Pipeline",
    },
    {
      name: "pipeline",
      baseName: "pipeline",
      type: "ExperimentRequestPipeline",
    },
    {
      name: "promotions",
      baseName: "promotions",
      type: "Array<Promotion>",
    },
    {
      name: "variables",
      baseName: "variables",
      type: "{ [key: string]: object; }",
    },
  ];

  static getAttributeTypeMap() {
    return ExperimentRequest.attributeTypeMap;
  }
}

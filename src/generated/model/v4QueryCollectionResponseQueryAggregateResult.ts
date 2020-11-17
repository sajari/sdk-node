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
import { V4QueryCollectionResponseQueryAggregateResultAnalysis } from "./v4QueryCollectionResponseQueryAggregateResultAnalysis";
import { V4QueryCollectionResponseQueryAggregateResultBuckets } from "./v4QueryCollectionResponseQueryAggregateResultBuckets";
import { V4QueryCollectionResponseQueryAggregateResultCount } from "./v4QueryCollectionResponseQueryAggregateResultCount";
import { V4QueryCollectionResponseQueryAggregateResultDate } from "./v4QueryCollectionResponseQueryAggregateResultDate";
import { V4QueryCollectionResponseQueryAggregateResultMetric } from "./v4QueryCollectionResponseQueryAggregateResultMetric";

/**
 * A query aggregate result contains results of aggregations.
 */
export class V4QueryCollectionResponseQueryAggregateResult {
  "metric"?: V4QueryCollectionResponseQueryAggregateResultMetric;
  "count"?: V4QueryCollectionResponseQueryAggregateResultCount;
  "buckets"?: V4QueryCollectionResponseQueryAggregateResultBuckets;
  "date"?: V4QueryCollectionResponseQueryAggregateResultDate;
  "analysis"?: V4QueryCollectionResponseQueryAggregateResultAnalysis;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "metric",
      baseName: "metric",
      type: "V4QueryCollectionResponseQueryAggregateResultMetric",
    },
    {
      name: "count",
      baseName: "count",
      type: "V4QueryCollectionResponseQueryAggregateResultCount",
    },
    {
      name: "buckets",
      baseName: "buckets",
      type: "V4QueryCollectionResponseQueryAggregateResultBuckets",
    },
    {
      name: "date",
      baseName: "date",
      type: "V4QueryCollectionResponseQueryAggregateResultDate",
    },
    {
      name: "analysis",
      baseName: "analysis",
      type: "V4QueryCollectionResponseQueryAggregateResultAnalysis",
    },
  ];

  static getAttributeTypeMap() {
    return V4QueryCollectionResponseQueryAggregateResult.attributeTypeMap;
  }
}

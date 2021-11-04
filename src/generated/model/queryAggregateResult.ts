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
import { QueryAggregateResultAnalysis } from "./queryAggregateResultAnalysis";
import { QueryAggregateResultBuckets } from "./queryAggregateResultBuckets";
import { QueryAggregateResultCount } from "./queryAggregateResultCount";
import { QueryAggregateResultDate } from "./queryAggregateResultDate";
import { QueryAggregateResultMetric } from "./queryAggregateResultMetric";
import { QueryAggregateResultPercentile } from "./queryAggregateResultPercentile";

/**
 * A query aggregate result contains results of aggregations.
 */
export class QueryAggregateResult {
  "analysis"?: QueryAggregateResultAnalysis;
  "buckets"?: QueryAggregateResultBuckets;
  "count"?: QueryAggregateResultCount;
  "date"?: QueryAggregateResultDate;
  "metric"?: QueryAggregateResultMetric;
  "percentile"?: QueryAggregateResultPercentile;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "analysis",
      baseName: "analysis",
      type: "QueryAggregateResultAnalysis",
    },
    {
      name: "buckets",
      baseName: "buckets",
      type: "QueryAggregateResultBuckets",
    },
    {
      name: "count",
      baseName: "count",
      type: "QueryAggregateResultCount",
    },
    {
      name: "date",
      baseName: "date",
      type: "QueryAggregateResultDate",
    },
    {
      name: "metric",
      baseName: "metric",
      type: "QueryAggregateResultMetric",
    },
    {
      name: "percentile",
      baseName: "percentile",
      type: "QueryAggregateResultPercentile",
    },
  ];

  static getAttributeTypeMap() {
    return QueryAggregateResult.attributeTypeMap;
  }
}

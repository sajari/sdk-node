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
import { ActivePromotion } from "./activePromotion";
import { Banner } from "./banner";
import { QueryAggregateResult } from "./queryAggregateResult";
import { QueryCollectionResponsePipeline } from "./queryCollectionResponsePipeline";
import { QueryResult } from "./queryResult";
import { RedirectResult } from "./redirectResult";

export class QueryCollectionResponse {
  /**
   * A list of the promotions activated when running the query.
   */
  "activePromotions"?: Array<ActivePromotion>;
  /**
   * The aggregates run with filters.
   */
  "aggregateFilters"?: { [key: string]: QueryAggregateResult };
  /**
   * The aggregates returned by the query.
   */
  "aggregates"?: { [key: string]: QueryAggregateResult };
  /**
   * Banners associated with this query.
   */
  "banners"?: Array<Banner>;
  /**
   * The weight applied to the features in the query, used for analyzing the index, neural and feature components for results.  For each result:  ``` score = max(index_score, neural_score) * (1 - feature_score_weight) +         feature_score * feature_score_weight ```
   */
  "featureScoreWeight"?: number;
  "pipeline"?: QueryCollectionResponsePipeline;
  /**
   * The total time taken to perform the query.
   */
  "processingDuration"?: string;
  /**
   * The query identifier.  This uniqely identifies the specific query it was returned on. This is used to link user interactions with a query.
   */
  "queryId"?: string;
  /**
   * A mapping of redirects triggered for all possible variations of the query.
   */
  "redirects"?: { [key: string]: RedirectResult };
  /**
   * The results returned by the query.
   */
  "results"?: Array<QueryResult>;
  /**
   * The total number of results that match the query.
   */
  "totalSize"?: string;
  /**
   * The modified variables returned by the pipeline after it has finished processing.
   */
  "variables"?: { [key: string]: object };

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "activePromotions",
      baseName: "active_promotions",
      type: "Array<ActivePromotion>",
    },
    {
      name: "aggregateFilters",
      baseName: "aggregate_filters",
      type: "{ [key: string]: QueryAggregateResult; }",
    },
    {
      name: "aggregates",
      baseName: "aggregates",
      type: "{ [key: string]: QueryAggregateResult; }",
    },
    {
      name: "banners",
      baseName: "banners",
      type: "Array<Banner>",
    },
    {
      name: "featureScoreWeight",
      baseName: "feature_score_weight",
      type: "number",
    },
    {
      name: "pipeline",
      baseName: "pipeline",
      type: "QueryCollectionResponsePipeline",
    },
    {
      name: "processingDuration",
      baseName: "processing_duration",
      type: "string",
    },
    {
      name: "queryId",
      baseName: "query_id",
      type: "string",
    },
    {
      name: "redirects",
      baseName: "redirects",
      type: "{ [key: string]: RedirectResult; }",
    },
    {
      name: "results",
      baseName: "results",
      type: "Array<QueryResult>",
    },
    {
      name: "totalSize",
      baseName: "total_size",
      type: "string",
    },
    {
      name: "variables",
      baseName: "variables",
      type: "{ [key: string]: object; }",
    },
  ];

  static getAttributeTypeMap() {
    return QueryCollectionResponse.attributeTypeMap;
  }
}

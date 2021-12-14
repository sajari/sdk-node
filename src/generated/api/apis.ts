export * from "./collectionsApi";
import { CollectionsApi } from "./collectionsApi";
export * from "./eventsApi";
import { EventsApi } from "./eventsApi";
export * from "./pipelinesApi";
import { PipelinesApi } from "./pipelinesApi";
export * from "./promotionsApi";
import { PromotionsApi } from "./promotionsApi";
export * from "./recordsApi";
import { RecordsApi } from "./recordsApi";
export * from "./redirectsApi";
import { RedirectsApi } from "./redirectsApi";
export * from "./schemaApi";
import { SchemaApi } from "./schemaApi";
import * as http from "http";

export class HttpError extends Error {
  constructor(
    public response: http.IncomingMessage,
    public body: any,
    public statusCode?: number
  ) {
    super("HTTP request failed");
    this.name = "HttpError";
  }
}

export { RequestFile } from "../model/models";

export const APIS = [
  CollectionsApi,
  EventsApi,
  PipelinesApi,
  PromotionsApi,
  RecordsApi,
  RedirectsApi,
  SchemaApi,
];

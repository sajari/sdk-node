import { ServiceError } from "grpc";
import { sajari } from "../../generated/proto";

import { IClient } from "../client";
import { ISession } from "../session";
import { IValues } from "../utils";

import { createAddRequest, IKey, IRecord, processAddResponse } from "./add";
import {
  createSearchRequest,
  ISearchResponse,
  processSearchResponse
} from "./search";

// Pipeline is a handler for a named pipeline.
export class Pipeline {
  public client: IClient;
  public name: string;

  constructor(client: IClient, name: string) {
    this.client = client;
    this.name = name;
  }

  // search runs a search query defined by a pipline with the given values and
  // session.  Returns the query results and returned values (which could have
  // been modified in the pipeline).
  public search(values: IValues, session: ISession): Promise<ISearchResponse> {
    const tracking = session.next(values);

    return new Promise((resolve, reject) => {
      // @ts-ignore
      this.clients.Query.search(
        createSearchRequest(this.name, values, tracking),
        this.client.metadata,
        (
          err: ServiceError,
          response: sajari.api.pipeline.v1.SearchResponse
        ) => {
          if (err) {
            return reject(err);
          }

          const results = processSearchResponse(
            // tslint:disable-next-line:max-line-length
            response.searchResponse as sajari.api.pipeline.v1.SearchResponse.SearchResponse,
            response.tokens as sajari.api.pipeline.v1.Token[]
          );
          return resolve({ results, values: response.values });
        }
      );
    });
  }

  // Add a record to a collection using a pipeline, returning the unique
  // key which can be used to retrieve the respective record.
  public add(record: IRecord, values: IValues = {}): Promise<IKey> {
    return new Promise((resolve, reject) => {
      const request = createAddRequest(this.name, values, [record]);

      // @ts-ignore
      this.clients.Store.add(
        request,
        this.client.metadata,
        (err: ServiceError, response: sajari.api.pipeline.v1.AddResponse) => {
          if (err) {
            return reject(err);
          }

          const res = processAddResponse(
            response.response as sajari.engine.store.record.AddResponse
          );
          if (res instanceof Error) {
            return reject(res);
          }

          return resolve(res as IKey);
        }
      );
    });
  }
}

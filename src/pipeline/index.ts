import Debug from "debug";
import { ServiceError } from "grpc";

import { sajari } from "../../generated/proto";
import { Client } from "../client";
import { Session, Tracking } from "../session";
import { deadline } from "../utils";

import { createAddRequest, processAddResponse } from "./add";
import {
  createReplaceRequest,
  KeyRecord,
  parseReplaceResponse,
  ReplaceResponse
} from "./replace";
import {
  createSearchRequest,
  processSearchResponse,
  SearchResponse
} from "./search";
import { Key, Record } from "./utils";

/**
 * @hidden
 */
const debug = Debug("sajari:client:pipeline");

/**
 * Pipeline is a handler for a named pipeline.
 */
export class Pipeline {
  public client: Client;
  public name: string;

  constructor(client: Client, name: string) {
    this.client = client;
    this.name = name;
  }

  /**
   * search runs a search query defined by a pipline with the given values and
   * session.  Returns the query results and returned values (which could have
   * been modified in the pipeline).
   */
  public search(
    values: { [k: string]: string },
    session: Session
  ): Promise<SearchResponse> {
    const [serr, tracking] = session.next(values);

    return new Promise((resolve, reject) => {
      if (serr) {
        reject(serr);
      }

      const request = createSearchRequest(
        this.name,
        values,
        tracking as Tracking
      );
      debug("search request: %o", request);
      debug("search metadata: %o", this.client.metadata.getMap());

      // @ts-ignore: generated client method
      this.client.clients.Query.search(
        request,
        this.client.metadata,
        { deadline: deadline(5) },
        (
          err: ServiceError,
          response: sajari.api.pipeline.v1.SearchResponse
        ) => {
          if (err) {
            return reject(err);
          }

          const results = processSearchResponse(
            response.searchResponse as sajari.engine.query.v1.SearchResponse,
            response.tokens as sajari.api.query.v1.Token[]
          );
          return resolve({ results, values: response.values });
        }
      );
    });
  }

  /**
   * Add a record to a collection using a pipeline, returning the unique
   * key which can be used to retrieve the respective record.
   */
  public add(
    record: Record,
    values: { [k: string]: string } = {}
  ): Promise<Key> {
    return new Promise((resolve, reject) => {
      const request = createAddRequest(this.name, values, [record]);
      debug("add request: %o", request);
      debug("add metadata: %o", this.client.metadata.getMap());

      // @ts-ignore: generated client method
      this.client.clients.Store.add(
        request,
        this.client.metadata,
        { deadline: deadline(5) },
        (err: ServiceError, response: sajari.api.pipeline.v1.AddResponse) => {
          if (err) {
            return reject(err);
          }

          if (response.response == null) {
            return reject(new Error("sajari: empty response"));
          }

          const res = processAddResponse(
            response.response as sajari.engine.store.record.AddResponse
          );
          if (res instanceof Error) {
            return reject(res);
          }

          return resolve(res as Key);
        }
      );
    });
  }

  public replaceMulti(
    keyRecords: KeyRecord[],
    values: { [k: string]: string } = {}
  ): Promise<ReplaceResponse[]> {
    return new Promise((resolve, reject) => {
      const request = createReplaceRequest(this.name, keyRecords, values);
      debug("replace request: %o", request);
      debug("replace metadata: %o", this.client.metadata.getMap());

      // @ts-ignore: generated client method
      this.client.clients.Store.replace(
        request,
        this.client.metadata,
        { deadline: deadline(5) },
        (
          err: ServiceError,
          response: sajari.api.pipeline.v1.ReplaceResponse
        ) => {
          if (err) {
            return reject(err);
          }

          if (response.response == null) {
            return reject(new Error("sajari: empty response"));
          }

          const res = parseReplaceResponse(
            response.response as sajari.engine.store.record.ReplaceResponse
          );
          return resolve(res);
        }
      );
    });
  }

  public replace(
    keyRecord: KeyRecord,
    values: { [k: string]: string } = {}
  ): Promise<Key> {
    return new Promise((resolve, reject) => {
      this.replaceMulti([keyRecord], values)
        .then((response) => {
          const res = response[0];
          if (res.error) {
            return reject(res.error);
          }
          return resolve(res.key);
        })
        .catch(reject);
    });
  }
}

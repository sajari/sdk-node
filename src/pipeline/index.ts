import Debug from "debug";
import { ServiceError } from "grpc";

import { sajari } from "../../generated/proto";
import { Client } from "../client";
import { deadline } from "../utils";
import { Session, Tracking } from "./session";

import { Key } from "../key";
import { Record } from "../record";
import { AddResponse, createAddRequest, parseAddResponse } from "./add";
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

/**
 * @hidden
 */
const debug = Debug("sajari:client:pipeline");

/**
 * Pipeline is a handler for a named pipeline.
 */
export class Pipeline {
  /**
   * @hidden
   */
  private client: Client;
  /**
   * @hidden
   */
  private name: string;

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
    return new Promise((resolve, reject) => {
      const [serr, tracking] = session.next(values);
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
        { deadline: deadline(this.client.dialOptions.deadline) },
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

  public addMulti(
    values: { [k: string]: string },
    records: Record[]
  ): Promise<AddResponse[]> {
    return new Promise((resolve, reject) => {
      let req = {};
      try {
        req = createAddRequest(this.name, values, records);
      } catch (error) {
        return reject(error);
      }
      debug("addMulti request: %o", req);
      debug("addMulti metadata: %o", this.client.metadata.getMap());

      // @ts-ignore: generated client method
      this.client.clients.Store.add(
        req,
        this.client.metadata,
        { deadline: deadline(this.client.dialOptions.deadline) },
        (err: ServiceError, response: sajari.api.pipeline.v1.AddResponse) => {
          if (err) {
            return reject(err);
          }
          if (response.response == null) {
            return reject(new Error("sajari: empty response"));
          }

          parseAddResponse(response.response)
            .then(resolve)
            .catch(reject);
        }
      );
    });
  }

  /**
   * Add a record to a collection using a pipeline, returning the unique
   * key which can be used to retrieve the respective record.
   */
  public async add(
    values: { [k: string]: string },
    record: Record
  ): Promise<Key> {
    const response = await this.addMulti(values, [record]);
    const res = response[0];
    if (res.error) {
      throw res.error;
    }
    return res.key;
  }

  public replaceMulti(
    values: { [k: string]: string },
    keyRecords: KeyRecord[]
  ): Promise<ReplaceResponse[]> {
    return new Promise((resolve, reject) => {
      let req = {};
      try {
        req = createReplaceRequest(this.name, values, keyRecords);
      } catch (error) {
        return reject(error);
      }
      debug("replace request: %o", req);
      debug("replace metadata: %o", this.client.metadata.getMap());

      // @ts-ignore: generated client method
      this.client.clients.Store.replace(
        req,
        this.client.metadata,
        { deadline: deadline(this.client.dialOptions.deadline) },
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

  public async replace(
    values: { [k: string]: string },
    keyRecord: KeyRecord
  ): Promise<Key> {
    const response = await this.replaceMulti(values, [keyRecord]);
    const res = response[0];
    if (res.error) {
      throw res.error;
    }
    return res.key;
  }
}

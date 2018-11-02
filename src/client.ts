import Debug from "debug";
import {
  CallCredentials,
  Client as GrpcClient,
  credentials as grpcCredentials,
  loadObject as grpcLoadObject,
  Metadata,
  ServiceError
} from "grpc";
import protobuf from "protobufjs/light";

import { sajari } from "../generated/proto";
import { createMutationRequest, FieldMutation } from "./fieldMutation";
import { GetResponse, RecordMutation } from "./interfaces";
import { createEngineKey, Key } from "./key";
import { parseRecordResponse } from "./parse";
import { Pipeline } from "./pipeline";
import { Record } from "./record";
import { Schema } from "./schema";
import { deadline, errorFromStatuses } from "./utils";

/**
 * protobuf message root
 * @hidden
 */
// tslint:disable-next-line:no-var-requires
const proto = protobuf.Root.fromJSON(require("../generated/proto-defs.json"));

/**
 * debug message logger for the client
 * @hidden
 */
const debug = Debug("sajari:client");

/**
 * @hidden
 */
const API_ENDPOINT = "api.sajari.com:443";
/**
 * @hidden
 */
const USER_AGENT = `sdk-node-1.0.0`;

export interface Client {
  clients: { [k: string]: GrpcClient };
  metadata: Metadata;
  dialOptions: { deadline: number };

  pipeline(name: string): Pipeline;
  schema(): Schema;
}

// Option is a type which defines Client options.
export type Option = (client: DefaultClient) => void;

// withEndpoint configures the client to use a custom endpoint.
export const withEndpoint = (endpoint: string): Option => {
  return (client: DefaultClient): void => {
    client.endpoint = endpoint;
  };
};

// withDeadline configures the client with a request deadline.
// The default request deadline is 5 seconds.
export const withDeadline = (seconds: number): Option => {
  return (client: DefaultClient): void => {
    client.dialOptions.deadline = seconds;
  };
};

export class DefaultClient implements Client {
  /**
   * @hidden
   */
  public endpoint: string = API_ENDPOINT;
  /**
   * @hidden
   */
  public metadata: Metadata;
  /**
   * @hidden
   */
  public dialOptions: { deadline: number } = { deadline: 5 };
  /**
   * @hidden
   */
  public clients: { [k: string]: GrpcClient };

  /**
   * @hidden
   */
  private project: string;
  /**
   * @hidden
   */
  private collection: string;

  constructor(
    project: string,
    collection: string,
    credentials: { key: string; secret: string },
    ...options: Option[]
  ) {
    this.project = project;
    this.collection = collection;

    this.metadata = new Metadata();
    this.metadata.add("project", this.project);
    this.metadata.add("collection", this.collection);

    options.forEach((option) => option(this));

    debug("api endpoint: %s", this.endpoint);
    debug("dial options: %o", this.dialOptions);

    const creds = createCallCredentials(credentials.key, credentials.secret);
    this.clients = createClients(
      [
        "sajari.api.pipeline.v1.Query",
        "sajari.api.pipeline.v1.Store",
        "sajari.engine.schema.Schema"
      ],
      this.endpoint,
      creds
    );
  }

  public pipeline(name: string): Pipeline {
    return new Pipeline(this, name);
  }

  public schema(): Schema {
    return new Schema(this);
  }

  public getMulti(keys: Key[]): Promise<GetResponse[]> {
    return new Promise((resolve, reject) => {
      const req = new sajari.engine.store.record.Keys({
        keys: keys.map(createEngineKey)
      });

      debug("getMulti request: %o", req);
      debug("getMulti metadata: %o", this.metadata.getMap());

      // @ts-ignore: generated client method
      this.clients.Store.get(
        req,
        this.metadata,
        { deadline: deadline(this.dialOptions.deadline) },
        (
          err: ServiceError,
          response: sajari.engine.store.record.GetResponse
        ) => {
          if (err) {
            return reject(err);
          }

          return resolve(parseRecordResponse(response));
        }
      );
    });
  }

  public async get(key: Key): Promise<Record> {
    const response = await this.getMulti([key]);
    const res = response[0];
    if (res.error) {
      throw res.error;
    }
    return res.record;
  }

  public mutateMulti(recordMutations: RecordMutation[]): Promise<null> {
    return new Promise((resolve, reject) => {
      let req = {};
      try {
        req = createMutationRequest(recordMutations);
      } catch (error) {
        return reject(error);
      }

      debug("mutateMulti request: %o", req);
      debug("mutateMulti metadata: %o", this.metadata.getMap());

      // @ts-ignore: generated client method
      this.clients.Store.mutate(
        req,
        this.metadata,
        {
          deadline: deadline(this.dialOptions.deadline)
        },
        (
          err: ServiceError,
          response: sajari.engine.store.record.MutateResponse
        ) => {
          if (err) {
            return reject(err);
          }

          const serr = errorFromStatuses(response.status);
          if (serr) {
            return reject(serr);
          }
          return resolve(null);
        }
      );
    });
  }

  public async mutate(key: Key, fieldMutation: FieldMutation): Promise<null> {
    return this.mutateMulti([{ key, mutations: [fieldMutation] }]);
  }
}

/**
 * @hidden
 */
const createClients = (
  services: string[],
  endpoint: string,
  credentials: CallCredentials
): { [k: string]: GrpcClient } => {
  const clients: { [k: string]: GrpcClient } = {};
  services.forEach((service) => {
    const name = service.split(".").pop();
    clients[name as string] = createClient(service, endpoint, credentials);
  });
  return clients;
};

/**
 * @hidden
 */
const createClient = (
  service: string,
  endpoint: string,
  creds: CallCredentials
): GrpcClient => {
  const ServiceProto = proto.lookup(service);
  if (ServiceProto == null) {
    throw new Error(`sajari: ${service} message not found`);
  }
  const ServiceClient: GrpcClient = grpcLoadObject(ServiceProto, {
    protobufjsVersion: 6
  });

  // @ts-ignore: ServiceClient represents a GrpcClient
  return new ServiceClient(
    endpoint,
    grpcCredentials.combineChannelCredentials(
      grpcCredentials.createSsl(),
      creds
    ),
    {
      "grpc.default_authority": "api.sajari.com",
      "grpc.primary_user_agent": USER_AGENT
    }
  );
};

/**
 * @hidden
 */
const createCallCredentials = (
  key: string,
  secret: string
): CallCredentials => {
  return grpcCredentials.createFromMetadataGenerator((_, callback) => {
    const metadata = new Metadata();
    metadata.add("authorization", `keysecret ${key} ${secret}`);
    callback(null, metadata);
  });
};

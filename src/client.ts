import {
  CallCredentials,
  Client as GrpcClient,
  credentials as grpcCredentials,
  GrpcObject,
  loadObject as grpcLoadObject,
  Metadata
} from "grpc";

// @ts-ignore
import proto from "../generated/proto-defs";
import { Pipeline } from "./pipeline";
import { Schema } from "./schema";

const API_ENDPOINT = "api.sajari.com:443";
const USER_AGENT = `sdk-node-1.0.0`;

export interface IClient {
  clients: { [k: string]: GrpcClient };
  metadata: Metadata;

  pipeline(name: string): Pipeline;
  schema(): Schema;
}

// Option is a type which defines Client options.
export type Option = (client: Client) => void;

// withEndpoint configures the client to use a custom endpoint.
export const withEndpoint = (endpoint: string): Option => {
  return (client: Client): void => {
    client.endpoint = endpoint;
  };
};

export class Client implements IClient {
  public endpoint: string = API_ENDPOINT;
  public metadata: Metadata;
  public clients: { [k: string]: GrpcClient };

  private project: string;
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
    this.metadata.add("project", project);
    this.metadata.add("collection", collection);

    options.forEach((option) => option(this));

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
}

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

const createClient = (
  service: string,
  endpoint: string,
  creds: CallCredentials
): GrpcClient => {
  const ServiceProto = proto.lookup(service);
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

const createCallCredentials = (
  key: string,
  secret: string
): CallCredentials => {
  return grpcCredentials.createFromMetadataGenerator((params, callback) => {
    const metadata = new Metadata();
    metadata.add("authorization", `keysecret ${key} ${secret}`);
    callback(null, metadata);
  });
};

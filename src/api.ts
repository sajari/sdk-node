import grpc from "grpc";
import protobuf from "protobufjs/light";
import merge from "deepmerge";
import { deadline } from "./utils";

/**
 * @hidden
 */
const API_ENDPOINT = "api.sajari.com:443";

/**
 * The user agent of the sdk client
 * @hidden
 */
const USER_AGENT = "sdk-node-1.0.0";

export type Encoder<T> = (
  message: T,
  writer?: protobuf.Writer
) => protobuf.Writer;
export type Decoder<T> = (data: Buffer) => T;

export interface CallOptions {
  deadline?: number;
  credentials?: {
    key: string;
    secret: string;
  };
}

export class APIClient {
  private client: grpc.Client;
  private metadata: grpc.Metadata;
  private credentials: { key: string; secret: string };

  constructor(
    project: string,
    collection: string,
    credentials: { key: string; secret: string },
    endpoint: string = API_ENDPOINT
  ) {
    this.credentials = credentials;
    this.client = new grpc.Client(endpoint, grpc.credentials.createSsl(), {
      "grpc.default_authority": "api.sajari.com",
      "grpc.primary_user_agent": USER_AGENT
    });

    this.metadata = new grpc.Metadata();
    this.metadata.add("project", project);
    this.metadata.add("collection", collection);
  }

  public call<Request, Response>(
    path: string,
    request: Request,
    encoder: Encoder<Request>,
    decoder: Decoder<Response>,
    options: CallOptions = {}
  ): Promise<Response> {
    return new Promise((resolve, reject) => {
      let callOptions = merge(
        {
          deadline: 5,
          credentials: this.credentials
        },
        options
      );

      this.client.makeUnaryRequest(
        path,
        wrapEncoder(encoder),
        decoder,
        request,
        this.metadata,
        {
          deadline: deadline(callOptions.deadline),
          // tslint:disable-next-line:no-bitwise
          propagate_flags: grpc.propagate.DEFAULTS & ~grpc.propagate.DEADLINE,
          credentials: createCallCredentials(
            callOptions.credentials.key,
            callOptions.credentials.secret
          )
        },
        (err: grpc.ServiceError | null, value?: Response) => {
          if (err) {
            return reject(err);
          }
          return resolve(value);
        }
      );
    });
  }

  public close() {
    this.client.close();
  }
}

function createCallCredentials(
  key: string,
  secret: string
): grpc.CallCredentials {
  return grpc.credentials.createFromMetadataGenerator((_, callback) => {
    const metadata = new grpc.Metadata();
    metadata.add("authorization", `keysecret ${key} ${secret}`);
    callback(null, metadata);
  });
}

// wrapEncoder turns a protobufjs message encode fn into a grpc.serialize fn
function wrapEncoder<T>(
  encode: (message: T, writer?: protobuf.Writer) => protobuf.Writer
): (message: T) => Buffer {
  return function serialize(message: T): Buffer {
    const msg = encode(message).finish();
    return Buffer.from(msg);
  };
}

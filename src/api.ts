import debuglog from "debug";
import merge from "deepmerge";
import grpc from "grpc";
import protobuf from "protobufjs/light";
import { deadline } from "./utils";

/**
 * debug message logger
 * @hidden
 */
const debug = debuglog("sajari:api");

/**
 * @hidden
 */
const API_ENDPOINT = "api.sajari.com:443";

/**
 * The user agent of the sdk client
 * @hidden
 */
const USER_AGENT = "sdk-node-1.0.0";

/**
 * @hidden
 */
export type Encoder<T> = (
  message: T,
  writer?: protobuf.Writer
) => protobuf.Writer;
/**
 * @hidden
 */
export type Decoder<T> = (data: Buffer) => T;

export interface CallOptions {
  deadline?: number;
  credentials?: {
    key: string;
    secret: string;
  };
}

/**
 * APIClient wraps the grpc client, providing a single call method for
 * creating an unary request.
 * @hidden
 */
export class APIClient {
  private endpoint: string;
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
    this.endpoint = endpoint;
    this.client = new grpc.Client(
      this.endpoint,
      grpc.credentials.combineChannelCredentials(
        grpc.credentials.createSsl(),
        createCallCredentials(this.credentials.key, this.credentials.secret)
      ),
      {
        "grpc.default_authority": "api.sajari.com",
        "grpc.primary_user_agent": USER_AGENT
      }
    );

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
      const callOptions = merge(
        {
          deadline: 5,
          credentials: this.credentials
        },
        options
      );

      debug("endpoint: %j", this.endpoint);
      debug("grpc method: %j", path);
      debug("call options: %j", callOptions);
      debug("request: %j", request);

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
          debug("response: %j", value);
          return resolve(value);
        }
      );
    });
  }

  /**
   * wait until the grpc socket is ready
   * @param seconds number of seconds to wait before erroring
   */
  public wait(seconds: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.waitForReady(deadline(seconds), (err) => {
        if (err) {
          return reject(err);
        }
        return resolve();
      });
    });
  }

  public close() {
    this.client.close();
  }
}

/**
 * createCallCredentials creates the grpc.CallCredientials from the
 * pass credentials
 * @hidden
 */
function createCallCredentials(
  key: string,
  secret: string
): grpc.CallCredentials {
  return grpc.credentials.createFromMetadataGenerator((_, callback) => {
    const metadata = new grpc.Metadata();
    metadata.add("authorization", `keysecret ${key} ${secret}`);
    debug("call credentials: %j", metadata);
    callback(null, metadata);
  });
}

/**
 * wrapEncoder turns a protobufjs message encode fn into a grpc.serialize fn
 * @hidden
 */
function wrapEncoder<T>(
  encode: (message: T, writer?: protobuf.Writer) => protobuf.Writer
): (message: T) => Buffer {
  return function serialize(message: T): Buffer {
    const msg = encode(message).finish();
    return Buffer.from(msg);
  };
}

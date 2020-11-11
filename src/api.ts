import * as grpc from "@grpc/grpc-js";
import debuglog from "debug";
import merge from "deepmerge";
import protobuf from "protobufjs/light";
import retryInterceptor from "./retryInterceptor";
import { USER_AGENT } from "./ua";

// TEMP: Set debug value to ALWAYS show logs here
// process.env.DEBUG = 'sajari:api,sajari:*';

function humanSize(bytes: number): string {
  if (bytes === 0) { return "0.00 B"; }
  const e = Math.floor(Math.log(bytes) / Math.log(1024));
  return (bytes/Math.pow(1024, e)).toFixed(2)+' '+' KMGTP'.charAt(e)+'B';
}
function logMemoryUsage(msg: string) {
  const mem = process.memoryUsage();

  // tslint:disable-next-line: no-console
  console.log(`[MEMORY USAGE] ${msg}`, {
    arrayBuffers: humanSize(mem.arrayBuffers),
    external: humanSize(mem.external),
    heapTotal: humanSize(mem.heapTotal),
    heapUsed: humanSize(mem.heapUsed),
    rss: humanSize(mem.rss),
  });
}

/**
 * Custom formatter for call options.
 * By default we hide the credentials from being logged to the console.
 * @hidden
 */
debuglog.formatters.C = function callOptionsFormatter(
  options: CallOptions
): string {
  if (
    process.env.DEBUG_SHOW_CREDS &&
    process.env.DEBUG_SHOW_CREDS.toLowerCase() === "true"
  ) {
    return JSON.stringify(options);
  }
  return JSON.stringify({ deadline: options.deadline, credentials: "hidden" });
};

/**
 * debug message logger
 * @hidden
 */
const debug = debuglog("sajari:api");

/**
 * The default API endpoint
 * @hidden
 */
const API_ENDPOINT = "api.sajari.com:443";

/**
 * The deault grpc authority
 * @hidden
 */
const AUTHORITY = "api.sajari.com";

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

// tslint:disable-next-line
// @link https://github.com/grpc/grpc-node/blob/grpc%401.24.x/packages/grpc-native-core/src/constants.js#L169
/**
 * Propagation flags: these can be bitwise or-ed to form the propagation option
 * for calls.
 *
 * Users are encouraged to write propagation masks as deltas from the default.
 * i.e. write `grpc.propagate.DEFAULTS & ~grpc.propagate.DEADLINE` to disable
 * deadline propagation.
 * @memberof grpc
 * @alias grpc.propagate
 * @enum {number}
 */
const propagate = {
  DEADLINE: 1,
  CENSUS_STATS_CONTEXT: 2,
  CENSUS_TRACING_CONTEXT: 4,
  CANCELLATION: 8,
  DEFAULTS: 65535
};

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
    endpoint: string = API_ENDPOINT,
    insecure: boolean = false
  ) {
    this.credentials = credentials;
    this.endpoint = endpoint;
    this.client = new grpc.Client(
      this.endpoint,
      insecure
      ? grpc.credentials.createInsecure()
      : grpc.credentials.createSsl(),
      {
        "gprc.keepalive_permit_without_calls": 1,
        "grpc.default_authority": AUTHORITY,
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
    logMemoryUsage('before call');
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
      debug("call options: %C", callOptions);
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
          propagate_flags: propagate.DEFAULTS & ~propagate.DEADLINE,

          // NOTE(@bhinchley): credentials is required by the type CallOptions,
          // but this appears to do nothing.
          credentials: createCallCredentials(
            callOptions.credentials.key,
            callOptions.credentials.secret
          ),
          interceptors: [retryInterceptor(3)]
        },
        (err: grpc.ServiceError | null, value?: Response) => {
          if (err) {
            logMemoryUsage('after call error');
            return reject(err);
          }
          debug("response: %j", value);
          logMemoryUsage('after call success');
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
 * passed sajari credentials
 * @hidden
 */
function createCallCredentials(
  key: string,
  secret: string
): grpc.CallCredentials {
  logMemoryUsage('after call success');
  return grpc.credentials.createFromMetadataGenerator(
    (_ : any, callback : any) => {
      const metadata = new grpc.Metadata();
      metadata.add("authorization", `keysecret ${key} ${secret}`);
      callback(null, metadata);
    }
  );
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

/**
 * @hidden
 */
function deadline(seconds: number): number {
  return new Date().setSeconds(new Date().getSeconds() + seconds);
}

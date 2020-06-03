/// <reference types="node" />
import protobuf from "protobufjs/light";
/**
 * @hidden
 */
export declare type Encoder<T> = (message: T, writer?: protobuf.Writer) => protobuf.Writer;
/**
 * @hidden
 */
export declare type Decoder<T> = (data: Buffer) => T;
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
export declare class APIClient {
    private endpoint;
    private client;
    private metadata;
    private credentials;
    constructor(project: string, collection: string, credentials: {
        key: string;
        secret: string;
    }, endpoint?: string, insecure?: boolean);
    call<Request, Response>(path: string, request: Request, encoder: Encoder<Request>, decoder: Decoder<Response>, options?: CallOptions): Promise<Response>;
    /**
     * wait until the grpc socket is ready
     * @param seconds number of seconds to wait before erroring
     */
    wait(seconds: number): Promise<void>;
    close(): void;
}

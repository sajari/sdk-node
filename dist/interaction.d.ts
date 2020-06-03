import { APIClient, CallOptions } from "./api";
/**
 * grpc method endpoint for consuming an interaction token
 * @hidden
 */
export declare const ConsumeInteractionEndpoint = "sajari.interaction.v2.Interaction/ConsumeToken";
export declare class Interaction {
    /**
     * @hidden
     */
    private client;
    constructor(client: APIClient);
    consume(token: string, info: {
        identifier: string;
        weight: number;
        data?: {
            [k: string]: string;
        };
    }, opts?: CallOptions): Promise<void>;
}

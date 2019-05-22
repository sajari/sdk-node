import { sajari } from "../generated/proto";
import { APIClient, CallOptions } from "./api";

/**
 * grpc method endpoint for consuming an interaction token
 * @hidden
 */
export const ConsumeInteractionEndpoint =
  "sajari.interaction.v2.Interaction/ConsumeToken";

export class Interaction {
  /**
   * @hidden
   */
  private client: APIClient;

  constructor(client: APIClient) {
    this.client = client;
  }

  public async consume(
    token: string,
    info: {
      identifier: string;
      weight: number;
      data?: { [k: string]: string };
    },
    opts: CallOptions = {}
  ) {
    const request = sajari.interaction.v2.ConsumeTokenRequest.create({
      token,
      ...info
    });

    await this.client.call(
      ConsumeInteractionEndpoint,
      request,
      sajari.interaction.v2.ConsumeTokenRequest.encode,
      sajari.interaction.v2.ConsumeTokenResponse.decode,
      opts
    );
  }
}

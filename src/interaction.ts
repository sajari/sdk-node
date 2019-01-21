import { APIClient, CallOptions } from "./api";
import { sajari } from "../generated/proto";

/**
 * grpc method endpoint for consuming an interaction token
 * @hidden
 */
export const ConsumeInteractionEndpoint =
  "sajari.api.interaction.Interaction/Consume";

export class Interaction {
  /**
   * @hidden
   */
  private client: APIClient;

  constructor(client: APIClient) {
    this.client = client;
  }

  async consume(
    req: {
      token: string;
      identifier: string;
      weight: number;
      data: { [k: string]: string };
    },
    opts: CallOptions = {}
  ) {
    const request = sajari.api.interaction.ConsumeRequest.create(req);

    await this.client.call(
      ConsumeInteractionEndpoint,
      request,
      sajari.api.interaction.ConsumeRequest.encode,
      sajari.rpc.Empty.decode,
      opts
    );
  }
}

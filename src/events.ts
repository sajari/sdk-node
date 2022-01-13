import { Client } from "./client";
import { EventsApi, SendEventRequest } from "./generated/api";
import { clientUserAgentHeader, clientUserAgent } from "./user-agent";
import { handleError } from "./api-util";

export { withEndpoint, withKeyCredentials } from "./client";

export class EventsClient extends Client {
  client: EventsApi;

  constructor(...options: Array<(client: Client) => void>) {
    super(...options);

    this.client = new EventsApi(this.endpoint);
    this.client.username = this.keyId;
    this.client.password = this.keySecret;
    this.client.defaultHeaders = {
      [clientUserAgentHeader]: clientUserAgent(),
    };
  }

  async sendEvent(accountId: string, args: SendEventRequest) {
    try {
      const res = await this.client.sendEvent(args, {
        headers: {
          "Account-Id": accountId,
        },
      });
      return res.body;
    } catch (e) {
      throw handleError(e);
    }
  }
}

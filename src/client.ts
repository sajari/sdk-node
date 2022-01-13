export const withEndpoint = (endpoint: string) => (client: Client) => {
  client.endpoint = endpoint;
};

export const withKeyCredentials =
  (keyId: string, keySecret: string) => (client: Client) => {
    client.keyId = keyId;
    client.keySecret = keySecret;
  };

export abstract class Client {
  endpoint: string = "";
  keyId: string = "";
  keySecret: string = "";

  constructor(...options: Array<(client: Client) => void>) {
    for (const opt of options) {
      opt(this);
    }
  }
}

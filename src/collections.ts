import ksuid from "ksuid";

import {
  CollectionsApi,
  HttpError,
  V4QueryCollectionRequest,
} from "../src/generated/api";
import { Client } from "./client";

export { withEndpoint, withKeyCredentials } from "./client";

export class CollectionsClient extends Client {
  client: CollectionsApi;

  constructor(...options: Array<(client: Client) => void>) {
    super(...options);

    this.client = new CollectionsApi(this.endpoint);
    this.client.username = this.keyId;
    this.client.password = this.keySecret;
  }

  async getCollection(id: string) {
    const res = await this.client.getCollection(id);
    return res.body;
  }

  async listCollections({
    pageSize,
    pageToken,
  }: {
    pageSize?: number;
    pageToken?: string;
  }) {
    try {
      const res = await this.client.listCollections(pageSize, pageToken);
      return res.body;
    } catch (e) {
      if (e instanceof HttpError) {
        console.error(JSON.stringify(e.response));
        // TODO(jingram): Wrap common errors.
      }
      throw e;
    }
  }

  async createCollection({
    // FIXME(jingram): ideally want to use _, but it's not allowed.
    id = `col-${ksuid.randomSync().string}`,
    displayName,
  }: {
    id?: string;
    displayName: string;
  }) {
    try {
      const res = await this.client.createCollection(id, { displayName });
      return res.body;
    } catch (e) {
      if (e instanceof HttpError) {
        console.error(JSON.stringify(e.response));
        // TODO(jingram): Wrap common errors., e.g. already exists.
      }
      throw e;
    }
  }

  async queryCollection(id: string, request: V4QueryCollectionRequest) {
    const res = await this.client.queryCollection(id, request);
    return res.body;
  }

  async deleteCollection(id: string) {
    const res = await this.client.deleteCollection(id);
    return res.body;
  }
}

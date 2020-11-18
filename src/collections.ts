import ksuid from "ksuid";

import {
  CollectionsApi,
  HttpError,
  V4Collection,
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
    // TODO(jingram): Ideally want to use _, but it's not allowed.
    // TODO(jingram): Remove lowercasing once API allows it.
    id = `col-${ksuid.randomSync().string.toLowerCase()}`,
    displayName,
  }: {
    id?: string;
    displayName: string;
  }) {
    try {
      const res = await this.client.createCollection(id, { displayName });
      // OpenAPI readonly fields become optional TS fields, but we know the API
      // will return it, so use ! to fix the types. This is done so upstream
      // users don't have to do this.
      return { ...res.body, id: res.body.id! };
    } catch (e) {
      if (e instanceof HttpError) {
        console.error(JSON.stringify(e.response));
        // TODO(jingram): Wrap common errors., e.g. already exists.
      }
      throw e;
    }
  }

  async updateCollection(
    id: string,
    ...options: Array<
      (c: V4Collection, updateMask: Record<string, boolean>) => void
    >
  ) {
    try {
      const c: V4Collection = {
        displayName: "",
      };
      const updateMask: Record<string, boolean> = {};

      for (const opt of options) {
        opt(c, updateMask);
      }

      const um = Object.keys(updateMask).map((field) => field);

      const res = await this.client.updateCollection(id, c, um.join(","));
      // OpenAPI readonly fields become optional TS fields, but we know the API
      // will return it, so use ! to fix the types. This is done so upstream
      // users don't have to do this.
      return { ...res.body, id: res.body.id! };
    } catch (e) {
      if (e instanceof HttpError) {
        console.error(JSON.stringify(e.response));
        // TODO(jingram): Wrap common errors.
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

export const setCollectionDisplayName = (displayName: string) => (
  c: V4Collection,
  updateMask: Record<string, boolean>
) => {
  c.displayName = displayName;
  updateMask["display_name"] = true;
};

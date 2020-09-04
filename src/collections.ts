import { Client } from "./client";
import {
  CollectionsApi,
  HttpError,
  V4alpha1QueryCollectionRequest,
} from "../src/generated/api";
export { withEndpoint, withKeyCredentials } from "./client";

export class CollectionsClient extends Client {
  client: CollectionsApi;

  constructor(accountId: string, ...options: Array<(client: Client) => void>) {
    super(accountId, ...options);

    this.client = new CollectionsApi(this.endpoint);
    this.client.username = this.keyId;
    this.client.password = this.keySecret;
  }

  async getCollection(id: string) {
    const res = await this.client.getCollection(this.accountId, id);
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
      const res = await this.client.listCollections(
        this.accountId,
        pageSize,
        pageToken
      );
      return res.body;
    } catch (e) {
      if (e instanceof HttpError) {
        console.error(JSON.stringify(e.response));
        // TODO: wrap common errors
      }
      throw e;
    }
  }

  async createCollection({
    id,
    displayName,
  }: {
    id: string;
    displayName: string;
  }) {
    try {
      const res = await this.client.createCollection(this.accountId, id, {
        displayName,
      });
      return res.body;
    } catch (e) {
      if (e instanceof HttpError) {
        console.error(JSON.stringify(e.response));
        // TODO: wrap common errors, e.g. already exists
      }
      throw e;
    }
  }

  async queryCollection(
    id: string,
    request: Omit<V4alpha1QueryCollectionRequest, "pipeline">,
    pipeline?: { name: string; version: string }
  ) {
    const res = await this.client.queryCollection(this.accountId, id, {
      ...request,
      pipeline,
    });
    return res.body;
  }

  // async updateCollection(
  //   id: string,
  //   { displayName }: { displayName: string },
  //   updateMaskPaths: string[]
  // ) {
  //   try {
  //     const res = await this.client.updateCollection(
  //       this.accountId,
  //       id,
  //       {
  //         displayName,
  //       },
  //       updateMaskPaths
  //     );
  //     return res.body;
  //   } catch (e) {
  //     if (e instanceof HttpError) {
  //       console.error(JSON.stringify(e.response));
  //       // TODO: wrap common errors, e.g. already exists
  //     }
  //     throw e;
  //   }
  // }

  async deleteCollection(id: string) {
    const res = await this.client.deleteCollection(this.accountId, id);
    return res.body;
  }
}

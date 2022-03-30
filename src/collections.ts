import { Client } from "./client";
import {
  CollectionsApi,
  Collection,
  QueryCollectionRequest,
  Event
} from "./generated/api";
import { clientUserAgentHeader, clientUserAgent } from "./user-agent";
import { handleError } from "./api-util";

export { withEndpoint, withKeyCredentials } from "./client";

type HeaderOptions = { headers: { [name: string]: string }};

export class CollectionsClient extends Client {
  client: CollectionsApi;

  constructor(...options: Array<(client: Client) => void>) {
    super(...options);

    this.client = new CollectionsApi(this.endpoint);
    this.client.username = this.keyId;
    this.client.password = this.keySecret;
    this.client.defaultHeaders = {
      [clientUserAgentHeader]: clientUserAgent(),
    };
    this.client.addInterceptor(opts => {
      opts.forever = true;
    })
  }

  async getCollection(id: string) {
    try {
      const res = await this.client.getCollection(id);
      return res.body;
    } catch (e) {
      throw handleError(e);
    }
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
      throw handleError(e);
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
      const res = await this.client.createCollection(id, { displayName });
      // OpenAPI readonly fields become optional TS fields, but we know the API
      // will return it, so use ! to fix the types. This is done so upstream
      // users don't have to do this.
      return { ...res.body, id: res.body.id! };
    } catch (e) {
      throw handleError(e);
    }
  }

  async updateCollection(
    id: string,
    ...options: Array<
      (c: Collection, updateMask: Record<string, boolean>) => void
    >
  ) {
    const c: Collection = {
      displayName: "",
    };
    const updateMask: Record<string, boolean> = {};

    for (const opt of options) {
      opt(c, updateMask);
    }

    const um = Object.keys(updateMask).map((field) => field);

    try {
      const res = await this.client.updateCollection(id, um.join(","), c);
      // OpenAPI readonly fields become optional TS fields, but we know the API
      // will return it, so use ! to fix the types. This is done so upstream
      // users don't have to do this.
      return { ...res.body, id: res.body.id! };
    } catch (e) {
      throw handleError(e);
    }
  }

  async queryCollection(id: string, request: QueryCollectionRequest) {
    try {
      const res = await this.client.queryCollection(id, request);
      return res.body;
    } catch (e) {
      throw handleError(e);
    }
  }

  async deleteCollection(id: string) {
    try {
      const res = await this.client.deleteCollection(id);
      return res.body;
    } catch (e) {
      throw handleError(e);
    }
  }

  async trackEvent(accountId: string, collectionId: string, event: Event, options?: HeaderOptions) {
    try {
      const res = await this.client.trackEvent(accountId, collectionId, event, options);
      return res.body;
    } catch (e) {
      throw handleError(e);
    }
  }
}

export const setCollectionDisplayName =
  (displayName: string) =>
  (c: Collection, updateMask: Record<string, boolean>) => {
    c.displayName = displayName;
    updateMask["display_name"] = true;
  };

export const setCollectionAuthorizedQueryDomains =
  (domains: string[]) =>
  (c: Collection, updateMask: Record<string, boolean>) => {
    c.authorizedQueryDomains = domains;
    updateMask["authorized_query_domains"] = true;
  };

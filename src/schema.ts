import { Client } from "./client";
import { SchemaApi, SchemaField } from "./generated/api";
import { clientUserAgentHeader, clientUserAgent } from "./user-agent";
import { handleError } from "./api-util";

export { withEndpoint, withKeyCredentials } from "./client";

export class SchemaClient extends Client {
  collectionId: string;

  client: SchemaApi;

  constructor(
    collectionId: string,
    ...options: Array<(client: Client) => void>
  ) {
    super(...options);

    this.collectionId = collectionId;

    this.client = new SchemaApi(this.endpoint);
    this.client.username = this.keyId;
    this.client.password = this.keySecret;
    this.client.defaultHeaders = {
      [clientUserAgentHeader]: clientUserAgent(),
    };
    this.client.addInterceptor(opts => {
      opts.forever = true;
    })
  }

  async listFields({
    accountId,
    parent,
    pageSize,
    pageToken,
  }: {
    accountId?: string;
    parent?: string;
    pageSize?: number;
    pageToken?: string;
  }) {
    try {
      const res = await this.client.listSchemaFields(
        this.collectionId,
        parent,
        accountId,
        pageSize,
        pageToken
      );
      return res.body;
    } catch (e) {
      throw handleError(e);
    }
  }

  async createField(field: SchemaField) {
    try {
      const res = await this.client.createSchemaField(this.collectionId, field);
      return res.body;
    } catch (e) {
      throw handleError(e);
    }
  }

  async batchCreateFields({ fields = [] }: { fields: SchemaField[] }) {
    try {
      const res = await this.client.batchCreateSchemaFields(this.collectionId, {
        fields,
      });
      return res.body;
    } catch (e) {
      throw handleError(e);
    }
  }

  async updateField(
    fieldName: string,
    field: SchemaField,
    ...options: Array<
      (updateMask?: Record<string, boolean>) => void
    >
  ) {
    const updateMask: Record<string, boolean> = {};

    for (const opt of options) {
      opt(updateMask);
    }

    const um = Object.keys(updateMask).map((field) => field);

    try {
      const res = await this.client.updateSchemaField(this.collectionId, fieldName, field, um.join(","));
      return res.body;
    } catch (e) {
      throw handleError(e);
    }
  }

  async deleteField(fieldName: string) {
    try {
      const res = await this.client.deleteSchemaField(this.collectionId, fieldName);
      return res.body;
    } catch (e) {
      throw handleError(e);
    }
  }
}

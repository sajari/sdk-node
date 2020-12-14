import { Client } from "./client";
import { SchemaApi, SchemaField } from "../src/generated/api";

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
  }

  async listFields({
    pageSize,
    pageToken,
  }: {
    pageSize?: number;
    pageToken?: string;
  }) {
    const res = await this.client.listSchemaFields(
      this.collectionId,
      pageSize,
      pageToken
    );
    return res.body;
  }

  async createField(field: SchemaField) {
    const res = await this.client.createSchemaField(this.collectionId, field);
    return res.body;
  }

  async batchCreateFields({ fields = [] }: { fields: SchemaField[] }) {
    const res = await this.client.batchCreateSchemaFields(this.collectionId, {
      fields,
    });
    return res.body;
  }
}

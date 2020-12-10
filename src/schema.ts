import { Client } from "./client";
import { SchemaApi, HttpError, SchemaField } from "../src/generated/api";

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
    try {
      const res = await this.client.listSchemaFields(
        this.collectionId,
        pageSize,
        pageToken
      );
      return res.body;
    } catch (e) {
      if (e instanceof HttpError) {
        console.error(JSON.stringify(e.response));
        // TODO(jingram): Wrap common errors.
      }
      throw e;
    }
  }

  async createField(field: SchemaField) {
    try {
      const res = await this.client.createSchemaField(this.collectionId, field);
      return res.body;
    } catch (e) {
      if (e instanceof HttpError) {
        console.error(JSON.stringify(e.response));
        // TODO(jingram): Wrap common errors.
      }
      throw e;
    }
  }

  async batchCreateFields({ fields = [] }: { fields: SchemaField[] }) {
    try {
      const res = await this.client.batchCreateSchemaFields(this.collectionId, {
        fields,
      });
      return res.body;
    } catch (e) {
      if (e instanceof HttpError) {
        console.error(JSON.stringify(e.response));
        // TODO(jingram): Wrap common errors.
      }
      throw e;
    }
  }
}

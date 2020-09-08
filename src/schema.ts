import { Client } from "./client";
import {
  SchemaApi,
  HttpError,
  V4alpha1SchemaField1,
  V4alpha1InferSchemaRequest,
} from "../src/generated/api";

export { withEndpoint, withKeyCredentials } from "./client";

export class SchemaClient extends Client {
  collectionId: string;

  client: SchemaApi;

  constructor(
    accountId: string,
    collectionId: string,
    ...options: Array<(client: Client) => void>
  ) {
    super(accountId, ...options);

    this.collectionId = collectionId;

    this.client = new SchemaApi(this.endpoint);
    this.client.username = this.keyId;
    this.client.password = this.keySecret;
  }

  async inferSchema(request: V4alpha1InferSchemaRequest) {
    const res = await this.client.inferSchema(this.accountId, request);
    return res.body;
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
        this.accountId,
        this.collectionId,
        pageSize,
        pageToken
      );
      return res.body;
    } catch (e) {
      if (e instanceof HttpError) {
        console.error(JSON.stringify(e.response));
        // TODO(jingram): wrap common errors
      }
      throw e;
    }
  }

  async createField(field: V4alpha1SchemaField1) {
    try {
      const res = await this.client.createSchemaField(
        this.accountId,
        this.collectionId,
        field
      );
      return res.body;
    } catch (e) {
      if (e instanceof HttpError) {
        console.error(JSON.stringify(e.response));
        // TODO(jingram): wrap common errors
      }
      throw e;
    }
  }

  async batchCreateFields({ fields = [] }: { fields: V4alpha1SchemaField1[] }) {
    try {
      const res = await this.client.batchCreateSchemaFields(
        this.accountId,
        this.collectionId,
        { fields }
      );
      return res.body;
    } catch (e) {
      if (e instanceof HttpError) {
        console.error(JSON.stringify(e.response));
        // TODO(jingram): wrap common errors
      }
      throw e;
    }
  }
}

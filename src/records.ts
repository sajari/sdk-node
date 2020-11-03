import { Client } from "./client";
import {
  RecordsApi,
  HttpError,
  V4beta1UpsertRecordRequest,
  Sajariv4beta1Key,
  V4beta1BatchUpsertRecordsRequest,
} from "../src/generated/api";

export { withEndpoint, withKeyCredentials } from "./client";

export class RecordsClient extends Client {
  collectionId: string;

  client: RecordsApi;

  constructor(
    collectionId: string,
    ...options: Array<(client: Client) => void>
  ) {
    super(...options);

    this.collectionId = collectionId;

    this.client = new RecordsApi(this.endpoint);
    this.client.username = this.keyId;
    this.client.password = this.keySecret;
  }

  async getRecord(key: Sajariv4beta1Key) {
    try {
      const res = await this.client.getRecord(this.collectionId, { key });
      return res.body;
    } catch (e) {
      if (e instanceof HttpError) {
        console.error(JSON.stringify(e.response));
        // TODO(jingram): wrap common errors
      }
      throw e;
    }
  }

  async upsertRecord(request: V4beta1UpsertRecordRequest) {
    try {
      const res = await this.client.upsertRecord(this.collectionId, request);
      return res.body;
    } catch (e) {
      if (e instanceof HttpError) {
        console.error(JSON.stringify(e.response));
        // TODO(jingram): wrap common errors
      }
      throw e;
    }
  }

  async batchUpsertRecords(
    request: Omit<V4beta1BatchUpsertRecordsRequest, "records"> & {
      records: object[];
    }
  ) {
    try {
      const res = await this.client.batchUpsertRecords(this.collectionId, request);
      return res.body;
    } catch (e) {
      if (e instanceof HttpError) {
        console.error(JSON.stringify(e.response));
        // TODO(jingram): wrap common errors
      }
      throw e;
    }
  }

  async deleteRecord(key: Sajariv4beta1Key) {
    try {
      const res = await this.client.deleteRecord(this.collectionId, { key });
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

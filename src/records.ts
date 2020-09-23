import { Client } from "./client";
import {
  RecordsApi,
  HttpError,
  V4beta1PutRecordRequest,
  Sajariv4beta1Key,
  V4beta1BatchPutRecordsRequest,
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

  async putRecord(request: V4beta1PutRecordRequest) {
    try {
      const res = await this.client.putRecord(this.collectionId, request);
      return res.body;
    } catch (e) {
      if (e instanceof HttpError) {
        console.error(JSON.stringify(e.response));
        // TODO(jingram): wrap common errors
      }
      throw e;
    }
  }

  async batchPutRecords(
    request: Omit<V4beta1BatchPutRecordsRequest, "records"> & {
      records: object[];
    }
  ) {
    try {
      const res = await this.client.batchPutRecords(this.collectionId, request);
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

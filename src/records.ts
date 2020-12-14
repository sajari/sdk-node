import { Client } from "./client";
import {
  RecordsApi,
  UpsertRecordRequest,
  RecordKey,
  BatchUpsertRecordsRequest,
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

  async getRecord(key: RecordKey) {
    const res = await this.client.getRecord(this.collectionId, { key });
    return res.body;
  }

  async upsertRecord(request: UpsertRecordRequest) {
    const res = await this.client.upsertRecord(this.collectionId, request);
    // OpenAPI readonly fields become optional TS fields, but we know the API
    // will return it, so use ! to fix the types. This is done so upstream
    // users don't have to do this.
    return { ...res.body, key: res.body.key! };
  }

  async batchUpsertRecords(
    request: Omit<BatchUpsertRecordsRequest, "records"> & {
      records: object[];
    }
  ) {
    const res = await this.client.batchUpsertRecords(
      this.collectionId,
      request
    );
    return res.body;
  }

  async deleteRecord(key: RecordKey) {
    const res = await this.client.deleteRecord(this.collectionId, { key });
    return res.body;
  }
}

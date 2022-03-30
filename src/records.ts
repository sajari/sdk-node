import { Client } from "./client";
import {
  RecordsApi,
  UpsertRecordRequest,
  RecordKey,
  BatchUpsertRecordsRequest,
} from "./generated/api";
import { clientUserAgentHeader, clientUserAgent } from "./user-agent";
import { handleError } from "./api-util";

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
    this.client.defaultHeaders = {
      [clientUserAgentHeader]: clientUserAgent(),
    };
    this.client.addInterceptor(opts => {
      opts.forever = true;
    })
  }

  async getRecord(key: RecordKey) {
    try {
      const res = await this.client.getRecord(this.collectionId, { key });
      return res.body;
    } catch (e) {
      throw handleError(e);
    }
  }

  async upsertRecord(request: UpsertRecordRequest) {
    try {
      const res = await this.client.upsertRecord(this.collectionId, request);
      // OpenAPI readonly fields become optional TS fields, but we know the API
      // will return it, so use ! to fix the types. This is done so upstream
      // users don't have to do this.
      return { ...res.body, key: res.body.key! };
    } catch (e) {
      throw handleError(e);
    }
  }

  async batchUpsertRecords(
    request: Omit<BatchUpsertRecordsRequest, "records"> & {
      records: object[];
    }
  ) {
    try {
      const res = await this.client.batchUpsertRecords(
        this.collectionId,
        request
      );
      return res.body;
    } catch (e) {
      throw handleError(e);
    }
  }

  async deleteRecord(key: RecordKey) {
    try {
      const res = await this.client.deleteRecord(this.collectionId, { key });
      return res.body;
    } catch (e) {
      throw handleError(e);
    }
  }
}

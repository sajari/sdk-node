import { Client } from "./client";
import {
  RecordsApi,
  HttpError,
  V4alpha1PutRecordRequest,
  Sajariv4alpha1Key,
  V4alpha1BatchPutRecordsRequest,
} from "../src/generated/api";

export { withEndpoint, withKeyCredentials } from "./client";

// TODO: work out how to return the enum int.
const typeToEnum = (x?: string) => {
  switch (x) {
    case "record":
      return 1;
    case "query":
      return 2;
    default:
      return 0;
  }
};

const viewToEnum = (x?: string) => {
  switch (x) {
    case "basic":
      return "PIPELINE_VIEW_BASIC";
    case "full":
      return "PIPELINE_VIEW_FULL";
    default:
      return "PIPELINE_VIEW_UNSPECIFIED";
  }
};

export class RecordsClient extends Client {
  collectionId: string;

  client: RecordsApi;

  constructor(
    accountId: string,
    collectionId: string,
    ...options: Array<(client: Client) => void>
  ) {
    super(accountId, ...options);

    this.collectionId = collectionId;

    this.client = new RecordsApi(this.endpoint);
    this.client.username = this.keyId;
    this.client.password = this.keySecret;
  }

  async getRecord(key: Sajariv4alpha1Key) {
    try {
      const res = await this.client.getRecord(
        this.accountId,
        this.collectionId,
        { key }
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

  async putRecord(request: V4alpha1PutRecordRequest) {
    try {
      const res = await this.client.putRecord(
        this.accountId,
        this.collectionId,
        request
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

  async batchPutRecords(
    request: Omit<V4alpha1BatchPutRecordsRequest, "records"> & {
      records: object[];
    }
  ) {
    try {
      const res = await this.client.batchPutRecords(
        this.accountId,
        this.collectionId,
        request
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

  async deleteRecord(key: Sajariv4alpha1Key) {
    try {
      const res = await this.client.deleteRecord(
        this.accountId,
        this.collectionId,
        { key }
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
}

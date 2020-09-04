import { Client } from "./client";
import {
  PipelinesApi,
  HttpError,
  Sajariv4alpha1Pipeline,
  V4alpha1SetDefaultPipelineRequest,
  V4alpha1GeneratePipelinesRequest,
} from "../src/generated/api";

export { withEndpoint, withKeyCredentials } from "./client";

// TODO: work out how to return the enum int.
export const typeToEnum = (x?: string) => {
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

export class PipelinesClient extends Client {
  collectionId: string;

  client: PipelinesApi;

  constructor(
    accountId: string,
    collectionId: string,
    ...options: Array<(client: Client) => void>
  ) {
    super(accountId, ...options);

    this.collectionId = collectionId;

    this.client = new PipelinesApi(this.endpoint);
    this.client.username = this.keyId;
    this.client.password = this.keySecret;
  }

  async getPipeline({
    type,
    name,
    version,
    view,
  }: {
    type: "record" | "query";
    name: string;
    version: string;
    view?: "basic" | "full";
  }) {
    const res = await this.client.getPipeline(
      this.accountId,
      this.collectionId,
      type,
      name,
      version,
      viewToEnum(view)
    );
    return res.body;
  }

  async listPipelines({
    pageSize,
    pageToken,
    view,
  }: {
    pageSize?: number;
    pageToken?: string;
    view?: "basic" | "full";
  }) {
    try {
      const res = await this.client.listPipelines(
        this.accountId,
        this.collectionId,
        pageSize,
        pageToken,
        viewToEnum(view)
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

  async createPipeline({
    type,
    name,
    version,
    ...rest
  }: {
    type: "record" | "query";
    name: string;
    version: string;
  } & Omit<
    Sajariv4alpha1Pipeline,
    "id" | "type" | "name" | "version" | "createTime"
  >) {
    try {
      const res = await this.client.createPipeline(
        this.accountId,
        this.collectionId,
        {
          type: typeToEnum(type),
          name,
          version,
          ...rest,
        }
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

  async generatePipelines(
    id: string,
    request: V4alpha1GeneratePipelinesRequest
  ) {
    const res = await this.client.generatePipelines(
      this.accountId,
      id,
      request
    );
    return res.body;
  }

  async setDefaultPipeline(
    id: string,
    {
      type,
      ...request
    }: {
      type: "record" | "query";
    } & Omit<V4alpha1SetDefaultPipelineRequest, "type">
  ) {
    const res = await this.client.setDefaultPipeline(this.accountId, id, {
      ...request,
      type: typeToEnum(type),
    });
    return res.body;
  }
}

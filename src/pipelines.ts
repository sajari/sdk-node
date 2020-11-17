import { Client } from "./client";
import {
  PipelinesApi,
  HttpError,
  Sajariv4Pipeline,
  V4SetDefaultPipelineRequest,
  V4GeneratePipelinesRequest,
  V4SetDefaultVersionRequest,
} from "../src/generated/api";

export { withEndpoint, withKeyCredentials } from "./client";

// TODO(jingram): Work out how to return the enum int.
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

export const typeToEnumString = (x?: string) => {
  switch (x) {
    case "record":
      return "RECORD";
    case "query":
      return "QUERY";
    default:
      return "TYPE_UNSPECIFIED";
  }
};

const viewToEnum = (x?: string) => {
  switch (x) {
    case "basic":
      return "BASIC";
    case "full":
      return "FULL";
    default:
      return "VIEW_UNSPECIFIED";
  }
};

export class PipelinesClient extends Client {
  collectionId: string;

  client: PipelinesApi;

  constructor(
    collectionId: string,
    ...options: Array<(client: Client) => void>
  ) {
    super(...options);

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
        this.collectionId,
        pageSize,
        pageToken,
        viewToEnum(view)
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

  async createPipeline({
    type,
    name,
    version,
    ...rest
  }: {
    type: "record" | "query";
    name: string;
    version: string;
  } & Omit<Sajariv4Pipeline, "type" | "name" | "version" | "createTime">) {
    try {
      const res = await this.client.createPipeline(this.collectionId, {
        type: typeToEnum(type),
        name,
        version,
        ...rest,
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

  async generatePipelines(id: string, request: V4GeneratePipelinesRequest) {
    const res = await this.client.generatePipelines(id, request);
    return res.body;
  }

  async setDefaultPipeline({
    type,
    ...request
  }: {
    type: "record" | "query";
  } & Omit<V4SetDefaultPipelineRequest, "type">) {
    try {
      const res = await this.client.setDefaultPipeline(this.collectionId, {
        ...request,
        type: typeToEnum(type),
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

  async getDefaultPipeline({ type }: { type: "record" | "query" }) {
    try {
      const res = await this.client.getDefaultPipeline(
        this.collectionId,
        typeToEnumString(type)
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

  async setDefaultPipelineVersion({
    type,
    name,
    ...request
  }: {
    type: "record" | "query";
    name: string;
  } & V4SetDefaultVersionRequest) {
    try {
      const res = await this.client.setDefaultVersion(
        this.collectionId,
        type,
        name,
        {
          ...request,
        }
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

  async getDefaultPipelineVersion({
    type,
    name,
    view,
  }: {
    type: "record" | "query";
    name: string;
    view: "basic" | "full";
  }) {
    try {
      const res = await this.client.getDefaultVersion(
        this.collectionId,
        type,
        name,
        viewToEnum(view)
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
}

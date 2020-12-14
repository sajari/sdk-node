import { Client } from "./client";
import {
  PipelinesApi,
  Pipeline,
  SetDefaultPipelineRequest,
  GeneratePipelinesRequest,
  SetDefaultVersionRequest,
  PipelineType,
} from "./generated/api";
import { handleError } from "./api-util";

export { withEndpoint, withKeyCredentials } from "./client";

const typeToEnum = (x?: string) => {
  switch (x) {
    case "record":
      return PipelineType.Record;
    case "query":
      return PipelineType.Query;
    default:
      return PipelineType.TypeUnspecified;
  }
};

const typeToEnumString = (x?: string) => {
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
    try {
      const res = await this.client.getPipeline(
        this.collectionId,
        typeToEnumString(type),
        name,
        version,
        viewToEnum(view)
      );
      return res.body;
    } catch (e) {
      throw handleError(e);
    }
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
      throw handleError(e);
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
  } & Omit<Pipeline, "type" | "name" | "version" | "createTime">) {
    try {
      const res = await this.client.createPipeline(this.collectionId, {
        type: typeToEnum(type),
        name,
        version,
        ...rest,
      });
      return res.body;
    } catch (e) {
      throw handleError(e);
    }
  }

  async generatePipelines(id: string, request: GeneratePipelinesRequest) {
    try {
      const res = await this.client.generatePipelines(id, request);
      return res.body;
    } catch (e) {
      throw handleError(e);
    }
  }

  async setDefaultPipeline({
    type,
    ...request
  }: {
    type: "record" | "query";
  } & Omit<SetDefaultPipelineRequest, "type">) {
    try {
      const res = await this.client.setDefaultPipeline(this.collectionId, {
        ...request,
        type: typeToEnum(type),
      });
      return res.body;
    } catch (e) {
      throw handleError(e);
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
      throw handleError(e);
    }
  }

  async setDefaultPipelineVersion({
    type,
    name,
    ...request
  }: {
    type: "record" | "query";
    name: string;
  } & SetDefaultVersionRequest) {
    try {
      const res = await this.client.setDefaultVersion(
        this.collectionId,
        typeToEnumString(type),
        name,
        {
          ...request,
        }
      );
      return res.body;
    } catch (e) {
      throw handleError(e);
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
        typeToEnumString(type),
        name,
        viewToEnum(view)
      );
      return res.body;
    } catch (e) {
      throw handleError(e);
    }
  }
}

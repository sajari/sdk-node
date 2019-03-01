import { APIClient } from "./api";
import { Interaction } from "./interaction";
import { Pipeline, PipelineImpl } from "./pipeline";
import { PipelineIdentifier } from "./pipeline/pipeline";
import { Schema } from "./schema";
import { Store } from "./store/client";

export class Client {
  private client: APIClient;

  constructor(
    project: string,
    collection: string,
    credentials: { key: string; secret: string },
    endpoint?: string
  ) {
    this.client = new APIClient(project, collection, credentials, endpoint);
  }

  public close(): void {
    this.client.close();
  }

  public wait(seconds: number) {
    return this.client.wait(seconds);
  }

  public pipeline(pipeline: PipelineIdentifier): Pipeline {
    return new PipelineImpl(pipeline, this.client);
  }

  public schema(): Schema {
    return new Schema(this.client);
  }

  public store(): Store {
    return new Store(this.client);
  }

  public interaction(): Interaction {
    return new Interaction(this.client);
  }
}

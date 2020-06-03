import { Interaction } from "./interaction";
import { Pipeline } from "./pipeline";
import { PipelineIdentifier } from "./pipeline/pipeline";
import { Schema } from "./schema";
import { Store } from "./store/client";
export declare class Client {
    private client;
    constructor(project: string, collection: string, credentials: {
        key: string;
        secret: string;
    }, endpoint?: string, insecure?: boolean);
    close(): void;
    wait(seconds: number): Promise<void>;
    pipeline(pipeline: PipelineIdentifier): Pipeline;
    schema(): Schema;
    store(): Store;
    interaction(): Interaction;
}

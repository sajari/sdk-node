import {
  PipelinesClient,
  withEndpoint,
  withKeyCredentials,
} from "@sajari/sdk-node";

import program, { withDefaultOptions, withPipelineView } from "./program";
import { handleError } from "./api-util";

withDefaultOptions(program);
withPipelineView(program);

program.requiredOption(
  "--pipeline-type <pipeline_type>",
  "pipeline type",
  "query"
);
program.requiredOption(
  "--pipeline-name <pipeline_name>",
  "pipeline name",
  "my-pipeline"
);

program.parse(process.argv);

async function main(
  endpoint = program.endpoint,
  collectionId = program.collectionId,
  keyId = program.keyId,
  keySecret = program.keySecret,
  pipeline = {
    type: program.pipelineType,
    name: program.pipelineName,
    view: program.pipelineView as "basic" | "full",
  }
) {
  if (!(pipeline.type === "record" || pipeline.type === "query")) {
    throw new Error(`invalid type ${pipeline.type}`);
  }
  if (!(pipeline.view === "basic" || pipeline.view === "full")) {
    throw new Error(`invalid view ${pipeline.view}`);
  }

  try {
    const client = new PipelinesClient(
      collectionId,
      withEndpoint(endpoint),
      withKeyCredentials(keyId, keySecret)
    );

    const resp = await client.getDefaultPipelineVersion(pipeline);

    console.log(JSON.stringify(resp));
  } catch (e) {
    handleError(e);
  }
}

main();

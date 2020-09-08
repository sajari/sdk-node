import {
  PipelinesClient,
  withEndpoint,
  withKeyCredentials,
} from "@sajari/sdk-node";

import program, { withDefaultOptions } from "./program";

withDefaultOptions(program);

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
  accountId = program.accountId,
  collectionId = program.collectionId,
  keyId = program.keyId,
  keySecret = program.keySecret,
  pipeline = {
    type: program.pipelineType,
    pipeline: program.pipelineName,
  }
) {
  if (!(pipeline.type === "record" || pipeline.type === "query")) {
    throw new Error(`invalid type ${pipeline.type}`);
  }

  try {
    const client = new PipelinesClient(
      accountId,
      collectionId,
      withEndpoint(endpoint),
      withKeyCredentials(keyId, keySecret)
    );

    const resp = await client.setDefaultPipeline(pipeline);

    console.log(JSON.stringify(resp));
  } catch (e) {
    console.error(e);
  }
}

main();

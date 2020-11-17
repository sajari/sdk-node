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

program.parse(process.argv);

async function main(
  endpoint = program.endpoint,
  collectionId = program.collectionId,
  keyId = program.keyId,
  keySecret = program.keySecret,
  pipeline = {
    type: program.pipelineType,
  }
) {
  if (!(pipeline.type === "record" || pipeline.type === "query")) {
    throw new Error(`invalid type ${pipeline.type}`);
  }

  try {
    const client = new PipelinesClient(
      collectionId,
      withEndpoint(endpoint),
      withKeyCredentials(keyId, keySecret)
    );

    const resp = await client.getDefaultPipeline(pipeline);

    console.log(JSON.stringify(resp));
  } catch (e) {
    console.error(e);
  }
}

main();

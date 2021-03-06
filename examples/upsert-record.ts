import {
  RecordsClient,
  withEndpoint,
  withKeyCredentials,
} from "@sajari/sdk-node";

import program, { withDefaultOptions } from "./program";
import { handleError } from "./api-util";

withDefaultOptions(program);

program.requiredOption(
  "--pipeline-name <pipeline_name>",
  "pipeline name",
  "my-pipeline"
);
program.requiredOption(
  "--pipeline-version <pipeline_version>",
  "pipeline version",
  "42"
);

program.parse(process.argv);

async function main(
  endpoint = program.endpoint,
  collectionId = program.collectionId,
  keyId = program.keyId,
  keySecret = program.keySecret,
  pipeline = {
    name: program.pipelineName,
    version: program.pipelineVersion,
  }
) {
  try {
    const client = new RecordsClient(
      collectionId,
      withEndpoint(endpoint),
      withKeyCredentials(keyId, keySecret)
    );

    const r = await client.upsertRecord({
      pipeline,
      record: {
        id: `${new Date().getTime()}`,
        title: "my title",
      },
    });

    console.log(`key=${JSON.stringify(r.key)}`);
  } catch (e) {
    handleError(e);
  }
}

main();

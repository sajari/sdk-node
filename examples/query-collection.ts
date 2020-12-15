import {
  CollectionsClient,
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
program.requiredOption("--query <query>", "search terms", "hello, world");

program.parse(process.argv);

async function main(
  endpoint = program.endpoint,
  collectionId = program.collectionId,
  keyId = program.keyId,
  keySecret = program.keySecret,
  pipeline = {
    name: program.pipelineName,
    version: program.pipelineVersion,
  },
  q = program.query
) {
  try {
    const client = new CollectionsClient(
      withEndpoint(endpoint),
      withKeyCredentials(keyId, keySecret)
    );

    const resp = await client.queryCollection(collectionId, {
      variables: {
        q,
      },
      pipeline,
    });

    console.log("pipeline=", resp.pipeline);
    console.log("variables=", resp.variables);
    console.log("processing duration=", resp.processingDuration);
    console.log("results=", resp.results);
    console.log("aggregates=", resp.aggregates);
    console.log("aggregate filters=", resp.aggregateFilters);
  } catch (e) {
    handleError(e);
  }
}

main();

import {
  CollectionsClient,
  withEndpoint,
  withKeyCredentials,
} from "@sajari/sdk-node";

import program, { withDefaultOptions } from "./program";

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
  accountId = program.accountId,
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
      accountId,
      withEndpoint(endpoint),
      withKeyCredentials(keyId, keySecret)
    );

    const resp = await client.queryCollection(
      collectionId,
      {
        query: {
          q,
        },
      },
      pipeline
    );

    console.log("query results:");
    console.log(" reads=", resp.queryResults?.reads);
    console.log(" total results=", resp.queryResults?.totalResults);
    console.log(" latency=", resp.queryResults?.latency);
    console.log(" results=", resp.queryResults?.results);
  } catch (e) {
    console.error(e);
  }
}

main();

import {
  PipelinesClient,
  withEndpoint,
  withKeyCredentials,
} from "@sajari/sdk-node";

import program, { withDefaultOptions } from "./program";

withDefaultOptions(program);

program.requiredOption(
  "--searchable-fields <searchable_fields>",
  "searchable fields",
  "title,company,description"
);

program.requiredOption(
  "--query-training-fields <query_training_fields>",
  "query training fields",
  ""
);

program.parse(process.argv);

async function main(
  endpoint = program.endpoint,
  accountId = program.accountId,
  collectionId = program.collectionId,
  keyId = program.keyId,
  keySecret = program.keySecret,
  searchableFields = program.searchableFields,
  queryTrainingFields = program.queryTrainingFields
) {
  try {
    const client = new PipelinesClient(
      accountId,
      collectionId,
      withEndpoint(endpoint),
      withKeyCredentials(keyId, keySecret)
    );

    const resp = await client.generatePipelines(collectionId, {
      searchableFields: searchableFields ? searchableFields.split(",") : [],
      queryTrainingFields: queryTrainingFields
        ? queryTrainingFields.split(",")
        : [],
    });

    console.log(
      `record pipeline=${JSON.stringify(resp.recordPipeline, null, "  ")}`
    );
    console.log(
      `query pipeline=${JSON.stringify(resp.queryPipeline, null, "  ")}`
    );
  } catch (e) {
    console.error(e);
  }
}

main();

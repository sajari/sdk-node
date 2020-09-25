import {
  CollectionsClient,
  withEndpoint,
  withKeyCredentials,
} from "@sajari/sdk-node";

import program, { withAccountOptions } from "./program";

withAccountOptions(program);

program.requiredOption(
  "--collection-id <collection_id>",
  "collection ID",
  `example-test-${new Date().getTime()}`
);

program.parse(process.argv);

async function main(
  endpoint = program.endpoint,
  keyId = program.keyId,
  keySecret = program.keySecret,
  id = program.collectionId
) {
  const client = new CollectionsClient(
    withEndpoint(endpoint),
    withKeyCredentials(keyId, keySecret)
  );

  try {
    await client.deleteCollection(id);
  } catch (e) {
    console.error(e);
  }
}

main();

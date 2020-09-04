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

async function main(
  endpoint = program.endpoint,
  accountId = program.accountId,
  keyId = program.keyId,
  keySecret = program.keySecret,
  id = program.collectionId
) {
  const client = new CollectionsClient(
    accountId,
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

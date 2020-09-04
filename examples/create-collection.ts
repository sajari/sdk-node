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
program.requiredOption(
  "--display-name <display_name>",
  "display name",
  `example test ${new Date().getTime()}`
);

program.parse(process.argv);

async function main(
  endpoint = program.endpoint,
  accountId = program.accountId,
  keyId = program.keyId,
  keySecret = program.keySecret,
  id = program.collectionId,
  displayName = program.displayName
) {
  const client = new CollectionsClient(
    accountId,
    withEndpoint(endpoint),
    withKeyCredentials(keyId, keySecret)
  );

  try {
    const collection = await client.createCollection({ id, displayName });

    console.log(`id=${collection.id}`);
    console.log(`account id=${collection.accountId}`);
    console.log(`create time=${collection.createTime}`);
    console.log(`display name=${collection.displayName}`);

    // Clean up
    await client.deleteCollection(id);
  } catch (e) {
    console.error(e);
  }
}

main();

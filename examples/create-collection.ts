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
  "my-collection"
);

program.requiredOption(
  "--collection-display-name <collection_display_name>",
  "collection display name",
  "My collection"
);

program.parse(process.argv);

async function main(
  endpoint = program.endpoint,
  keyId = program.keyId,
  keySecret = program.keySecret,
  collectionId = program.collectionId,
  displayName = program.collectionDisplayName
) {
  const client = new CollectionsClient(
    withEndpoint(endpoint),
    withKeyCredentials(keyId, keySecret)
  );

  try {
    const collection = await client.createCollection({
      id: collectionId,
      displayName,
    });

    console.log(`id=${collection.id}`);
    console.log(`account id=${collection.accountId}`);
    console.log(`create time=${collection.createTime}`);
    console.log(`display name=${collection.displayName}`);
    console.log(
      `authorized query domains=${collection.authorizedQueryDomains}`
    );

    // Clean up
    await client.deleteCollection(collection.id);
  } catch (e) {
    console.error(e);
  }
}

main();

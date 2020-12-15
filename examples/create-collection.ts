import {
  CollectionsClient,
  withEndpoint,
  withKeyCredentials,
} from "@sajari/sdk-node";

import program, { withAccountOptions } from "./program";
import { handleError } from "./api-util";

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
  collection = {
    id: program.collectionId,
    displayName: program.collectionDisplayName,
  }
) {
  const client = new CollectionsClient(
    withEndpoint(endpoint),
    withKeyCredentials(keyId, keySecret)
  );

  try {
    const c = await client.createCollection(collection);

    console.log(`id=${c.id}`);
    console.log(`account id=${c.accountId}`);
    console.log(`create time=${c.createTime}`);
    console.log(`display name=${c.displayName}`);
    console.log(`authorized query domains=${c.authorizedQueryDomains}`);

    // Clean up
    await client.deleteCollection(c.id);
  } catch (e) {
    handleError(e);
  }
}

main();

import {
  CollectionsClient,
  withEndpoint,
  withKeyCredentials,
  withUpdateCollectionDisplayName,
} from "@sajari/sdk-node";

import program, { withDefaultOptions } from "./program";

withDefaultOptions(program);

program.requiredOption(
  "--display-name <display_name>",
  "display name",
  "My collection (updated)"
);

program.parse(process.argv);

async function main(
  endpoint = program.endpoint,
  collectionId = program.collectionId,
  keyId = program.keyId,
  keySecret = program.keySecret,
  displayName = program.displayName
) {
  const client = new CollectionsClient(
    withEndpoint(endpoint),
    withKeyCredentials(keyId, keySecret)
  );

  try {
    const collection = await client.updateCollection(
      collectionId,
      withUpdateCollectionDisplayName(displayName)
    );

    console.log(`id=${collection.id}`);
    console.log(`account id=${collection.accountId}`);
    console.log(`create time=${collection.createTime}`);
    console.log(`display name=${collection.displayName}`);
  } catch (e) {
    console.error(e);
  }
}

main();

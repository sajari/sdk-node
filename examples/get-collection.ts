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
  `example-test-${new Date().getTime()}`
);

program.parse(process.argv);

async function main(
  endpoint = program.endpoint,
  keyId = program.keyId,
  keySecret = program.keySecret,
  id = program.collectionId
) {
  try {
    const client = new CollectionsClient(
      withEndpoint(endpoint),
      withKeyCredentials(keyId, keySecret)
    );

    const collection = await client.getCollection(id);

    console.log(`id=${collection.id}`);
    console.log(`account id=${collection.accountId}`);
    console.log(`create time=${collection.createTime}`);
    console.log(`display name=${collection.displayName}`);
    console.log(
      `authorized query domains=${collection.authorizedQueryDomains}`
    );
  } catch (e) {
    handleError(e);
  }
}

main();

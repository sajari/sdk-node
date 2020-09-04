import {
  CollectionsClient,
  withEndpoint,
  withKeyCredentials,
} from "@sajari/sdk-node";

import program, { withAccountOptions, withPaginationOptions } from "./program";

withAccountOptions(program);
withPaginationOptions(program);

async function main(
  endpoint = program.endpoint,
  accountId = program.accountId,
  keyId = program.keyId,
  keySecret = program.keySecret,
  pageSize = program.pageSize,
  pageToken = program.pageToken
) {
  try {
    const client = new CollectionsClient(
      accountId,
      withEndpoint(endpoint),
      withKeyCredentials(keyId, keySecret)
    );

    const resp = await client.listCollections({ pageSize, pageToken });

    console.log(`next page token=${resp.nextPageToken}`);

    for (const c of resp.collections ?? []) {
      console.log("------------------------");
      console.log(`id=${c.id}`);
      console.log(`account id=${c.accountId}`);
      console.log(`create time=${c.createTime}`);
      console.log(`display name=${c.displayName}`);
    }
  } catch (e) {
    console.error(e);
  }
}

main();

import {
  SchemaClient,
  withEndpoint,
  withKeyCredentials,
} from "@sajari/sdk-node";

import program, { withDefaultOptions, withPaginationOptions } from "./program";

withDefaultOptions(program);
withPaginationOptions(program);

program.parse(process.argv);

async function main(
  endpoint = program.endpoint,
  collectionId = program.collectionId,
  keyId = program.keyId,
  keySecret = program.keySecret,
  pageSize = program.pageSize,
  pageToken = program.pageToken
) {
  try {
    const client = new SchemaClient(
      collectionId,
      withEndpoint(endpoint),
      withKeyCredentials(keyId, keySecret)
    );

    const resp = await client.listFields({ pageSize, pageToken });

    console.log(`next page token=${resp.nextPageToken}`);

    for (const v of resp.schemaFields ?? []) {
      console.log("------------------------");
      console.log(`name=${v.name}`);
      console.log(`type=${v.type}${v.list ? "[]" : ""}`);
      console.log(`mode=${v.mode}`);
      console.log(`description=${v.description}`);
    }
  } catch (e) {
    console.error(e);
  }
}

main();

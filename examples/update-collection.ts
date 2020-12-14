import {
  CollectionsClient,
  withEndpoint,
  withKeyCredentials,
  setCollectionDisplayName,
  setCollectionAuthorizedQueryDomains,
} from "@sajari/sdk-node";

import program, { withDefaultOptions } from "./program";
import { handleError } from "./api-util";

withDefaultOptions(program);

program.requiredOption<null | string>(
  "--display-name [display_name]",
  "display name",
  (value: string, previous: null | string) => value,
  null
);
program.requiredOption<null | string[]>(
  "--authorized-query-domains [authorized_query_domains]",
  "authorized query domains overwriting all existing domains",
  (value: string, previous: null | string[]) =>
    value.split(",").filter(Boolean),
  null
);

program.parse(process.argv);

async function main(
  endpoint = program.endpoint,
  collectionId = program.collectionId,
  keyId = program.keyId,
  keySecret = program.keySecret,
  displayName: null | string = program.displayName,
  authorizedQueryDomains: null | string[] = program.authorizedQueryDomains
) {
  const client = new CollectionsClient(
    withEndpoint(endpoint),
    withKeyCredentials(keyId, keySecret)
  );

  try {
    const opts = [];
    if (displayName !== null) {
      opts.push(setCollectionDisplayName(displayName));
    }
    if (authorizedQueryDomains) {
      opts.push(setCollectionAuthorizedQueryDomains(authorizedQueryDomains));
    }

    if (opts.length === 0) {
      throw new Error("specify at least one field to update");
    }

    const collection = await client.updateCollection(collectionId, ...opts);

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

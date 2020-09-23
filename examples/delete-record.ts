import {
  RecordsClient,
  withEndpoint,
  withKeyCredentials,
} from "@sajari/sdk-node";

import program, { withDefaultOptions } from "./program";

withDefaultOptions(program);

program.requiredOption(
  "--record-key-field <record_key_field>",
  "record key field",
  "id"
);
program.requiredOption(
  "--record-key-value <record_key_value>",
  "record key value",
  "1234"
);

program.parse(process.argv);

async function main(
  endpoint = program.endpoint,
  collectionId = program.collectionId,
  keyId = program.keyId,
  keySecret = program.keySecret,
  recordKeyField = program.recordKeyField,
  recordKeySecret = program.recordKeyValue
) {
  try {
    const client = new RecordsClient(
      collectionId,
      withEndpoint(endpoint),
      withKeyCredentials(keyId, keySecret)
    );

    await client.deleteRecord({
      field: recordKeyField,
      value: recordKeySecret,
    });
  } catch (e) {
    console.error(e);
  }
}

main();

import {
  RecordsClient,
  withEndpoint,
  withKeyCredentials,
} from "@sajari/sdk-node";

import program, { withDefaultOptions } from "./program";
import { handleError } from "./api-util";

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

    const r = await client.getRecord({
      field: recordKeyField,
      value: recordKeySecret,
    });

    for (const [k, v] of Object.entries(r)) {
      console.log(`${k}=${JSON.stringify(v)}`);
    }
  } catch (e) {
    handleError(e);
  }
}

main();

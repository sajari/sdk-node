import {
  SchemaClient,
  withEndpoint,
  withKeyCredentials,
  SchemaFieldType,
  SchemaFieldMode,
} from "@sajari/sdk-node";

import program, { withDefaultOptions } from "./program";

withDefaultOptions(program);

program.parse(process.argv);

async function main(
  endpoint = program.endpoint,
  accountId = program.accountId,
  collectionId = program.collectionId,
  keyId = program.keyId,
  keySecret = program.keySecret
) {
  try {
    const client = new SchemaClient(
      accountId,
      collectionId,
      withEndpoint(endpoint),
      withKeyCredentials(keyId, keySecret)
    );

    const resp = await client.batchCreateFields({
      fields: [
        {
          name: "salary",
          description: "",
          type: SchemaFieldType.STRING,
          mode: SchemaFieldMode.NULLABLE,
          list: false,
          listLength: 0,
        },
        {
          name: "skills",
          description: "",
          type: SchemaFieldType.STRING,
          mode: SchemaFieldMode.NULLABLE,
          list: false,
          listLength: 0,
        },
        {
          name: "latitude",
          description: "",
          type: SchemaFieldType.FLOAT,
          mode: SchemaFieldMode.NULLABLE,
          list: false,
          listLength: 0,
        },
        {
          name: "longitude",
          description: "",
          type: SchemaFieldType.FLOAT,
          mode: SchemaFieldMode.NULLABLE,
          list: false,
          listLength: 0,
        },
        {
          name: "positions_available",
          description: "",
          type: SchemaFieldType.INTEGER,
          mode: SchemaFieldMode.NULLABLE,
          list: false,
          listLength: 0,
        },
        {
          name: "id",
          description: "",
          type: SchemaFieldType.STRING,
          mode: SchemaFieldMode.UNIQUE,
          list: false,
          listLength: 0,
        },
        {
          name: "title",
          description: "",
          type: SchemaFieldType.STRING,
          mode: SchemaFieldMode.NULLABLE,
          list: false,
          listLength: 0,
        },
        {
          name: "company",
          description: "",
          type: SchemaFieldType.STRING,
          mode: SchemaFieldMode.NULLABLE,
          list: false,
          listLength: 0,
        },
      ],
    });

    console.log(`fields=${JSON.stringify(resp.fields)}`);
    console.log("errors:");
    for (const { index, ...error } of resp.errors ?? []) {
      console.log(` ${index}=${JSON.stringify(error)}`);
    }
  } catch (e) {
    console.error(e);
  }
}

main();

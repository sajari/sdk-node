import {
  SchemaClient,
  withEndpoint,
  withKeyCredentials,
  SchemaFieldType,
  SchemaFieldMode,
} from "@sajari/sdk-node";

import program, { withDefaultOptions } from "./program";
import { handleError } from "./api-util";

withDefaultOptions(program);

program.parse(process.argv);

async function main(
  endpoint = program.endpoint,
  collectionId = program.collectionId,
  keyId = program.keyId,
  keySecret = program.keySecret
) {
  try {
    const client = new SchemaClient(
      collectionId,
      withEndpoint(endpoint),
      withKeyCredentials(keyId, keySecret)
    );

    const resp = await client.batchCreateFields({
      fields: [
        {
          name: "salary",
          description: "",
          type: SchemaFieldType.String,
          mode: SchemaFieldMode.Nullable,
          array: false,
          arrayLength: 0,
        },
        {
          name: "skills",
          description: "",
          type: SchemaFieldType.String,
          mode: SchemaFieldMode.Nullable,
          array: false,
          arrayLength: 0,
        },
        {
          name: "latitude",
          description: "",
          type: SchemaFieldType.Float,
          mode: SchemaFieldMode.Nullable,
          array: false,
          arrayLength: 0,
        },
        {
          name: "longitude",
          description: "",
          type: SchemaFieldType.Float,
          mode: SchemaFieldMode.Nullable,
          array: false,
          arrayLength: 0,
        },
        {
          name: "positions_available",
          description: "",
          type: SchemaFieldType.Integer,
          mode: SchemaFieldMode.Nullable,
          array: false,
          arrayLength: 0,
        },
        {
          name: "id",
          description: "",
          type: SchemaFieldType.String,
          mode: SchemaFieldMode.Unique,
          array: false,
          arrayLength: 0,
        },
        {
          name: "title",
          description: "",
          type: SchemaFieldType.String,
          mode: SchemaFieldMode.Nullable,
          array: false,
          arrayLength: 0,
        },
        {
          name: "company",
          description: "",
          type: SchemaFieldType.String,
          mode: SchemaFieldMode.Nullable,
          array: false,
          arrayLength: 0,
        },
      ],
    });

    console.log(`fields=${JSON.stringify(resp.fields)}`);
    console.log("errors:");
    for (const { index, ...error } of resp.errors ?? []) {
      console.log(` ${index}=${JSON.stringify(error)}`);
    }
  } catch (e) {
    handleError(e);
  }
}

main();

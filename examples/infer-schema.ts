import path from "path";
import {
  SchemaClient,
  withEndpoint,
  withKeyCredentials,
} from "@sajari/sdk-node";

import program, { withDefaultOptions } from "./program";
import { recordsFromCSV } from "./csv-util";

withDefaultOptions(program);

program.parse(process.argv);

interface Job {
  id: string;
  title: string;
  company: string;
  salary: string;
  skills: string[];
  latitude: number;
  longitude: number;
  positions_available: number;
}

async function main(
  endpoint = program.endpoint,
  accountId = program.accountId,
  collectionId = program.collectionId,
  keyId = program.keyId,
  keySecret = program.keySecret
) {
  try {
    const records = await recordsFromCSV<Job>(path.join(__dirname, "jobs.csv"));

    const client = new SchemaClient(
      accountId,
      collectionId,
      withEndpoint(endpoint),
      withKeyCredentials(keyId, keySecret)
    );

    const resp = await client.inferSchema({
      record: records[0],
    });

    console.log(`fields:`);
    for (const { name, ...field } of resp.fields ?? []) {
      console.log(` ${name}=${JSON.stringify(field)}`);
    }
    console.log(`errors:`);
    for (const { field, ...error } of resp.errors ?? []) {
      console.log(` ${field}=${JSON.stringify(error)}`);
    }
  } catch (e) {
    console.error(e);
  }
}

main();

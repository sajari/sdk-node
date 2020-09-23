import path from "path";
import {
  RecordsClient,
  withEndpoint,
  withKeyCredentials,
} from "@sajari/sdk-node";

import { recordsFromCSV } from "./csv-util";
import program, { withDefaultOptions } from "./program";

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
  updated: Date;
}

async function main(
  endpoint = program.endpoint,
  collectionId = program.collectionId,
  keyId = program.keyId,
  keySecret = program.keySecret
) {
  try {
    const records = await recordsFromCSV<Job>(path.join(__dirname, "jobs.csv"));

    console.log(`Loaded ${records.length} record(s):`);

    for (const r of records) {
      r.updated = new Date();
    }

    console.log(records);

    const client = new RecordsClient(
      collectionId,
      withEndpoint(endpoint),
      withKeyCredentials(keyId, keySecret)
    );

    const resp = await client.batchPutRecords({
      pipeline: { name: "app", version: "1" },
      records,
    });

    console.log("keys:");
    for (const { index, ...key } of resp.keys ?? []) {
      console.log(` ${index}=${JSON.stringify(key)}`);
    }
    console.log("errors:");
    for (const { index, ...error } of resp.errors ?? []) {
      console.log(` ${index}=${JSON.stringify(error)}`);
    }
  } catch (e) {
    console.error(e);
  }
}

main();

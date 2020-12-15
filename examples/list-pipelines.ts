import {
  PipelinesClient,
  withEndpoint,
  withKeyCredentials,
} from "@sajari/sdk-node";

import program, {
  withDefaultOptions,
  withPaginationOptions,
  withPipelineView,
} from "./program";
import { handleError } from "./api-util";

withDefaultOptions(program);
withPaginationOptions(program);
withPipelineView(program);

program.parse(process.argv);

async function main(
  endpoint = program.endpoint,
  collectionId = program.collectionId,
  keyId = program.keyId,
  keySecret = program.keySecret,
  pageSize = program.pageSize,
  pageToken = program.pageToken,
  view = program.pipelineView as "basic" | "full"
) {
  try {
    const client = new PipelinesClient(
      collectionId,
      withEndpoint(endpoint),
      withKeyCredentials(keyId, keySecret)
    );

    const resp = await client.listPipelines({ pageSize, pageToken, view });

    console.log(`next page token=${resp.nextPageToken}`);

    for (const p of resp.pipelines ?? []) {
      console.log("------------------------");
      console.log(`type=${p.type}`);
      console.log(`name=${p.name}`);
      console.log(`version=${p.version}`);
      console.log(`description=${p.description}`);
      console.log(`collection default=${p.collectionDefault}`);
      console.log(`default version=${p.defaultVersion}`);
      console.log(`pre-steps=`);
      for (const step of p.preSteps || []) {
        console.log(`  - ${JSON.stringify(step)}`);
      }
      console.log(`post-steps=`);
      for (const step of p.postSteps || []) {
        console.log(`  - ${JSON.stringify(step)}`);
      }
    }
  } catch (e) {
    handleError(e);
  }
}

main();

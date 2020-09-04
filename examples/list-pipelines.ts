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

withDefaultOptions(program);
withPaginationOptions(program);
withPipelineView(program);

program.parse(process.argv);

async function main(
  endpoint = program.endpoint,
  accountId = program.accountId,
  collectionId = program.collectionId,
  keyId = program.keyId,
  keySecret = program.keySecret,
  pageSize = program.pageSize,
  pageToken = program.pageToken,
  view = program.pipelineView as "basic" | "full"
) {
  try {
    const client = new PipelinesClient(
      accountId,
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
    console.error(e);
  }
}

main();

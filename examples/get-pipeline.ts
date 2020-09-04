import {
  PipelinesClient,
  withEndpoint,
  withKeyCredentials,
} from "@sajari/sdk-node";

import program, { withDefaultOptions, withPipelineView } from "./program";

withDefaultOptions(program);
withPipelineView(program);

program.requiredOption(
  "--pipeline-type <pipeline_type>",
  "pipeline type",
  "query"
);
program.requiredOption(
  "--pipeline-name <pipeline_name>",
  "pipeline name",
  "my-pipeline"
);
program.requiredOption(
  "--pipeline-version <pipeline_version>",
  "pipeline version",
  "42"
);

program.parse(process.argv);

async function main(
  endpoint = program.endpoint,
  accountId = program.accountId,
  collectionId = program.collectionId,
  keyId = program.keyId,
  keySecret = program.keySecret,
  type = program.type,
  name = program.pipelineName,
  version = program.pipelineVersion,
  view = program.pipelineView as "basic" | "full"
) {
  if (!(type === "record" || type === "query")) {
    throw new Error(`invalid type ${type}`);
  }
  if (!(view === "basic" || view === "full")) {
    throw new Error(`invalid view ${view}`);
  }

  try {
    const client = new PipelinesClient(
      accountId,
      collectionId,
      withEndpoint(endpoint),
      withKeyCredentials(keyId, keySecret)
    );

    const p = await client.getPipeline({ type, name, version, view });

    console.log(`type=${p.type}`);
    console.log(`name=${p.name}`);
    console.log(`version=${p.version}`);
    console.log(`pre-steps=`);
    for (const step of p.preSteps || []) {
      console.log(`  - ${JSON.stringify(step)}`);
    }
    console.log(`post-steps=`);
    for (const step of p.postSteps || []) {
      console.log(`  - ${JSON.stringify(step)}`);
    }

    console.log(JSON.stringify(p));
  } catch (e) {
    console.error(e);
  }
}

main();

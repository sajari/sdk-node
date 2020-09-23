import {
  PipelinesClient,
  withEndpoint,
  withKeyCredentials,
} from "@sajari/sdk-node";

import program, { withDefaultOptions } from "./program";

withDefaultOptions(program);

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
program.requiredOption(
  "--pipeline-description <pipeline_description>",
  "pipeline description",
  "version 42 of the my-pipeline query pipeline"
);

program.parse(process.argv);

async function main(
  endpoint = program.endpoint,
  collectionId = program.collectionId,
  keyId = program.keyId,
  keySecret = program.keySecret,
  type = program.type,
  name = program.pipelineName,
  version = program.pipelineVersion,
  description = program.pipelineDescription
) {
  if (!(type === "record" || type === "query")) {
    throw new Error(`invalid type ${type}`);
  }

  try {
    const client = new PipelinesClient(
      collectionId,
      withEndpoint(endpoint),
      withKeyCredentials(keyId, keySecret)
    );

    const p = await client.createPipeline({
      type,
      name: name,
      version,
      description,
      preSteps: [
        {
          id: "set-filter",
          title: "",
          description: "",
          params: {},
          consts: {},
          condition: "",
          annotations: [],
        },
        {
          id: "set-fields",
          title: "",
          description: "",
          params: {
            fields: {
              configs: [
                {
                  defaultValue: "title,",
                },
              ],
            },
          },
          consts: {},
          condition: "",
          annotations: [],
        },
        {
          id: "pagination",
          title: "",
          description: "",
          params: {},
          consts: {},
          condition: "",
          annotations: [],
        },
        {
          id: "count-aggregate",
          title: "",
          description: "",
          params: {
            fields: {
              configs: [
                {
                  name: "count",
                },
              ],
            },
          },
          consts: {},
          condition: "",
          annotations: [],
        },
        {
          id: "min-aggregate",
          title: "",
          description: "",
          params: {
            fields: {
              configs: [
                {
                  name: "min",
                },
              ],
            },
          },
          consts: {},
          condition: "",
          annotations: [],
        },
        {
          id: "max-aggregate",
          title: "",
          description: "",
          params: {
            fields: {
              configs: [
                {
                  name: "max",
                },
              ],
            },
          },
          consts: {},
          condition: "",
          annotations: [],
        },
        {
          id: "sort",
          title: "",
          description: "",
          params: {
            fields: {
              configs: [
                {
                  name: "sort",
                },
              ],
            },
          },
          consts: {},
          condition: "",
          annotations: [],
        },
        {
          id: "index-spelling",
          title: "",
          description: "",
          params: {
            text: {
              configs: [
                {
                  name: "q",
                },
              ],
            },
          },
          consts: {
            model: {
              configs: [
                {
                  value: "default",
                },
              ],
            },
            phraseLabelWeights: {
              configs: [
                {
                  value: "query:1.0",
                },
              ],
            },
          },
          condition: "",
          annotations: [],
        },
        {
          id: "synonym",
          title: "",
          description: "",
          params: {
            text: {
              configs: [
                {
                  name: "q",
                },
              ],
            },
          },
          consts: {
            model: {
              configs: [
                {
                  value: "jobs-001",
                },
              ],
            },
          },
          condition: "",
          annotations: [],
        },
        {
          id: "set-score-mode",
          title: "",
          description: "",
          params: {},
          consts: {
            mode: {
              configs: [
                {
                  value: "MAX",
                },
              ],
            },
          },
          condition: "",
          annotations: [],
        },
        {
          id: "index-text-score-instance-boost",
          title: "",
          description: "",
          params: {},
          consts: {
            minCount: {
              configs: [
                {
                  value: "5",
                },
              ],
            },
            threshold: {
              configs: [
                {
                  value: "0.5",
                },
              ],
            },
          },
          condition: "",
          annotations: [],
        },
        {
          id: "feature-boost-value",
          title: "",
          description: "",
          params: {},
          consts: {
            value: {
              configs: [
                {
                  value: "0.2",
                },
              ],
            },
          },
          condition: "",
          annotations: [],
        },
        {
          id: "filter-boost",
          title: "",
          description: "",
          params: {},
          consts: {
            filter: {
              configs: [
                {
                  value: "title = q",
                },
              ],
            },
            score: {
              configs: [
                {
                  value: "0.05",
                },
              ],
            },
          },
          condition: "q != ''",
          annotations: [],
        },
        {
          id: "filter-boost",
          title: "",
          description: "",
          params: {},
          consts: {
            filter: {
              configs: [
                {
                  value: "title ^ q",
                },
              ],
            },
            score: {
              configs: [
                {
                  value: "0.03",
                },
              ],
            },
          },
          condition: "q != ''",
          annotations: [],
        },
        {
          id: "filter-boost",
          title: "",
          description: "",
          params: {},
          consts: {
            filter: {
              configs: [
                {
                  value: "title ~ q",
                },
              ],
            },
            score: {
              configs: [
                {
                  value: "0.05",
                },
              ],
            },
          },
          condition: "q != ''",
          annotations: [],
        },
        {
          id: "index-text-index-boost",
          title: "",
          description: "",
          params: {
            text: {
              configs: [
                {
                  name: "q",
                },
              ],
            },
          },
          consts: {
            field: {
              configs: [
                {
                  value: "title",
                },
              ],
            },
            score: {
              configs: [
                {
                  value: "1.0000",
                },
              ],
            },
          },
          condition: "",
          annotations: [],
        },
      ],
      postSteps: [
        {
          id: "promotions",
          title: "",
          description: "",
          params: {
            text: {
              configs: [
                {
                  name: "q",
                },
              ],
            },
          },
          consts: {},
          condition: "",
          annotations: [],
        },
        {
          id: "train-autocomplete",
          title: "",
          description: "",
          params: {
            text: {
              configs: [
                {
                  name: "q",
                },
              ],
            },
          },
          consts: {
            label: {
              configs: [
                {
                  value: "query",
                },
              ],
            },
            model: {
              configs: [
                {
                  value: "default",
                },
              ],
            },
          },
          condition: "",
          annotations: [],
        },
      ],
    });

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
  } catch (e) {
    console.error(e);
  }
}

main();

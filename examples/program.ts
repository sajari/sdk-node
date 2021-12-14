import * as commander from "commander";

const program = new commander.Command();

program.version("0.0.1");

const defaultEndpoint = "https://api.search.io";

export const withAccountOptions = (p: commander.Command) =>
  p
    .option(
      "-e, --endpoint <endpoint>",
      "API endpoint",
      process.env.ENDPOINT || defaultEndpoint
    )
    .requiredOption(
      "-k, --key-id <key_id>",
      "account key ID",
      process.env.KEY_ID
    )
    .requiredOption(
      "-s, --key-secret <key_secret>",
      "account key secret",
      process.env.KEY_SECRET
    );

export const withDefaultOptions = (p: commander.Command) =>
  p
    .option(
      "-e, --endpoint <endpoint>",
      "API endpoint",
      process.env.ENDPOINT || defaultEndpoint
    )
    .requiredOption(
      "-c, --collection-id <collection_id>",
      "collection ID",
      process.env.COLLECTION_ID
    )
    .requiredOption(
      "-k, --key-id <key_id>",
      "account or collection key ID",
      process.env.KEY_ID
    )
    .requiredOption(
      "-s, --key-secret <key_secret>",
      "account or collection key secret",
      process.env.KEY_SECRET
    );

export const withPaginationOptions = (p: commander.Command) =>
  p
    .requiredOption<number>(
      "--page-size <page_size>",
      "page size",
      (value: string, previous: number) => {
        const parsed = parseInt(value, 10);
        if (isNaN(parsed)) {
          throw new Error(
            `error: option '--page-size ${value}' argument is invalid`
          );
        }
        return parsed;
      },
      20
    )
    .requiredOption("--page-token <page_token>", "page token", "");

export const withPipelineView = (p: commander.Command) =>
  p.requiredOption<"basic" | "full">(
    "--pipeline-view <view>",
    "view of the pipelines to retrieve, one of: basic, full",
    (value: string) => {
      if (!(value === "basic" || value === "full")) {
        throw new Error(
          `error: option '--pipeline-view ${value}' argument is invalid`
        );
      }
      return value;
    },
    "basic"
  );

export default program;

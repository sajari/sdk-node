import { EventsClient, withEndpoint } from "@sajari/sdk-node";

import program, { withEndpointOptions } from "./program";
import { handleError } from "./api-util";

withEndpointOptions(program);

program.requiredOption("--account-id <account_id>", "account ID", "my-account");

program.requiredOption("--event-name <event_name>", "event name", "purchase");
program.requiredOption("--event-token <event_token>", "event token", "eyJ...");
program.requiredOption<number>(
  "--event-weight <event_weight>",
  "event weight",
  (value: string, previous: number) => {
    const parsed = parseInt(value, 10);
    if (isNaN(parsed)) {
      throw new Error(
        `error: option '--event-weight ${value}' argument is invalid`
      );
    }
    return parsed;
  },
  1
);

program.parse(process.argv);

async function main(
  endpoint = program.endpoint,
  accountId = program.accountId,
  event = {
    name: program.eventName,
    token: program.eventToken,
    weight: program.weight,
  }
) {
  const client = new EventsClient(withEndpoint(endpoint));

  try {
    await client.sendEvent(accountId, event);
  } catch (e) {
    handleError(e);
  }
}

main();

import ksuid from "ksuid";

import { PipelinesClient, withKeyCredentials } from "./pipelines";
import { skipSuite } from "./test-util";

const _client = createClient();
if (!_client) {
  skipSuite(
    "Set TEST_COLLECTION_ID, TEST_COLLECTION_KEY_ID and TEST_COLLECTION_KEY_SECRET to run test"
  );
}
const client = _client!;

function createClient() {
  if (
    !(
      process.env.TEST_COLLECTION_ID &&
      process.env.TEST_COLLECTION_KEY_ID &&
      process.env.TEST_COLLECTION_KEY_SECRET
    )
  ) {
    return;
  }
  return new PipelinesClient(
    process.env.TEST_COLLECTION_ID,
    withKeyCredentials(
      process.env.TEST_COLLECTION_KEY_ID,
      process.env.TEST_COLLECTION_KEY_SECRET
    )
  );
}

test("createPipeline", async () => {
  await client.createPipeline({
    type: "record",
    name: "record",
    version: `pip_${ksuid.randomSync().string}`,
  });
});

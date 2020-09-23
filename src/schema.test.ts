import ksuid from "ksuid";

import { SchemaClient, withKeyCredentials } from "./schema";
import { SchemaFieldType, SchemaFieldMode } from "./";
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
  return new SchemaClient(
    process.env.TEST_COLLECTION_ID,
    withKeyCredentials(
      process.env.TEST_COLLECTION_KEY_ID,
      process.env.TEST_COLLECTION_KEY_SECRET
    )
  );
}

test("create field", async () => {
  await client.createField({
    name: `fie_${ksuid.randomSync().string}`,
    type: SchemaFieldType.String,
    mode: SchemaFieldMode.Nullable,
  });
});

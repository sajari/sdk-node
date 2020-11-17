import ksuid from "ksuid";

import { RecordsClient, withKeyCredentials } from "./records";
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
  return new RecordsClient(
    process.env.TEST_COLLECTION_ID,
    withKeyCredentials(
      process.env.TEST_COLLECTION_KEY_ID,
      process.env.TEST_COLLECTION_KEY_SECRET
    )
  );
}

async function upsertRecord(id: string) {
  const record = await client.upsertRecord({ record: { id } });

  await client.deleteRecord(record.key);
}

test("upsert record", async () => {
  await upsertRecord(ksuid.randomSync().string);
});

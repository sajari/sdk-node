import { CollectionsClient, withKeyCredentials } from "./collections";
import { skipSuite } from "./test-util";

const _client = createClient();
if (!_client) {
  skipSuite("Set TEST_ACCOUNT_KEY_ID and TEST_ACCOUNT_KEY_SECRET to run test");
}
const client = _client!;

function createClient() {
  if (
    !(process.env.TEST_ACCOUNT_KEY_ID && process.env.TEST_ACCOUNT_KEY_SECRET)
  ) {
    return;
  }
  return new CollectionsClient(
    withKeyCredentials(
      process.env.TEST_ACCOUNT_KEY_ID,
      process.env.TEST_ACCOUNT_KEY_SECRET
    )
  );
}

async function createCollection(displayName: string) {
  const collection = await client.createCollection({ displayName });

  await client.deleteCollection(collection.id!); // TODO(jingram): remove ! once types are fixed.
}

test("createCollection", async () => {
  jest.setTimeout(10000); // create can take longer than the default 5s

  await createCollection("My collection");
});

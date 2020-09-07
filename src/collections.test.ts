const { CollectionsClient, withKeyCredentials } = require("./collections");

const client = new CollectionsClient(
  process.env.TEST_ACCOUNT_ID,
  withKeyCredentials(process.env.TEST_KEY_ID, process.env.TEST_KEY_SECRET)
);

async function createCollection(id: string, displayName: string) {
  const collection = await client.createCollection({ id, displayName });

  await client.deleteCollection(collection.id);
}

test("createCollection", async () => {
  await createCollection("my-collection", "My collection");
});

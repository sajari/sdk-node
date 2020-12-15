import ksuid from "ksuid";

import { CollectionsClient, withKeyCredentials } from "./collections";
import { server, rest } from "./test/server";
import { endpoint, ErrorResponse, errorResponse } from "./test/api-util";
import { APIError } from ".";

const createClient = () =>
  new CollectionsClient(withKeyCredentials("test-key-id", "test-key-secret"));

const newId = () => `col-${ksuid.randomSync().string}`;

test("create collection", async () => {
  const client = createClient();

  await client.createCollection({ id: newId(), displayName: "My collection" });
});

test("server error turns into thrown APIError", async () => {
  server.use(
    rest.post<{}, ErrorResponse>(
      `${endpoint}/v4/collections`,
      async (req, res, ctx) =>
        res(ctx.status(400), ctx.json(errorResponse(3, "msg")))
    )
  );

  const client = createClient();

  try {
    await client.createCollection({
      id: newId(),
      displayName: "My collection",
    });
  } catch (e) {
    expect(e).toBeInstanceOf(APIError);
    expect(e).toEqual(
      expect.objectContaining({
        code: 3,
        message: "msg",
      })
    );
  }
});

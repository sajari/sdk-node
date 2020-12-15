import ksuid from "ksuid";

import { CollectionsClient, withKeyCredentials } from "./collections";
import { server, rest } from "./test/server";
import { endpoint, ErrorResponse, errorResponse } from "./test/api-util";
import { APIError } from ".";

jest.mock(
  "../package.json",
  () => ({
    version: "1.2.3",
  }),
  { virtual: true }
);

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

test("sends client user agent header", async () => {
  let header: null | string = null;

  server.use(
    rest.delete<{}, {}, { id: string }>(
      `${endpoint}/v4/collections/:id`,
      (req, res, ctx) => {
        header = req.headers.get("sajari-client-user-agent");
        return res(ctx.json({}));
      }
    )
  );

  const client = createClient();

  await client.deleteCollection(newId());

  expect(header).toEqual("sajari-sdk-node/1.2.3");
});

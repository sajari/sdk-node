import { sajari } from "../../generated/proto";
import { createReplaceRequest, parseReplaceResponse } from "./replace";
import { status } from "grpc";

test("createReplaceRequest", () => {
  let req = createReplaceRequest({ name: "test" }, {}, [
    { key: { field: "foo", value: "bar" }, record: { foo: "bar" } }
  ]);
  let proto = sajari.api.pipeline.v1.ReplaceRequest.create({
    pipeline: { name: "test" },
    values: {},
    keyRecords: [
      {
        key: sajari.engine.Key.create({
          field: "foo",
          value: sajari.engine.Value.create({ single: "bar" })
        }),
        record: {
          valueIndexes: {},
          values: {
            foo: sajari.engine.Value.create({ single: "bar" })
          }
        }
      }
    ]
  });

  expect(req).toEqual(proto);
});

test("parseReplaceResponse", async () => {
  expect.assertions(1);

  let proto = sajari.engine.store.record.ReplaceResponse.create({
    keys: [
      sajari.engine.Key.create({
        field: "foo",
        value: sajari.engine.Value.create({ single: "bar" })
      })
    ],
    status: [sajari.rpc.Status.create({ code: status.OK })]
  });
  let expected = [{ key: { field: "foo", value: "bar" }, error: null }];

  let res = await parseReplaceResponse(proto);
  expect(res).toEqual(expected);
});

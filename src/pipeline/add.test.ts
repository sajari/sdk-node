import { sajari } from "../../generated/proto";
import { createAddRequest, parseAddResponse } from "./add";
import { status } from "grpc";

test("createAddRequest", () => {
  let req = createAddRequest({ name: "test" }, {}, [{ foo: "bar" }]);
  let proto = sajari.api.pipeline.v1.AddRequest.create({
    pipeline: { name: "test" },
    records: [
      sajari.engine.store.record.Record.create({
        valueIndexes: {},
        values: {
          foo: sajari.engine.Value.create({ single: "bar" })
        }
      })
    ]
  });

  expect(req).toEqual(proto);
});

test("parseAddResponse", async () => {
  expect.assertions(1);

  let proto = sajari.engine.store.record.AddResponse.create({
    keys: [
      sajari.engine.Key.create({
        field: "foo",
        value: sajari.engine.Value.create({ single: "bar" })
      })
    ],
    status: [sajari.rpc.Status.create({ code: status.OK })]
  });
  let expected = [{ key: { field: "foo", value: "bar" }, error: null }];

  let res = await parseAddResponse(proto);
  expect(res).toEqual(expected);
});

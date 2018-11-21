import { sajari } from "../../generated/proto";
import { Type, field } from "./field";
import { createAddRequest, createMutateFieldRequest } from "./utils";

test("createAddRequest", () => {
  let req = createAddRequest([field(Type.String, "foo")]);
  let proto = sajari.engine.schema.Fields.create({
    fields: [
      sajari.engine.schema.Field.create({
        type: sajari.engine.schema.Field.Type.STRING,
        mode: sajari.engine.schema.Field.Mode.NULLABLE,
        name: "foo",
        description: "",
        repeated: false
      })
    ]
  });

  expect(req).toEqual(proto);
});

test("createMutateFieldRequest", () => {
  let req = createMutateFieldRequest("foobar", [{ description: "baz bar" }]);
  let proto = sajari.engine.schema.MutateFieldRequest.create({
    name: "foobar",
    mutations: [
      sajari.engine.schema.MutateFieldRequest.Mutation.create({
        description: "baz bar"
      })
    ]
  });

  expect(req).toEqual(proto);
});

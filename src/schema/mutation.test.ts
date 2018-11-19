import { sajari } from "../../generated/proto";
import { Mutation } from "./mutation";
import { Type } from "./field";

describe("Mutation", () => {
  test.each([
    [
      { name: "foo" },
      sajari.engine.schema.MutateFieldRequest.Mutation.create({ name: "foo" })
    ],
    [
      { description: "bar" },
      sajari.engine.schema.MutateFieldRequest.Mutation.create({
        description: "bar"
      })
    ],
    [
      { type: Type.String },
      sajari.engine.schema.MutateFieldRequest.Mutation.create({
        type: sajari.engine.schema.Field.Type.STRING
      })
    ],
    [
      { repeated: true },
      sajari.engine.schema.MutateFieldRequest.Mutation.create({
        repeated: true
      })
    ]
  ])("Mutation.toProto", (m, proto) => {
    expect(Mutation.toProto(m)).toEqual(proto);
  });
});

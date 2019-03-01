import { sajari } from "../../generated/proto";
import { MutationToProto, Mutation } from "./mutation";
import { Type } from "./field";

describe("Mutation", () => {
  test.each<[Mutation, sajari.engine.v2.MutateFieldRequest.Mutation]>([
    [
      { name: "foo" },
      sajari.engine.v2.MutateFieldRequest.Mutation.create({ name: "foo" })
    ],
    [
      { description: "bar" },
      sajari.engine.v2.MutateFieldRequest.Mutation.create({
        description: "bar"
      })
    ],
    [
      { type: Type.String },
      sajari.engine.v2.MutateFieldRequest.Mutation.create({
        type: sajari.engine.v2.Field.Type.STRING
      })
    ],
    [
      { repeated: true },
      sajari.engine.v2.MutateFieldRequest.Mutation.create({
        repeated: true
      })
    ]
  ])("Mutation.toProto", (m, proto) => {
    expect(MutationToProto(m)).toEqual(proto);
  });
});

import { sajari } from "../../generated/proto";
import { Field, Type } from "./field";
import { Mutation } from "./mutation";

/**
 * @hidden
 */
export function createAddRequest(fields: Field[]): sajari.engine.schema.Fields {
  const req = { fields: fields.map(Field.toProto) };
  const err = sajari.engine.schema.Fields.verify(req);
  if (err) {
    throw new Error(`sajari: failed to verify Fields message: ${err}`);
  }
  return sajari.engine.schema.Fields.create(req);
}

/**
 * @hidden
 */
export function createMutateFieldRequest(
  name: string,
  mutations: Mutation[]
): sajari.engine.schema.MutateFieldRequest {
  const req = { name, mutations: mutations.map(Mutation.toProto) };
  const err = sajari.engine.schema.MutateFieldRequest.verify(req);
  if (err) {
    throw new Error(
      `sajari: failed to verify MutateFieldRequest message: ${err}`
    );
  }
  return sajari.engine.schema.MutateFieldRequest.create(req);
}

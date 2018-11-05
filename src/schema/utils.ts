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
  const engineMutations = mutations.map((mutation) => {
    // @ts-ignore: if the mutation is a schema field type mutation we
    // need to convert to the correct proto message type
    if (mutation.type !== undefined) {
      // @ts-ignore
      return { type: Type.toProto(mutation.type as Type) };
    }
    return mutation;
  });
  const req = { name, mutations: engineMutations };
  const err = sajari.engine.schema.MutateFieldRequest.verify(req);
  if (err) {
    throw new Error(
      `sajari: failed to verify MutateFieldRequest message: ${err}`
    );
  }
  // FIXME(@benhinchley): type error due to merge above.
  // @ts-ignore
  return sajari.engine.schema.MutateFieldRequest.create(req);
}

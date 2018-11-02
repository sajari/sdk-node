import { sajari } from "../../generated/proto";
import { Field, fieldToEngineField, Mutation, typeToProtoType } from "./field";

/**
 * @hidden
 */
export function createAddRequest(fields: Field[]): sajari.engine.schema.Fields {
  const engineFields = fields.map(fieldToEngineField);
  const req = { fields: engineFields };
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
      return { type: typeToProtoType(mutation) };
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
  return sajari.engine.schema.MutateFieldRequest.create(req);
}

import { sajari } from "../generated/proto";
import { RecordMutation } from "./interfaces";
import { createEngineKey } from "./key";
import { valueToProto } from "./utils";

export interface FieldMutation {
  field: string;
  mutation: "set" | "increment" | "append";

  set?: string | string[] | null;
  increment?: string | string[] | null;
  append?: string | string[] | null;
}

/**
 * setField is a FieldMutation which sets field to value.
 * If value is null then this unsets field.
 */
export function setField(
  field: string,
  value: string | string[] | null
): FieldMutation {
  return {
    field,
    mutation: "set",
    set: value
  };
}

/**
 * createFieldMutation turns a FieldMutation into a
 * sajari.engine.store.record.MutateRequest.RecordMutation.FieldMutation
 * @hidden
 */
export function createFieldMutation(
  fm: FieldMutation
): sajari.engine.store.record.MutateRequest.RecordMutation.FieldMutation {
  const proto = {
    field: fm.field,
    mutation: fm.mutation
  } as sajari.engine.store.record.MutateRequest.RecordMutation.FieldMutation;

  switch (fm.mutation) {
    case "set":
      if (fm.set === undefined) {
        throw new Error(
          "sajari: set mutation created, but there is no value for set"
        );
      }
      proto.set = valueToProto(fm.set);
      break;
    case "increment":
      if (fm.set === undefined) {
        throw new Error(
          "sajari: increment mutation created, but there is no value for increment"
        );
      }
      proto.increment = valueToProto(fm.set);
      break;
    case "append":
      if (fm.set === undefined) {
        throw new Error(
          "sajari: append mutation created, but there is no value for append"
        );
      }
      proto.append = valueToProto(fm.set);
      break;

    default:
      throw new Error(`sajari: invalid mutation type: ${fm.mutation}`);
  }

  return sajari.engine.store.record.MutateRequest.RecordMutation.FieldMutation.create(
    proto
  );
}

/**
 * @hidden
 */
export function createMutationRequest(recordMutations: RecordMutation[]) {
  return sajari.engine.store.record.MutateRequest.create({
    recordMutations: recordMutations.map((recordMutation) => {
      return {
        key: createEngineKey(recordMutation.key),
        mutations: recordMutation.mutations.map(createFieldMutation)
      };
    })
  });
}

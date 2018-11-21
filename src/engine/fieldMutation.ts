import { sajari } from "../../generated/proto";
import { Value } from "../utils";
import { RecordMutation } from "./interfaces";
import { Key } from "./key";

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
 * appendField is a FieldMutation which appends value to field.
 */
export function appendField(
  field: string,
  value: string | string[] | null
): FieldMutation {
  return {
    field,
    mutation: "append",
    append: value
  };
}

/**
 * incrementField is a FieldMutation which increments field by value.
 */
export function incrementField(
  field: string,
  value: string | string[] | null
): FieldMutation {
  return {
    field,
    mutation: "increment",
    increment: value
  };
}

export namespace FieldMutation {
  /**
   * toProto turns a FieldMutation into a
   * sajari.engine.store.record.MutateRequest.RecordMutation.FieldMutation
   * @hidden
   */
  export function toProto(
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
        proto.set = Value.toProto(fm.set);
        break;
      case "increment":
        if (fm.increment === undefined) {
          throw new Error(
            "sajari: increment mutation created, but there is no value for increment"
          );
        }
        proto.increment = Value.toProto(fm.increment);
        break;
      case "append":
        if (fm.append === undefined) {
          throw new Error(
            "sajari: append mutation created, but there is no value for append"
          );
        }
        proto.append = Value.toProto(fm.append);
        break;

      default:
        throw new Error(`sajari: invalid mutation type: ${fm.mutation}`);
    }

    return sajari.engine.store.record.MutateRequest.RecordMutation.FieldMutation.create(
      proto
    );
  }
}

/**
 * @hidden
 */
export function createMutationRequest(recordMutations: RecordMutation[]) {
  return sajari.engine.store.record.MutateRequest.create({
    recordMutations: recordMutations.map((recordMutation) => {
      return sajari.engine.store.record.MutateRequest.RecordMutation.create({
        key: Key.toProto(recordMutation.key),
        fieldMutations: recordMutation.mutations.map(FieldMutation.toProto)
      });
    })
  });
}

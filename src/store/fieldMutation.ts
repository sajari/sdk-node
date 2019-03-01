import { sajari } from "../../generated/proto";
import { ValueToProto } from "../types";

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

/**
 * FieldMutationToProto turns a FieldMutation into a
 * sajari.engine.v2.MutateRecordRequest.FieldMutation
 * @hidden
 */
export function FieldMutationToProto(
  fm: FieldMutation
): sajari.engine.v2.MutateRecordRequest.FieldMutation {
  const proto = {
    field: fm.field,
    mutation: fm.mutation
  } as sajari.engine.v2.MutateRecordRequest.FieldMutation;

  switch (fm.mutation) {
    case "set":
      if (fm.set === undefined) {
        throw new Error(
          "sajari: set mutation created, but there is no value for set"
        );
      }
      proto.set = ValueToProto(fm.set);
      break;
    case "increment":
      if (fm.increment === undefined) {
        throw new Error(
          "sajari: increment mutation created, but there is no value for increment"
        );
      }
      proto.increment = ValueToProto(fm.increment);
      break;
    case "append":
      if (fm.append === undefined) {
        throw new Error(
          "sajari: append mutation created, but there is no value for append"
        );
      }
      proto.append = ValueToProto(fm.append);
      break;

    default:
      throw new Error(`sajari: invalid mutation type: ${fm.mutation}`);
  }

  return sajari.engine.v2.MutateRecordRequest.FieldMutation.create(proto);
}

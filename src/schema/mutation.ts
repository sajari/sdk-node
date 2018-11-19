import { FieldMode, Type } from "./field";
import { sajari } from "../../generated/proto";

// Mutation is a mutation of a schema field.
export type Mutation =
  | NameMutation
  | DescriptionMutation
  | TypeMutation
  | RepeatedMutation;

export namespace Mutation {
  /**
   * @hidden
   */
  export function toProto(
    m: Mutation
  ): sajari.engine.schema.MutateFieldRequest.Mutation {
    let mutation: { [k: string]: any } = m;
    if ("type" in mutation) {
      mutation.type = Type.toProto(mutation.type);
    }
    return sajari.engine.schema.MutateFieldRequest.Mutation.create(mutation);
  }
}

export interface NameMutation {
  // Name is a new name for the field.
  name: string;
}

export interface DescriptionMutation {
  // Description is the new description for the field.
  description: string;
}

export interface TypeMutation {
  // Type changes the underlying type of the field.
  type: Type;
}

export interface RepeatedMutation {
  // Repeated sets whether the field values are repeated.
  repeated: boolean;
}

function name(n: string): NameMutation {
  return {
    name: n
  };
}

function description(d: string): DescriptionMutation {
  return {
    description: d
  };
}

function type(t: Type): TypeMutation {
  return {
    type: t
  };
}

function repeated(b: boolean): RepeatedMutation {
  return {
    repeated: b
  };
}

export const mutation = {
  name,
  description,
  type,
  repeated
};

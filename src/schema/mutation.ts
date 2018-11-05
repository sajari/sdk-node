import { FieldMode, Type } from "./field";

// Mutation is a mutation of a schema field.
export type Mutation =
  | NameMutation
  | DescriptionMutation
  | TypeMutation
  | RepeatedMutation
  | ModeMutation;

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

export interface ModeMutation {
  // mode sets the field mode.
  mode: FieldMode;
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

function mode(m: FieldMode): ModeMutation {
  return {
    mode: m
  };
}

export const mutation = {
  name,
  description,
  type,
  repeated,
  mode
};

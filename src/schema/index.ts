import { fields } from "./field";
import { mutation } from "./mutation";

export {
  Mutation,
  NameMutation,
  DescriptionMutation,
  TypeMutation,
  RepeatedMutation
} from "./mutation";
export { FieldMode } from "./field";
export { Schema } from "./client";

export default {
  field: fields,
  mutation
};

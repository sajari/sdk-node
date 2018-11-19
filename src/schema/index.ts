import { field, Field, FieldOptions, Type } from "./field";
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
  field: {
    string(name: string, options: FieldOptions): Field {
      return field(Type.String, name, options);
    },
    integer(name: string, options: FieldOptions): Field {
      return field(Type.Integer, name, options);
    },
    float(name: string, options: FieldOptions): Field {
      return field(Type.Float, name, options);
    },
    double(name: string, options: FieldOptions): Field {
      return field(Type.Double, name, options);
    },
    boolean(name: string, options: FieldOptions): Field {
      return field(Type.Boolean, name, options);
    },
    timestamp(name: string, options: FieldOptions): Field {
      return field(Type.Timestamp, name, options);
    }
  },
  mutation
};

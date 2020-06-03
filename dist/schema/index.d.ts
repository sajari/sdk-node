export { Mutation, NameMutation, DescriptionMutation, TypeMutation, RepeatedMutation } from "./mutation";
export { FieldMode } from "./field";
export { Schema } from "./client";
declare const _default: {
    field: {
        string(name: string, options?: import("./field").FieldOptions | undefined): import("./field").Field;
        integer(name: string, options?: import("./field").FieldOptions | undefined): import("./field").Field;
        float(name: string, options?: import("./field").FieldOptions | undefined): import("./field").Field;
        double(name: string, options?: import("./field").FieldOptions | undefined): import("./field").Field;
        boolean(name: string, options?: import("./field").FieldOptions | undefined): import("./field").Field;
        timestamp(name: string, options?: import("./field").FieldOptions | undefined): import("./field").Field;
    };
    mutation: {
        name: (n: string) => import("./mutation").NameMutation;
        description: (d: string) => import("./mutation").DescriptionMutation;
        type: (t: import("./field").Type) => import("./mutation").TypeMutation;
        repeated: (b: boolean) => import("./mutation").RepeatedMutation;
    };
};
export default _default;

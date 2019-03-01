import { sajari } from "../../generated/proto";
import {
  Type,
  FieldMode,
  Field,
  field,
  FieldFromProto,
  FieldToProto,
  TypeToProto,
  TypeFromProto,
  FieldModeToProto,
  FieldModeFromProto
} from "./field";

describe("Type", () => {
  test.each<[Type, sajari.engine.v2.Field.Type]>([
    [Type.Boolean, sajari.engine.v2.Field.Type.BOOLEAN],
    [Type.String, sajari.engine.v2.Field.Type.STRING],
    [Type.Timestamp, sajari.engine.v2.Field.Type.TIMESTAMP],
    [Type.Float, sajari.engine.v2.Field.Type.FLOAT],
    [Type.Double, sajari.engine.v2.Field.Type.DOUBLE],
    [Type.Integer, sajari.engine.v2.Field.Type.INTEGER]
  ])("TypeToProto(%o) => %o", (type, proto) => {
    expect(TypeToProto(type)).toEqual(proto);
  });

  test.each<[sajari.engine.v2.Field.Type, Type]>([
    [sajari.engine.v2.Field.Type.BOOLEAN, Type.Boolean],
    [sajari.engine.v2.Field.Type.STRING, Type.String],
    [sajari.engine.v2.Field.Type.TIMESTAMP, Type.Timestamp],
    [sajari.engine.v2.Field.Type.FLOAT, Type.Float],
    [sajari.engine.v2.Field.Type.DOUBLE, Type.Double],
    [sajari.engine.v2.Field.Type.INTEGER, Type.Integer]
  ])("TypeFromProto(%o) => %o", (proto, type) => {
    expect(TypeFromProto(proto)).toEqual(type);
  });
});

describe("FieldMode", () => {
  test.each<[FieldMode, sajari.engine.v2.Field.Mode]>([
    [FieldMode.Nullable, sajari.engine.v2.Field.Mode.NULLABLE],
    [FieldMode.Required, sajari.engine.v2.Field.Mode.REQUIRED],
    [FieldMode.Unique, sajari.engine.v2.Field.Mode.UNIQUE]
  ])("FieldModeToProto(%o) => %o", (type, proto) => {
    expect(FieldModeToProto(type)).toEqual(proto);
  });

  test.each<[sajari.engine.v2.Field.Mode, FieldMode]>([
    [sajari.engine.v2.Field.Mode.NULLABLE, FieldMode.Nullable],
    [sajari.engine.v2.Field.Mode.REQUIRED, FieldMode.Required],
    [sajari.engine.v2.Field.Mode.UNIQUE, FieldMode.Unique]
  ])("FieldModeFromProto(%o) => %o", (proto, type) => {
    expect(FieldModeFromProto(proto)).toEqual(type);
  });
});

describe("field function", () => {
  test.each<[{ type: Type; name: string; options: any }, Field]>([
    [
      { type: Type.String, name: "string_field", options: {} },
      {
        type: Type.String,
        name: "string_field",
        description: "",
        repeated: false,
        mode: FieldMode.Nullable
      }
    ],
    [
      {
        type: Type.Boolean,
        name: "bool_field",
        options: {
          mode: FieldMode.Unique
        }
      },
      {
        type: Type.Boolean,
        name: "bool_field",
        description: "",
        repeated: false,
        mode: FieldMode.Unique
      }
    ],
    [
      {
        type: Type.Boolean,
        name: "bool_field",
        options: {
          mode: FieldMode.Required
        }
      },
      {
        type: Type.Boolean,
        name: "bool_field",
        description: "",
        repeated: false,
        mode: FieldMode.Required
      }
    ],
    [
      {
        type: Type.Boolean,
        name: "bool_field",
        options: undefined
      },
      {
        type: Type.Boolean,
        name: "bool_field",
        description: "",
        repeated: false,
        mode: FieldMode.Nullable
      }
    ]
  ])("field fn", (args, expected) => {
    expect(field(args.type, args.name, args.options)).toEqual(expected);
  });
});

describe("Field", () => {
  test.each<[Field, sajari.engine.v2.Field]>([
    [
      field(Type.String, "foo"),
      sajari.engine.v2.Field.create({
        type: sajari.engine.v2.Field.Type.STRING,
        mode: sajari.engine.v2.Field.Mode.NULLABLE,
        name: "foo",
        description: "",
        repeated: false
      })
    ],
    [
      field(Type.Boolean, "bar", {
        mode: FieldMode.Required
      }),
      sajari.engine.v2.Field.create({
        type: sajari.engine.v2.Field.Type.BOOLEAN,
        mode: sajari.engine.v2.Field.Mode.REQUIRED,
        name: "bar",
        description: "",
        repeated: false
      })
    ]
  ])("FieldToProto", (arg, proto) => {
    expect(FieldToProto(arg)).toEqual(proto);
  });

  test.each<[sajari.engine.v2.Field, Field]>([
    [
      sajari.engine.v2.Field.create({
        type: sajari.engine.v2.Field.Type.STRING,
        mode: sajari.engine.v2.Field.Mode.NULLABLE,
        name: "foo",
        description: "",
        repeated: false
      }),
      {
        type: Type.String,
        mode: FieldMode.Nullable,
        name: "foo",
        description: "",
        repeated: false
      }
    ],
    [
      sajari.engine.v2.Field.create({
        type: sajari.engine.v2.Field.Type.BOOLEAN,
        mode: sajari.engine.v2.Field.Mode.REQUIRED,
        name: "bar",
        description: ""
      }),
      {
        type: Type.Boolean,
        mode: FieldMode.Required,
        name: "bar",
        description: "",
        repeated: false
      }
    ]
  ])("Field.fromProto", (proto, arg) => {
    expect(FieldFromProto(proto)).toEqual(arg);
  });
});

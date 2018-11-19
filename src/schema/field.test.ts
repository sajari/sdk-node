import { sajari } from "../../generated/proto";
import { Type, FieldMode, field, Field } from "./field";

describe("Type", () => {
  test.each([
    [Type.Boolean, sajari.engine.schema.Field.Type.BOOLEAN],
    [Type.String, sajari.engine.schema.Field.Type.STRING],
    [Type.Timestamp, sajari.engine.schema.Field.Type.TIMESTAMP],
    [Type.Float, sajari.engine.schema.Field.Type.FLOAT],
    [Type.Double, sajari.engine.schema.Field.Type.DOUBLE],
    [Type.Integer, sajari.engine.schema.Field.Type.INTEGER]
  ])("Type.toProto(%o) => %o", (type, proto) => {
    expect(Type.toProto(type)).toEqual(proto);
  });

  test.each([
    [sajari.engine.schema.Field.Type.BOOLEAN, Type.Boolean],
    [sajari.engine.schema.Field.Type.STRING, Type.String],
    [sajari.engine.schema.Field.Type.TIMESTAMP, Type.Timestamp],
    [sajari.engine.schema.Field.Type.FLOAT, Type.Float],
    [sajari.engine.schema.Field.Type.DOUBLE, Type.Double],
    [sajari.engine.schema.Field.Type.INTEGER, Type.Integer]
  ])("Type.fromProto(%o) => %o", (proto, type) => {
    expect(Type.fromProto(proto)).toEqual(type);
  });
});

describe("FieldMode", () => {
  test.each([
    [FieldMode.Nullable, sajari.engine.schema.Field.Mode.NULLABLE],
    [FieldMode.Required, sajari.engine.schema.Field.Mode.REQUIRED],
    [FieldMode.Unique, sajari.engine.schema.Field.Mode.UNIQUE]
  ])("FieldMode.toProto(%o) => %o", (type, proto) => {
    expect(FieldMode.toProto(type)).toEqual(proto);
  });

  test.each([
    [sajari.engine.schema.Field.Mode.NULLABLE, FieldMode.Nullable],
    [sajari.engine.schema.Field.Mode.REQUIRED, FieldMode.Required],
    [sajari.engine.schema.Field.Mode.UNIQUE, FieldMode.Unique]
  ])("FieldMode.fromProto(%o) => %o", (proto, type) => {
    expect(FieldMode.fromProto(proto)).toEqual(type);
  });
});

describe("field function", () => {
  test.each([
    [
      { type: Type.String, name: "string_field", options: {} },
      {
        type: Type.String,
        name: "string_field",
        description: "",
        repeated: false,
        mode: FieldMode.Nullable,
        unique: false,
        required: false
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
        mode: FieldMode.Unique,
        unique: true,
        required: false
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
        mode: FieldMode.Required,
        unique: false,
        required: true
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
        mode: FieldMode.Nullable,
        unique: false,
        required: false
      }
    ]
  ])("field fn", (args, expected) => {
    expect(field(args.type, args.name, args.options)).toEqual(expected);
  });
});

describe("Field", () => {
  test.each([
    [
      field(Type.String, "foo"),
      sajari.engine.schema.Field.create({
        type: sajari.engine.schema.Field.Type.STRING,
        mode: sajari.engine.schema.Field.Mode.NULLABLE,
        name: "foo",
        description: "",
        repeated: false,
        required: false,
        unique: false
      })
    ],
    [
      field(Type.Boolean, "bar", {
        mode: FieldMode.Required
      }),
      sajari.engine.schema.Field.create({
        type: sajari.engine.schema.Field.Type.BOOLEAN,
        mode: sajari.engine.schema.Field.Mode.REQUIRED,
        name: "bar",
        description: "",
        repeated: false,
        required: true,
        unique: false
      })
    ]
  ])("Field.toProto", (arg, proto) => {
    expect(Field.toProto(arg)).toEqual(proto);
  });

  test.each([
    [
      sajari.engine.schema.Field.create({
        type: sajari.engine.schema.Field.Type.STRING,
        mode: sajari.engine.schema.Field.Mode.NULLABLE,
        name: "foo",
        description: "",
        repeated: false,
        required: false,
        unique: false
      }),
      {
        type: Type.String,
        mode: FieldMode.Nullable,
        name: "foo",
        description: "",
        repeated: false,
        required: false,
        unique: false,
        indexed: false
      }
    ],
    [
      sajari.engine.schema.Field.create({
        type: sajari.engine.schema.Field.Type.BOOLEAN,
        mode: sajari.engine.schema.Field.Mode.REQUIRED,
        name: "bar",
        description: "",
        repeated: false,
        required: true,
        unique: false
      }),
      {
        type: Type.Boolean,
        mode: FieldMode.Required,
        name: "bar",
        description: "",
        repeated: false,
        required: true,
        unique: false,
        indexed: false
      }
    ]
  ])("Field.fromProto", (proto, arg) => {
    expect(Field.fromProto(proto)).toEqual(arg);
  });
});

import { sajari } from "../../generated/proto";
import {
  setField,
  appendField,
  incrementField,
  FieldMutationToProto
} from "./fieldMutation";

describe("FieldMutation", () => {
  test("setField", () => {
    expect(setField("id", "123456777")).toEqual({
      field: "id",
      mutation: "set",
      set: "123456777"
    });
  });

  test("appendField", () => {
    expect(appendField("id", "123456777")).toEqual({
      field: "id",
      mutation: "append",
      append: "123456777"
    });
  });

  test("incrementField", () => {
    expect(incrementField("id", "8")).toEqual({
      field: "id",
      mutation: "increment",
      increment: "8"
    });
  });

  test.each<
    [
      Function,
      { field: string; value: string },
      sajari.engine.v2.MutateRecordRequest.FieldMutation
    ]
  >([
    [
      setField,
      { field: "id", value: "123456789" },
      sajari.engine.v2.MutateRecordRequest.FieldMutation.create({
        field: "id",
        set: sajari.engine.v2.Value.create({ single: "123456789" })
      })
    ],
    [
      appendField,
      { field: "id", value: "123456789" },
      sajari.engine.v2.MutateRecordRequest.FieldMutation.create({
        field: "id",
        append: sajari.engine.v2.Value.create({ single: "123456789" })
      })
    ],
    [
      incrementField,
      { field: "id", value: "123456789" },
      sajari.engine.v2.MutateRecordRequest.FieldMutation.create({
        field: "id",
        increment: sajari.engine.v2.Value.create({ single: "123456789" })
      })
    ]
  ])("FieldMutationToProto", (fn, args, expected) => {
    expect(FieldMutationToProto(fn(args.field, args.value))).toEqual(expected);
  });

  test.each<[Function, { field: string; value: string | undefined }]>([
    [setField, { field: "id", value: undefined }],
    [appendField, { field: "id", value: undefined }],
    [incrementField, { field: "id", value: undefined }],
    [
      (field: string) => ({
        field: field,
        mutation: "invalid"
      }),
      { field: "id", value: undefined }
    ]
  ])("FieldMutationToProto", (fn, args) => {
    expect(() =>
      FieldMutationToProto(fn(args.field, args.value))
    ).toThrowError();
  });
});

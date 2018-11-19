import { sajari } from "../../generated/proto";
import {
  createMutationRequest,
  createFieldMutation,
  setField,
  appendField,
  incrementField
} from "./fieldMutation";
import { Key } from "./key";
import { Value } from "../utils";

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

  test.each([
    [
      setField,
      { field: "id", value: "123456789" },
      {
        field: "id",
        set: sajari.engine.Value.create({ single: "123456789" })
      }
    ],
    [
      appendField,
      { field: "id", value: "123456789" },
      {
        field: "id",
        append: sajari.engine.Value.create({ single: "123456789" })
      }
    ],
    [
      incrementField,
      { field: "id", value: "123456789" },
      {
        field: "id",
        increment: sajari.engine.Value.create({ single: "123456789" })
      }
    ]
  ])("createFieldMutation", (fn, args, expected) => {
    expect(createFieldMutation(fn(args.field, args.value))).toEqual(
      sajari.engine.store.record.MutateRequest.RecordMutation.FieldMutation.create(
        expected
      )
    );
  });

  test.each([
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
  ])("createFieldMutation", (fn, args) => {
    expect(() =>
      createFieldMutation(fn(args.field, args.value))
    ).toThrowError();
  });
});

test("createMutationRequest", () => {
  const recordMutation = {
    key: { field: "id", value: "1" },
    mutations: [setField("body", "hello")]
  };

  const proto = sajari.engine.store.record.MutateRequest.create({
    recordMutations: [
      sajari.engine.store.record.MutateRequest.RecordMutation.create({
        key: Key.toProto({ field: "id", value: "1" }),
        fieldMutations: [
          sajari.engine.store.record.MutateRequest.RecordMutation.FieldMutation.create(
            {
              field: "body",
              set: Value.toProto("hello")
            }
          )
        ]
      })
    ]
  });

  expect(createMutationRequest([recordMutation])).toEqual(proto);
});

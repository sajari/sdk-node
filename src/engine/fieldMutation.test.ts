import { sajari } from "../../generated/proto";
import {
  createFieldMutation,
  setField,
  appendField,
  incrementField
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

  test("createFieldMutation", () => {
    const mutation = setField("id", "123456789");
    const proto = sajari.engine.store.record.MutateRequest.RecordMutation.FieldMutation.create(
      {
        field: "id",
        set: sajari.engine.Value.create({ single: "123456789" })
      }
    );
    expect(createFieldMutation(mutation)).toEqual(proto);
  });
});

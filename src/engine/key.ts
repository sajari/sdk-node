import { sajari } from "../../generated/proto";
import { Value } from "../utils";

export interface Key {
  field: string;
  value: string;
}

export namespace Key {
  /**
   * @hidden
   */
  export function toProto(k: Key): sajari.engine.Key {
    return new sajari.engine.Key({
      field: k.field,
      value: Value.toProto(k.value)
    });
  }

  /**
   * @hidden
   */
  export function fromProto(k: sajari.engine.IKey): Key {
    const key = k as sajari.engine.Key;
    const value = Value.fromProto(k.value as sajari.engine.Value);
    if (value === null) {
      return { field: key.field, value: "" };
    }

    return {
      field: key.field,
      value: value as string
    };
  }
}

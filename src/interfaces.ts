import { FieldMutation } from "./fieldMutation";
import { Key } from "./key";
import { Record } from "./record";

export interface GetResponse {
  record: Record;
  error: Error | null;
}

export interface RecordMutation {
  key: Key;
  mutations: FieldMutation[];
}

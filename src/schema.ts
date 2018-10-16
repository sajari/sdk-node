import { ServiceError } from "grpc";

import { sajari } from "../generated/proto";
import { IClient } from "./client";
import { errorFromStatus, IValues, valueFromProto } from "./utils";

// Field represents a meta field which can be assigned in a collection record.
interface IField {
  // Name is the name used to identify the field.
  name: string;

  // Description is a description of the field.
  description: string;

  // Type defines the type of the field.
  type: Type;

  // Repeated indicates that this field can hold a list of values.
  repeated: boolean;

  // Required indicates that this field should always be set on all records.
  required: boolean;

  // Indexed indicates that the field should be indexed.  This is only valid for
  // String or StringArray fields (see TypeString, TypeStringArray).
  indexed: boolean;

  // Unique indicates that the field is unique (and this will
  // be encoforced when new records are added).  Unique fields can
  // be used to retrieve/delete records.
  unique: boolean;
}

// Type represents the underlying data type of the field. Default is a string.
type Type = "STRING" | "INTEGER" | "FLOAT" | "BOOLEAN" | "TIMESTAMP";

const TypeString = "STRING";
const TypeInteger = "INTEGER";
const TypeFloat = "FLOAT";
const TypeBoolean = "BOOLEAN";
const TypeTimestamp = "TIMESTAMP";

// Mutation is a mutation of a schema field.
type Mutation =
  | {
      // Name is a new name for the field.
      name: string;
    }
  | {
      // Description is the new description for the field.
      description: string;
    }
  | {
      // Type changes the underlying type of the field.
      type: Type;
    }
  | {
      // Repeated sets whether the field values are repeated.
      repeated: boolean;
    }
  | {
      // Required sets whether the field value is required for index records.
      required: boolean;
    }
  | {
      // Unique sets whether the field must contain unique values.
      unique: boolean;
    }
  | {
      // Indexed sets whether the field data is indexed.
      indexed: boolean;
    };

export class Schema {
  public client: IClient;

  constructor(client: IClient) {
    this.client = client;
  }

  // fields returns the fields in the collection.
  public fields(): Promise<IField[]> {
    return new Promise((resolve, reject) => {
      // @ts-ignore: generated client method
      this.client.clients.Schema.getFields(
        {},
        this.client.metadata,
        (err: ServiceError, response: sajari.engine.schema.Fields) => {
          if (err) {
            return reject(err);
          }

          // tslint:disable-next-line:max-line-length
          const fields: IField[] = (response.fields as sajari.engine.schema.Field[]).map(
            (field) => {
              const {
                description,
                indexed,
                name,
                repeated,
                required,
                type,
                unique
              } = field;

              let fieldType = TypeString;
              if (type === 1) {
                fieldType = TypeInteger;
              } else if (type === 2) {
                fieldType = TypeFloat;
              } else if (type === 3) {
                fieldType = TypeBoolean;
              } else if (type === 4) {
                fieldType = TypeTimestamp;
              }

              return {
                description,
                indexed,
                name,
                repeated,
                required,
                type: fieldType,
                unique
              } as IField;
            }
          );

          return resolve(fields);
        }
      );
    });
  }

  // add adds Fields to the collection schema.
  public add(...fields: IField[]): Promise<null> {
    return new Promise((resolve, reject) => {
      // @ts-ignore: generated client method
      this.client.clients.Schema.addFields(
        { fields },
        this.client.metadata,
        (err: ServiceError, response: sajari.engine.schema.Response) => {
          if (err) {
            return reject(err);
          }

          const error = errorFromStatus(response.status as sajari.rpc.Status[]);
          if (error) {
            return reject(error);
          }
          return resolve(null);
        }
      );
    });
  }

  // mutateField mutates a field identifier by name.
  // Each mutation is performed in the order in which it is specified.
  // If any fail, then the rest are ignored.
  public mutateField(name: string, ...mutations: Mutation[]): Promise<null> {
    return new Promise((resolve, reject) => {
      // @ts-ignore: generated client method
      this.client.clients.Schema.mutateField(
        { name, mutations },
        this.client.metadata,
        (err: ServiceError, response: sajari.engine.schema.Response) => {
          if (err) {
            return reject(err);
          }

          const error = errorFromStatus(response.status as sajari.rpc.Status[]);
          if (error) {
            return reject(error);
          }
          return resolve(null);
        }
      );
    });
  }
}

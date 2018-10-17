import { ServiceError } from "grpc";
import { sajari } from "../../generated/proto";
import { IClient } from "../client";
import { errorFromStatus } from "../utils";
import {
  boolean,
  double,
  Field,
  float,
  integer,
  string,
  timestamp,
  Type,
  TypeBoolean,
  TypeDouble,
  TypeFloat,
  TypeInteger,
  TypeString,
  TypeTimestamp
} from "./field";

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

  public string = string;
  public integer = integer;
  public float = float;
  public double = double;
  public boolean = boolean;
  public timestamp = timestamp;
  private client: IClient;

  constructor(client: IClient) {
    this.client = client;
  }

  // fields returns the fields in the collection.
  public fields(): Promise<Field[]> {
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
          const fields: Field[] = (response.fields as sajari.engine.schema.Field[]).map(
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
              } else if (type === 5) {
                fieldType = TypeDouble;
              }

              return {
                description,
                indexed,
                name,
                repeated,
                required,
                type: fieldType,
                unique
              } as Field;
            }
          );

          return resolve(fields);
        }
      );
    });
  }

  // add adds Fields to the collection schema.
  public add(...fields: Field[]): Promise<null> {
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

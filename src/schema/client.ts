import { sajari } from "../../generated/proto";
import { APIClient, CallOptions } from "../api";
import { errorFromStatuses } from "../utils";
import { Field } from "./field";
import { Mutation } from "./mutation";
import { createAddRequest, createMutateFieldRequest } from "./utils";

/**
 * grpc method endpoint for getting the current schema fields
 * @hidden
 */
const GetFieldsMethod = "sajari.engine.schema.Schema/GetFields";

/**
 * grpc method endpoint for adding fields to the schema
 * @hidden
 */
const AddFieldsMethod = "sajari.engine.schema.Schema/AddFields";

/**
 * grpc method endpoint for mutating a schema field
 * @hidden
 */
const MutateFieldMethod = "sajari.engine.schema.Schema/MutateField";

export class Schema {
  /**
   * @hidden
   */
  private client: APIClient;

  constructor(client: APIClient) {
    this.client = client;
  }

  // fields returns the fields in the collection.
  public async fields(options?: CallOptions): Promise<Field[]> {
    const request = new sajari.rpc.Empty();

    const response = await this.client.call(
      GetFieldsMethod,
      request,
      sajari.rpc.Empty.encode,
      sajari.engine.schema.Fields.decode,
      options
    );

    return response.fields.map(Field.fromProto);
  }

  // add adds Fields to the collection schema.
  public async add(fields: Field[], options?: CallOptions): Promise<void> {
    const request = createAddRequest(fields);

    const response = await this.client.call(
      AddFieldsMethod,
      request,
      sajari.engine.schema.Fields.encode,
      sajari.engine.schema.Response.decode,
      options
    );
    const error = errorFromStatuses(response.status);
    if (error) {
      throw error;
    }
    return;
  }

  // mutateField mutates a field identifier by name.
  // Each mutation is performed in the order in which it is specified.
  // If any fail, then the rest are ignored.
  public async mutateField(
    name: string,
    mutations: Mutation[],
    options?: CallOptions
  ): Promise<void> {
    const request = createMutateFieldRequest(name, mutations);

    const response = await this.client.call(
      MutateFieldMethod,
      request,
      sajari.engine.schema.MutateFieldRequest.encode,
      sajari.engine.schema.Response.decode,
      options
    );
    const error = errorFromStatuses(response.status);
    if (error) {
      throw error;
    }
    return;
  }
}

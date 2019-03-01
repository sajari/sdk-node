import { sajari } from "../../generated/proto";
import { APIClient, CallOptions } from "../api";
import { Field, FieldFromProto, FieldToProto } from "./field";
import { Mutation, MutationToProto } from "./mutation";

/**
 * ListFields returns the fields in the schema.
 * @hidden
 */
const ListFieldsMethod = "sajari.engine.v2.Schema/ListFields";

/**
 * CreateField create a new field in the schema.
 * @hidden
 */
const CreateFieldMethod = "sajari.engine.v2.Schema/CreateField";

/**
 * MutateField mutates a field in the schema.
 * @hidden
 */
const MutateFieldMethod = "sajari.engine.v2.Schema/MutateField";

export class Schema {
  /**
   * @hidden
   */
  private client: APIClient;

  /**
   * @hidden
   */
  constructor(client: APIClient) {
    this.client = client;
  }

  /**
   * listFields returns the fields in the schema.
   */
  public async listFields(options?: CallOptions): Promise<Field[]> {
    let fields: Field[] = [];
    let pageToken = "";

    while (true) {
      const request = sajari.engine.v2.ListFieldsRequest.create({
        pageToken: pageToken
      });

      const response = await this.client.call(
        ListFieldsMethod,
        request,
        sajari.engine.v2.ListFieldsRequest.encode,
        sajari.engine.v2.ListFieldsResponse.decode,
        options
      );

      fields = fields.concat(response.fields.map(FieldFromProto));

      if (response.nextPageToken === "") {
        break;
      }
      pageToken = response.nextPageToken;
    }

    return fields;
  }

  /**
   * createField creates a new field in the schema.
   */
  public async createField(field: Field, options?: CallOptions) {
    const request = sajari.engine.v2.CreateFieldRequest.create({
      field: FieldToProto(field)
    });

    await this.client.call(
      CreateFieldMethod,
      request,
      sajari.engine.v2.CreateFieldRequest.encode,
      sajari.engine.v2.CreateFieldResponse.decode,
      options
    );
  }

  /**
   * mutateField mutates a field in the schema.
   */
  public async mutateField(
    name: string,
    mutation: Mutation,
    options?: CallOptions
  ) {
    const request = sajari.engine.v2.MutateFieldRequest.create({
      name,
      mutation: MutationToProto(mutation)
    });

    await this.client.call(
      MutateFieldMethod,
      request,
      sajari.engine.v2.MutateFieldRequest.encode,
      sajari.engine.v2.MutateFieldResponse.decode,
      options
    );
  }
}

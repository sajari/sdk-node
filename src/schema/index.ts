import Debug from "debug";
import { ServiceError } from "grpc";
import { sajari } from "../../generated/proto";
import { Client } from "../client";
import { errorFromStatuses } from "../utils";
import {
  engineFieldToField,
  Field,
  field,
  FieldOptions,
  Mutation,
  Type
} from "./field";
import { createAddRequest, createMutateFieldRequest } from "./utils";

/**
 * @hidden
 */
const debug = Debug("sajari:client:schema");

// export class Schema {
//   /**
//    * @hidden
//    */
//   private client: Client;

//   constructor(client: Client) {
//     this.client = client;
//   }

//   // fields returns the fields in the collection.
//   public fields(): Promise<Field[]> {
//     return new Promise((resolve, reject) => {
//       const req = new sajari.rpc.Empty();
//       debug("fields req: %o", req);
//       debug("fields metadata: %o", this.client.metadata.getMap());

//       // @ts-ignore: generated client method
//       this.client.clients.Schema.getFields(
//         req,
//         this.client.metadata,
//         (err: ServiceError, response: sajari.engine.schema.Fields) => {
//           if (err) {
//             return reject(err);
//           }

//           let fields = [];
//           try {
//             fields = response.fields.map(engineFieldToField);
//           } catch (error) {
//             return reject(error);
//           }
//           return resolve(fields);
//         }
//       );
//     });
//   }

//   // add adds Fields to the collection schema.
//   public add(...fields: Field[]): Promise<null> {
//     return new Promise((resolve, reject) => {
//       let req = {};
//       try {
//         req = createAddRequest(fields);
//       } catch (error) {
//         return reject(error);
//       }
//       debug("add request: %o", req);
//       debug("add metadata: %o", this.client.metadata.getMap());

//       // @ts-ignore: generated client method
//       this.client.clients.Schema.addFields(
//         req,
//         this.client.metadata,
//         (err: ServiceError, response: sajari.engine.schema.Response) => {
//           if (err) {
//             return reject(err);
//           }

//           const error = errorFromStatuses(response.status);
//           if (error) {
//             return reject(error);
//           }
//           return resolve(null);
//         }
//       );
//     });
//   }

//   // mutateField mutates a field identifier by name.
//   // Each mutation is performed in the order in which it is specified.
//   // If any fail, then the rest are ignored.
//   public mutateField(name: string, ...mutations: Mutation[]): Promise<null> {
//     return new Promise((resolve, reject) => {
//       let req = {};
//       try {
//         req = createMutateFieldRequest(name, mutations);
//       } catch (error) {
//         return reject(error);
//       }
//       debug("mutateField request: %o", req);
//       debug("mutateField metadata: %o", this.client.metadata.getMap());

//       // @ts-ignore: generated client method
//       this.client.clients.Schema.mutateField(
//         req,
//         this.client.metadata,
//         (err: ServiceError, response: sajari.engine.schema.Response) => {
//           if (err) {
//             return reject(err);
//           }

//           const error = errorFromStatuses(response.status);
//           if (error) {
//             return reject(error);
//           }
//           return resolve(null);
//         }
//       );
//     });
//   }

//   public string(name: string, options: FieldOptions): Field {
//     return field(Type.String, name, options);
//   }
//   public integer(name: string, options: FieldOptions): Field {
//     return field(Type.Integer, name, options);
//   }
//   public float(name: string, options: FieldOptions): Field {
//     return field(Type.Float, name, options);
//   }
//   public double(name: string, options: FieldOptions): Field {
//     return field(Type.Double, name, options);
//   }
//   public boolean(name: string, options: FieldOptions): Field {
//     return field(Type.Boolean, name, options);
//   }
//   public timestamp(name: string, options: FieldOptions): Field {
//     return field(Type.Timestamp, name, options);
//   }
// }

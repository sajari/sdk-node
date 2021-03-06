/**
 * Sajari API
 * Sajari is a smart, highly-configurable, real-time search service that enables thousands of businesses worldwide to provide amazing search experiences on their websites, stores, and applications.
 *
 * The version of the OpenAPI document: v4
 * Contact: support@sajari.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from "./models";

/**
 * Type represents the underlying data type of the field.   - TYPE_UNSPECIFIED: Type not specified.  - STRING: String values.  - INTEGER: Integer values (64-bit).  - FLOAT: Floating point values (32-bit).  - DOUBLE: Double floating point values (64-bit).  - BOOLEAN: Boolean values.  - TIMESTAMP: Timestamp values.
 */
export enum SchemaFieldType {
  TypeUnspecified = <any>"TYPE_UNSPECIFIED",
  String = <any>"STRING",
  Integer = <any>"INTEGER",
  Float = <any>"FLOAT",
  Double = <any>"DOUBLE",
  Boolean = <any>"BOOLEAN",
  Timestamp = <any>"TIMESTAMP",
}

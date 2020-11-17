import {
  SchemaClient,
  withEndpoint,
  withKeyCredentials,
  SchemaFieldType,
  SchemaFieldMode,
} from "@sajari/sdk-node";

import program, { withDefaultOptions } from "./program";

withDefaultOptions(program);

program.requiredOption("--field-name <field_name>", "field name", "my-field");
program.requiredOption("--field-type <field_type>", "field type", "STRING");
program.requiredOption("--field-mode <field_mode>", "field mode", "NULLABLE");
program.option("--field-array", "the field is an array of <field_type>", false);
program.requiredOption(
  "--field-description <field_description>",
  "field description",
  "my description"
);

program.parse(process.argv);

async function main(
  endpoint = program.endpoint,
  collectionId = program.collectionId,
  keyId = program.keyId,
  keySecret = program.keySecret,
  field = {
    name: program.fieldName,
    type: program.fieldType,
    mode: program.fieldMode,
    description: program.fieldDescription,
    array: Boolean(program.fieldArray),
  }
) {
  try {
    const client = new SchemaClient(
      collectionId,
      withEndpoint(endpoint),
      withKeyCredentials(keyId, keySecret)
    );

    // FIXME(jingram): fix enums which get sent as strings not ints
    const f = await client.createField(field);

    console.log(`name=${f.name}`);
    console.log(`type=${f.type}${f.array ? "[]" : ""}`);
    console.log(`mode=${f.mode}`);
    console.log(`description=${f.description}`);
  } catch (e) {
    console.error(e);
  }
}

main();

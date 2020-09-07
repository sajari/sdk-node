# sajari-sdk-node

**Table of contents:**

- [Quickstart](#quickstart)
  - [Before you begin](#before-you-begin)
  - [Install the SDK](#install-the-sdk)
  - [Use the SDK](#use-the-sdk)
- [Examples](#examples)
- [Contributing](#contributing)

## Quickstart

### Before you begin

1. [Create a Sajari account](http://sajari.com/console)
1. [Retrieve your account credentials](https://www.sajari.com/console/project/credentials)

### Install the SDK

```bash
npm install @sajari/sdk-node
```

### Use the SDK

The following example shows how to create a collection using the SDK.

> ⚠️ The function below cleans up after itself by deleting the collection immediately after creation.

```javascript
// Import the Sajari SDK.
const { CollectionsClient, withKeyCredentials } = require("@sajari/sdk-node");

// Create a client for working with collections from the account ID and key
// credentials.
const client = new CollectionsClient(
  "account-id",
  withKeyCredentials("key-id", "key-secret")
);

async function createCollection(id, displayName) {
  // Create a new collection.
  const collection = await client.createCollection({ id, displayName });
  console.log(`Collection ${collection.displayName} created.`);

  // Clean up.
  await client.deleteCollection(collection.id);
}

createCollection("collection-id", "Collection display name").catch(
  console.error
);
```

## Examples

Examples are in the [`examples/`](examples) directory.

| Example                         | Source code                                                |
| ------------------------------- | ---------------------------------------------------------- |
| Batch create schema fields      | [source code](examples/batch-create-schema-fields.ts)      |
| Batch put records               | [source code](examples/batch-put-records.ts)               |
| Create collection               | [source code](examples/create-collection.ts)               |
| Create pipeline                 | [source code](examples/create-pipeline.ts)                 |
| Create schema field             | [source code](examples/create-schema-field.ts)             |
| Delete collection               | [source code](examples/delete-collection.ts)               |
| Delete record                   | [source code](examples/delete-record.ts)                   |
| Generate pipelines              | [source code](examples/generate-pipelines.ts)              |
| Get collection                  | [source code](examples/get-collection.ts)                  |
| Get pipeline                    | [source code](examples/get-pipeline.ts)                    |
| Get record                      | [source code](examples/get-record.ts)                      |
| Infer schema                    | [source code](examples/infer-schema.ts)                    |
| List collections                | [source code](examples/list-collections.ts)                |
| List pipelines                  | [source code](examples/list-pipelines.ts)                  |
| List schema fields              | [source code](examples/list-schema-fields.ts)              |
| Put record                      | [source code](examples/put-record.ts)                      |
| Query collection                | [source code](examples/query-collection.ts)                |
| Set collection default pipeline | [source code](examples/set-collection-default-pipeline.ts) |

## Contributing

Contributions are welcome. See the [Contributing](CONTRIBUTING.md) guide.

# sajari-sdk-node

**Table of contents:**

- [Quickstart](#quickstart)
  - [Before you begin](#before-you-begin)
  - [Install the SDK](#install-the-sdk)
  - [Use the SDK](#use-the-sdk)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

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

Examples are in the [examples](https://github.com/sajari/sdk-node/blob/v4/examples) directory.

| Example                      | Source code                                                                                        |
| ---------------------------- | -------------------------------------------------------------------------------------------------- |
| Batch create schema fields   | [source code](https://github.com/sajari/sdk-node/blob/v4/examples/batch-create-schema-fields.ts)   |
| Batch put records            | [source code](https://github.com/sajari/sdk-node/blob/v4/examples/batch-put-records.ts)            |
| Create collection            | [source code](https://github.com/sajari/sdk-node/blob/v4/examples/create-collection.ts)            |
| Create pipeline              | [source code](https://github.com/sajari/sdk-node/blob/v4/examples/create-pipeline.ts)              |
| Create schema field          | [source code](https://github.com/sajari/sdk-node/blob/v4/examples/create-schema-field.ts)          |
| Delete collection            | [source code](https://github.com/sajari/sdk-node/blob/v4/examples/delete-collection.ts)            |
| Delete record                | [source code](https://github.com/sajari/sdk-node/blob/v4/examples/delete-record.ts)                |
| Generate pipelines           | [source code](https://github.com/sajari/sdk-node/blob/v4/examples/generate-pipelines.ts)           |
| Get collection               | [source code](https://github.com/sajari/sdk-node/blob/v4/examples/get-collection.ts)               |
| Get pipeline                 | [source code](https://github.com/sajari/sdk-node/blob/v4/examples/get-pipeline.ts)                 |
| Get record                   | [source code](https://github.com/sajari/sdk-node/blob/v4/examples/get-record.ts)                   |
| Infer schema                 | [source code](https://github.com/sajari/sdk-node/blob/v4/examples/infer-schema.ts)                 |
| List collections             | [source code](https://github.com/sajari/sdk-node/blob/v4/examples/list-collections.ts)             |
| List pipelines               | [source code](https://github.com/sajari/sdk-node/blob/v4/examples/list-pipelines.ts)               |
| List schema fields           | [source code](https://github.com/sajari/sdk-node/blob/v4/examples/list-schema-fields.ts)           |
| Put record                   | [source code](https://github.com/sajari/sdk-node/blob/v4/examples/put-record.ts)                   |
| Query collection             | [source code](https://github.com/sajari/sdk-node/blob/v4/examples/query-collection.ts)             |
| Set default pipeline         | [source code](https://github.com/sajari/sdk-node/blob/v4/examples/set-default-pipeline.ts)         |
| Set default pipeline version | [source code](https://github.com/sajari/sdk-node/blob/v4/examples/set-default-pipeline-version.ts) |

## Contributing

Contributions are welcome. See the [Contributing](https://github.com/sajari/sdk-node/blob/v4/examples/CONTRIBUTING.md) guide.

## License

MIT

See [LICENSE](https://github.com/sajari/sdk-node/blob/v4/LICENSE)

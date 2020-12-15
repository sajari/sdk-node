# Sajari SDK for Node

[![Build status](https://github.com/sajari/sdk-node/workflows/Build/badge.svg?branch=master)](https://github.com/sajari/sdk-node/actions)

The official [Sajari](https://www.sajari.com) Node client library.

Sajari is a smart, highly-configurable, real-time search service that enables thousands of businesses worldwide to provide amazing search experiences on their websites, stores, and applications.

## Table of contents

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
import { CollectionsClient, withKeyCredentials } from "@sajari/sdk-node";

// Create a client for working with collections from account key credentials.
const client = new CollectionsClient(
  withKeyCredentials("account-key-id", "account-key-secret")
);

async function createCollection(id, displayName) {
  // Create a new collection.
  const collection = await client.createCollection({ id, displayName });
  console.log(`Collection ${collection.displayName} created.`);

  // Clean up. Remove this in your application to keep the collection.
  await client.deleteCollection(collection.id);
}

createCollection("collection-id", "Collection display name").catch(
  console.error
);
```

## Examples

Examples are in the [examples](https://github.com/sajari/sdk-node/blob/master/examples) directory.

| Example                      | Source code                                                                                            |
| ---------------------------- | ------------------------------------------------------------------------------------------------------ |
| Batch create schema fields   | [source code](https://github.com/sajari/sdk-node/blob/master/examples/batch-create-schema-fields.ts)   |
| Batch upsert records         | [source code](https://github.com/sajari/sdk-node/blob/master/examples/batch-upsert-records.ts)         |
| Create collection            | [source code](https://github.com/sajari/sdk-node/blob/master/examples/create-collection.ts)            |
| Create pipeline              | [source code](https://github.com/sajari/sdk-node/blob/master/examples/create-pipeline.ts)              |
| Create schema field          | [source code](https://github.com/sajari/sdk-node/blob/master/examples/create-schema-field.ts)          |
| Delete collection            | [source code](https://github.com/sajari/sdk-node/blob/master/examples/delete-collection.ts)            |
| Delete record                | [source code](https://github.com/sajari/sdk-node/blob/master/examples/delete-record.ts)                |
| Generate pipelines           | [source code](https://github.com/sajari/sdk-node/blob/master/examples/generate-pipelines.ts)           |
| Get collection               | [source code](https://github.com/sajari/sdk-node/blob/master/examples/get-collection.ts)               |
| Get pipeline                 | [source code](https://github.com/sajari/sdk-node/blob/master/examples/get-pipeline.ts)                 |
| Get record                   | [source code](https://github.com/sajari/sdk-node/blob/master/examples/get-record.ts)                   |
| List collections             | [source code](https://github.com/sajari/sdk-node/blob/master/examples/list-collections.ts)             |
| List pipelines               | [source code](https://github.com/sajari/sdk-node/blob/master/examples/list-pipelines.ts)               |
| List schema fields           | [source code](https://github.com/sajari/sdk-node/blob/master/examples/list-schema-fields.ts)           |
| Upsert record                | [source code](https://github.com/sajari/sdk-node/blob/master/examples/upsert-record.ts)                |
| Query collection             | [source code](https://github.com/sajari/sdk-node/blob/master/examples/query-collection.ts)             |
| Set default pipeline         | [source code](https://github.com/sajari/sdk-node/blob/master/examples/set-default-pipeline.ts)         |
| Get default pipeline         | [source code](https://github.com/sajari/sdk-node/blob/master/examples/get-default-pipeline.ts)         |
| Set default pipeline version | [source code](https://github.com/sajari/sdk-node/blob/master/examples/set-default-pipeline-version.ts) |
| Get default pipeline version | [source code](https://github.com/sajari/sdk-node/blob/master/examples/get-default-pipeline-version.ts) |

## Contributing

Contributions are welcome. See the [Contributing](https://github.com/sajari/sdk-node/blob/master/examples/CONTRIBUTING.md) guide.

## License

MIT

See [LICENSE](https://github.com/sajari/sdk-node/blob/master/LICENSE)

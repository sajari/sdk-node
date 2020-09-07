# sajari-sdk-node

**Table of contents:**

- [Quickstart](#quickstart)
  - [Before you begin](#before-you-begin)
  - [Install the SDK](#install-the-sdk)
  - [Use the SDK](#use-the-sdk)
- [Samples](#samples)
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

createCollection(
  "collection-id",
  "collection-display-name",
).catch(console.error);
```

## Contributing

Contributions are welcome. See the [Contributing](CONTRIBUTING.md) guide.

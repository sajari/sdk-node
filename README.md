# @sajari/sdk-node

> Node.js SDK for Sajari APIs <br/>
> NOTE: THIS IS STILL IN ALPHA

## Getting Started

### Installation

This is a [Node.js](https://nodejs.org/) module available through the
[npm registry](https://www.npmjs.com/). It can be installed using the
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or [`yarn`](https://yarnpkg.com/en/) command line tools.

```sh
npm install @sajari/sdk-node --save # yarn add @sajari/sdk-node
```

### Tests

```sh
npm install
npm test
```

## Examples

**Creating a schema**
```js
const { Client, FieldMode, schema } = require("@sajari/sdk-node");

// create client
const client = new Client("<project>", "<collection>", {
	key: "<key from console>",
	secret: "<secret from console>"
});

const fields = [
  schema.field.boolean("my-boolean-field", {
    // Set this field to be required.
    // FieldMode options are defined here,
    // https://sajari-sdk-node.netlify.com/enums/fieldmode.html
    mode: FieldMode.Required
  }),
  schema.field.string("text"),
  schema.field.string("url", { mode: FieldMode.Unique })
];

Promise.all(fields.map((field) => client.schema().createField(field))).catch(
  (error) => {
    /* handle error ... */
  }
);
```

**Adding a record**
```js
const { Client } = require("@sajari/sdk-node");

// create client
const client = new Client("<project>", "<collection>", {
  key: "<key from console>",
  secret: "<secret from console>"
});

// get the pipeline client
const pipeline = client.pipeline({
  name: "<your pipeline name>",
  version: "<your pipeline version>"
});

const record = {
  "my-boolean-field": "true",
  text: "hello",
  url: "https://example.com"
};

pipeline
  .create({}, record)
  .then((key) => {
    /* handle key ... */
  })
  .catch((error) => {
    /* handle error ... */
  });
```

**Performing a search**
```js
const { Client, DefaultSession, TrackingType } = require("@sajari/sdk-node");

const client = new Client("<project>", "<collection>", {
  key: "<key from console>",
  secret: "<secret from console>"
});

const session = new DefaultSession(TrackingType.None, "url", {
    /* optional session data can be added here */
});
const pipeline = client.pipeline({
  name: "<your pipeline name>",
  version: "<your pipeline version>"
});
const values = { q: "hello" };

pipeline
  .search(values, session.next(values))
  .then((response) => {
    /* handle response ... */
  })
  .catch((error) => {
    /* handle error ... */
  });
```

**Performing a search (with Click Tracking)**
```js
const { Client, DefaultSession, TrackingType } = require("@sajari/sdk-node");

const client = new Client("<project>", "<collection>", {
  key: "<key from console>",
  secret: "<secret from console>"
});

const session = new DefaultSession(TrackingType.Click, "url", {
    /* optional session data can be added here */
});
const pipeline = client.pipeline({
  name: "<your pipeline name>",
  version: "<your pipeline version>"
});
const values = { q: "hello" };

pipeline
  .search(values, session.next(values))
  .then((response) => {
    /* handle response ... */
  })
  .catch((error) => {
    /* handle error ... */
  });
```


## License

[MIT](LICENSE)

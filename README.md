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

**Performing a search (with PosNeg Tracking and Session Data)**
```js
const { Client, DefaultSession, TrackingType } = require("@sajari/sdk-node");

const client = new Client("<project>", "<collection>", {
  key: "<key from console>",
  secret: "<secret from console>"
});

const session = new DefaultSession(TrackingType.PosNeg, "url", {
  /*
    Optionally data can be included when constructing a search session.
  */
  "googleAnalyticsID": "123456789",
  "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1",
  "userID": "34567uighfrytutr54",
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

**Consuming an interaction token**
```js
const { Client } = require("@sajari/sdk-node");

const client = new Client("<project>", "<collection>", {
  key: "<key from console>",
  secret: "<secret from console>"
});

/*
On each result when using TrackingType.Click or TrackingType.PosNeg, there is a
set of tokens. These tokens allow you to provide feedback to the ranking system.
When a user interacts with a result, you can send back the token with some extra
information.

The following invocation of the consume function, is noting that this particular
interaction was a "purchase" and the user purchasing the item was 20 years old (this information coming from some system that you operate.)
*/
client.interaction().consume(token, {
  identifier: "purchase",
  weight: 1.0,
  data: {
    age: "20",
  }
})
```


## License

[MIT](LICENSE)

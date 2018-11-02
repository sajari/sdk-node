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
const { DefaultClient, FieldMode } = require("@sajari/sdk-node");

// create client
const client = new DefaultClient("<project>", "<collection>", {
	key: "<key from console>",
	secret: "<secret from console>"
});

// get schema client
const schema = client.schema()

const fields = [
	schema.boolean("my-boolean-field", {
		// Set this field to be required.
		// FieldMode options are defined here,
		// https://sajari-sdk-node.netlify.com/enums/fieldmode.html
		mode: FieldMode.Required 
	}),
	schema.string("text")
]

schema.add(...fields).catch(error => {/* handle error ... */})
```

**Adding a record**
```js
const { DefaultClient, FieldMode } = require("@sajari/sdk-node");

// create client
const client = new DefaultClient("<project>", "<collection>", {
	key: "<key from console>",
	secret: "<secret from console>"
});

// get the pipeline client
const pipeline = client.pipeline("<your pipeline name>")

const record = {
	"my-boolean-field": true,
	"text": "hello"
}

pipeline.add({}, record)
	.then(key => {/* handle key ... */})
	.catch(error => {/* handle error ... */})
```

**Perform a search**
```js
const { DefaultClient, DefaultSession, TrackingType } = require("@sajari/sdk-node");

const client = new DefaultClient("<project>", "<collection>", {
	key: "<key from console>",
	secret: "<secret from console>"
});

const session = new DefaultSession(TrackingType.None);
const pipeline = client.pipeline("<your pipeline name>");

pipeline.search({ q: "hello" }, session)
	.then(response => {/* handle response ... */})
	.catch(error => {/* handle error ... */})
```


## License

[MIT](LICENSE)

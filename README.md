# @sajari/sdk-node

> Node.js SDK for Sajari APIs

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

### Dependencies

* [debug](https://ghub.io/debug): small debugging utility
* [grpc](https://ghub.io/grpc): gRPC Library for Node
* [protobufjs](https://ghub.io/protobufjs): Protocol Buffers for JavaScript (&amp; TypeScript).

## Example
```js
// Search Example

const { Client, Session, TrackingNone } = require("sajari-node");

const client = new Client("<project>", "<collection>", {
	key: "<key from console>",
	secret: "<secret from console>"
});
const session = new Session(TrackingNone);
const pipeline = client.pipeline("website");

pipeline.search({ q: "hello world" }, session)
	.then(response => {/* handle response ... */})
	.catch(error => {/* handle error ... */})
```

## License

[MIT](LICENSE)

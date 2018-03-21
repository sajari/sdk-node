const PrettyError = require("pretty-error");
const pe = new PrettyError();

const {
  Client,
  Session,
  TrackingNone,
  withEndpoint
} = require("../dist/sajari");

const argv = require("yargs")
  .env("SAJARI")
  .option("project", {
    type: "string",
    describe: "project `name` to query",
    demandOption: true
  })
  .option("collection", {
    type: "string",
    describe: "collection `name` to query",
    demandOption: true
  })
  .option("credentials", {
    type: "string",
    describe: "calling credentials `key-id,key-secret`",
    demandOption: true
  })
  .option("endpoint", {
    type: "string",
    describe: "endpoint `address`, uses default if not set"
  })
  .option("pipeline", {
    type: "string",
    describe: "`algorithm` to run, uses `website` if not set"
  })
  .option("values", {
    type: "string",
    describe: "`key:value` pairs, comma-seperated",
    demandOption: true
  })
  .option("colors", {
    type: "boolean",
    describe: "enable coloured output",
    default: false
  }).argv;

if (!argv.colors) {
  pe.withoutColors();
}

const credentials = argv.credentials.split(",").reduce((obj, item, idx) => {
  if (idx === 0) {
    obj["key"] = item;
  } else if (idx === 1) {
    obj["secret"] = item;
  }
  return obj;
}, {});

const opts = [];
if (!!argv.endpoint) {
  opts.push(withEndpoint(argv.endpoint));
}

const client = new Client(argv.project, argv.collection, credentials, ...opts);
const pipeline = client.pipeline(argv.pipeline || "website");
const session = new Session(TrackingNone);

const values = argv.values.split(",").reduce((obj, item) => {
  const kv = item.split(":");
  obj[kv[0]] = kv[1];
  return obj;
}, {});

pipeline
  .search(values, session)
  .then(
    (response) => JSON.stringify(response, null, 4),
    (error) => console.error(pe.render(error))
  )
  .catch((error) => {
    console.error(pe.render(error));
    process.exit(1);
  });

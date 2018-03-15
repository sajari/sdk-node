const { join, resolve, dirname } = require("path");
const { execSync } = require("child_process");
const globby = require("globby");
const mkd = require("make-dir");

const moduleBinPath = join(resolve(__dirname, "../"), "node_modules", ".bin");
const pbjs = join(moduleBinPath, "pbjs");
const pbts = join(moduleBinPath, "pbts");

const protoPath = resolve(__dirname, "../generated");
mkd.sync(protoPath);

const PROTO_SRC = process.env.PROTO_SRC;

if (PROTO_SRC === undefined) {
	console.error("$PROTO_SRC is not defined");
	process.exit(1);
}

const protoDirs = [
	"sajari/api/pipeline/v1",
	"sajari/rpc",
	"sajari/engine",
	"sajari/engine/store/record"
];

try {
	execSync(
		`${pbjs} -t static-module -w commonjs -o ${join(
			protoPath,
			"proto.js"
		)} -p ${PROTO_SRC} ${globby
			.sync(protoDirs.map((dir) => join(PROTO_SRC, dir, "/**/*.proto")))
			.join(" ")}`
	);
} catch (error) {}

try {
	execSync(
		`${pbjs} -t json-module -o ${join(
			protoPath,
			"proto-defs.js"
		)} -p ${PROTO_SRC} ${globby
			.sync(protoDirs.map((dir) => join(PROTO_SRC, dir, "/**/*.proto")))
			.join(" ")}`
	);
} catch (error) {}

try {
	execSync(
		`${pbts} -o ${join(protoPath, "proto.d.ts")} ${join(
			protoPath,
			"proto.js"
		)}`
	);
} catch (error) {}

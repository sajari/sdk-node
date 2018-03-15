const { resolve, join } = require("path");

const LIB_ROOT = resolve(join(__dirname, "../"));
const LIB_SRC = resolve(join(__dirname, "../src"));
const LIB_DIST = resolve(join(__dirname, "../dist"));

module.exports = {
	LIB_ROOT,
	LIB_SRC,
	LIB_DIST
};

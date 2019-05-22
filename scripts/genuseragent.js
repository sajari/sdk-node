const fs = require("fs");
const path = require("path");
const pkg = require("../package.json");

const tmpl = `// CODE GENERATED. DO NOT EDIT!

/**
 * The user agent of the sdk client
 * @hidden
 */
export const USER_AGENT = "sdk-node-${pkg.version}";
`;

fs.writeFileSync(path.resolve(__dirname, "../src/ua.ts"), tmpl);

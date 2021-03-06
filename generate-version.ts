import fs from "fs";
import path from "path";

const { version } = require("./package.json");

const template = `// Code generated by generate-version.ts. DO NOT EDIT.

export const version = "${version}";
`;

fs.writeFileSync(path.join(__dirname, "./src/version.ts"), template);

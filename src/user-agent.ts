const { version } = require("../package.json");

export const clientUserAgentHeader = "Sajari-Client-User-Agent";

export const clientUserAgent = () => `sajari-sdk-node/${version}`;

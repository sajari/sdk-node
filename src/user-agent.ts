import { version } from "./version";

export const clientUserAgentHeader = "Sajari-Client-User-Agent";

export const clientUserAgent = () => `sajari-sdk-node/${version}`;

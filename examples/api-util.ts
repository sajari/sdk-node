import { HttpError } from "@sajari/sdk-node";

export const handleError = (e: any) => {
  if (e instanceof HttpError) {
    const msg = [
      `Message: ${e.message}`,
      `Status: ${e.statusCode}`,
      `Response: $JSON.stringify(e.response, null, 2)}`,
    ].join("\n");
    console.error(msg);
    return;
  }

  console.error(e);
};

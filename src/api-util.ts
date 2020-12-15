import { HttpError, ApiError, ObjectSerializer } from "./generated/api";

export const handleError = (e: any) => {
  if (e instanceof HttpError) {
    try {
      const resp = JSON.parse(JSON.stringify(e.response));
      if (resp.body) {
        return ObjectSerializer.deserialize(resp.body, "ApiError") as ApiError;
      }
    } catch (e) {
      return e;
    }
  }

  return e;
};

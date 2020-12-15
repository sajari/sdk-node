import {
  HttpError,
  ModelError as APIError,
  ObjectSerializer,
} from "./generated/api";

export const handleError = (e: any) => {
  if (e instanceof HttpError) {
    try {
      const resp = JSON.parse(JSON.stringify(e.response));
      if (resp.body) {
        const f = ObjectSerializer.deserialize(resp.body, "ModelError");
        return f as APIError;
      }
    } catch (e) {
      return e;
    }
  }

  return e;
};

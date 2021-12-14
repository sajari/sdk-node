import { ProtobufAny } from "../generated/api";

export const endpoint = "https://api.search.io";

export interface ErrorResponse {
  code: number;
  message: string;
  details: ProtobufAny[];
}

export function errorResponse(
  code: number,
  message: string,
  details: ProtobufAny[] = []
): ErrorResponse {
  return { message, code, details };
}

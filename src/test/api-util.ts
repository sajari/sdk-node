import { ProtobufAny } from "../generated/api";

export const endpoint = "https://api-gateway.sajari.com";

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

import { InterceptingCall } from "@grpc/grpc-js";
/**
 * https://github.com/grpc/proposal/pull/14/files#diff-c1aee0ddae63a3e9a9ba050796cd4b58R325
 * @hidden
 */
export default function retryInterceptor(maxRetries?: number): (options: any, nextCall: any) => InterceptingCall;

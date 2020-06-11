// tslint:disable:no-shadowed-variable

import debuglog from "debug";
import {
  InterceptingCall,
  Listener,
  Metadata,
  status as statusCode,
  StatusObject
} from "grpc";

const debug = debuglog("sajari:api:retryInterceptor");

/**
 * https://github.com/grpc/proposal/pull/14/files#diff-c1aee0ddae63a3e9a9ba050796cd4b58R325
 * @hidden
 */
export default function retryInterceptor(maxRetries: number = 3) {
  return function interceptor(options: any, nextCall: any) {
    let savedMetadata: Metadata;
    let savedSendMessage: any;
    let savedReceiveMessage: any;
    let savedMessageNext: any;

    const requester = {
      start(metadata: Metadata, _: Listener, next: any) {
        savedMetadata = metadata;
        const newListener = {
          onReceiveMessage(message: any, next: any) {
            savedReceiveMessage = message;
            savedMessageNext = next;
          },
          onReceiveStatus(status: StatusObject, next: any) {
            let retries = 0;
            function retry(message: any, metadata: Metadata) {
              retries++;
              const newCall = nextCall(options);

              const retryListener = {
                onReceiveMessage(message: any) {
                  savedReceiveMessage = message;
                },
                onReceiveStatus(status: StatusObject) {
                  if (status.code !== statusCode.OK) {
                    if (retries <= maxRetries) {
                      const retryDelay = 10 * retries + Math.random() * 10;
                      setTimeout(() => {
                        debug("retry: %j", { num: retries, delay: retryDelay });
                        retry(message, metadata);
                      }, retryDelay);
                    } else {
                      savedMessageNext(savedReceiveMessage);
                      next(status);
                    }
                  } else {
                    savedMessageNext(savedReceiveMessage);
                    next({ code: statusCode.OK });
                  }
                }
              };

              newCall.start(metadata, retryListener);
              newCall.sendMessage(savedSendMessage);
              newCall.halfClose();
            }

            if (
              status.code !== statusCode.OK &&
              (
                status.code === statusCode.UNKNOWN ||
                status.code === statusCode.UNAVAILABLE
              )
            ) {
              retry(savedSendMessage, savedMetadata);
            } else {
              savedMessageNext(savedReceiveMessage);
              next(status);
            }
          }
        };

        next(metadata, newListener);
      },
      sendMessage(message: any, next: any) {
        savedSendMessage = message;
        next(message);
      }
    };
    return new InterceptingCall(nextCall(options), requester);
  };
}

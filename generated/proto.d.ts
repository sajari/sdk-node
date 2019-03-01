import * as $protobuf from "protobufjs";
/** Namespace sajari. */
export namespace sajari {

    /** Namespace pipeline. */
    namespace pipeline {

        /** Namespace v2. */
        namespace v2 {

            /** Represents a PipelineAdmin */
            class PipelineAdmin extends $protobuf.rpc.Service {

                /**
                 * Constructs a new PipelineAdmin service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new PipelineAdmin service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): PipelineAdmin;

                /**
                 * Calls CreatePipeline.
                 * @param request CreatePipelineRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and CreatePipelineResponse
                 */
                public createPipeline(request: sajari.pipeline.v2.ICreatePipelineRequest, callback: sajari.pipeline.v2.PipelineAdmin.CreatePipelineCallback): void;

                /**
                 * Calls CreatePipeline.
                 * @param request CreatePipelineRequest message or plain object
                 * @returns Promise
                 */
                public createPipeline(request: sajari.pipeline.v2.ICreatePipelineRequest): Promise<sajari.pipeline.v2.CreatePipelineResponse>;

                /**
                 * Calls ListPipelines.
                 * @param request ListPipelinesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListPipelinesResponse
                 */
                public listPipelines(request: sajari.pipeline.v2.IListPipelinesRequest, callback: sajari.pipeline.v2.PipelineAdmin.ListPipelinesCallback): void;

                /**
                 * Calls ListPipelines.
                 * @param request ListPipelinesRequest message or plain object
                 * @returns Promise
                 */
                public listPipelines(request: sajari.pipeline.v2.IListPipelinesRequest): Promise<sajari.pipeline.v2.ListPipelinesResponse>;

                /**
                 * Calls GetPipeline.
                 * @param request GetPipelineRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and GetPipelineResponse
                 */
                public getPipeline(request: sajari.pipeline.v2.IGetPipelineRequest, callback: sajari.pipeline.v2.PipelineAdmin.GetPipelineCallback): void;

                /**
                 * Calls GetPipeline.
                 * @param request GetPipelineRequest message or plain object
                 * @returns Promise
                 */
                public getPipeline(request: sajari.pipeline.v2.IGetPipelineRequest): Promise<sajari.pipeline.v2.GetPipelineResponse>;

                /**
                 * Calls SetDefaultPipeline.
                 * @param request SetDefaultPipelineRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and SetDefaultPipelineResponse
                 */
                public setDefaultPipeline(request: sajari.pipeline.v2.ISetDefaultPipelineRequest, callback: sajari.pipeline.v2.PipelineAdmin.SetDefaultPipelineCallback): void;

                /**
                 * Calls SetDefaultPipeline.
                 * @param request SetDefaultPipelineRequest message or plain object
                 * @returns Promise
                 */
                public setDefaultPipeline(request: sajari.pipeline.v2.ISetDefaultPipelineRequest): Promise<sajari.pipeline.v2.SetDefaultPipelineResponse>;

                /**
                 * Calls GetDefaultPipeline.
                 * @param request GetDefaultPipelineRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and GetDefaultPipelineResponse
                 */
                public getDefaultPipeline(request: sajari.pipeline.v2.IGetDefaultPipelineRequest, callback: sajari.pipeline.v2.PipelineAdmin.GetDefaultPipelineCallback): void;

                /**
                 * Calls GetDefaultPipeline.
                 * @param request GetDefaultPipelineRequest message or plain object
                 * @returns Promise
                 */
                public getDefaultPipeline(request: sajari.pipeline.v2.IGetDefaultPipelineRequest): Promise<sajari.pipeline.v2.GetDefaultPipelineResponse>;

                /**
                 * Calls DeletePipeline.
                 * @param request DeletePipelineRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and DeletePipelineResponse
                 */
                public deletePipeline(request: sajari.pipeline.v2.IDeletePipelineRequest, callback: sajari.pipeline.v2.PipelineAdmin.DeletePipelineCallback): void;

                /**
                 * Calls DeletePipeline.
                 * @param request DeletePipelineRequest message or plain object
                 * @returns Promise
                 */
                public deletePipeline(request: sajari.pipeline.v2.IDeletePipelineRequest): Promise<sajari.pipeline.v2.DeletePipelineResponse>;
            }

            namespace PipelineAdmin {

                /**
                 * Callback as used by {@link sajari.pipeline.v2.PipelineAdmin#createPipeline}.
                 * @param error Error, if any
                 * @param [response] CreatePipelineResponse
                 */
                type CreatePipelineCallback = (error: (Error|null), response?: sajari.pipeline.v2.CreatePipelineResponse) => void;

                /**
                 * Callback as used by {@link sajari.pipeline.v2.PipelineAdmin#listPipelines}.
                 * @param error Error, if any
                 * @param [response] ListPipelinesResponse
                 */
                type ListPipelinesCallback = (error: (Error|null), response?: sajari.pipeline.v2.ListPipelinesResponse) => void;

                /**
                 * Callback as used by {@link sajari.pipeline.v2.PipelineAdmin#getPipeline}.
                 * @param error Error, if any
                 * @param [response] GetPipelineResponse
                 */
                type GetPipelineCallback = (error: (Error|null), response?: sajari.pipeline.v2.GetPipelineResponse) => void;

                /**
                 * Callback as used by {@link sajari.pipeline.v2.PipelineAdmin#setDefaultPipeline}.
                 * @param error Error, if any
                 * @param [response] SetDefaultPipelineResponse
                 */
                type SetDefaultPipelineCallback = (error: (Error|null), response?: sajari.pipeline.v2.SetDefaultPipelineResponse) => void;

                /**
                 * Callback as used by {@link sajari.pipeline.v2.PipelineAdmin#getDefaultPipeline}.
                 * @param error Error, if any
                 * @param [response] GetDefaultPipelineResponse
                 */
                type GetDefaultPipelineCallback = (error: (Error|null), response?: sajari.pipeline.v2.GetDefaultPipelineResponse) => void;

                /**
                 * Callback as used by {@link sajari.pipeline.v2.PipelineAdmin#deletePipeline}.
                 * @param error Error, if any
                 * @param [response] DeletePipelineResponse
                 */
                type DeletePipelineCallback = (error: (Error|null), response?: sajari.pipeline.v2.DeletePipelineResponse) => void;
            }

            /** Properties of a GetPipelineRequest. */
            interface IGetPipelineRequest {

                /** GetPipelineRequest pipeline */
                pipeline?: (sajari.pipeline.v2.ITypeIdentifier|null);
            }

            /** Represents a GetPipelineRequest. */
            class GetPipelineRequest implements IGetPipelineRequest {

                /**
                 * Constructs a new GetPipelineRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.IGetPipelineRequest);

                /** GetPipelineRequest pipeline. */
                public pipeline?: (sajari.pipeline.v2.ITypeIdentifier|null);

                /**
                 * Creates a new GetPipelineRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetPipelineRequest instance
                 */
                public static create(properties?: sajari.pipeline.v2.IGetPipelineRequest): sajari.pipeline.v2.GetPipelineRequest;

                /**
                 * Encodes the specified GetPipelineRequest message. Does not implicitly {@link sajari.pipeline.v2.GetPipelineRequest.verify|verify} messages.
                 * @param message GetPipelineRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.IGetPipelineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetPipelineRequest message, length delimited. Does not implicitly {@link sajari.pipeline.v2.GetPipelineRequest.verify|verify} messages.
                 * @param message GetPipelineRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.IGetPipelineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetPipelineRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetPipelineRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.GetPipelineRequest;

                /**
                 * Decodes a GetPipelineRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetPipelineRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.GetPipelineRequest;

                /**
                 * Verifies a GetPipelineRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetPipelineRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetPipelineRequest
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.GetPipelineRequest;

                /**
                 * Creates a plain object from a GetPipelineRequest message. Also converts values to other types if specified.
                 * @param message GetPipelineRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.GetPipelineRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetPipelineRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetPipelineResponse. */
            interface IGetPipelineResponse {

                /** GetPipelineResponse pipeline */
                pipeline?: (sajari.pipeline.v2.IPipeline|null);
            }

            /** Represents a GetPipelineResponse. */
            class GetPipelineResponse implements IGetPipelineResponse {

                /**
                 * Constructs a new GetPipelineResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.IGetPipelineResponse);

                /** GetPipelineResponse pipeline. */
                public pipeline?: (sajari.pipeline.v2.IPipeline|null);

                /**
                 * Creates a new GetPipelineResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetPipelineResponse instance
                 */
                public static create(properties?: sajari.pipeline.v2.IGetPipelineResponse): sajari.pipeline.v2.GetPipelineResponse;

                /**
                 * Encodes the specified GetPipelineResponse message. Does not implicitly {@link sajari.pipeline.v2.GetPipelineResponse.verify|verify} messages.
                 * @param message GetPipelineResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.IGetPipelineResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetPipelineResponse message, length delimited. Does not implicitly {@link sajari.pipeline.v2.GetPipelineResponse.verify|verify} messages.
                 * @param message GetPipelineResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.IGetPipelineResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetPipelineResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetPipelineResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.GetPipelineResponse;

                /**
                 * Decodes a GetPipelineResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetPipelineResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.GetPipelineResponse;

                /**
                 * Verifies a GetPipelineResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetPipelineResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetPipelineResponse
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.GetPipelineResponse;

                /**
                 * Creates a plain object from a GetPipelineResponse message. Also converts values to other types if specified.
                 * @param message GetPipelineResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.GetPipelineResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetPipelineResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SetDefaultPipelineRequest. */
            interface ISetDefaultPipelineRequest {

                /** SetDefaultPipelineRequest pipeline */
                pipeline?: (sajari.pipeline.v2.ITypeIdentifier|null);
            }

            /** Represents a SetDefaultPipelineRequest. */
            class SetDefaultPipelineRequest implements ISetDefaultPipelineRequest {

                /**
                 * Constructs a new SetDefaultPipelineRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.ISetDefaultPipelineRequest);

                /** SetDefaultPipelineRequest pipeline. */
                public pipeline?: (sajari.pipeline.v2.ITypeIdentifier|null);

                /**
                 * Creates a new SetDefaultPipelineRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetDefaultPipelineRequest instance
                 */
                public static create(properties?: sajari.pipeline.v2.ISetDefaultPipelineRequest): sajari.pipeline.v2.SetDefaultPipelineRequest;

                /**
                 * Encodes the specified SetDefaultPipelineRequest message. Does not implicitly {@link sajari.pipeline.v2.SetDefaultPipelineRequest.verify|verify} messages.
                 * @param message SetDefaultPipelineRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.ISetDefaultPipelineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SetDefaultPipelineRequest message, length delimited. Does not implicitly {@link sajari.pipeline.v2.SetDefaultPipelineRequest.verify|verify} messages.
                 * @param message SetDefaultPipelineRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.ISetDefaultPipelineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetDefaultPipelineRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SetDefaultPipelineRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.SetDefaultPipelineRequest;

                /**
                 * Decodes a SetDefaultPipelineRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SetDefaultPipelineRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.SetDefaultPipelineRequest;

                /**
                 * Verifies a SetDefaultPipelineRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SetDefaultPipelineRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SetDefaultPipelineRequest
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.SetDefaultPipelineRequest;

                /**
                 * Creates a plain object from a SetDefaultPipelineRequest message. Also converts values to other types if specified.
                 * @param message SetDefaultPipelineRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.SetDefaultPipelineRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SetDefaultPipelineRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SetDefaultPipelineResponse. */
            interface ISetDefaultPipelineResponse {
            }

            /** Represents a SetDefaultPipelineResponse. */
            class SetDefaultPipelineResponse implements ISetDefaultPipelineResponse {

                /**
                 * Constructs a new SetDefaultPipelineResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.ISetDefaultPipelineResponse);

                /**
                 * Creates a new SetDefaultPipelineResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetDefaultPipelineResponse instance
                 */
                public static create(properties?: sajari.pipeline.v2.ISetDefaultPipelineResponse): sajari.pipeline.v2.SetDefaultPipelineResponse;

                /**
                 * Encodes the specified SetDefaultPipelineResponse message. Does not implicitly {@link sajari.pipeline.v2.SetDefaultPipelineResponse.verify|verify} messages.
                 * @param message SetDefaultPipelineResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.ISetDefaultPipelineResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SetDefaultPipelineResponse message, length delimited. Does not implicitly {@link sajari.pipeline.v2.SetDefaultPipelineResponse.verify|verify} messages.
                 * @param message SetDefaultPipelineResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.ISetDefaultPipelineResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetDefaultPipelineResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SetDefaultPipelineResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.SetDefaultPipelineResponse;

                /**
                 * Decodes a SetDefaultPipelineResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SetDefaultPipelineResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.SetDefaultPipelineResponse;

                /**
                 * Verifies a SetDefaultPipelineResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SetDefaultPipelineResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SetDefaultPipelineResponse
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.SetDefaultPipelineResponse;

                /**
                 * Creates a plain object from a SetDefaultPipelineResponse message. Also converts values to other types if specified.
                 * @param message SetDefaultPipelineResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.SetDefaultPipelineResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SetDefaultPipelineResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetDefaultPipelineRequest. */
            interface IGetDefaultPipelineRequest {

                /** GetDefaultPipelineRequest pipeline */
                pipeline?: (sajari.pipeline.v2.ITypeIdentifier|null);
            }

            /** Represents a GetDefaultPipelineRequest. */
            class GetDefaultPipelineRequest implements IGetDefaultPipelineRequest {

                /**
                 * Constructs a new GetDefaultPipelineRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.IGetDefaultPipelineRequest);

                /** GetDefaultPipelineRequest pipeline. */
                public pipeline?: (sajari.pipeline.v2.ITypeIdentifier|null);

                /**
                 * Creates a new GetDefaultPipelineRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetDefaultPipelineRequest instance
                 */
                public static create(properties?: sajari.pipeline.v2.IGetDefaultPipelineRequest): sajari.pipeline.v2.GetDefaultPipelineRequest;

                /**
                 * Encodes the specified GetDefaultPipelineRequest message. Does not implicitly {@link sajari.pipeline.v2.GetDefaultPipelineRequest.verify|verify} messages.
                 * @param message GetDefaultPipelineRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.IGetDefaultPipelineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetDefaultPipelineRequest message, length delimited. Does not implicitly {@link sajari.pipeline.v2.GetDefaultPipelineRequest.verify|verify} messages.
                 * @param message GetDefaultPipelineRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.IGetDefaultPipelineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetDefaultPipelineRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetDefaultPipelineRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.GetDefaultPipelineRequest;

                /**
                 * Decodes a GetDefaultPipelineRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetDefaultPipelineRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.GetDefaultPipelineRequest;

                /**
                 * Verifies a GetDefaultPipelineRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetDefaultPipelineRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetDefaultPipelineRequest
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.GetDefaultPipelineRequest;

                /**
                 * Creates a plain object from a GetDefaultPipelineRequest message. Also converts values to other types if specified.
                 * @param message GetDefaultPipelineRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.GetDefaultPipelineRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetDefaultPipelineRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetDefaultPipelineResponse. */
            interface IGetDefaultPipelineResponse {

                /** GetDefaultPipelineResponse pipeline */
                pipeline?: (sajari.pipeline.v2.ITypeIdentifier|null);

                /** GetDefaultPipelineResponse createTime */
                createTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a GetDefaultPipelineResponse. */
            class GetDefaultPipelineResponse implements IGetDefaultPipelineResponse {

                /**
                 * Constructs a new GetDefaultPipelineResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.IGetDefaultPipelineResponse);

                /** GetDefaultPipelineResponse pipeline. */
                public pipeline?: (sajari.pipeline.v2.ITypeIdentifier|null);

                /** GetDefaultPipelineResponse createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new GetDefaultPipelineResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetDefaultPipelineResponse instance
                 */
                public static create(properties?: sajari.pipeline.v2.IGetDefaultPipelineResponse): sajari.pipeline.v2.GetDefaultPipelineResponse;

                /**
                 * Encodes the specified GetDefaultPipelineResponse message. Does not implicitly {@link sajari.pipeline.v2.GetDefaultPipelineResponse.verify|verify} messages.
                 * @param message GetDefaultPipelineResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.IGetDefaultPipelineResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetDefaultPipelineResponse message, length delimited. Does not implicitly {@link sajari.pipeline.v2.GetDefaultPipelineResponse.verify|verify} messages.
                 * @param message GetDefaultPipelineResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.IGetDefaultPipelineResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetDefaultPipelineResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetDefaultPipelineResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.GetDefaultPipelineResponse;

                /**
                 * Decodes a GetDefaultPipelineResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetDefaultPipelineResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.GetDefaultPipelineResponse;

                /**
                 * Verifies a GetDefaultPipelineResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetDefaultPipelineResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetDefaultPipelineResponse
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.GetDefaultPipelineResponse;

                /**
                 * Creates a plain object from a GetDefaultPipelineResponse message. Also converts values to other types if specified.
                 * @param message GetDefaultPipelineResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.GetDefaultPipelineResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetDefaultPipelineResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListPipelinesRequest. */
            interface IListPipelinesRequest {

                /** ListPipelinesRequest pipeline */
                pipeline?: (sajari.pipeline.v2.ITypeIdentifier|null);

                /** ListPipelinesRequest pageSize */
                pageSize?: (number|null);

                /** ListPipelinesRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListPipelinesRequest. */
            class ListPipelinesRequest implements IListPipelinesRequest {

                /**
                 * Constructs a new ListPipelinesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.IListPipelinesRequest);

                /** ListPipelinesRequest pipeline. */
                public pipeline?: (sajari.pipeline.v2.ITypeIdentifier|null);

                /** ListPipelinesRequest pageSize. */
                public pageSize: number;

                /** ListPipelinesRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListPipelinesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListPipelinesRequest instance
                 */
                public static create(properties?: sajari.pipeline.v2.IListPipelinesRequest): sajari.pipeline.v2.ListPipelinesRequest;

                /**
                 * Encodes the specified ListPipelinesRequest message. Does not implicitly {@link sajari.pipeline.v2.ListPipelinesRequest.verify|verify} messages.
                 * @param message ListPipelinesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.IListPipelinesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListPipelinesRequest message, length delimited. Does not implicitly {@link sajari.pipeline.v2.ListPipelinesRequest.verify|verify} messages.
                 * @param message ListPipelinesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.IListPipelinesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListPipelinesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListPipelinesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.ListPipelinesRequest;

                /**
                 * Decodes a ListPipelinesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListPipelinesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.ListPipelinesRequest;

                /**
                 * Verifies a ListPipelinesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListPipelinesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListPipelinesRequest
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.ListPipelinesRequest;

                /**
                 * Creates a plain object from a ListPipelinesRequest message. Also converts values to other types if specified.
                 * @param message ListPipelinesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.ListPipelinesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListPipelinesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListPipelinesResponse. */
            interface IListPipelinesResponse {

                /** ListPipelinesResponse pipelines */
                pipelines?: (sajari.pipeline.v2.IPipeline[]|null);

                /** ListPipelinesResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListPipelinesResponse. */
            class ListPipelinesResponse implements IListPipelinesResponse {

                /**
                 * Constructs a new ListPipelinesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.IListPipelinesResponse);

                /** ListPipelinesResponse pipelines. */
                public pipelines: sajari.pipeline.v2.IPipeline[];

                /** ListPipelinesResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListPipelinesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListPipelinesResponse instance
                 */
                public static create(properties?: sajari.pipeline.v2.IListPipelinesResponse): sajari.pipeline.v2.ListPipelinesResponse;

                /**
                 * Encodes the specified ListPipelinesResponse message. Does not implicitly {@link sajari.pipeline.v2.ListPipelinesResponse.verify|verify} messages.
                 * @param message ListPipelinesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.IListPipelinesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListPipelinesResponse message, length delimited. Does not implicitly {@link sajari.pipeline.v2.ListPipelinesResponse.verify|verify} messages.
                 * @param message ListPipelinesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.IListPipelinesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListPipelinesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListPipelinesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.ListPipelinesResponse;

                /**
                 * Decodes a ListPipelinesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListPipelinesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.ListPipelinesResponse;

                /**
                 * Verifies a ListPipelinesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListPipelinesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListPipelinesResponse
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.ListPipelinesResponse;

                /**
                 * Creates a plain object from a ListPipelinesResponse message. Also converts values to other types if specified.
                 * @param message ListPipelinesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.ListPipelinesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListPipelinesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CreatePipelineRequest. */
            interface ICreatePipelineRequest {

                /** CreatePipelineRequest pipeline */
                pipeline?: (sajari.pipeline.v2.IPipeline|null);
            }

            /** Represents a CreatePipelineRequest. */
            class CreatePipelineRequest implements ICreatePipelineRequest {

                /**
                 * Constructs a new CreatePipelineRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.ICreatePipelineRequest);

                /** CreatePipelineRequest pipeline. */
                public pipeline?: (sajari.pipeline.v2.IPipeline|null);

                /**
                 * Creates a new CreatePipelineRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreatePipelineRequest instance
                 */
                public static create(properties?: sajari.pipeline.v2.ICreatePipelineRequest): sajari.pipeline.v2.CreatePipelineRequest;

                /**
                 * Encodes the specified CreatePipelineRequest message. Does not implicitly {@link sajari.pipeline.v2.CreatePipelineRequest.verify|verify} messages.
                 * @param message CreatePipelineRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.ICreatePipelineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreatePipelineRequest message, length delimited. Does not implicitly {@link sajari.pipeline.v2.CreatePipelineRequest.verify|verify} messages.
                 * @param message CreatePipelineRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.ICreatePipelineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreatePipelineRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreatePipelineRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.CreatePipelineRequest;

                /**
                 * Decodes a CreatePipelineRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreatePipelineRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.CreatePipelineRequest;

                /**
                 * Verifies a CreatePipelineRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreatePipelineRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreatePipelineRequest
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.CreatePipelineRequest;

                /**
                 * Creates a plain object from a CreatePipelineRequest message. Also converts values to other types if specified.
                 * @param message CreatePipelineRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.CreatePipelineRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreatePipelineRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Pipeline. */
            interface IPipeline {

                /** Pipeline pipeline */
                pipeline?: (sajari.pipeline.v2.ITypeIdentifier|null);

                /** Pipeline Title */
                Title?: (string|null);

                /** Pipeline Description */
                Description?: (string|null);

                /** Pipeline steps */
                steps?: (sajari.pipeline.v2.IStepConfigs[]|null);

                /** Pipeline createTime */
                createTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a Pipeline. */
            class Pipeline implements IPipeline {

                /**
                 * Constructs a new Pipeline.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.IPipeline);

                /** Pipeline pipeline. */
                public pipeline?: (sajari.pipeline.v2.ITypeIdentifier|null);

                /** Pipeline Title. */
                public Title: string;

                /** Pipeline Description. */
                public Description: string;

                /** Pipeline steps. */
                public steps: sajari.pipeline.v2.IStepConfigs[];

                /** Pipeline createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new Pipeline instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Pipeline instance
                 */
                public static create(properties?: sajari.pipeline.v2.IPipeline): sajari.pipeline.v2.Pipeline;

                /**
                 * Encodes the specified Pipeline message. Does not implicitly {@link sajari.pipeline.v2.Pipeline.verify|verify} messages.
                 * @param message Pipeline message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.IPipeline, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Pipeline message, length delimited. Does not implicitly {@link sajari.pipeline.v2.Pipeline.verify|verify} messages.
                 * @param message Pipeline message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.IPipeline, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Pipeline message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Pipeline
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.Pipeline;

                /**
                 * Decodes a Pipeline message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Pipeline
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.Pipeline;

                /**
                 * Verifies a Pipeline message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Pipeline message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Pipeline
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.Pipeline;

                /**
                 * Creates a plain object from a Pipeline message. Also converts values to other types if specified.
                 * @param message Pipeline
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.Pipeline, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Pipeline to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a StepConfigs. */
            interface IStepConfigs {

                /** StepConfigs stepType */
                stepType?: (sajari.pipeline.v2.StepType|null);

                /** StepConfigs steps */
                steps?: (sajari.pipeline.v2.IStepConfig[]|null);
            }

            /** Represents a StepConfigs. */
            class StepConfigs implements IStepConfigs {

                /**
                 * Constructs a new StepConfigs.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.IStepConfigs);

                /** StepConfigs stepType. */
                public stepType: sajari.pipeline.v2.StepType;

                /** StepConfigs steps. */
                public steps: sajari.pipeline.v2.IStepConfig[];

                /**
                 * Creates a new StepConfigs instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StepConfigs instance
                 */
                public static create(properties?: sajari.pipeline.v2.IStepConfigs): sajari.pipeline.v2.StepConfigs;

                /**
                 * Encodes the specified StepConfigs message. Does not implicitly {@link sajari.pipeline.v2.StepConfigs.verify|verify} messages.
                 * @param message StepConfigs message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.IStepConfigs, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StepConfigs message, length delimited. Does not implicitly {@link sajari.pipeline.v2.StepConfigs.verify|verify} messages.
                 * @param message StepConfigs message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.IStepConfigs, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StepConfigs message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StepConfigs
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.StepConfigs;

                /**
                 * Decodes a StepConfigs message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StepConfigs
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.StepConfigs;

                /**
                 * Verifies a StepConfigs message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StepConfigs message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StepConfigs
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.StepConfigs;

                /**
                 * Creates a plain object from a StepConfigs message. Also converts values to other types if specified.
                 * @param message StepConfigs
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.StepConfigs, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StepConfigs to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a StepConfig. */
            interface IStepConfig {

                /** StepConfig identifier */
                identifier?: (string|null);

                /** StepConfig title */
                title?: (string|null);

                /** StepConfig description */
                description?: (string|null);

                /** StepConfig parameterConfigs */
                parameterConfigs?: ({ [k: string]: sajari.pipeline.v2.StepConfig.IParameterConfigs }|null);

                /** StepConfig constantConfigs */
                constantConfigs?: ({ [k: string]: sajari.pipeline.v2.StepConfig.IConstantConfigs }|null);
            }

            /** Represents a StepConfig. */
            class StepConfig implements IStepConfig {

                /**
                 * Constructs a new StepConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.IStepConfig);

                /** StepConfig identifier. */
                public identifier: string;

                /** StepConfig title. */
                public title: string;

                /** StepConfig description. */
                public description: string;

                /** StepConfig parameterConfigs. */
                public parameterConfigs: { [k: string]: sajari.pipeline.v2.StepConfig.IParameterConfigs };

                /** StepConfig constantConfigs. */
                public constantConfigs: { [k: string]: sajari.pipeline.v2.StepConfig.IConstantConfigs };

                /**
                 * Creates a new StepConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StepConfig instance
                 */
                public static create(properties?: sajari.pipeline.v2.IStepConfig): sajari.pipeline.v2.StepConfig;

                /**
                 * Encodes the specified StepConfig message. Does not implicitly {@link sajari.pipeline.v2.StepConfig.verify|verify} messages.
                 * @param message StepConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.IStepConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StepConfig message, length delimited. Does not implicitly {@link sajari.pipeline.v2.StepConfig.verify|verify} messages.
                 * @param message StepConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.IStepConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StepConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StepConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.StepConfig;

                /**
                 * Decodes a StepConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StepConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.StepConfig;

                /**
                 * Verifies a StepConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StepConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StepConfig
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.StepConfig;

                /**
                 * Creates a plain object from a StepConfig message. Also converts values to other types if specified.
                 * @param message StepConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.StepConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StepConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace StepConfig {

                /** Properties of a ParameterConfigs. */
                interface IParameterConfigs {

                    /** ParameterConfigs configs */
                    configs?: (sajari.pipeline.v2.StepConfig.ParameterConfigs.IParameterConfig[]|null);
                }

                /** Represents a ParameterConfigs. */
                class ParameterConfigs implements IParameterConfigs {

                    /**
                     * Constructs a new ParameterConfigs.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.pipeline.v2.StepConfig.IParameterConfigs);

                    /** ParameterConfigs configs. */
                    public configs: sajari.pipeline.v2.StepConfig.ParameterConfigs.IParameterConfig[];

                    /**
                     * Creates a new ParameterConfigs instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ParameterConfigs instance
                     */
                    public static create(properties?: sajari.pipeline.v2.StepConfig.IParameterConfigs): sajari.pipeline.v2.StepConfig.ParameterConfigs;

                    /**
                     * Encodes the specified ParameterConfigs message. Does not implicitly {@link sajari.pipeline.v2.StepConfig.ParameterConfigs.verify|verify} messages.
                     * @param message ParameterConfigs message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.pipeline.v2.StepConfig.IParameterConfigs, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ParameterConfigs message, length delimited. Does not implicitly {@link sajari.pipeline.v2.StepConfig.ParameterConfigs.verify|verify} messages.
                     * @param message ParameterConfigs message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.pipeline.v2.StepConfig.IParameterConfigs, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ParameterConfigs message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ParameterConfigs
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.StepConfig.ParameterConfigs;

                    /**
                     * Decodes a ParameterConfigs message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ParameterConfigs
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.StepConfig.ParameterConfigs;

                    /**
                     * Verifies a ParameterConfigs message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ParameterConfigs message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ParameterConfigs
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.StepConfig.ParameterConfigs;

                    /**
                     * Creates a plain object from a ParameterConfigs message. Also converts values to other types if specified.
                     * @param message ParameterConfigs
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.pipeline.v2.StepConfig.ParameterConfigs, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ParameterConfigs to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ParameterConfigs {

                    /** Properties of a ParameterConfig. */
                    interface IParameterConfig {

                        /** ParameterConfig setName */
                        setName?: (string|null);

                        /** ParameterConfig setDescription */
                        setDescription?: (string|null);

                        /** ParameterConfig setDefaultValue */
                        setDefaultValue?: (string|null);
                    }

                    /** Represents a ParameterConfig. */
                    class ParameterConfig implements IParameterConfig {

                        /**
                         * Constructs a new ParameterConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: sajari.pipeline.v2.StepConfig.ParameterConfigs.IParameterConfig);

                        /** ParameterConfig setName. */
                        public setName: string;

                        /** ParameterConfig setDescription. */
                        public setDescription: string;

                        /** ParameterConfig setDefaultValue. */
                        public setDefaultValue: string;

                        /** ParameterConfig config. */
                        public config?: ("setName"|"setDescription"|"setDefaultValue");

                        /**
                         * Creates a new ParameterConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ParameterConfig instance
                         */
                        public static create(properties?: sajari.pipeline.v2.StepConfig.ParameterConfigs.IParameterConfig): sajari.pipeline.v2.StepConfig.ParameterConfigs.ParameterConfig;

                        /**
                         * Encodes the specified ParameterConfig message. Does not implicitly {@link sajari.pipeline.v2.StepConfig.ParameterConfigs.ParameterConfig.verify|verify} messages.
                         * @param message ParameterConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: sajari.pipeline.v2.StepConfig.ParameterConfigs.IParameterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ParameterConfig message, length delimited. Does not implicitly {@link sajari.pipeline.v2.StepConfig.ParameterConfigs.ParameterConfig.verify|verify} messages.
                         * @param message ParameterConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: sajari.pipeline.v2.StepConfig.ParameterConfigs.IParameterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ParameterConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ParameterConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.StepConfig.ParameterConfigs.ParameterConfig;

                        /**
                         * Decodes a ParameterConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ParameterConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.StepConfig.ParameterConfigs.ParameterConfig;

                        /**
                         * Verifies a ParameterConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ParameterConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ParameterConfig
                         */
                        public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.StepConfig.ParameterConfigs.ParameterConfig;

                        /**
                         * Creates a plain object from a ParameterConfig message. Also converts values to other types if specified.
                         * @param message ParameterConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: sajari.pipeline.v2.StepConfig.ParameterConfigs.ParameterConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ParameterConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a ConstantConfigs. */
                interface IConstantConfigs {

                    /** ConstantConfigs configs */
                    configs?: (sajari.pipeline.v2.StepConfig.ConstantConfigs.IConstantConfig[]|null);
                }

                /** Represents a ConstantConfigs. */
                class ConstantConfigs implements IConstantConfigs {

                    /**
                     * Constructs a new ConstantConfigs.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.pipeline.v2.StepConfig.IConstantConfigs);

                    /** ConstantConfigs configs. */
                    public configs: sajari.pipeline.v2.StepConfig.ConstantConfigs.IConstantConfig[];

                    /**
                     * Creates a new ConstantConfigs instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConstantConfigs instance
                     */
                    public static create(properties?: sajari.pipeline.v2.StepConfig.IConstantConfigs): sajari.pipeline.v2.StepConfig.ConstantConfigs;

                    /**
                     * Encodes the specified ConstantConfigs message. Does not implicitly {@link sajari.pipeline.v2.StepConfig.ConstantConfigs.verify|verify} messages.
                     * @param message ConstantConfigs message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.pipeline.v2.StepConfig.IConstantConfigs, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConstantConfigs message, length delimited. Does not implicitly {@link sajari.pipeline.v2.StepConfig.ConstantConfigs.verify|verify} messages.
                     * @param message ConstantConfigs message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.pipeline.v2.StepConfig.IConstantConfigs, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConstantConfigs message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConstantConfigs
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.StepConfig.ConstantConfigs;

                    /**
                     * Decodes a ConstantConfigs message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConstantConfigs
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.StepConfig.ConstantConfigs;

                    /**
                     * Verifies a ConstantConfigs message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConstantConfigs message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConstantConfigs
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.StepConfig.ConstantConfigs;

                    /**
                     * Creates a plain object from a ConstantConfigs message. Also converts values to other types if specified.
                     * @param message ConstantConfigs
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.pipeline.v2.StepConfig.ConstantConfigs, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConstantConfigs to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ConstantConfigs {

                    /** Properties of a ConstantConfig. */
                    interface IConstantConfig {

                        /** ConstantConfig setValue */
                        setValue?: (string|null);
                    }

                    /** Represents a ConstantConfig. */
                    class ConstantConfig implements IConstantConfig {

                        /**
                         * Constructs a new ConstantConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: sajari.pipeline.v2.StepConfig.ConstantConfigs.IConstantConfig);

                        /** ConstantConfig setValue. */
                        public setValue: string;

                        /** ConstantConfig config. */
                        public config?: "setValue";

                        /**
                         * Creates a new ConstantConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ConstantConfig instance
                         */
                        public static create(properties?: sajari.pipeline.v2.StepConfig.ConstantConfigs.IConstantConfig): sajari.pipeline.v2.StepConfig.ConstantConfigs.ConstantConfig;

                        /**
                         * Encodes the specified ConstantConfig message. Does not implicitly {@link sajari.pipeline.v2.StepConfig.ConstantConfigs.ConstantConfig.verify|verify} messages.
                         * @param message ConstantConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: sajari.pipeline.v2.StepConfig.ConstantConfigs.IConstantConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ConstantConfig message, length delimited. Does not implicitly {@link sajari.pipeline.v2.StepConfig.ConstantConfigs.ConstantConfig.verify|verify} messages.
                         * @param message ConstantConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: sajari.pipeline.v2.StepConfig.ConstantConfigs.IConstantConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ConstantConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ConstantConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.StepConfig.ConstantConfigs.ConstantConfig;

                        /**
                         * Decodes a ConstantConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ConstantConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.StepConfig.ConstantConfigs.ConstantConfig;

                        /**
                         * Verifies a ConstantConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ConstantConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ConstantConfig
                         */
                        public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.StepConfig.ConstantConfigs.ConstantConfig;

                        /**
                         * Creates a plain object from a ConstantConfig message. Also converts values to other types if specified.
                         * @param message ConstantConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: sajari.pipeline.v2.StepConfig.ConstantConfigs.ConstantConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ConstantConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }

            /** Properties of a CreatePipelineResponse. */
            interface ICreatePipelineResponse {
            }

            /** Represents a CreatePipelineResponse. */
            class CreatePipelineResponse implements ICreatePipelineResponse {

                /**
                 * Constructs a new CreatePipelineResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.ICreatePipelineResponse);

                /**
                 * Creates a new CreatePipelineResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreatePipelineResponse instance
                 */
                public static create(properties?: sajari.pipeline.v2.ICreatePipelineResponse): sajari.pipeline.v2.CreatePipelineResponse;

                /**
                 * Encodes the specified CreatePipelineResponse message. Does not implicitly {@link sajari.pipeline.v2.CreatePipelineResponse.verify|verify} messages.
                 * @param message CreatePipelineResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.ICreatePipelineResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreatePipelineResponse message, length delimited. Does not implicitly {@link sajari.pipeline.v2.CreatePipelineResponse.verify|verify} messages.
                 * @param message CreatePipelineResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.ICreatePipelineResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreatePipelineResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreatePipelineResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.CreatePipelineResponse;

                /**
                 * Decodes a CreatePipelineResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreatePipelineResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.CreatePipelineResponse;

                /**
                 * Verifies a CreatePipelineResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreatePipelineResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreatePipelineResponse
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.CreatePipelineResponse;

                /**
                 * Creates a plain object from a CreatePipelineResponse message. Also converts values to other types if specified.
                 * @param message CreatePipelineResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.CreatePipelineResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreatePipelineResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DeletePipelineRequest. */
            interface IDeletePipelineRequest {

                /** DeletePipelineRequest type */
                type?: (sajari.pipeline.v2.Type|null);

                /** DeletePipelineRequest pipeline */
                pipeline?: (sajari.pipeline.v2.IIdentifier|null);
            }

            /** Represents a DeletePipelineRequest. */
            class DeletePipelineRequest implements IDeletePipelineRequest {

                /**
                 * Constructs a new DeletePipelineRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.IDeletePipelineRequest);

                /** DeletePipelineRequest type. */
                public type: sajari.pipeline.v2.Type;

                /** DeletePipelineRequest pipeline. */
                public pipeline?: (sajari.pipeline.v2.IIdentifier|null);

                /**
                 * Creates a new DeletePipelineRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeletePipelineRequest instance
                 */
                public static create(properties?: sajari.pipeline.v2.IDeletePipelineRequest): sajari.pipeline.v2.DeletePipelineRequest;

                /**
                 * Encodes the specified DeletePipelineRequest message. Does not implicitly {@link sajari.pipeline.v2.DeletePipelineRequest.verify|verify} messages.
                 * @param message DeletePipelineRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.IDeletePipelineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeletePipelineRequest message, length delimited. Does not implicitly {@link sajari.pipeline.v2.DeletePipelineRequest.verify|verify} messages.
                 * @param message DeletePipelineRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.IDeletePipelineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeletePipelineRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeletePipelineRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.DeletePipelineRequest;

                /**
                 * Decodes a DeletePipelineRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeletePipelineRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.DeletePipelineRequest;

                /**
                 * Verifies a DeletePipelineRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeletePipelineRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeletePipelineRequest
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.DeletePipelineRequest;

                /**
                 * Creates a plain object from a DeletePipelineRequest message. Also converts values to other types if specified.
                 * @param message DeletePipelineRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.DeletePipelineRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeletePipelineRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DeletePipelineResponse. */
            interface IDeletePipelineResponse {
            }

            /** Represents a DeletePipelineResponse. */
            class DeletePipelineResponse implements IDeletePipelineResponse {

                /**
                 * Constructs a new DeletePipelineResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.IDeletePipelineResponse);

                /**
                 * Creates a new DeletePipelineResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeletePipelineResponse instance
                 */
                public static create(properties?: sajari.pipeline.v2.IDeletePipelineResponse): sajari.pipeline.v2.DeletePipelineResponse;

                /**
                 * Encodes the specified DeletePipelineResponse message. Does not implicitly {@link sajari.pipeline.v2.DeletePipelineResponse.verify|verify} messages.
                 * @param message DeletePipelineResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.IDeletePipelineResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeletePipelineResponse message, length delimited. Does not implicitly {@link sajari.pipeline.v2.DeletePipelineResponse.verify|verify} messages.
                 * @param message DeletePipelineResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.IDeletePipelineResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeletePipelineResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeletePipelineResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.DeletePipelineResponse;

                /**
                 * Decodes a DeletePipelineResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeletePipelineResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.DeletePipelineResponse;

                /**
                 * Verifies a DeletePipelineResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeletePipelineResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeletePipelineResponse
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.DeletePipelineResponse;

                /**
                 * Creates a plain object from a DeletePipelineResponse message. Also converts values to other types if specified.
                 * @param message DeletePipelineResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.DeletePipelineResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeletePipelineResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Type enum. */
            enum Type {
                TYPE_UNSPECIFIED = 0,
                QUERY_PIPELINE = 1,
                RECORD_PIPELINE = 2
            }

            /** StepType enum. */
            enum StepType {
                STEP_TYPE_UNSPECIFIED = 0,
                PRE_STEP = 1,
                POST_STEP = 2
            }

            /** Properties of a TypeIdentifier. */
            interface ITypeIdentifier {

                /** TypeIdentifier type */
                type?: (sajari.pipeline.v2.Type|null);

                /** TypeIdentifier identifier */
                identifier?: (sajari.pipeline.v2.IIdentifier|null);
            }

            /** Represents a TypeIdentifier. */
            class TypeIdentifier implements ITypeIdentifier {

                /**
                 * Constructs a new TypeIdentifier.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.ITypeIdentifier);

                /** TypeIdentifier type. */
                public type: sajari.pipeline.v2.Type;

                /** TypeIdentifier identifier. */
                public identifier?: (sajari.pipeline.v2.IIdentifier|null);

                /**
                 * Creates a new TypeIdentifier instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TypeIdentifier instance
                 */
                public static create(properties?: sajari.pipeline.v2.ITypeIdentifier): sajari.pipeline.v2.TypeIdentifier;

                /**
                 * Encodes the specified TypeIdentifier message. Does not implicitly {@link sajari.pipeline.v2.TypeIdentifier.verify|verify} messages.
                 * @param message TypeIdentifier message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.ITypeIdentifier, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TypeIdentifier message, length delimited. Does not implicitly {@link sajari.pipeline.v2.TypeIdentifier.verify|verify} messages.
                 * @param message TypeIdentifier message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.ITypeIdentifier, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TypeIdentifier message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TypeIdentifier
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.TypeIdentifier;

                /**
                 * Decodes a TypeIdentifier message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TypeIdentifier
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.TypeIdentifier;

                /**
                 * Verifies a TypeIdentifier message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TypeIdentifier message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TypeIdentifier
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.TypeIdentifier;

                /**
                 * Creates a plain object from a TypeIdentifier message. Also converts values to other types if specified.
                 * @param message TypeIdentifier
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.TypeIdentifier, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TypeIdentifier to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Identifier. */
            interface IIdentifier {

                /** Identifier name */
                name?: (string|null);

                /** Identifier version */
                version?: (string|null);
            }

            /** Represents an Identifier. */
            class Identifier implements IIdentifier {

                /**
                 * Constructs a new Identifier.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.IIdentifier);

                /** Identifier name. */
                public name: string;

                /** Identifier version. */
                public version: string;

                /**
                 * Creates a new Identifier instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Identifier instance
                 */
                public static create(properties?: sajari.pipeline.v2.IIdentifier): sajari.pipeline.v2.Identifier;

                /**
                 * Encodes the specified Identifier message. Does not implicitly {@link sajari.pipeline.v2.Identifier.verify|verify} messages.
                 * @param message Identifier message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.IIdentifier, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Identifier message, length delimited. Does not implicitly {@link sajari.pipeline.v2.Identifier.verify|verify} messages.
                 * @param message Identifier message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.IIdentifier, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Identifier message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Identifier
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.Identifier;

                /**
                 * Decodes an Identifier message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Identifier
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.Identifier;

                /**
                 * Verifies an Identifier message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Identifier message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Identifier
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.Identifier;

                /**
                 * Creates a plain object from an Identifier message. Also converts values to other types if specified.
                 * @param message Identifier
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.Identifier, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Identifier to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Represents a Documentation */
            class Documentation extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Documentation service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Documentation service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Documentation;

                /**
                 * Calls GetPipelineDocumentation.
                 * @param request GetPipelineDocumentationRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and GetPipelineDocumentationResponse
                 */
                public getPipelineDocumentation(request: sajari.pipeline.v2.IGetPipelineDocumentationRequest, callback: sajari.pipeline.v2.Documentation.GetPipelineDocumentationCallback): void;

                /**
                 * Calls GetPipelineDocumentation.
                 * @param request GetPipelineDocumentationRequest message or plain object
                 * @returns Promise
                 */
                public getPipelineDocumentation(request: sajari.pipeline.v2.IGetPipelineDocumentationRequest): Promise<sajari.pipeline.v2.GetPipelineDocumentationResponse>;

                /**
                 * Calls ListStepTemplates.
                 * @param request ListStepTemplatesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListStepTemplatesResponse
                 */
                public listStepTemplates(request: sajari.pipeline.v2.IListStepTemplatesRequest, callback: sajari.pipeline.v2.Documentation.ListStepTemplatesCallback): void;

                /**
                 * Calls ListStepTemplates.
                 * @param request ListStepTemplatesRequest message or plain object
                 * @returns Promise
                 */
                public listStepTemplates(request: sajari.pipeline.v2.IListStepTemplatesRequest): Promise<sajari.pipeline.v2.ListStepTemplatesResponse>;

                /**
                 * Calls GetStepTemplateDocumentation.
                 * @param request GetStepTemplateDocumentationRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and GetStepTemplateDocumentationResponse
                 */
                public getStepTemplateDocumentation(request: sajari.pipeline.v2.IGetStepTemplateDocumentationRequest, callback: sajari.pipeline.v2.Documentation.GetStepTemplateDocumentationCallback): void;

                /**
                 * Calls GetStepTemplateDocumentation.
                 * @param request GetStepTemplateDocumentationRequest message or plain object
                 * @returns Promise
                 */
                public getStepTemplateDocumentation(request: sajari.pipeline.v2.IGetStepTemplateDocumentationRequest): Promise<sajari.pipeline.v2.GetStepTemplateDocumentationResponse>;
            }

            namespace Documentation {

                /**
                 * Callback as used by {@link sajari.pipeline.v2.Documentation#getPipelineDocumentation}.
                 * @param error Error, if any
                 * @param [response] GetPipelineDocumentationResponse
                 */
                type GetPipelineDocumentationCallback = (error: (Error|null), response?: sajari.pipeline.v2.GetPipelineDocumentationResponse) => void;

                /**
                 * Callback as used by {@link sajari.pipeline.v2.Documentation#listStepTemplates}.
                 * @param error Error, if any
                 * @param [response] ListStepTemplatesResponse
                 */
                type ListStepTemplatesCallback = (error: (Error|null), response?: sajari.pipeline.v2.ListStepTemplatesResponse) => void;

                /**
                 * Callback as used by {@link sajari.pipeline.v2.Documentation#getStepTemplateDocumentation}.
                 * @param error Error, if any
                 * @param [response] GetStepTemplateDocumentationResponse
                 */
                type GetStepTemplateDocumentationCallback = (error: (Error|null), response?: sajari.pipeline.v2.GetStepTemplateDocumentationResponse) => void;
            }

            /** Properties of a GetPipelineDocumentationRequest. */
            interface IGetPipelineDocumentationRequest {

                /** GetPipelineDocumentationRequest pipeline */
                pipeline?: (sajari.pipeline.v2.ITypeIdentifier|null);
            }

            /** Represents a GetPipelineDocumentationRequest. */
            class GetPipelineDocumentationRequest implements IGetPipelineDocumentationRequest {

                /**
                 * Constructs a new GetPipelineDocumentationRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.IGetPipelineDocumentationRequest);

                /** GetPipelineDocumentationRequest pipeline. */
                public pipeline?: (sajari.pipeline.v2.ITypeIdentifier|null);

                /**
                 * Creates a new GetPipelineDocumentationRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetPipelineDocumentationRequest instance
                 */
                public static create(properties?: sajari.pipeline.v2.IGetPipelineDocumentationRequest): sajari.pipeline.v2.GetPipelineDocumentationRequest;

                /**
                 * Encodes the specified GetPipelineDocumentationRequest message. Does not implicitly {@link sajari.pipeline.v2.GetPipelineDocumentationRequest.verify|verify} messages.
                 * @param message GetPipelineDocumentationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.IGetPipelineDocumentationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetPipelineDocumentationRequest message, length delimited. Does not implicitly {@link sajari.pipeline.v2.GetPipelineDocumentationRequest.verify|verify} messages.
                 * @param message GetPipelineDocumentationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.IGetPipelineDocumentationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetPipelineDocumentationRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetPipelineDocumentationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.GetPipelineDocumentationRequest;

                /**
                 * Decodes a GetPipelineDocumentationRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetPipelineDocumentationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.GetPipelineDocumentationRequest;

                /**
                 * Verifies a GetPipelineDocumentationRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetPipelineDocumentationRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetPipelineDocumentationRequest
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.GetPipelineDocumentationRequest;

                /**
                 * Creates a plain object from a GetPipelineDocumentationRequest message. Also converts values to other types if specified.
                 * @param message GetPipelineDocumentationRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.GetPipelineDocumentationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetPipelineDocumentationRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetPipelineDocumentationResponse. */
            interface IGetPipelineDocumentationResponse {

                /** GetPipelineDocumentationResponse pipeline */
                pipeline?: (sajari.pipeline.v2.ITypeIdentifier|null);

                /** GetPipelineDocumentationResponse title */
                title?: (string|null);

                /** GetPipelineDocumentationResponse description */
                description?: (string|null);

                /** GetPipelineDocumentationResponse steps */
                steps?: (sajari.pipeline.v2.ISteps[]|null);

                /** GetPipelineDocumentationResponse inputs */
                inputs?: (sajari.pipeline.v2.IParameter[]|null);

                /** GetPipelineDocumentationResponse outputs */
                outputs?: (sajari.pipeline.v2.IParameter[]|null);

                /** GetPipelineDocumentationResponse createTime */
                createTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a GetPipelineDocumentationResponse. */
            class GetPipelineDocumentationResponse implements IGetPipelineDocumentationResponse {

                /**
                 * Constructs a new GetPipelineDocumentationResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.IGetPipelineDocumentationResponse);

                /** GetPipelineDocumentationResponse pipeline. */
                public pipeline?: (sajari.pipeline.v2.ITypeIdentifier|null);

                /** GetPipelineDocumentationResponse title. */
                public title: string;

                /** GetPipelineDocumentationResponse description. */
                public description: string;

                /** GetPipelineDocumentationResponse steps. */
                public steps: sajari.pipeline.v2.ISteps[];

                /** GetPipelineDocumentationResponse inputs. */
                public inputs: sajari.pipeline.v2.IParameter[];

                /** GetPipelineDocumentationResponse outputs. */
                public outputs: sajari.pipeline.v2.IParameter[];

                /** GetPipelineDocumentationResponse createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new GetPipelineDocumentationResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetPipelineDocumentationResponse instance
                 */
                public static create(properties?: sajari.pipeline.v2.IGetPipelineDocumentationResponse): sajari.pipeline.v2.GetPipelineDocumentationResponse;

                /**
                 * Encodes the specified GetPipelineDocumentationResponse message. Does not implicitly {@link sajari.pipeline.v2.GetPipelineDocumentationResponse.verify|verify} messages.
                 * @param message GetPipelineDocumentationResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.IGetPipelineDocumentationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetPipelineDocumentationResponse message, length delimited. Does not implicitly {@link sajari.pipeline.v2.GetPipelineDocumentationResponse.verify|verify} messages.
                 * @param message GetPipelineDocumentationResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.IGetPipelineDocumentationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetPipelineDocumentationResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetPipelineDocumentationResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.GetPipelineDocumentationResponse;

                /**
                 * Decodes a GetPipelineDocumentationResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetPipelineDocumentationResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.GetPipelineDocumentationResponse;

                /**
                 * Verifies a GetPipelineDocumentationResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetPipelineDocumentationResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetPipelineDocumentationResponse
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.GetPipelineDocumentationResponse;

                /**
                 * Creates a plain object from a GetPipelineDocumentationResponse message. Also converts values to other types if specified.
                 * @param message GetPipelineDocumentationResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.GetPipelineDocumentationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetPipelineDocumentationResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Steps. */
            interface ISteps {

                /** Steps stepType */
                stepType?: (sajari.pipeline.v2.StepType|null);

                /** Steps steps */
                steps?: (sajari.pipeline.v2.IStep[]|null);
            }

            /** Represents a Steps. */
            class Steps implements ISteps {

                /**
                 * Constructs a new Steps.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.ISteps);

                /** Steps stepType. */
                public stepType: sajari.pipeline.v2.StepType;

                /** Steps steps. */
                public steps: sajari.pipeline.v2.IStep[];

                /**
                 * Creates a new Steps instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Steps instance
                 */
                public static create(properties?: sajari.pipeline.v2.ISteps): sajari.pipeline.v2.Steps;

                /**
                 * Encodes the specified Steps message. Does not implicitly {@link sajari.pipeline.v2.Steps.verify|verify} messages.
                 * @param message Steps message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.ISteps, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Steps message, length delimited. Does not implicitly {@link sajari.pipeline.v2.Steps.verify|verify} messages.
                 * @param message Steps message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.ISteps, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Steps message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Steps
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.Steps;

                /**
                 * Decodes a Steps message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Steps
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.Steps;

                /**
                 * Verifies a Steps message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Steps message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Steps
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.Steps;

                /**
                 * Creates a plain object from a Steps message. Also converts values to other types if specified.
                 * @param message Steps
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.Steps, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Steps to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Parameter. */
            interface IParameter {

                /** Parameter identifier */
                identifier?: (string|null);

                /** Parameter name */
                name?: (string|null);

                /** Parameter type */
                type?: (string|null);

                /** Parameter description */
                description?: (string|null);

                /** Parameter defaultValue */
                defaultValue?: (string|null);
            }

            /** Represents a Parameter. */
            class Parameter implements IParameter {

                /**
                 * Constructs a new Parameter.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.IParameter);

                /** Parameter identifier. */
                public identifier: string;

                /** Parameter name. */
                public name: string;

                /** Parameter type. */
                public type: string;

                /** Parameter description. */
                public description: string;

                /** Parameter defaultValue. */
                public defaultValue: string;

                /**
                 * Creates a new Parameter instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Parameter instance
                 */
                public static create(properties?: sajari.pipeline.v2.IParameter): sajari.pipeline.v2.Parameter;

                /**
                 * Encodes the specified Parameter message. Does not implicitly {@link sajari.pipeline.v2.Parameter.verify|verify} messages.
                 * @param message Parameter message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.IParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Parameter message, length delimited. Does not implicitly {@link sajari.pipeline.v2.Parameter.verify|verify} messages.
                 * @param message Parameter message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.IParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Parameter message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Parameter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.Parameter;

                /**
                 * Decodes a Parameter message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Parameter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.Parameter;

                /**
                 * Verifies a Parameter message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Parameter message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Parameter
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.Parameter;

                /**
                 * Creates a plain object from a Parameter message. Also converts values to other types if specified.
                 * @param message Parameter
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.Parameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Parameter to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Constant. */
            interface IConstant {

                /** Constant name */
                name?: (string|null);

                /** Constant type */
                type?: (string|null);

                /** Constant description */
                description?: (string|null);

                /** Constant value */
                value?: (string|null);
            }

            /** Represents a Constant. */
            class Constant implements IConstant {

                /**
                 * Constructs a new Constant.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.IConstant);

                /** Constant name. */
                public name: string;

                /** Constant type. */
                public type: string;

                /** Constant description. */
                public description: string;

                /** Constant value. */
                public value: string;

                /**
                 * Creates a new Constant instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Constant instance
                 */
                public static create(properties?: sajari.pipeline.v2.IConstant): sajari.pipeline.v2.Constant;

                /**
                 * Encodes the specified Constant message. Does not implicitly {@link sajari.pipeline.v2.Constant.verify|verify} messages.
                 * @param message Constant message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.IConstant, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Constant message, length delimited. Does not implicitly {@link sajari.pipeline.v2.Constant.verify|verify} messages.
                 * @param message Constant message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.IConstant, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Constant message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Constant
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.Constant;

                /**
                 * Decodes a Constant message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Constant
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.Constant;

                /**
                 * Verifies a Constant message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Constant message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Constant
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.Constant;

                /**
                 * Creates a plain object from a Constant message. Also converts values to other types if specified.
                 * @param message Constant
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.Constant, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Constant to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Step. */
            interface IStep {

                /** Step type */
                type?: (sajari.pipeline.v2.Type|null);

                /** Step stepType */
                stepType?: (sajari.pipeline.v2.StepType|null);

                /** Step identifier */
                identifier?: (string|null);

                /** Step title */
                title?: (string|null);

                /** Step description */
                description?: (string|null);

                /** Step inputs */
                inputs?: (sajari.pipeline.v2.IParameter[]|null);

                /** Step outputs */
                outputs?: (sajari.pipeline.v2.IParameter[]|null);

                /** Step constants */
                constants?: (sajari.pipeline.v2.IConstant[]|null);
            }

            /** Represents a Step. */
            class Step implements IStep {

                /**
                 * Constructs a new Step.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.IStep);

                /** Step type. */
                public type: sajari.pipeline.v2.Type;

                /** Step stepType. */
                public stepType: sajari.pipeline.v2.StepType;

                /** Step identifier. */
                public identifier: string;

                /** Step title. */
                public title: string;

                /** Step description. */
                public description: string;

                /** Step inputs. */
                public inputs: sajari.pipeline.v2.IParameter[];

                /** Step outputs. */
                public outputs: sajari.pipeline.v2.IParameter[];

                /** Step constants. */
                public constants: sajari.pipeline.v2.IConstant[];

                /**
                 * Creates a new Step instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Step instance
                 */
                public static create(properties?: sajari.pipeline.v2.IStep): sajari.pipeline.v2.Step;

                /**
                 * Encodes the specified Step message. Does not implicitly {@link sajari.pipeline.v2.Step.verify|verify} messages.
                 * @param message Step message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.IStep, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Step message, length delimited. Does not implicitly {@link sajari.pipeline.v2.Step.verify|verify} messages.
                 * @param message Step message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.IStep, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Step message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Step
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.Step;

                /**
                 * Decodes a Step message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Step
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.Step;

                /**
                 * Verifies a Step message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Step message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Step
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.Step;

                /**
                 * Creates a plain object from a Step message. Also converts values to other types if specified.
                 * @param message Step
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.Step, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Step to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListStepTemplatesRequest. */
            interface IListStepTemplatesRequest {

                /** ListStepTemplatesRequest type */
                type?: (sajari.pipeline.v2.Type|null);

                /** ListStepTemplatesRequest stepType */
                stepType?: (sajari.pipeline.v2.StepType|null);

                /** ListStepTemplatesRequest pageSize */
                pageSize?: (number|null);

                /** ListStepTemplatesRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListStepTemplatesRequest. */
            class ListStepTemplatesRequest implements IListStepTemplatesRequest {

                /**
                 * Constructs a new ListStepTemplatesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.IListStepTemplatesRequest);

                /** ListStepTemplatesRequest type. */
                public type: sajari.pipeline.v2.Type;

                /** ListStepTemplatesRequest stepType. */
                public stepType: sajari.pipeline.v2.StepType;

                /** ListStepTemplatesRequest pageSize. */
                public pageSize: number;

                /** ListStepTemplatesRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListStepTemplatesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListStepTemplatesRequest instance
                 */
                public static create(properties?: sajari.pipeline.v2.IListStepTemplatesRequest): sajari.pipeline.v2.ListStepTemplatesRequest;

                /**
                 * Encodes the specified ListStepTemplatesRequest message. Does not implicitly {@link sajari.pipeline.v2.ListStepTemplatesRequest.verify|verify} messages.
                 * @param message ListStepTemplatesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.IListStepTemplatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListStepTemplatesRequest message, length delimited. Does not implicitly {@link sajari.pipeline.v2.ListStepTemplatesRequest.verify|verify} messages.
                 * @param message ListStepTemplatesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.IListStepTemplatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListStepTemplatesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListStepTemplatesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.ListStepTemplatesRequest;

                /**
                 * Decodes a ListStepTemplatesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListStepTemplatesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.ListStepTemplatesRequest;

                /**
                 * Verifies a ListStepTemplatesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListStepTemplatesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListStepTemplatesRequest
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.ListStepTemplatesRequest;

                /**
                 * Creates a plain object from a ListStepTemplatesRequest message. Also converts values to other types if specified.
                 * @param message ListStepTemplatesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.ListStepTemplatesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListStepTemplatesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListStepTemplatesResponse. */
            interface IListStepTemplatesResponse {

                /** ListStepTemplatesResponse stepTemplates */
                stepTemplates?: (sajari.pipeline.v2.IStep[]|null);

                /** ListStepTemplatesResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListStepTemplatesResponse. */
            class ListStepTemplatesResponse implements IListStepTemplatesResponse {

                /**
                 * Constructs a new ListStepTemplatesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.IListStepTemplatesResponse);

                /** ListStepTemplatesResponse stepTemplates. */
                public stepTemplates: sajari.pipeline.v2.IStep[];

                /** ListStepTemplatesResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListStepTemplatesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListStepTemplatesResponse instance
                 */
                public static create(properties?: sajari.pipeline.v2.IListStepTemplatesResponse): sajari.pipeline.v2.ListStepTemplatesResponse;

                /**
                 * Encodes the specified ListStepTemplatesResponse message. Does not implicitly {@link sajari.pipeline.v2.ListStepTemplatesResponse.verify|verify} messages.
                 * @param message ListStepTemplatesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.IListStepTemplatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListStepTemplatesResponse message, length delimited. Does not implicitly {@link sajari.pipeline.v2.ListStepTemplatesResponse.verify|verify} messages.
                 * @param message ListStepTemplatesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.IListStepTemplatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListStepTemplatesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListStepTemplatesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.ListStepTemplatesResponse;

                /**
                 * Decodes a ListStepTemplatesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListStepTemplatesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.ListStepTemplatesResponse;

                /**
                 * Verifies a ListStepTemplatesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListStepTemplatesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListStepTemplatesResponse
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.ListStepTemplatesResponse;

                /**
                 * Creates a plain object from a ListStepTemplatesResponse message. Also converts values to other types if specified.
                 * @param message ListStepTemplatesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.ListStepTemplatesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListStepTemplatesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace ListStepTemplatesResponse {

                /** Properties of a StepTemplate. */
                interface IStepTemplate {

                    /** StepTemplate type */
                    type?: (sajari.pipeline.v2.Type|null);

                    /** StepTemplate stepType */
                    stepType?: (sajari.pipeline.v2.StepType|null);

                    /** StepTemplate identifier */
                    identifier?: (string|null);

                    /** StepTemplate title */
                    title?: (string|null);

                    /** StepTemplate description */
                    description?: (string|null);
                }

                /** Represents a StepTemplate. */
                class StepTemplate implements IStepTemplate {

                    /**
                     * Constructs a new StepTemplate.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.pipeline.v2.ListStepTemplatesResponse.IStepTemplate);

                    /** StepTemplate type. */
                    public type: sajari.pipeline.v2.Type;

                    /** StepTemplate stepType. */
                    public stepType: sajari.pipeline.v2.StepType;

                    /** StepTemplate identifier. */
                    public identifier: string;

                    /** StepTemplate title. */
                    public title: string;

                    /** StepTemplate description. */
                    public description: string;

                    /**
                     * Creates a new StepTemplate instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StepTemplate instance
                     */
                    public static create(properties?: sajari.pipeline.v2.ListStepTemplatesResponse.IStepTemplate): sajari.pipeline.v2.ListStepTemplatesResponse.StepTemplate;

                    /**
                     * Encodes the specified StepTemplate message. Does not implicitly {@link sajari.pipeline.v2.ListStepTemplatesResponse.StepTemplate.verify|verify} messages.
                     * @param message StepTemplate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.pipeline.v2.ListStepTemplatesResponse.IStepTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StepTemplate message, length delimited. Does not implicitly {@link sajari.pipeline.v2.ListStepTemplatesResponse.StepTemplate.verify|verify} messages.
                     * @param message StepTemplate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.pipeline.v2.ListStepTemplatesResponse.IStepTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StepTemplate message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StepTemplate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.ListStepTemplatesResponse.StepTemplate;

                    /**
                     * Decodes a StepTemplate message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StepTemplate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.ListStepTemplatesResponse.StepTemplate;

                    /**
                     * Verifies a StepTemplate message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StepTemplate message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StepTemplate
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.ListStepTemplatesResponse.StepTemplate;

                    /**
                     * Creates a plain object from a StepTemplate message. Also converts values to other types if specified.
                     * @param message StepTemplate
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.pipeline.v2.ListStepTemplatesResponse.StepTemplate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StepTemplate to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a GetStepTemplateDocumentationRequest. */
            interface IGetStepTemplateDocumentationRequest {

                /** GetStepTemplateDocumentationRequest type */
                type?: (sajari.pipeline.v2.Type|null);

                /** GetStepTemplateDocumentationRequest stepType */
                stepType?: (sajari.pipeline.v2.StepType|null);

                /** GetStepTemplateDocumentationRequest identifier */
                identifier?: (string|null);
            }

            /** Represents a GetStepTemplateDocumentationRequest. */
            class GetStepTemplateDocumentationRequest implements IGetStepTemplateDocumentationRequest {

                /**
                 * Constructs a new GetStepTemplateDocumentationRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.IGetStepTemplateDocumentationRequest);

                /** GetStepTemplateDocumentationRequest type. */
                public type: sajari.pipeline.v2.Type;

                /** GetStepTemplateDocumentationRequest stepType. */
                public stepType: sajari.pipeline.v2.StepType;

                /** GetStepTemplateDocumentationRequest identifier. */
                public identifier: string;

                /**
                 * Creates a new GetStepTemplateDocumentationRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetStepTemplateDocumentationRequest instance
                 */
                public static create(properties?: sajari.pipeline.v2.IGetStepTemplateDocumentationRequest): sajari.pipeline.v2.GetStepTemplateDocumentationRequest;

                /**
                 * Encodes the specified GetStepTemplateDocumentationRequest message. Does not implicitly {@link sajari.pipeline.v2.GetStepTemplateDocumentationRequest.verify|verify} messages.
                 * @param message GetStepTemplateDocumentationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.IGetStepTemplateDocumentationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetStepTemplateDocumentationRequest message, length delimited. Does not implicitly {@link sajari.pipeline.v2.GetStepTemplateDocumentationRequest.verify|verify} messages.
                 * @param message GetStepTemplateDocumentationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.IGetStepTemplateDocumentationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetStepTemplateDocumentationRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetStepTemplateDocumentationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.GetStepTemplateDocumentationRequest;

                /**
                 * Decodes a GetStepTemplateDocumentationRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetStepTemplateDocumentationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.GetStepTemplateDocumentationRequest;

                /**
                 * Verifies a GetStepTemplateDocumentationRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetStepTemplateDocumentationRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetStepTemplateDocumentationRequest
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.GetStepTemplateDocumentationRequest;

                /**
                 * Creates a plain object from a GetStepTemplateDocumentationRequest message. Also converts values to other types if specified.
                 * @param message GetStepTemplateDocumentationRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.GetStepTemplateDocumentationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetStepTemplateDocumentationRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetStepTemplateDocumentationResponse. */
            interface IGetStepTemplateDocumentationResponse {

                /** GetStepTemplateDocumentationResponse stepTemplate */
                stepTemplate?: (sajari.pipeline.v2.IStep|null);
            }

            /** Represents a GetStepTemplateDocumentationResponse. */
            class GetStepTemplateDocumentationResponse implements IGetStepTemplateDocumentationResponse {

                /**
                 * Constructs a new GetStepTemplateDocumentationResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.IGetStepTemplateDocumentationResponse);

                /** GetStepTemplateDocumentationResponse stepTemplate. */
                public stepTemplate?: (sajari.pipeline.v2.IStep|null);

                /**
                 * Creates a new GetStepTemplateDocumentationResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetStepTemplateDocumentationResponse instance
                 */
                public static create(properties?: sajari.pipeline.v2.IGetStepTemplateDocumentationResponse): sajari.pipeline.v2.GetStepTemplateDocumentationResponse;

                /**
                 * Encodes the specified GetStepTemplateDocumentationResponse message. Does not implicitly {@link sajari.pipeline.v2.GetStepTemplateDocumentationResponse.verify|verify} messages.
                 * @param message GetStepTemplateDocumentationResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.IGetStepTemplateDocumentationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetStepTemplateDocumentationResponse message, length delimited. Does not implicitly {@link sajari.pipeline.v2.GetStepTemplateDocumentationResponse.verify|verify} messages.
                 * @param message GetStepTemplateDocumentationResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.IGetStepTemplateDocumentationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetStepTemplateDocumentationResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetStepTemplateDocumentationResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.GetStepTemplateDocumentationResponse;

                /**
                 * Decodes a GetStepTemplateDocumentationResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetStepTemplateDocumentationResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.GetStepTemplateDocumentationResponse;

                /**
                 * Verifies a GetStepTemplateDocumentationResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetStepTemplateDocumentationResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetStepTemplateDocumentationResponse
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.GetStepTemplateDocumentationResponse;

                /**
                 * Creates a plain object from a GetStepTemplateDocumentationResponse message. Also converts values to other types if specified.
                 * @param message GetStepTemplateDocumentationResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.GetStepTemplateDocumentationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetStepTemplateDocumentationResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Represents a Query */
            class Query extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Query service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Query service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Query;

                /**
                 * Calls Search.
                 * @param request SearchRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and SearchResponse
                 */
                public search(request: sajari.pipeline.v2.ISearchRequest, callback: sajari.pipeline.v2.Query.SearchCallback): void;

                /**
                 * Calls Search.
                 * @param request SearchRequest message or plain object
                 * @returns Promise
                 */
                public search(request: sajari.pipeline.v2.ISearchRequest): Promise<sajari.pipeline.v2.SearchResponse>;

                /**
                 * Calls Evaluate.
                 * @param request EvaluateRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and EvaluateResponse
                 */
                public evaluate(request: sajari.pipeline.v2.IEvaluateRequest, callback: sajari.pipeline.v2.Query.EvaluateCallback): void;

                /**
                 * Calls Evaluate.
                 * @param request EvaluateRequest message or plain object
                 * @returns Promise
                 */
                public evaluate(request: sajari.pipeline.v2.IEvaluateRequest): Promise<sajari.pipeline.v2.EvaluateResponse>;
            }

            namespace Query {

                /**
                 * Callback as used by {@link sajari.pipeline.v2.Query#search}.
                 * @param error Error, if any
                 * @param [response] SearchResponse
                 */
                type SearchCallback = (error: (Error|null), response?: sajari.pipeline.v2.SearchResponse) => void;

                /**
                 * Callback as used by {@link sajari.pipeline.v2.Query#evaluate}.
                 * @param error Error, if any
                 * @param [response] EvaluateResponse
                 */
                type EvaluateCallback = (error: (Error|null), response?: sajari.pipeline.v2.EvaluateResponse) => void;
            }

            /** Properties of a SearchRequest. */
            interface ISearchRequest {

                /** SearchRequest pipeline */
                pipeline?: (sajari.pipeline.v2.IIdentifier|null);

                /** SearchRequest values */
                values?: (google.protobuf.IStruct|null);

                /** SearchRequest tracking */
                tracking?: (sajari.pipeline.v2.ITracking|null);
            }

            /** Represents a SearchRequest. */
            class SearchRequest implements ISearchRequest {

                /**
                 * Constructs a new SearchRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.ISearchRequest);

                /** SearchRequest pipeline. */
                public pipeline?: (sajari.pipeline.v2.IIdentifier|null);

                /** SearchRequest values. */
                public values?: (google.protobuf.IStruct|null);

                /** SearchRequest tracking. */
                public tracking?: (sajari.pipeline.v2.ITracking|null);

                /**
                 * Creates a new SearchRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SearchRequest instance
                 */
                public static create(properties?: sajari.pipeline.v2.ISearchRequest): sajari.pipeline.v2.SearchRequest;

                /**
                 * Encodes the specified SearchRequest message. Does not implicitly {@link sajari.pipeline.v2.SearchRequest.verify|verify} messages.
                 * @param message SearchRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.ISearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SearchRequest message, length delimited. Does not implicitly {@link sajari.pipeline.v2.SearchRequest.verify|verify} messages.
                 * @param message SearchRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.ISearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SearchRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SearchRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.SearchRequest;

                /**
                 * Decodes a SearchRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SearchRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.SearchRequest;

                /**
                 * Verifies a SearchRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SearchRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SearchRequest
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.SearchRequest;

                /**
                 * Creates a plain object from a SearchRequest message. Also converts values to other types if specified.
                 * @param message SearchRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.SearchRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SearchRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SearchResponse. */
            interface ISearchResponse {

                /** SearchResponse pipeline */
                pipeline?: (sajari.pipeline.v2.IIdentifier|null);

                /** SearchResponse values */
                values?: (google.protobuf.IStruct|null);

                /** SearchResponse queryResults */
                queryResults?: (sajari.pipeline.v2.IQueryResults|null);

                /** SearchResponse tokens */
                tokens?: (sajari.pipeline.v2.IToken[]|null);
            }

            /** Represents a SearchResponse. */
            class SearchResponse implements ISearchResponse {

                /**
                 * Constructs a new SearchResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.ISearchResponse);

                /** SearchResponse pipeline. */
                public pipeline?: (sajari.pipeline.v2.IIdentifier|null);

                /** SearchResponse values. */
                public values?: (google.protobuf.IStruct|null);

                /** SearchResponse queryResults. */
                public queryResults?: (sajari.pipeline.v2.IQueryResults|null);

                /** SearchResponse tokens. */
                public tokens: sajari.pipeline.v2.IToken[];

                /**
                 * Creates a new SearchResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SearchResponse instance
                 */
                public static create(properties?: sajari.pipeline.v2.ISearchResponse): sajari.pipeline.v2.SearchResponse;

                /**
                 * Encodes the specified SearchResponse message. Does not implicitly {@link sajari.pipeline.v2.SearchResponse.verify|verify} messages.
                 * @param message SearchResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.ISearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SearchResponse message, length delimited. Does not implicitly {@link sajari.pipeline.v2.SearchResponse.verify|verify} messages.
                 * @param message SearchResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.ISearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SearchResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SearchResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.SearchResponse;

                /**
                 * Decodes a SearchResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SearchResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.SearchResponse;

                /**
                 * Verifies a SearchResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SearchResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SearchResponse
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.SearchResponse;

                /**
                 * Creates a plain object from a SearchResponse message. Also converts values to other types if specified.
                 * @param message SearchResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.SearchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SearchResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an EvaluateRequest. */
            interface IEvaluateRequest {

                /** EvaluateRequest pipeline */
                pipeline?: (sajari.pipeline.v2.IIdentifier|null);

                /** EvaluateRequest values */
                values?: (google.protobuf.IStruct|null);

                /** EvaluateRequest key */
                key?: (sajari.engine.v2.IKey|null);
            }

            /** Represents an EvaluateRequest. */
            class EvaluateRequest implements IEvaluateRequest {

                /**
                 * Constructs a new EvaluateRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.IEvaluateRequest);

                /** EvaluateRequest pipeline. */
                public pipeline?: (sajari.pipeline.v2.IIdentifier|null);

                /** EvaluateRequest values. */
                public values?: (google.protobuf.IStruct|null);

                /** EvaluateRequest key. */
                public key?: (sajari.engine.v2.IKey|null);

                /**
                 * Creates a new EvaluateRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EvaluateRequest instance
                 */
                public static create(properties?: sajari.pipeline.v2.IEvaluateRequest): sajari.pipeline.v2.EvaluateRequest;

                /**
                 * Encodes the specified EvaluateRequest message. Does not implicitly {@link sajari.pipeline.v2.EvaluateRequest.verify|verify} messages.
                 * @param message EvaluateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.IEvaluateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EvaluateRequest message, length delimited. Does not implicitly {@link sajari.pipeline.v2.EvaluateRequest.verify|verify} messages.
                 * @param message EvaluateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.IEvaluateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EvaluateRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EvaluateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.EvaluateRequest;

                /**
                 * Decodes an EvaluateRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EvaluateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.EvaluateRequest;

                /**
                 * Verifies an EvaluateRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EvaluateRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EvaluateRequest
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.EvaluateRequest;

                /**
                 * Creates a plain object from an EvaluateRequest message. Also converts values to other types if specified.
                 * @param message EvaluateRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.EvaluateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EvaluateRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an EvaluateResponse. */
            interface IEvaluateResponse {

                /** EvaluateResponse pipeline */
                pipeline?: (sajari.pipeline.v2.IIdentifier|null);

                /** EvaluateResponse values */
                values?: (google.protobuf.IStruct|null);

                /** EvaluateResponse queryResults */
                queryResults?: (sajari.pipeline.v2.IQueryResults|null);
            }

            /** Represents an EvaluateResponse. */
            class EvaluateResponse implements IEvaluateResponse {

                /**
                 * Constructs a new EvaluateResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.IEvaluateResponse);

                /** EvaluateResponse pipeline. */
                public pipeline?: (sajari.pipeline.v2.IIdentifier|null);

                /** EvaluateResponse values. */
                public values?: (google.protobuf.IStruct|null);

                /** EvaluateResponse queryResults. */
                public queryResults?: (sajari.pipeline.v2.IQueryResults|null);

                /**
                 * Creates a new EvaluateResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EvaluateResponse instance
                 */
                public static create(properties?: sajari.pipeline.v2.IEvaluateResponse): sajari.pipeline.v2.EvaluateResponse;

                /**
                 * Encodes the specified EvaluateResponse message. Does not implicitly {@link sajari.pipeline.v2.EvaluateResponse.verify|verify} messages.
                 * @param message EvaluateResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.IEvaluateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EvaluateResponse message, length delimited. Does not implicitly {@link sajari.pipeline.v2.EvaluateResponse.verify|verify} messages.
                 * @param message EvaluateResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.IEvaluateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EvaluateResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EvaluateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.EvaluateResponse;

                /**
                 * Decodes an EvaluateResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EvaluateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.EvaluateResponse;

                /**
                 * Verifies an EvaluateResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EvaluateResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EvaluateResponse
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.EvaluateResponse;

                /**
                 * Creates a plain object from an EvaluateResponse message. Also converts values to other types if specified.
                 * @param message EvaluateResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.EvaluateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EvaluateResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Tracking. */
            interface ITracking {

                /** Tracking type */
                type?: (sajari.pipeline.v2.Tracking.Type|null);

                /** Tracking queryId */
                queryId?: (string|null);

                /** Tracking sequence */
                sequence?: (number|null);

                /** Tracking field */
                field?: (string|null);

                /** Tracking data */
                data?: ({ [k: string]: string }|null);
            }

            /** Represents a Tracking. */
            class Tracking implements ITracking {

                /**
                 * Constructs a new Tracking.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.ITracking);

                /** Tracking type. */
                public type: sajari.pipeline.v2.Tracking.Type;

                /** Tracking queryId. */
                public queryId: string;

                /** Tracking sequence. */
                public sequence: number;

                /** Tracking field. */
                public field: string;

                /** Tracking data. */
                public data: { [k: string]: string };

                /**
                 * Creates a new Tracking instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Tracking instance
                 */
                public static create(properties?: sajari.pipeline.v2.ITracking): sajari.pipeline.v2.Tracking;

                /**
                 * Encodes the specified Tracking message. Does not implicitly {@link sajari.pipeline.v2.Tracking.verify|verify} messages.
                 * @param message Tracking message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.ITracking, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Tracking message, length delimited. Does not implicitly {@link sajari.pipeline.v2.Tracking.verify|verify} messages.
                 * @param message Tracking message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.ITracking, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Tracking message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Tracking
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.Tracking;

                /**
                 * Decodes a Tracking message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Tracking
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.Tracking;

                /**
                 * Verifies a Tracking message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Tracking message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Tracking
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.Tracking;

                /**
                 * Creates a plain object from a Tracking message. Also converts values to other types if specified.
                 * @param message Tracking
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.Tracking, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Tracking to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Tracking {

                /** Type enum. */
                enum Type {
                    NONE = 0,
                    CLICK = 1,
                    POS_NEG = 2
                }
            }

            /** Properties of a Token. */
            interface IToken {

                /** Token click */
                click?: (sajari.pipeline.v2.Token.IClick|null);

                /** Token posNeg */
                posNeg?: (sajari.pipeline.v2.Token.IPosNeg|null);
            }

            /** Represents a Token. */
            class Token implements IToken {

                /**
                 * Constructs a new Token.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.IToken);

                /** Token click. */
                public click?: (sajari.pipeline.v2.Token.IClick|null);

                /** Token posNeg. */
                public posNeg?: (sajari.pipeline.v2.Token.IPosNeg|null);

                /** Token token. */
                public token?: ("click"|"posNeg");

                /**
                 * Creates a new Token instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Token instance
                 */
                public static create(properties?: sajari.pipeline.v2.IToken): sajari.pipeline.v2.Token;

                /**
                 * Encodes the specified Token message. Does not implicitly {@link sajari.pipeline.v2.Token.verify|verify} messages.
                 * @param message Token message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.IToken, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Token message, length delimited. Does not implicitly {@link sajari.pipeline.v2.Token.verify|verify} messages.
                 * @param message Token message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.IToken, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Token message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Token
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.Token;

                /**
                 * Decodes a Token message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Token
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.Token;

                /**
                 * Verifies a Token message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Token message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Token
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.Token;

                /**
                 * Creates a plain object from a Token message. Also converts values to other types if specified.
                 * @param message Token
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.Token, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Token to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Token {

                /** Properties of a Click. */
                interface IClick {

                    /** Click token */
                    token?: (string|null);
                }

                /** Represents a Click. */
                class Click implements IClick {

                    /**
                     * Constructs a new Click.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.pipeline.v2.Token.IClick);

                    /** Click token. */
                    public token: string;

                    /**
                     * Creates a new Click instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Click instance
                     */
                    public static create(properties?: sajari.pipeline.v2.Token.IClick): sajari.pipeline.v2.Token.Click;

                    /**
                     * Encodes the specified Click message. Does not implicitly {@link sajari.pipeline.v2.Token.Click.verify|verify} messages.
                     * @param message Click message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.pipeline.v2.Token.IClick, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Click message, length delimited. Does not implicitly {@link sajari.pipeline.v2.Token.Click.verify|verify} messages.
                     * @param message Click message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.pipeline.v2.Token.IClick, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Click message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Click
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.Token.Click;

                    /**
                     * Decodes a Click message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Click
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.Token.Click;

                    /**
                     * Verifies a Click message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Click message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Click
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.Token.Click;

                    /**
                     * Creates a plain object from a Click message. Also converts values to other types if specified.
                     * @param message Click
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.pipeline.v2.Token.Click, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Click to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PosNeg. */
                interface IPosNeg {

                    /** PosNeg pos */
                    pos?: (string|null);

                    /** PosNeg neg */
                    neg?: (string|null);
                }

                /** Represents a PosNeg. */
                class PosNeg implements IPosNeg {

                    /**
                     * Constructs a new PosNeg.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.pipeline.v2.Token.IPosNeg);

                    /** PosNeg pos. */
                    public pos: string;

                    /** PosNeg neg. */
                    public neg: string;

                    /**
                     * Creates a new PosNeg instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PosNeg instance
                     */
                    public static create(properties?: sajari.pipeline.v2.Token.IPosNeg): sajari.pipeline.v2.Token.PosNeg;

                    /**
                     * Encodes the specified PosNeg message. Does not implicitly {@link sajari.pipeline.v2.Token.PosNeg.verify|verify} messages.
                     * @param message PosNeg message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.pipeline.v2.Token.IPosNeg, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PosNeg message, length delimited. Does not implicitly {@link sajari.pipeline.v2.Token.PosNeg.verify|verify} messages.
                     * @param message PosNeg message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.pipeline.v2.Token.IPosNeg, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PosNeg message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PosNeg
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.Token.PosNeg;

                    /**
                     * Decodes a PosNeg message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PosNeg
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.Token.PosNeg;

                    /**
                     * Verifies a PosNeg message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PosNeg message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PosNeg
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.Token.PosNeg;

                    /**
                     * Creates a plain object from a PosNeg message. Also converts values to other types if specified.
                     * @param message PosNeg
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.pipeline.v2.Token.PosNeg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PosNeg to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a QueryResults. */
            interface IQueryResults {

                /** QueryResults reads */
                reads?: (number|Long|null);

                /** QueryResults totalResults */
                totalResults?: (number|Long|null);

                /** QueryResults latency */
                latency?: (google.protobuf.IDuration|null);

                /** QueryResults aggregates */
                aggregates?: ({ [k: string]: sajari.engine.v2.IQueryAggregateResult }|null);

                /** QueryResults aggregateFilters */
                aggregateFilters?: ({ [k: string]: sajari.engine.v2.IQueryAggregateResult }|null);

                /** QueryResults results */
                results?: (sajari.engine.v2.IQueryResult[]|null);
            }

            /** Represents a QueryResults. */
            class QueryResults implements IQueryResults {

                /**
                 * Constructs a new QueryResults.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.IQueryResults);

                /** QueryResults reads. */
                public reads: (number|Long);

                /** QueryResults totalResults. */
                public totalResults: (number|Long);

                /** QueryResults latency. */
                public latency?: (google.protobuf.IDuration|null);

                /** QueryResults aggregates. */
                public aggregates: { [k: string]: sajari.engine.v2.IQueryAggregateResult };

                /** QueryResults aggregateFilters. */
                public aggregateFilters: { [k: string]: sajari.engine.v2.IQueryAggregateResult };

                /** QueryResults results. */
                public results: sajari.engine.v2.IQueryResult[];

                /**
                 * Creates a new QueryResults instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns QueryResults instance
                 */
                public static create(properties?: sajari.pipeline.v2.IQueryResults): sajari.pipeline.v2.QueryResults;

                /**
                 * Encodes the specified QueryResults message. Does not implicitly {@link sajari.pipeline.v2.QueryResults.verify|verify} messages.
                 * @param message QueryResults message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.IQueryResults, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryResults message, length delimited. Does not implicitly {@link sajari.pipeline.v2.QueryResults.verify|verify} messages.
                 * @param message QueryResults message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.IQueryResults, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryResults message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryResults
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.QueryResults;

                /**
                 * Decodes a QueryResults message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryResults
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.QueryResults;

                /**
                 * Verifies a QueryResults message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryResults message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryResults
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.QueryResults;

                /**
                 * Creates a plain object from a QueryResults message. Also converts values to other types if specified.
                 * @param message QueryResults
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.QueryResults, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryResults to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Represents a Store */
            class Store extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Store service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Store service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Store;

                /**
                 * Calls CreateRecord.
                 * @param request CreateRecordRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and CreateRecordResponse
                 */
                public createRecord(request: sajari.pipeline.v2.ICreateRecordRequest, callback: sajari.pipeline.v2.Store.CreateRecordCallback): void;

                /**
                 * Calls CreateRecord.
                 * @param request CreateRecordRequest message or plain object
                 * @returns Promise
                 */
                public createRecord(request: sajari.pipeline.v2.ICreateRecordRequest): Promise<sajari.pipeline.v2.CreateRecordResponse>;

                /**
                 * Calls ReplaceRecord.
                 * @param request ReplaceRecordRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ReplaceRecordResponse
                 */
                public replaceRecord(request: sajari.pipeline.v2.IReplaceRecordRequest, callback: sajari.pipeline.v2.Store.ReplaceRecordCallback): void;

                /**
                 * Calls ReplaceRecord.
                 * @param request ReplaceRecordRequest message or plain object
                 * @returns Promise
                 */
                public replaceRecord(request: sajari.pipeline.v2.IReplaceRecordRequest): Promise<sajari.pipeline.v2.ReplaceRecordResponse>;
            }

            namespace Store {

                /**
                 * Callback as used by {@link sajari.pipeline.v2.Store#createRecord}.
                 * @param error Error, if any
                 * @param [response] CreateRecordResponse
                 */
                type CreateRecordCallback = (error: (Error|null), response?: sajari.pipeline.v2.CreateRecordResponse) => void;

                /**
                 * Callback as used by {@link sajari.pipeline.v2.Store#replaceRecord}.
                 * @param error Error, if any
                 * @param [response] ReplaceRecordResponse
                 */
                type ReplaceRecordCallback = (error: (Error|null), response?: sajari.pipeline.v2.ReplaceRecordResponse) => void;
            }

            /** Properties of a CreateRecordRequest. */
            interface ICreateRecordRequest {

                /** CreateRecordRequest pipeline */
                pipeline?: (sajari.pipeline.v2.IIdentifier|null);

                /** CreateRecordRequest values */
                values?: (google.protobuf.IStruct|null);

                /** CreateRecordRequest record */
                record?: (sajari.engine.v2.IRecord|null);
            }

            /** Represents a CreateRecordRequest. */
            class CreateRecordRequest implements ICreateRecordRequest {

                /**
                 * Constructs a new CreateRecordRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.ICreateRecordRequest);

                /** CreateRecordRequest pipeline. */
                public pipeline?: (sajari.pipeline.v2.IIdentifier|null);

                /** CreateRecordRequest values. */
                public values?: (google.protobuf.IStruct|null);

                /** CreateRecordRequest record. */
                public record?: (sajari.engine.v2.IRecord|null);

                /**
                 * Creates a new CreateRecordRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateRecordRequest instance
                 */
                public static create(properties?: sajari.pipeline.v2.ICreateRecordRequest): sajari.pipeline.v2.CreateRecordRequest;

                /**
                 * Encodes the specified CreateRecordRequest message. Does not implicitly {@link sajari.pipeline.v2.CreateRecordRequest.verify|verify} messages.
                 * @param message CreateRecordRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.ICreateRecordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateRecordRequest message, length delimited. Does not implicitly {@link sajari.pipeline.v2.CreateRecordRequest.verify|verify} messages.
                 * @param message CreateRecordRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.ICreateRecordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateRecordRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateRecordRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.CreateRecordRequest;

                /**
                 * Decodes a CreateRecordRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateRecordRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.CreateRecordRequest;

                /**
                 * Verifies a CreateRecordRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateRecordRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateRecordRequest
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.CreateRecordRequest;

                /**
                 * Creates a plain object from a CreateRecordRequest message. Also converts values to other types if specified.
                 * @param message CreateRecordRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.CreateRecordRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateRecordRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CreateRecordResponse. */
            interface ICreateRecordResponse {

                /** CreateRecordResponse pipeline */
                pipeline?: (sajari.pipeline.v2.IIdentifier|null);

                /** CreateRecordResponse values */
                values?: (google.protobuf.IStruct|null);

                /** CreateRecordResponse key */
                key?: (sajari.engine.v2.IKey|null);
            }

            /** Represents a CreateRecordResponse. */
            class CreateRecordResponse implements ICreateRecordResponse {

                /**
                 * Constructs a new CreateRecordResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.ICreateRecordResponse);

                /** CreateRecordResponse pipeline. */
                public pipeline?: (sajari.pipeline.v2.IIdentifier|null);

                /** CreateRecordResponse values. */
                public values?: (google.protobuf.IStruct|null);

                /** CreateRecordResponse key. */
                public key?: (sajari.engine.v2.IKey|null);

                /**
                 * Creates a new CreateRecordResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateRecordResponse instance
                 */
                public static create(properties?: sajari.pipeline.v2.ICreateRecordResponse): sajari.pipeline.v2.CreateRecordResponse;

                /**
                 * Encodes the specified CreateRecordResponse message. Does not implicitly {@link sajari.pipeline.v2.CreateRecordResponse.verify|verify} messages.
                 * @param message CreateRecordResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.ICreateRecordResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateRecordResponse message, length delimited. Does not implicitly {@link sajari.pipeline.v2.CreateRecordResponse.verify|verify} messages.
                 * @param message CreateRecordResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.ICreateRecordResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateRecordResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateRecordResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.CreateRecordResponse;

                /**
                 * Decodes a CreateRecordResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateRecordResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.CreateRecordResponse;

                /**
                 * Verifies a CreateRecordResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateRecordResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateRecordResponse
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.CreateRecordResponse;

                /**
                 * Creates a plain object from a CreateRecordResponse message. Also converts values to other types if specified.
                 * @param message CreateRecordResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.CreateRecordResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateRecordResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReplaceRecordRequest. */
            interface IReplaceRecordRequest {

                /** ReplaceRecordRequest pipeline */
                pipeline?: (sajari.pipeline.v2.IIdentifier|null);

                /** ReplaceRecordRequest values */
                values?: (google.protobuf.IStruct|null);

                /** ReplaceRecordRequest key */
                key?: (sajari.engine.v2.IKey|null);

                /** ReplaceRecordRequest record */
                record?: (sajari.engine.v2.IRecord|null);
            }

            /** Represents a ReplaceRecordRequest. */
            class ReplaceRecordRequest implements IReplaceRecordRequest {

                /**
                 * Constructs a new ReplaceRecordRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.IReplaceRecordRequest);

                /** ReplaceRecordRequest pipeline. */
                public pipeline?: (sajari.pipeline.v2.IIdentifier|null);

                /** ReplaceRecordRequest values. */
                public values?: (google.protobuf.IStruct|null);

                /** ReplaceRecordRequest key. */
                public key?: (sajari.engine.v2.IKey|null);

                /** ReplaceRecordRequest record. */
                public record?: (sajari.engine.v2.IRecord|null);

                /**
                 * Creates a new ReplaceRecordRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReplaceRecordRequest instance
                 */
                public static create(properties?: sajari.pipeline.v2.IReplaceRecordRequest): sajari.pipeline.v2.ReplaceRecordRequest;

                /**
                 * Encodes the specified ReplaceRecordRequest message. Does not implicitly {@link sajari.pipeline.v2.ReplaceRecordRequest.verify|verify} messages.
                 * @param message ReplaceRecordRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.IReplaceRecordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReplaceRecordRequest message, length delimited. Does not implicitly {@link sajari.pipeline.v2.ReplaceRecordRequest.verify|verify} messages.
                 * @param message ReplaceRecordRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.IReplaceRecordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReplaceRecordRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReplaceRecordRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.ReplaceRecordRequest;

                /**
                 * Decodes a ReplaceRecordRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReplaceRecordRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.ReplaceRecordRequest;

                /**
                 * Verifies a ReplaceRecordRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReplaceRecordRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReplaceRecordRequest
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.ReplaceRecordRequest;

                /**
                 * Creates a plain object from a ReplaceRecordRequest message. Also converts values to other types if specified.
                 * @param message ReplaceRecordRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.ReplaceRecordRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReplaceRecordRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReplaceRecordResponse. */
            interface IReplaceRecordResponse {

                /** ReplaceRecordResponse pipeline */
                pipeline?: (sajari.pipeline.v2.IIdentifier|null);

                /** ReplaceRecordResponse values */
                values?: (google.protobuf.IStruct|null);

                /** ReplaceRecordResponse key */
                key?: (sajari.engine.v2.IKey|null);
            }

            /** Represents a ReplaceRecordResponse. */
            class ReplaceRecordResponse implements IReplaceRecordResponse {

                /**
                 * Constructs a new ReplaceRecordResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.pipeline.v2.IReplaceRecordResponse);

                /** ReplaceRecordResponse pipeline. */
                public pipeline?: (sajari.pipeline.v2.IIdentifier|null);

                /** ReplaceRecordResponse values. */
                public values?: (google.protobuf.IStruct|null);

                /** ReplaceRecordResponse key. */
                public key?: (sajari.engine.v2.IKey|null);

                /**
                 * Creates a new ReplaceRecordResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReplaceRecordResponse instance
                 */
                public static create(properties?: sajari.pipeline.v2.IReplaceRecordResponse): sajari.pipeline.v2.ReplaceRecordResponse;

                /**
                 * Encodes the specified ReplaceRecordResponse message. Does not implicitly {@link sajari.pipeline.v2.ReplaceRecordResponse.verify|verify} messages.
                 * @param message ReplaceRecordResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.pipeline.v2.IReplaceRecordResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReplaceRecordResponse message, length delimited. Does not implicitly {@link sajari.pipeline.v2.ReplaceRecordResponse.verify|verify} messages.
                 * @param message ReplaceRecordResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.pipeline.v2.IReplaceRecordResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReplaceRecordResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReplaceRecordResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.pipeline.v2.ReplaceRecordResponse;

                /**
                 * Decodes a ReplaceRecordResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReplaceRecordResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.pipeline.v2.ReplaceRecordResponse;

                /**
                 * Verifies a ReplaceRecordResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReplaceRecordResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReplaceRecordResponse
                 */
                public static fromObject(object: { [k: string]: any }): sajari.pipeline.v2.ReplaceRecordResponse;

                /**
                 * Creates a plain object from a ReplaceRecordResponse message. Also converts values to other types if specified.
                 * @param message ReplaceRecordResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.pipeline.v2.ReplaceRecordResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReplaceRecordResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace engine. */
    namespace engine {

        /** Namespace v2. */
        namespace v2 {

            /** Properties of a QueryResult. */
            interface IQueryResult {

                /** QueryResult values */
                values?: ({ [k: string]: sajari.engine.v2.IValue }|null);

                /** QueryResult score */
                score?: (number|null);

                /** QueryResult indexScore */
                indexScore?: (number|null);
            }

            /** Represents a QueryResult. */
            class QueryResult implements IQueryResult {

                /**
                 * Constructs a new QueryResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.engine.v2.IQueryResult);

                /** QueryResult values. */
                public values: { [k: string]: sajari.engine.v2.IValue };

                /** QueryResult score. */
                public score: number;

                /** QueryResult indexScore. */
                public indexScore: number;

                /**
                 * Creates a new QueryResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns QueryResult instance
                 */
                public static create(properties?: sajari.engine.v2.IQueryResult): sajari.engine.v2.QueryResult;

                /**
                 * Encodes the specified QueryResult message. Does not implicitly {@link sajari.engine.v2.QueryResult.verify|verify} messages.
                 * @param message QueryResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.engine.v2.IQueryResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryResult message, length delimited. Does not implicitly {@link sajari.engine.v2.QueryResult.verify|verify} messages.
                 * @param message QueryResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.engine.v2.IQueryResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.v2.QueryResult;

                /**
                 * Decodes a QueryResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.v2.QueryResult;

                /**
                 * Verifies a QueryResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryResult
                 */
                public static fromObject(object: { [k: string]: any }): sajari.engine.v2.QueryResult;

                /**
                 * Creates a plain object from a QueryResult message. Also converts values to other types if specified.
                 * @param message QueryResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.engine.v2.QueryResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryAggregateResult. */
            interface IQueryAggregateResult {

                /** QueryAggregateResult metric */
                metric?: (sajari.engine.v2.QueryAggregateResult.IMetric|null);

                /** QueryAggregateResult count */
                count?: (sajari.engine.v2.QueryAggregateResult.ICount|null);

                /** QueryAggregateResult buckets */
                buckets?: (sajari.engine.v2.QueryAggregateResult.IBuckets|null);

                /** QueryAggregateResult date */
                date?: (sajari.engine.v2.QueryAggregateResult.IDate|null);

                /** QueryAggregateResult analysis */
                analysis?: (sajari.engine.v2.QueryAggregateResult.IAnalysis|null);
            }

            /** Represents a QueryAggregateResult. */
            class QueryAggregateResult implements IQueryAggregateResult {

                /**
                 * Constructs a new QueryAggregateResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.engine.v2.IQueryAggregateResult);

                /** QueryAggregateResult metric. */
                public metric?: (sajari.engine.v2.QueryAggregateResult.IMetric|null);

                /** QueryAggregateResult count. */
                public count?: (sajari.engine.v2.QueryAggregateResult.ICount|null);

                /** QueryAggregateResult buckets. */
                public buckets?: (sajari.engine.v2.QueryAggregateResult.IBuckets|null);

                /** QueryAggregateResult date. */
                public date?: (sajari.engine.v2.QueryAggregateResult.IDate|null);

                /** QueryAggregateResult analysis. */
                public analysis?: (sajari.engine.v2.QueryAggregateResult.IAnalysis|null);

                /** QueryAggregateResult aggregateResult. */
                public aggregateResult?: ("metric"|"count"|"buckets"|"date"|"analysis");

                /**
                 * Creates a new QueryAggregateResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns QueryAggregateResult instance
                 */
                public static create(properties?: sajari.engine.v2.IQueryAggregateResult): sajari.engine.v2.QueryAggregateResult;

                /**
                 * Encodes the specified QueryAggregateResult message. Does not implicitly {@link sajari.engine.v2.QueryAggregateResult.verify|verify} messages.
                 * @param message QueryAggregateResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.engine.v2.IQueryAggregateResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryAggregateResult message, length delimited. Does not implicitly {@link sajari.engine.v2.QueryAggregateResult.verify|verify} messages.
                 * @param message QueryAggregateResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.engine.v2.IQueryAggregateResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryAggregateResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryAggregateResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.v2.QueryAggregateResult;

                /**
                 * Decodes a QueryAggregateResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryAggregateResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.v2.QueryAggregateResult;

                /**
                 * Verifies a QueryAggregateResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryAggregateResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryAggregateResult
                 */
                public static fromObject(object: { [k: string]: any }): sajari.engine.v2.QueryAggregateResult;

                /**
                 * Creates a plain object from a QueryAggregateResult message. Also converts values to other types if specified.
                 * @param message QueryAggregateResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.engine.v2.QueryAggregateResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryAggregateResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace QueryAggregateResult {

                /** Properties of a Metric. */
                interface IMetric {

                    /** Metric value */
                    value?: (number|null);
                }

                /** Represents a Metric. */
                class Metric implements IMetric {

                    /**
                     * Constructs a new Metric.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.v2.QueryAggregateResult.IMetric);

                    /** Metric value. */
                    public value: number;

                    /**
                     * Creates a new Metric instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Metric instance
                     */
                    public static create(properties?: sajari.engine.v2.QueryAggregateResult.IMetric): sajari.engine.v2.QueryAggregateResult.Metric;

                    /**
                     * Encodes the specified Metric message. Does not implicitly {@link sajari.engine.v2.QueryAggregateResult.Metric.verify|verify} messages.
                     * @param message Metric message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.v2.QueryAggregateResult.IMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Metric message, length delimited. Does not implicitly {@link sajari.engine.v2.QueryAggregateResult.Metric.verify|verify} messages.
                     * @param message Metric message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.v2.QueryAggregateResult.IMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Metric message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Metric
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.v2.QueryAggregateResult.Metric;

                    /**
                     * Decodes a Metric message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Metric
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.v2.QueryAggregateResult.Metric;

                    /**
                     * Verifies a Metric message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Metric message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Metric
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.v2.QueryAggregateResult.Metric;

                    /**
                     * Creates a plain object from a Metric message. Also converts values to other types if specified.
                     * @param message Metric
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.v2.QueryAggregateResult.Metric, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Metric to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Count. */
                interface ICount {

                    /** Count counts */
                    counts?: ({ [k: string]: number }|null);
                }

                /** Represents a Count. */
                class Count implements ICount {

                    /**
                     * Constructs a new Count.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.v2.QueryAggregateResult.ICount);

                    /** Count counts. */
                    public counts: { [k: string]: number };

                    /**
                     * Creates a new Count instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Count instance
                     */
                    public static create(properties?: sajari.engine.v2.QueryAggregateResult.ICount): sajari.engine.v2.QueryAggregateResult.Count;

                    /**
                     * Encodes the specified Count message. Does not implicitly {@link sajari.engine.v2.QueryAggregateResult.Count.verify|verify} messages.
                     * @param message Count message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.v2.QueryAggregateResult.ICount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Count message, length delimited. Does not implicitly {@link sajari.engine.v2.QueryAggregateResult.Count.verify|verify} messages.
                     * @param message Count message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.v2.QueryAggregateResult.ICount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Count message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Count
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.v2.QueryAggregateResult.Count;

                    /**
                     * Decodes a Count message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Count
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.v2.QueryAggregateResult.Count;

                    /**
                     * Verifies a Count message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Count message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Count
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.v2.QueryAggregateResult.Count;

                    /**
                     * Creates a plain object from a Count message. Also converts values to other types if specified.
                     * @param message Count
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.v2.QueryAggregateResult.Count, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Count to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Buckets. */
                interface IBuckets {

                    /** Buckets buckets */
                    buckets?: ({ [k: string]: sajari.engine.v2.QueryAggregateResult.Buckets.IBucket }|null);
                }

                /** Represents a Buckets. */
                class Buckets implements IBuckets {

                    /**
                     * Constructs a new Buckets.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.v2.QueryAggregateResult.IBuckets);

                    /** Buckets buckets. */
                    public buckets: { [k: string]: sajari.engine.v2.QueryAggregateResult.Buckets.IBucket };

                    /**
                     * Creates a new Buckets instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Buckets instance
                     */
                    public static create(properties?: sajari.engine.v2.QueryAggregateResult.IBuckets): sajari.engine.v2.QueryAggregateResult.Buckets;

                    /**
                     * Encodes the specified Buckets message. Does not implicitly {@link sajari.engine.v2.QueryAggregateResult.Buckets.verify|verify} messages.
                     * @param message Buckets message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.v2.QueryAggregateResult.IBuckets, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Buckets message, length delimited. Does not implicitly {@link sajari.engine.v2.QueryAggregateResult.Buckets.verify|verify} messages.
                     * @param message Buckets message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.v2.QueryAggregateResult.IBuckets, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Buckets message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Buckets
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.v2.QueryAggregateResult.Buckets;

                    /**
                     * Decodes a Buckets message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Buckets
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.v2.QueryAggregateResult.Buckets;

                    /**
                     * Verifies a Buckets message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Buckets message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Buckets
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.v2.QueryAggregateResult.Buckets;

                    /**
                     * Creates a plain object from a Buckets message. Also converts values to other types if specified.
                     * @param message Buckets
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.v2.QueryAggregateResult.Buckets, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Buckets to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Buckets {

                    /** Properties of a Bucket. */
                    interface IBucket {

                        /** Bucket name */
                        name?: (string|null);

                        /** Bucket count */
                        count?: (number|null);
                    }

                    /** Represents a Bucket. */
                    class Bucket implements IBucket {

                        /**
                         * Constructs a new Bucket.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: sajari.engine.v2.QueryAggregateResult.Buckets.IBucket);

                        /** Bucket name. */
                        public name: string;

                        /** Bucket count. */
                        public count: number;

                        /**
                         * Creates a new Bucket instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Bucket instance
                         */
                        public static create(properties?: sajari.engine.v2.QueryAggregateResult.Buckets.IBucket): sajari.engine.v2.QueryAggregateResult.Buckets.Bucket;

                        /**
                         * Encodes the specified Bucket message. Does not implicitly {@link sajari.engine.v2.QueryAggregateResult.Buckets.Bucket.verify|verify} messages.
                         * @param message Bucket message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: sajari.engine.v2.QueryAggregateResult.Buckets.IBucket, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Bucket message, length delimited. Does not implicitly {@link sajari.engine.v2.QueryAggregateResult.Buckets.Bucket.verify|verify} messages.
                         * @param message Bucket message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: sajari.engine.v2.QueryAggregateResult.Buckets.IBucket, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Bucket message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Bucket
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.v2.QueryAggregateResult.Buckets.Bucket;

                        /**
                         * Decodes a Bucket message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Bucket
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.v2.QueryAggregateResult.Buckets.Bucket;

                        /**
                         * Verifies a Bucket message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Bucket message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Bucket
                         */
                        public static fromObject(object: { [k: string]: any }): sajari.engine.v2.QueryAggregateResult.Buckets.Bucket;

                        /**
                         * Creates a plain object from a Bucket message. Also converts values to other types if specified.
                         * @param message Bucket
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: sajari.engine.v2.QueryAggregateResult.Buckets.Bucket, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Bucket to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a Date. */
                interface IDate {

                    /** Date dates */
                    dates?: ({ [k: string]: number }|null);
                }

                /** Represents a Date. */
                class Date implements IDate {

                    /**
                     * Constructs a new Date.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.v2.QueryAggregateResult.IDate);

                    /** Date dates. */
                    public dates: { [k: string]: number };

                    /**
                     * Creates a new Date instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Date instance
                     */
                    public static create(properties?: sajari.engine.v2.QueryAggregateResult.IDate): sajari.engine.v2.QueryAggregateResult.Date;

                    /**
                     * Encodes the specified Date message. Does not implicitly {@link sajari.engine.v2.QueryAggregateResult.Date.verify|verify} messages.
                     * @param message Date message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.v2.QueryAggregateResult.IDate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Date message, length delimited. Does not implicitly {@link sajari.engine.v2.QueryAggregateResult.Date.verify|verify} messages.
                     * @param message Date message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.v2.QueryAggregateResult.IDate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Date message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Date
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.v2.QueryAggregateResult.Date;

                    /**
                     * Decodes a Date message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Date
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.v2.QueryAggregateResult.Date;

                    /**
                     * Verifies a Date message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Date message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Date
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.v2.QueryAggregateResult.Date;

                    /**
                     * Creates a plain object from a Date message. Also converts values to other types if specified.
                     * @param message Date
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.v2.QueryAggregateResult.Date, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Date to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Analysis. */
                interface IAnalysis {

                    /** Analysis coverage */
                    coverage?: (number|null);

                    /** Analysis cardinality */
                    cardinality?: (number|null);

                    /** Analysis minLen */
                    minLen?: (number|null);

                    /** Analysis maxLen */
                    maxLen?: (number|null);

                    /** Analysis avgLen */
                    avgLen?: (number|null);
                }

                /** Represents an Analysis. */
                class Analysis implements IAnalysis {

                    /**
                     * Constructs a new Analysis.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.v2.QueryAggregateResult.IAnalysis);

                    /** Analysis coverage. */
                    public coverage: number;

                    /** Analysis cardinality. */
                    public cardinality: number;

                    /** Analysis minLen. */
                    public minLen: number;

                    /** Analysis maxLen. */
                    public maxLen: number;

                    /** Analysis avgLen. */
                    public avgLen: number;

                    /** Analysis value. */
                    public value?: ("coverage"|"cardinality"|"minLen"|"maxLen"|"avgLen");

                    /**
                     * Creates a new Analysis instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Analysis instance
                     */
                    public static create(properties?: sajari.engine.v2.QueryAggregateResult.IAnalysis): sajari.engine.v2.QueryAggregateResult.Analysis;

                    /**
                     * Encodes the specified Analysis message. Does not implicitly {@link sajari.engine.v2.QueryAggregateResult.Analysis.verify|verify} messages.
                     * @param message Analysis message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.v2.QueryAggregateResult.IAnalysis, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Analysis message, length delimited. Does not implicitly {@link sajari.engine.v2.QueryAggregateResult.Analysis.verify|verify} messages.
                     * @param message Analysis message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.v2.QueryAggregateResult.IAnalysis, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Analysis message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Analysis
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.v2.QueryAggregateResult.Analysis;

                    /**
                     * Decodes an Analysis message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Analysis
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.v2.QueryAggregateResult.Analysis;

                    /**
                     * Verifies an Analysis message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Analysis message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Analysis
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.v2.QueryAggregateResult.Analysis;

                    /**
                     * Creates a plain object from an Analysis message. Also converts values to other types if specified.
                     * @param message Analysis
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.v2.QueryAggregateResult.Analysis, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Analysis to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Represents a Store */
            class Store extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Store service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Store service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Store;

                /**
                 * Calls GetRecord.
                 * @param request GetRecordRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and GetRecordResponse
                 */
                public getRecord(request: sajari.engine.v2.IGetRecordRequest, callback: sajari.engine.v2.Store.GetRecordCallback): void;

                /**
                 * Calls GetRecord.
                 * @param request GetRecordRequest message or plain object
                 * @returns Promise
                 */
                public getRecord(request: sajari.engine.v2.IGetRecordRequest): Promise<sajari.engine.v2.GetRecordResponse>;

                /**
                 * Calls DeleteRecord.
                 * @param request DeleteRecordRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and DeleteRecordResponse
                 */
                public deleteRecord(request: sajari.engine.v2.IDeleteRecordRequest, callback: sajari.engine.v2.Store.DeleteRecordCallback): void;

                /**
                 * Calls DeleteRecord.
                 * @param request DeleteRecordRequest message or plain object
                 * @returns Promise
                 */
                public deleteRecord(request: sajari.engine.v2.IDeleteRecordRequest): Promise<sajari.engine.v2.DeleteRecordResponse>;

                /**
                 * Calls MutateRecord.
                 * @param request MutateRecordRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and MutateRecordResponse
                 */
                public mutateRecord(request: sajari.engine.v2.IMutateRecordRequest, callback: sajari.engine.v2.Store.MutateRecordCallback): void;

                /**
                 * Calls MutateRecord.
                 * @param request MutateRecordRequest message or plain object
                 * @returns Promise
                 */
                public mutateRecord(request: sajari.engine.v2.IMutateRecordRequest): Promise<sajari.engine.v2.MutateRecordResponse>;
            }

            namespace Store {

                /**
                 * Callback as used by {@link sajari.engine.v2.Store#getRecord}.
                 * @param error Error, if any
                 * @param [response] GetRecordResponse
                 */
                type GetRecordCallback = (error: (Error|null), response?: sajari.engine.v2.GetRecordResponse) => void;

                /**
                 * Callback as used by {@link sajari.engine.v2.Store#deleteRecord}.
                 * @param error Error, if any
                 * @param [response] DeleteRecordResponse
                 */
                type DeleteRecordCallback = (error: (Error|null), response?: sajari.engine.v2.DeleteRecordResponse) => void;

                /**
                 * Callback as used by {@link sajari.engine.v2.Store#mutateRecord}.
                 * @param error Error, if any
                 * @param [response] MutateRecordResponse
                 */
                type MutateRecordCallback = (error: (Error|null), response?: sajari.engine.v2.MutateRecordResponse) => void;
            }

            /** Properties of a Value. */
            interface IValue {

                /** Value null */
                "null"?: (boolean|null);

                /** Value single */
                single?: (string|null);

                /** Value repeated */
                repeated?: (sajari.engine.v2.Value.IRepeated|null);
            }

            /** Represents a Value. */
            class Value implements IValue {

                /**
                 * Constructs a new Value.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.engine.v2.IValue);

                /** Value null. */
                public null: boolean;

                /** Value single. */
                public single: string;

                /** Value repeated. */
                public repeated?: (sajari.engine.v2.Value.IRepeated|null);

                /** Value value. */
                public value?: ("null"|"single"|"repeated");

                /**
                 * Creates a new Value instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Value instance
                 */
                public static create(properties?: sajari.engine.v2.IValue): sajari.engine.v2.Value;

                /**
                 * Encodes the specified Value message. Does not implicitly {@link sajari.engine.v2.Value.verify|verify} messages.
                 * @param message Value message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.engine.v2.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Value message, length delimited. Does not implicitly {@link sajari.engine.v2.Value.verify|verify} messages.
                 * @param message Value message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.engine.v2.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Value message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.v2.Value;

                /**
                 * Decodes a Value message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.v2.Value;

                /**
                 * Verifies a Value message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Value message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Value
                 */
                public static fromObject(object: { [k: string]: any }): sajari.engine.v2.Value;

                /**
                 * Creates a plain object from a Value message. Also converts values to other types if specified.
                 * @param message Value
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.engine.v2.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Value to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Value {

                /** Properties of a Repeated. */
                interface IRepeated {

                    /** Repeated values */
                    values?: (string[]|null);
                }

                /** Represents a Repeated. */
                class Repeated implements IRepeated {

                    /**
                     * Constructs a new Repeated.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.v2.Value.IRepeated);

                    /** Repeated values. */
                    public values: string[];

                    /**
                     * Creates a new Repeated instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Repeated instance
                     */
                    public static create(properties?: sajari.engine.v2.Value.IRepeated): sajari.engine.v2.Value.Repeated;

                    /**
                     * Encodes the specified Repeated message. Does not implicitly {@link sajari.engine.v2.Value.Repeated.verify|verify} messages.
                     * @param message Repeated message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.v2.Value.IRepeated, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Repeated message, length delimited. Does not implicitly {@link sajari.engine.v2.Value.Repeated.verify|verify} messages.
                     * @param message Repeated message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.v2.Value.IRepeated, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Repeated message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Repeated
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.v2.Value.Repeated;

                    /**
                     * Decodes a Repeated message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Repeated
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.v2.Value.Repeated;

                    /**
                     * Verifies a Repeated message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Repeated message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Repeated
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.v2.Value.Repeated;

                    /**
                     * Creates a plain object from a Repeated message. Also converts values to other types if specified.
                     * @param message Repeated
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.v2.Value.Repeated, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Repeated to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a Key. */
            interface IKey {

                /** Key field */
                field?: (string|null);

                /** Key value */
                value?: (sajari.engine.v2.IValue|null);
            }

            /** Represents a Key. */
            class Key implements IKey {

                /**
                 * Constructs a new Key.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.engine.v2.IKey);

                /** Key field. */
                public field: string;

                /** Key value. */
                public value?: (sajari.engine.v2.IValue|null);

                /**
                 * Creates a new Key instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Key instance
                 */
                public static create(properties?: sajari.engine.v2.IKey): sajari.engine.v2.Key;

                /**
                 * Encodes the specified Key message. Does not implicitly {@link sajari.engine.v2.Key.verify|verify} messages.
                 * @param message Key message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.engine.v2.IKey, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Key message, length delimited. Does not implicitly {@link sajari.engine.v2.Key.verify|verify} messages.
                 * @param message Key message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.engine.v2.IKey, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Key message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Key
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.v2.Key;

                /**
                 * Decodes a Key message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Key
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.v2.Key;

                /**
                 * Verifies a Key message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Key message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Key
                 */
                public static fromObject(object: { [k: string]: any }): sajari.engine.v2.Key;

                /**
                 * Creates a plain object from a Key message. Also converts values to other types if specified.
                 * @param message Key
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.engine.v2.Key, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Key to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Record. */
            interface IRecord {

                /** Record values */
                values?: ({ [k: string]: sajari.engine.v2.IValue }|null);
            }

            /** Represents a Record. */
            class Record implements IRecord {

                /**
                 * Constructs a new Record.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.engine.v2.IRecord);

                /** Record values. */
                public values: { [k: string]: sajari.engine.v2.IValue };

                /**
                 * Creates a new Record instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Record instance
                 */
                public static create(properties?: sajari.engine.v2.IRecord): sajari.engine.v2.Record;

                /**
                 * Encodes the specified Record message. Does not implicitly {@link sajari.engine.v2.Record.verify|verify} messages.
                 * @param message Record message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.engine.v2.IRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Record message, length delimited. Does not implicitly {@link sajari.engine.v2.Record.verify|verify} messages.
                 * @param message Record message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.engine.v2.IRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Record message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Record
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.v2.Record;

                /**
                 * Decodes a Record message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Record
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.v2.Record;

                /**
                 * Verifies a Record message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Record message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Record
                 */
                public static fromObject(object: { [k: string]: any }): sajari.engine.v2.Record;

                /**
                 * Creates a plain object from a Record message. Also converts values to other types if specified.
                 * @param message Record
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.engine.v2.Record, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Record to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetRecordRequest. */
            interface IGetRecordRequest {

                /** GetRecordRequest key */
                key?: (sajari.engine.v2.IKey|null);
            }

            /** Represents a GetRecordRequest. */
            class GetRecordRequest implements IGetRecordRequest {

                /**
                 * Constructs a new GetRecordRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.engine.v2.IGetRecordRequest);

                /** GetRecordRequest key. */
                public key?: (sajari.engine.v2.IKey|null);

                /**
                 * Creates a new GetRecordRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetRecordRequest instance
                 */
                public static create(properties?: sajari.engine.v2.IGetRecordRequest): sajari.engine.v2.GetRecordRequest;

                /**
                 * Encodes the specified GetRecordRequest message. Does not implicitly {@link sajari.engine.v2.GetRecordRequest.verify|verify} messages.
                 * @param message GetRecordRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.engine.v2.IGetRecordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetRecordRequest message, length delimited. Does not implicitly {@link sajari.engine.v2.GetRecordRequest.verify|verify} messages.
                 * @param message GetRecordRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.engine.v2.IGetRecordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetRecordRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetRecordRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.v2.GetRecordRequest;

                /**
                 * Decodes a GetRecordRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetRecordRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.v2.GetRecordRequest;

                /**
                 * Verifies a GetRecordRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetRecordRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetRecordRequest
                 */
                public static fromObject(object: { [k: string]: any }): sajari.engine.v2.GetRecordRequest;

                /**
                 * Creates a plain object from a GetRecordRequest message. Also converts values to other types if specified.
                 * @param message GetRecordRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.engine.v2.GetRecordRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetRecordRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetRecordResponse. */
            interface IGetRecordResponse {

                /** GetRecordResponse record */
                record?: (sajari.engine.v2.IRecord|null);
            }

            /** Represents a GetRecordResponse. */
            class GetRecordResponse implements IGetRecordResponse {

                /**
                 * Constructs a new GetRecordResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.engine.v2.IGetRecordResponse);

                /** GetRecordResponse record. */
                public record?: (sajari.engine.v2.IRecord|null);

                /**
                 * Creates a new GetRecordResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetRecordResponse instance
                 */
                public static create(properties?: sajari.engine.v2.IGetRecordResponse): sajari.engine.v2.GetRecordResponse;

                /**
                 * Encodes the specified GetRecordResponse message. Does not implicitly {@link sajari.engine.v2.GetRecordResponse.verify|verify} messages.
                 * @param message GetRecordResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.engine.v2.IGetRecordResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetRecordResponse message, length delimited. Does not implicitly {@link sajari.engine.v2.GetRecordResponse.verify|verify} messages.
                 * @param message GetRecordResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.engine.v2.IGetRecordResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetRecordResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetRecordResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.v2.GetRecordResponse;

                /**
                 * Decodes a GetRecordResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetRecordResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.v2.GetRecordResponse;

                /**
                 * Verifies a GetRecordResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetRecordResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetRecordResponse
                 */
                public static fromObject(object: { [k: string]: any }): sajari.engine.v2.GetRecordResponse;

                /**
                 * Creates a plain object from a GetRecordResponse message. Also converts values to other types if specified.
                 * @param message GetRecordResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.engine.v2.GetRecordResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetRecordResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DeleteRecordRequest. */
            interface IDeleteRecordRequest {

                /** DeleteRecordRequest key */
                key?: (sajari.engine.v2.IKey|null);
            }

            /** Represents a DeleteRecordRequest. */
            class DeleteRecordRequest implements IDeleteRecordRequest {

                /**
                 * Constructs a new DeleteRecordRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.engine.v2.IDeleteRecordRequest);

                /** DeleteRecordRequest key. */
                public key?: (sajari.engine.v2.IKey|null);

                /**
                 * Creates a new DeleteRecordRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteRecordRequest instance
                 */
                public static create(properties?: sajari.engine.v2.IDeleteRecordRequest): sajari.engine.v2.DeleteRecordRequest;

                /**
                 * Encodes the specified DeleteRecordRequest message. Does not implicitly {@link sajari.engine.v2.DeleteRecordRequest.verify|verify} messages.
                 * @param message DeleteRecordRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.engine.v2.IDeleteRecordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteRecordRequest message, length delimited. Does not implicitly {@link sajari.engine.v2.DeleteRecordRequest.verify|verify} messages.
                 * @param message DeleteRecordRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.engine.v2.IDeleteRecordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteRecordRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteRecordRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.v2.DeleteRecordRequest;

                /**
                 * Decodes a DeleteRecordRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteRecordRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.v2.DeleteRecordRequest;

                /**
                 * Verifies a DeleteRecordRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteRecordRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteRecordRequest
                 */
                public static fromObject(object: { [k: string]: any }): sajari.engine.v2.DeleteRecordRequest;

                /**
                 * Creates a plain object from a DeleteRecordRequest message. Also converts values to other types if specified.
                 * @param message DeleteRecordRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.engine.v2.DeleteRecordRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteRecordRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DeleteRecordResponse. */
            interface IDeleteRecordResponse {
            }

            /** Represents a DeleteRecordResponse. */
            class DeleteRecordResponse implements IDeleteRecordResponse {

                /**
                 * Constructs a new DeleteRecordResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.engine.v2.IDeleteRecordResponse);

                /**
                 * Creates a new DeleteRecordResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteRecordResponse instance
                 */
                public static create(properties?: sajari.engine.v2.IDeleteRecordResponse): sajari.engine.v2.DeleteRecordResponse;

                /**
                 * Encodes the specified DeleteRecordResponse message. Does not implicitly {@link sajari.engine.v2.DeleteRecordResponse.verify|verify} messages.
                 * @param message DeleteRecordResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.engine.v2.IDeleteRecordResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteRecordResponse message, length delimited. Does not implicitly {@link sajari.engine.v2.DeleteRecordResponse.verify|verify} messages.
                 * @param message DeleteRecordResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.engine.v2.IDeleteRecordResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteRecordResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteRecordResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.v2.DeleteRecordResponse;

                /**
                 * Decodes a DeleteRecordResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteRecordResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.v2.DeleteRecordResponse;

                /**
                 * Verifies a DeleteRecordResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteRecordResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteRecordResponse
                 */
                public static fromObject(object: { [k: string]: any }): sajari.engine.v2.DeleteRecordResponse;

                /**
                 * Creates a plain object from a DeleteRecordResponse message. Also converts values to other types if specified.
                 * @param message DeleteRecordResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.engine.v2.DeleteRecordResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteRecordResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MutateRecordRequest. */
            interface IMutateRecordRequest {

                /** MutateRecordRequest key */
                key?: (sajari.engine.v2.IKey|null);

                /** MutateRecordRequest fieldMutations */
                fieldMutations?: (sajari.engine.v2.MutateRecordRequest.IFieldMutation[]|null);
            }

            /** Represents a MutateRecordRequest. */
            class MutateRecordRequest implements IMutateRecordRequest {

                /**
                 * Constructs a new MutateRecordRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.engine.v2.IMutateRecordRequest);

                /** MutateRecordRequest key. */
                public key?: (sajari.engine.v2.IKey|null);

                /** MutateRecordRequest fieldMutations. */
                public fieldMutations: sajari.engine.v2.MutateRecordRequest.IFieldMutation[];

                /**
                 * Creates a new MutateRecordRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MutateRecordRequest instance
                 */
                public static create(properties?: sajari.engine.v2.IMutateRecordRequest): sajari.engine.v2.MutateRecordRequest;

                /**
                 * Encodes the specified MutateRecordRequest message. Does not implicitly {@link sajari.engine.v2.MutateRecordRequest.verify|verify} messages.
                 * @param message MutateRecordRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.engine.v2.IMutateRecordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MutateRecordRequest message, length delimited. Does not implicitly {@link sajari.engine.v2.MutateRecordRequest.verify|verify} messages.
                 * @param message MutateRecordRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.engine.v2.IMutateRecordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MutateRecordRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MutateRecordRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.v2.MutateRecordRequest;

                /**
                 * Decodes a MutateRecordRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MutateRecordRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.v2.MutateRecordRequest;

                /**
                 * Verifies a MutateRecordRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MutateRecordRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MutateRecordRequest
                 */
                public static fromObject(object: { [k: string]: any }): sajari.engine.v2.MutateRecordRequest;

                /**
                 * Creates a plain object from a MutateRecordRequest message. Also converts values to other types if specified.
                 * @param message MutateRecordRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.engine.v2.MutateRecordRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MutateRecordRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace MutateRecordRequest {

                /** Properties of a FieldMutation. */
                interface IFieldMutation {

                    /** FieldMutation field */
                    field?: (string|null);

                    /** FieldMutation set */
                    set?: (sajari.engine.v2.IValue|null);

                    /** FieldMutation increment */
                    increment?: (sajari.engine.v2.IValue|null);

                    /** FieldMutation append */
                    append?: (sajari.engine.v2.IValue|null);
                }

                /** Represents a FieldMutation. */
                class FieldMutation implements IFieldMutation {

                    /**
                     * Constructs a new FieldMutation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.v2.MutateRecordRequest.IFieldMutation);

                    /** FieldMutation field. */
                    public field: string;

                    /** FieldMutation set. */
                    public set?: (sajari.engine.v2.IValue|null);

                    /** FieldMutation increment. */
                    public increment?: (sajari.engine.v2.IValue|null);

                    /** FieldMutation append. */
                    public append?: (sajari.engine.v2.IValue|null);

                    /** FieldMutation mutation. */
                    public mutation?: ("set"|"increment"|"append");

                    /**
                     * Creates a new FieldMutation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FieldMutation instance
                     */
                    public static create(properties?: sajari.engine.v2.MutateRecordRequest.IFieldMutation): sajari.engine.v2.MutateRecordRequest.FieldMutation;

                    /**
                     * Encodes the specified FieldMutation message. Does not implicitly {@link sajari.engine.v2.MutateRecordRequest.FieldMutation.verify|verify} messages.
                     * @param message FieldMutation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.v2.MutateRecordRequest.IFieldMutation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FieldMutation message, length delimited. Does not implicitly {@link sajari.engine.v2.MutateRecordRequest.FieldMutation.verify|verify} messages.
                     * @param message FieldMutation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.v2.MutateRecordRequest.IFieldMutation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FieldMutation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FieldMutation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.v2.MutateRecordRequest.FieldMutation;

                    /**
                     * Decodes a FieldMutation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FieldMutation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.v2.MutateRecordRequest.FieldMutation;

                    /**
                     * Verifies a FieldMutation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FieldMutation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FieldMutation
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.v2.MutateRecordRequest.FieldMutation;

                    /**
                     * Creates a plain object from a FieldMutation message. Also converts values to other types if specified.
                     * @param message FieldMutation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.v2.MutateRecordRequest.FieldMutation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FieldMutation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a MutateRecordResponse. */
            interface IMutateRecordResponse {
            }

            /** Represents a MutateRecordResponse. */
            class MutateRecordResponse implements IMutateRecordResponse {

                /**
                 * Constructs a new MutateRecordResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.engine.v2.IMutateRecordResponse);

                /**
                 * Creates a new MutateRecordResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MutateRecordResponse instance
                 */
                public static create(properties?: sajari.engine.v2.IMutateRecordResponse): sajari.engine.v2.MutateRecordResponse;

                /**
                 * Encodes the specified MutateRecordResponse message. Does not implicitly {@link sajari.engine.v2.MutateRecordResponse.verify|verify} messages.
                 * @param message MutateRecordResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.engine.v2.IMutateRecordResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MutateRecordResponse message, length delimited. Does not implicitly {@link sajari.engine.v2.MutateRecordResponse.verify|verify} messages.
                 * @param message MutateRecordResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.engine.v2.IMutateRecordResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MutateRecordResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MutateRecordResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.v2.MutateRecordResponse;

                /**
                 * Decodes a MutateRecordResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MutateRecordResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.v2.MutateRecordResponse;

                /**
                 * Verifies a MutateRecordResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MutateRecordResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MutateRecordResponse
                 */
                public static fromObject(object: { [k: string]: any }): sajari.engine.v2.MutateRecordResponse;

                /**
                 * Creates a plain object from a MutateRecordResponse message. Also converts values to other types if specified.
                 * @param message MutateRecordResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.engine.v2.MutateRecordResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MutateRecordResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Represents a Schema */
            class Schema extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Schema service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Schema service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Schema;

                /**
                 * Calls ListFields.
                 * @param request ListFieldsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListFieldsResponse
                 */
                public listFields(request: sajari.engine.v2.IListFieldsRequest, callback: sajari.engine.v2.Schema.ListFieldsCallback): void;

                /**
                 * Calls ListFields.
                 * @param request ListFieldsRequest message or plain object
                 * @returns Promise
                 */
                public listFields(request: sajari.engine.v2.IListFieldsRequest): Promise<sajari.engine.v2.ListFieldsResponse>;

                /**
                 * Calls CreateField.
                 * @param request CreateFieldRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and CreateFieldResponse
                 */
                public createField(request: sajari.engine.v2.ICreateFieldRequest, callback: sajari.engine.v2.Schema.CreateFieldCallback): void;

                /**
                 * Calls CreateField.
                 * @param request CreateFieldRequest message or plain object
                 * @returns Promise
                 */
                public createField(request: sajari.engine.v2.ICreateFieldRequest): Promise<sajari.engine.v2.CreateFieldResponse>;

                /**
                 * Calls MutateField.
                 * @param request MutateFieldRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and MutateFieldResponse
                 */
                public mutateField(request: sajari.engine.v2.IMutateFieldRequest, callback: sajari.engine.v2.Schema.MutateFieldCallback): void;

                /**
                 * Calls MutateField.
                 * @param request MutateFieldRequest message or plain object
                 * @returns Promise
                 */
                public mutateField(request: sajari.engine.v2.IMutateFieldRequest): Promise<sajari.engine.v2.MutateFieldResponse>;
            }

            namespace Schema {

                /**
                 * Callback as used by {@link sajari.engine.v2.Schema#listFields}.
                 * @param error Error, if any
                 * @param [response] ListFieldsResponse
                 */
                type ListFieldsCallback = (error: (Error|null), response?: sajari.engine.v2.ListFieldsResponse) => void;

                /**
                 * Callback as used by {@link sajari.engine.v2.Schema#createField}.
                 * @param error Error, if any
                 * @param [response] CreateFieldResponse
                 */
                type CreateFieldCallback = (error: (Error|null), response?: sajari.engine.v2.CreateFieldResponse) => void;

                /**
                 * Callback as used by {@link sajari.engine.v2.Schema#mutateField}.
                 * @param error Error, if any
                 * @param [response] MutateFieldResponse
                 */
                type MutateFieldCallback = (error: (Error|null), response?: sajari.engine.v2.MutateFieldResponse) => void;
            }

            /** Properties of a ListFieldsRequest. */
            interface IListFieldsRequest {

                /** ListFieldsRequest pageSize */
                pageSize?: (number|null);

                /** ListFieldsRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListFieldsRequest. */
            class ListFieldsRequest implements IListFieldsRequest {

                /**
                 * Constructs a new ListFieldsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.engine.v2.IListFieldsRequest);

                /** ListFieldsRequest pageSize. */
                public pageSize: number;

                /** ListFieldsRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListFieldsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListFieldsRequest instance
                 */
                public static create(properties?: sajari.engine.v2.IListFieldsRequest): sajari.engine.v2.ListFieldsRequest;

                /**
                 * Encodes the specified ListFieldsRequest message. Does not implicitly {@link sajari.engine.v2.ListFieldsRequest.verify|verify} messages.
                 * @param message ListFieldsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.engine.v2.IListFieldsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListFieldsRequest message, length delimited. Does not implicitly {@link sajari.engine.v2.ListFieldsRequest.verify|verify} messages.
                 * @param message ListFieldsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.engine.v2.IListFieldsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListFieldsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListFieldsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.v2.ListFieldsRequest;

                /**
                 * Decodes a ListFieldsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListFieldsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.v2.ListFieldsRequest;

                /**
                 * Verifies a ListFieldsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListFieldsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListFieldsRequest
                 */
                public static fromObject(object: { [k: string]: any }): sajari.engine.v2.ListFieldsRequest;

                /**
                 * Creates a plain object from a ListFieldsRequest message. Also converts values to other types if specified.
                 * @param message ListFieldsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.engine.v2.ListFieldsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListFieldsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListFieldsResponse. */
            interface IListFieldsResponse {

                /** ListFieldsResponse fields */
                fields?: (sajari.engine.v2.IField[]|null);

                /** ListFieldsResponse totalSize */
                totalSize?: (number|null);

                /** ListFieldsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListFieldsResponse. */
            class ListFieldsResponse implements IListFieldsResponse {

                /**
                 * Constructs a new ListFieldsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.engine.v2.IListFieldsResponse);

                /** ListFieldsResponse fields. */
                public fields: sajari.engine.v2.IField[];

                /** ListFieldsResponse totalSize. */
                public totalSize: number;

                /** ListFieldsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListFieldsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListFieldsResponse instance
                 */
                public static create(properties?: sajari.engine.v2.IListFieldsResponse): sajari.engine.v2.ListFieldsResponse;

                /**
                 * Encodes the specified ListFieldsResponse message. Does not implicitly {@link sajari.engine.v2.ListFieldsResponse.verify|verify} messages.
                 * @param message ListFieldsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.engine.v2.IListFieldsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListFieldsResponse message, length delimited. Does not implicitly {@link sajari.engine.v2.ListFieldsResponse.verify|verify} messages.
                 * @param message ListFieldsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.engine.v2.IListFieldsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListFieldsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListFieldsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.v2.ListFieldsResponse;

                /**
                 * Decodes a ListFieldsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListFieldsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.v2.ListFieldsResponse;

                /**
                 * Verifies a ListFieldsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListFieldsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListFieldsResponse
                 */
                public static fromObject(object: { [k: string]: any }): sajari.engine.v2.ListFieldsResponse;

                /**
                 * Creates a plain object from a ListFieldsResponse message. Also converts values to other types if specified.
                 * @param message ListFieldsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.engine.v2.ListFieldsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListFieldsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CreateFieldRequest. */
            interface ICreateFieldRequest {

                /** CreateFieldRequest field */
                field?: (sajari.engine.v2.IField|null);
            }

            /** Represents a CreateFieldRequest. */
            class CreateFieldRequest implements ICreateFieldRequest {

                /**
                 * Constructs a new CreateFieldRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.engine.v2.ICreateFieldRequest);

                /** CreateFieldRequest field. */
                public field?: (sajari.engine.v2.IField|null);

                /**
                 * Creates a new CreateFieldRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateFieldRequest instance
                 */
                public static create(properties?: sajari.engine.v2.ICreateFieldRequest): sajari.engine.v2.CreateFieldRequest;

                /**
                 * Encodes the specified CreateFieldRequest message. Does not implicitly {@link sajari.engine.v2.CreateFieldRequest.verify|verify} messages.
                 * @param message CreateFieldRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.engine.v2.ICreateFieldRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateFieldRequest message, length delimited. Does not implicitly {@link sajari.engine.v2.CreateFieldRequest.verify|verify} messages.
                 * @param message CreateFieldRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.engine.v2.ICreateFieldRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateFieldRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateFieldRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.v2.CreateFieldRequest;

                /**
                 * Decodes a CreateFieldRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateFieldRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.v2.CreateFieldRequest;

                /**
                 * Verifies a CreateFieldRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateFieldRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateFieldRequest
                 */
                public static fromObject(object: { [k: string]: any }): sajari.engine.v2.CreateFieldRequest;

                /**
                 * Creates a plain object from a CreateFieldRequest message. Also converts values to other types if specified.
                 * @param message CreateFieldRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.engine.v2.CreateFieldRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateFieldRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CreateFieldResponse. */
            interface ICreateFieldResponse {
            }

            /** Represents a CreateFieldResponse. */
            class CreateFieldResponse implements ICreateFieldResponse {

                /**
                 * Constructs a new CreateFieldResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.engine.v2.ICreateFieldResponse);

                /**
                 * Creates a new CreateFieldResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateFieldResponse instance
                 */
                public static create(properties?: sajari.engine.v2.ICreateFieldResponse): sajari.engine.v2.CreateFieldResponse;

                /**
                 * Encodes the specified CreateFieldResponse message. Does not implicitly {@link sajari.engine.v2.CreateFieldResponse.verify|verify} messages.
                 * @param message CreateFieldResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.engine.v2.ICreateFieldResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateFieldResponse message, length delimited. Does not implicitly {@link sajari.engine.v2.CreateFieldResponse.verify|verify} messages.
                 * @param message CreateFieldResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.engine.v2.ICreateFieldResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateFieldResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateFieldResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.v2.CreateFieldResponse;

                /**
                 * Decodes a CreateFieldResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateFieldResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.v2.CreateFieldResponse;

                /**
                 * Verifies a CreateFieldResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateFieldResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateFieldResponse
                 */
                public static fromObject(object: { [k: string]: any }): sajari.engine.v2.CreateFieldResponse;

                /**
                 * Creates a plain object from a CreateFieldResponse message. Also converts values to other types if specified.
                 * @param message CreateFieldResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.engine.v2.CreateFieldResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateFieldResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Field. */
            interface IField {

                /** Field name */
                name?: (string|null);

                /** Field description */
                description?: (string|null);

                /** Field type */
                type?: (sajari.engine.v2.Field.Type|null);

                /** Field mode */
                mode?: (sajari.engine.v2.Field.Mode|null);

                /** Field repeated */
                repeated?: (boolean|null);

                /** Field repeatedLen */
                repeatedLen?: (number|null);

                /** Field indexes */
                indexes?: (sajari.engine.v2.IFieldIndex[]|null);
            }

            /** Represents a Field. */
            class Field implements IField {

                /**
                 * Constructs a new Field.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.engine.v2.IField);

                /** Field name. */
                public name: string;

                /** Field description. */
                public description: string;

                /** Field type. */
                public type: sajari.engine.v2.Field.Type;

                /** Field mode. */
                public mode: sajari.engine.v2.Field.Mode;

                /** Field repeated. */
                public repeated: boolean;

                /** Field repeatedLen. */
                public repeatedLen: number;

                /** Field indexes. */
                public indexes: sajari.engine.v2.IFieldIndex[];

                /**
                 * Creates a new Field instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Field instance
                 */
                public static create(properties?: sajari.engine.v2.IField): sajari.engine.v2.Field;

                /**
                 * Encodes the specified Field message. Does not implicitly {@link sajari.engine.v2.Field.verify|verify} messages.
                 * @param message Field message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.engine.v2.IField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Field message, length delimited. Does not implicitly {@link sajari.engine.v2.Field.verify|verify} messages.
                 * @param message Field message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.engine.v2.IField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Field message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Field
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.v2.Field;

                /**
                 * Decodes a Field message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Field
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.v2.Field;

                /**
                 * Verifies a Field message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Field message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Field
                 */
                public static fromObject(object: { [k: string]: any }): sajari.engine.v2.Field;

                /**
                 * Creates a plain object from a Field message. Also converts values to other types if specified.
                 * @param message Field
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.engine.v2.Field, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Field to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Field {

                /** Type enum. */
                enum Type {
                    STRING = 0,
                    INTEGER = 1,
                    FLOAT = 2,
                    DOUBLE = 3,
                    BOOLEAN = 4,
                    TIMESTAMP = 5
                }

                /** Mode enum. */
                enum Mode {
                    NULLABLE = 0,
                    REQUIRED = 1,
                    UNIQUE = 2
                }
            }

            /** Properties of a FieldIndex. */
            interface IFieldIndex {

                /** FieldIndex spec */
                spec?: (string|null);

                /** FieldIndex description */
                description?: (string|null);
            }

            /** Represents a FieldIndex. */
            class FieldIndex implements IFieldIndex {

                /**
                 * Constructs a new FieldIndex.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.engine.v2.IFieldIndex);

                /** FieldIndex spec. */
                public spec: string;

                /** FieldIndex description. */
                public description: string;

                /**
                 * Creates a new FieldIndex instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FieldIndex instance
                 */
                public static create(properties?: sajari.engine.v2.IFieldIndex): sajari.engine.v2.FieldIndex;

                /**
                 * Encodes the specified FieldIndex message. Does not implicitly {@link sajari.engine.v2.FieldIndex.verify|verify} messages.
                 * @param message FieldIndex message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.engine.v2.IFieldIndex, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FieldIndex message, length delimited. Does not implicitly {@link sajari.engine.v2.FieldIndex.verify|verify} messages.
                 * @param message FieldIndex message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.engine.v2.IFieldIndex, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FieldIndex message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FieldIndex
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.v2.FieldIndex;

                /**
                 * Decodes a FieldIndex message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FieldIndex
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.v2.FieldIndex;

                /**
                 * Verifies a FieldIndex message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FieldIndex message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FieldIndex
                 */
                public static fromObject(object: { [k: string]: any }): sajari.engine.v2.FieldIndex;

                /**
                 * Creates a plain object from a FieldIndex message. Also converts values to other types if specified.
                 * @param message FieldIndex
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.engine.v2.FieldIndex, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FieldIndex to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MutateFieldRequest. */
            interface IMutateFieldRequest {

                /** MutateFieldRequest name */
                name?: (string|null);

                /** MutateFieldRequest mutation */
                mutation?: (sajari.engine.v2.MutateFieldRequest.IMutation|null);
            }

            /** Represents a MutateFieldRequest. */
            class MutateFieldRequest implements IMutateFieldRequest {

                /**
                 * Constructs a new MutateFieldRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.engine.v2.IMutateFieldRequest);

                /** MutateFieldRequest name. */
                public name: string;

                /** MutateFieldRequest mutation. */
                public mutation?: (sajari.engine.v2.MutateFieldRequest.IMutation|null);

                /**
                 * Creates a new MutateFieldRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MutateFieldRequest instance
                 */
                public static create(properties?: sajari.engine.v2.IMutateFieldRequest): sajari.engine.v2.MutateFieldRequest;

                /**
                 * Encodes the specified MutateFieldRequest message. Does not implicitly {@link sajari.engine.v2.MutateFieldRequest.verify|verify} messages.
                 * @param message MutateFieldRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.engine.v2.IMutateFieldRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MutateFieldRequest message, length delimited. Does not implicitly {@link sajari.engine.v2.MutateFieldRequest.verify|verify} messages.
                 * @param message MutateFieldRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.engine.v2.IMutateFieldRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MutateFieldRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MutateFieldRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.v2.MutateFieldRequest;

                /**
                 * Decodes a MutateFieldRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MutateFieldRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.v2.MutateFieldRequest;

                /**
                 * Verifies a MutateFieldRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MutateFieldRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MutateFieldRequest
                 */
                public static fromObject(object: { [k: string]: any }): sajari.engine.v2.MutateFieldRequest;

                /**
                 * Creates a plain object from a MutateFieldRequest message. Also converts values to other types if specified.
                 * @param message MutateFieldRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.engine.v2.MutateFieldRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MutateFieldRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace MutateFieldRequest {

                /** Properties of a Mutation. */
                interface IMutation {

                    /** Mutation name */
                    name?: (string|null);

                    /** Mutation description */
                    description?: (string|null);

                    /** Mutation type */
                    type?: (sajari.engine.v2.Field.Type|null);

                    /** Mutation repeated */
                    repeated?: (boolean|null);

                    /** Mutation mode */
                    mode?: (sajari.engine.v2.Field.Mode|null);

                    /** Mutation addIndex */
                    addIndex?: (sajari.engine.v2.IFieldIndex|null);
                }

                /** Represents a Mutation. */
                class Mutation implements IMutation {

                    /**
                     * Constructs a new Mutation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.v2.MutateFieldRequest.IMutation);

                    /** Mutation name. */
                    public name: string;

                    /** Mutation description. */
                    public description: string;

                    /** Mutation type. */
                    public type: sajari.engine.v2.Field.Type;

                    /** Mutation repeated. */
                    public repeated: boolean;

                    /** Mutation mode. */
                    public mode: sajari.engine.v2.Field.Mode;

                    /** Mutation addIndex. */
                    public addIndex?: (sajari.engine.v2.IFieldIndex|null);

                    /** Mutation mutation. */
                    public mutation?: ("name"|"description"|"type"|"repeated"|"mode"|"addIndex");

                    /**
                     * Creates a new Mutation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Mutation instance
                     */
                    public static create(properties?: sajari.engine.v2.MutateFieldRequest.IMutation): sajari.engine.v2.MutateFieldRequest.Mutation;

                    /**
                     * Encodes the specified Mutation message. Does not implicitly {@link sajari.engine.v2.MutateFieldRequest.Mutation.verify|verify} messages.
                     * @param message Mutation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.v2.MutateFieldRequest.IMutation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Mutation message, length delimited. Does not implicitly {@link sajari.engine.v2.MutateFieldRequest.Mutation.verify|verify} messages.
                     * @param message Mutation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.v2.MutateFieldRequest.IMutation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Mutation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Mutation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.v2.MutateFieldRequest.Mutation;

                    /**
                     * Decodes a Mutation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Mutation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.v2.MutateFieldRequest.Mutation;

                    /**
                     * Verifies a Mutation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Mutation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Mutation
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.v2.MutateFieldRequest.Mutation;

                    /**
                     * Creates a plain object from a Mutation message. Also converts values to other types if specified.
                     * @param message Mutation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.v2.MutateFieldRequest.Mutation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Mutation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a MutateFieldResponse. */
            interface IMutateFieldResponse {
            }

            /** Represents a MutateFieldResponse. */
            class MutateFieldResponse implements IMutateFieldResponse {

                /**
                 * Constructs a new MutateFieldResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.engine.v2.IMutateFieldResponse);

                /**
                 * Creates a new MutateFieldResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MutateFieldResponse instance
                 */
                public static create(properties?: sajari.engine.v2.IMutateFieldResponse): sajari.engine.v2.MutateFieldResponse;

                /**
                 * Encodes the specified MutateFieldResponse message. Does not implicitly {@link sajari.engine.v2.MutateFieldResponse.verify|verify} messages.
                 * @param message MutateFieldResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.engine.v2.IMutateFieldResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MutateFieldResponse message, length delimited. Does not implicitly {@link sajari.engine.v2.MutateFieldResponse.verify|verify} messages.
                 * @param message MutateFieldResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.engine.v2.IMutateFieldResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MutateFieldResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MutateFieldResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.v2.MutateFieldResponse;

                /**
                 * Decodes a MutateFieldResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MutateFieldResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.v2.MutateFieldResponse;

                /**
                 * Verifies a MutateFieldResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MutateFieldResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MutateFieldResponse
                 */
                public static fromObject(object: { [k: string]: any }): sajari.engine.v2.MutateFieldResponse;

                /**
                 * Creates a plain object from a MutateFieldResponse message. Also converts values to other types if specified.
                 * @param message MutateFieldResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.engine.v2.MutateFieldResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MutateFieldResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace interaction. */
    namespace interaction {

        /** Namespace v2. */
        namespace v2 {

            /** Represents an Interaction */
            class Interaction extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Interaction service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Interaction service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Interaction;

                /**
                 * Calls ConsumeToken.
                 * @param request ConsumeTokenRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ConsumeTokenResponse
                 */
                public consumeToken(request: sajari.interaction.v2.IConsumeTokenRequest, callback: sajari.interaction.v2.Interaction.ConsumeTokenCallback): void;

                /**
                 * Calls ConsumeToken.
                 * @param request ConsumeTokenRequest message or plain object
                 * @returns Promise
                 */
                public consumeToken(request: sajari.interaction.v2.IConsumeTokenRequest): Promise<sajari.interaction.v2.ConsumeTokenResponse>;
            }

            namespace Interaction {

                /**
                 * Callback as used by {@link sajari.interaction.v2.Interaction#consumeToken}.
                 * @param error Error, if any
                 * @param [response] ConsumeTokenResponse
                 */
                type ConsumeTokenCallback = (error: (Error|null), response?: sajari.interaction.v2.ConsumeTokenResponse) => void;
            }

            /** Properties of a ConsumeTokenRequest. */
            interface IConsumeTokenRequest {

                /** ConsumeTokenRequest token */
                token?: (string|null);

                /** ConsumeTokenRequest identifier */
                identifier?: (string|null);

                /** ConsumeTokenRequest weight */
                weight?: (number|null);

                /** ConsumeTokenRequest data */
                data?: ({ [k: string]: string }|null);
            }

            /** Represents a ConsumeTokenRequest. */
            class ConsumeTokenRequest implements IConsumeTokenRequest {

                /**
                 * Constructs a new ConsumeTokenRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.interaction.v2.IConsumeTokenRequest);

                /** ConsumeTokenRequest token. */
                public token: string;

                /** ConsumeTokenRequest identifier. */
                public identifier: string;

                /** ConsumeTokenRequest weight. */
                public weight: number;

                /** ConsumeTokenRequest data. */
                public data: { [k: string]: string };

                /**
                 * Creates a new ConsumeTokenRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ConsumeTokenRequest instance
                 */
                public static create(properties?: sajari.interaction.v2.IConsumeTokenRequest): sajari.interaction.v2.ConsumeTokenRequest;

                /**
                 * Encodes the specified ConsumeTokenRequest message. Does not implicitly {@link sajari.interaction.v2.ConsumeTokenRequest.verify|verify} messages.
                 * @param message ConsumeTokenRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.interaction.v2.IConsumeTokenRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ConsumeTokenRequest message, length delimited. Does not implicitly {@link sajari.interaction.v2.ConsumeTokenRequest.verify|verify} messages.
                 * @param message ConsumeTokenRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.interaction.v2.IConsumeTokenRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ConsumeTokenRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ConsumeTokenRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.interaction.v2.ConsumeTokenRequest;

                /**
                 * Decodes a ConsumeTokenRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ConsumeTokenRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.interaction.v2.ConsumeTokenRequest;

                /**
                 * Verifies a ConsumeTokenRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ConsumeTokenRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ConsumeTokenRequest
                 */
                public static fromObject(object: { [k: string]: any }): sajari.interaction.v2.ConsumeTokenRequest;

                /**
                 * Creates a plain object from a ConsumeTokenRequest message. Also converts values to other types if specified.
                 * @param message ConsumeTokenRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.interaction.v2.ConsumeTokenRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ConsumeTokenRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ConsumeTokenResponse. */
            interface IConsumeTokenResponse {
            }

            /** Represents a ConsumeTokenResponse. */
            class ConsumeTokenResponse implements IConsumeTokenResponse {

                /**
                 * Constructs a new ConsumeTokenResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.interaction.v2.IConsumeTokenResponse);

                /**
                 * Creates a new ConsumeTokenResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ConsumeTokenResponse instance
                 */
                public static create(properties?: sajari.interaction.v2.IConsumeTokenResponse): sajari.interaction.v2.ConsumeTokenResponse;

                /**
                 * Encodes the specified ConsumeTokenResponse message. Does not implicitly {@link sajari.interaction.v2.ConsumeTokenResponse.verify|verify} messages.
                 * @param message ConsumeTokenResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.interaction.v2.IConsumeTokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ConsumeTokenResponse message, length delimited. Does not implicitly {@link sajari.interaction.v2.ConsumeTokenResponse.verify|verify} messages.
                 * @param message ConsumeTokenResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.interaction.v2.IConsumeTokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ConsumeTokenResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ConsumeTokenResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.interaction.v2.ConsumeTokenResponse;

                /**
                 * Decodes a ConsumeTokenResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ConsumeTokenResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.interaction.v2.ConsumeTokenResponse;

                /**
                 * Verifies a ConsumeTokenResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ConsumeTokenResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ConsumeTokenResponse
                 */
                public static fromObject(object: { [k: string]: any }): sajari.interaction.v2.ConsumeTokenResponse;

                /**
                 * Creates a plain object from a ConsumeTokenResponse message. Also converts values to other types if specified.
                 * @param message ConsumeTokenResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.interaction.v2.ConsumeTokenResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ConsumeTokenResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Struct. */
        interface IStruct {

            /** Struct fields */
            fields?: ({ [k: string]: google.protobuf.IValue }|null);
        }

        /** Represents a Struct. */
        class Struct implements IStruct {

            /**
             * Constructs a new Struct.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStruct);

            /** Struct fields. */
            public fields: { [k: string]: google.protobuf.IValue };

            /**
             * Creates a new Struct instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Struct instance
             */
            public static create(properties?: google.protobuf.IStruct): google.protobuf.Struct;

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Struct;

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Struct;

            /**
             * Verifies a Struct message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Struct
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Struct;

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @param message Struct
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Struct, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Struct to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Value. */
        interface IValue {

            /** Value nullValue */
            nullValue?: (google.protobuf.NullValue|null);

            /** Value numberValue */
            numberValue?: (number|null);

            /** Value stringValue */
            stringValue?: (string|null);

            /** Value boolValue */
            boolValue?: (boolean|null);

            /** Value structValue */
            structValue?: (google.protobuf.IStruct|null);

            /** Value listValue */
            listValue?: (google.protobuf.IListValue|null);
        }

        /** Represents a Value. */
        class Value implements IValue {

            /**
             * Constructs a new Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IValue);

            /** Value nullValue. */
            public nullValue: google.protobuf.NullValue;

            /** Value numberValue. */
            public numberValue: number;

            /** Value stringValue. */
            public stringValue: string;

            /** Value boolValue. */
            public boolValue: boolean;

            /** Value structValue. */
            public structValue?: (google.protobuf.IStruct|null);

            /** Value listValue. */
            public listValue?: (google.protobuf.IListValue|null);

            /** Value kind. */
            public kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

            /**
             * Creates a new Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Value instance
             */
            public static create(properties?: google.protobuf.IValue): google.protobuf.Value;

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Value;

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Value;

            /**
             * Verifies a Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Value;

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @param message Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** NullValue enum. */
        enum NullValue {
            NULL_VALUE = 0
        }

        /** Properties of a ListValue. */
        interface IListValue {

            /** ListValue values */
            values?: (google.protobuf.IValue[]|null);
        }

        /** Represents a ListValue. */
        class ListValue implements IListValue {

            /**
             * Constructs a new ListValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IListValue);

            /** ListValue values. */
            public values: google.protobuf.IValue[];

            /**
             * Creates a new ListValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListValue instance
             */
            public static create(properties?: google.protobuf.IListValue): google.protobuf.ListValue;

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ListValue;

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ListValue;

            /**
             * Verifies a ListValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ListValue;

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @param message ListValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ListValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

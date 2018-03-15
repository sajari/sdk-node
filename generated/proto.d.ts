import * as $protobuf from "protobufjs";

/** Namespace sajari. */
export namespace sajari {

    /** Namespace api. */
    namespace api {

        /** Namespace pipeline. */
        namespace pipeline {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a Pipeline. */
                interface IPipeline {

                    /** Pipeline name */
                    name?: (string|null);
                }

                /** Represents a Pipeline. */
                class Pipeline implements IPipeline {

                    /**
                     * Constructs a new Pipeline.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.api.pipeline.v1.IPipeline);

                    /** Pipeline name. */
                    public name: string;

                    /**
                     * Creates a new Pipeline instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Pipeline instance
                     */
                    public static create(properties?: sajari.api.pipeline.v1.IPipeline): sajari.api.pipeline.v1.Pipeline;

                    /**
                     * Encodes the specified Pipeline message. Does not implicitly {@link sajari.api.pipeline.v1.Pipeline.verify|verify} messages.
                     * @param message Pipeline message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.api.pipeline.v1.IPipeline, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Pipeline message, length delimited. Does not implicitly {@link sajari.api.pipeline.v1.Pipeline.verify|verify} messages.
                     * @param message Pipeline message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.api.pipeline.v1.IPipeline, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Pipeline message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Pipeline
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.api.pipeline.v1.Pipeline;

                    /**
                     * Decodes a Pipeline message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Pipeline
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.api.pipeline.v1.Pipeline;

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
                    public static fromObject(object: { [k: string]: any }): sajari.api.pipeline.v1.Pipeline;

                    /**
                     * Creates a plain object from a Pipeline message. Also converts values to other types if specified.
                     * @param message Pipeline
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.api.pipeline.v1.Pipeline, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Pipeline to JSON.
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
                    public search(request: sajari.api.pipeline.v1.ISearchRequest, callback: sajari.api.pipeline.v1.Query.SearchCallback): void;

                    /**
                     * Calls Search.
                     * @param request SearchRequest message or plain object
                     * @returns Promise
                     */
                    public search(request: sajari.api.pipeline.v1.ISearchRequest): Promise<sajari.api.pipeline.v1.SearchResponse>;
                }

                namespace Query {

                    /**
                     * Callback as used by {@link sajari.api.pipeline.v1.Query#search}.
                     * @param error Error, if any
                     * @param [response] SearchResponse
                     */
                    type SearchCallback = (error: (Error|null), response?: sajari.api.pipeline.v1.SearchResponse) => void;
                }

                /** Properties of a SearchRequest. */
                interface ISearchRequest {

                    /** SearchRequest pipeline */
                    pipeline?: (sajari.api.pipeline.v1.IPipeline|null);

                    /** SearchRequest values */
                    values?: ({ [k: string]: string }|null);

                    /** SearchRequest tracking */
                    tracking?: (sajari.api.pipeline.v1.SearchRequest.ITracking|null);
                }

                /** Represents a SearchRequest. */
                class SearchRequest implements ISearchRequest {

                    /**
                     * Constructs a new SearchRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.api.pipeline.v1.ISearchRequest);

                    /** SearchRequest pipeline. */
                    public pipeline?: (sajari.api.pipeline.v1.IPipeline|null);

                    /** SearchRequest values. */
                    public values: { [k: string]: string };

                    /** SearchRequest tracking. */
                    public tracking?: (sajari.api.pipeline.v1.SearchRequest.ITracking|null);

                    /**
                     * Creates a new SearchRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchRequest instance
                     */
                    public static create(properties?: sajari.api.pipeline.v1.ISearchRequest): sajari.api.pipeline.v1.SearchRequest;

                    /**
                     * Encodes the specified SearchRequest message. Does not implicitly {@link sajari.api.pipeline.v1.SearchRequest.verify|verify} messages.
                     * @param message SearchRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.api.pipeline.v1.ISearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchRequest message, length delimited. Does not implicitly {@link sajari.api.pipeline.v1.SearchRequest.verify|verify} messages.
                     * @param message SearchRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.api.pipeline.v1.ISearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.api.pipeline.v1.SearchRequest;

                    /**
                     * Decodes a SearchRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.api.pipeline.v1.SearchRequest;

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
                    public static fromObject(object: { [k: string]: any }): sajari.api.pipeline.v1.SearchRequest;

                    /**
                     * Creates a plain object from a SearchRequest message. Also converts values to other types if specified.
                     * @param message SearchRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.api.pipeline.v1.SearchRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace SearchRequest {

                    /** Properties of a Tracking. */
                    interface ITracking {

                        /** Tracking type */
                        type?: (sajari.api.pipeline.v1.SearchRequest.Tracking.Type|null);

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
                        constructor(properties?: sajari.api.pipeline.v1.SearchRequest.ITracking);

                        /** Tracking type. */
                        public type: sajari.api.pipeline.v1.SearchRequest.Tracking.Type;

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
                        public static create(properties?: sajari.api.pipeline.v1.SearchRequest.ITracking): sajari.api.pipeline.v1.SearchRequest.Tracking;

                        /**
                         * Encodes the specified Tracking message. Does not implicitly {@link sajari.api.pipeline.v1.SearchRequest.Tracking.verify|verify} messages.
                         * @param message Tracking message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: sajari.api.pipeline.v1.SearchRequest.ITracking, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Tracking message, length delimited. Does not implicitly {@link sajari.api.pipeline.v1.SearchRequest.Tracking.verify|verify} messages.
                         * @param message Tracking message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: sajari.api.pipeline.v1.SearchRequest.ITracking, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Tracking message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Tracking
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.api.pipeline.v1.SearchRequest.Tracking;

                        /**
                         * Decodes a Tracking message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Tracking
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.api.pipeline.v1.SearchRequest.Tracking;

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
                        public static fromObject(object: { [k: string]: any }): sajari.api.pipeline.v1.SearchRequest.Tracking;

                        /**
                         * Creates a plain object from a Tracking message. Also converts values to other types if specified.
                         * @param message Tracking
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: sajari.api.pipeline.v1.SearchRequest.Tracking, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                }

                /** Properties of a Token. */
                interface IToken {

                    /** Token click */
                    click?: (sajari.api.pipeline.v1.Token.IClick|null);

                    /** Token posNeg */
                    posNeg?: (sajari.api.pipeline.v1.Token.IPosNeg|null);
                }

                /** Represents a Token. */
                class Token implements IToken {

                    /**
                     * Constructs a new Token.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.api.pipeline.v1.IToken);

                    /** Token click. */
                    public click?: (sajari.api.pipeline.v1.Token.IClick|null);

                    /** Token posNeg. */
                    public posNeg?: (sajari.api.pipeline.v1.Token.IPosNeg|null);

                    /** Token token. */
                    public token?: ("click"|"posNeg");

                    /**
                     * Creates a new Token instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Token instance
                     */
                    public static create(properties?: sajari.api.pipeline.v1.IToken): sajari.api.pipeline.v1.Token;

                    /**
                     * Encodes the specified Token message. Does not implicitly {@link sajari.api.pipeline.v1.Token.verify|verify} messages.
                     * @param message Token message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.api.pipeline.v1.IToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Token message, length delimited. Does not implicitly {@link sajari.api.pipeline.v1.Token.verify|verify} messages.
                     * @param message Token message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.api.pipeline.v1.IToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Token message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Token
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.api.pipeline.v1.Token;

                    /**
                     * Decodes a Token message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Token
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.api.pipeline.v1.Token;

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
                    public static fromObject(object: { [k: string]: any }): sajari.api.pipeline.v1.Token;

                    /**
                     * Creates a plain object from a Token message. Also converts values to other types if specified.
                     * @param message Token
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.api.pipeline.v1.Token, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                        constructor(properties?: sajari.api.pipeline.v1.Token.IClick);

                        /** Click token. */
                        public token: string;

                        /**
                         * Creates a new Click instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Click instance
                         */
                        public static create(properties?: sajari.api.pipeline.v1.Token.IClick): sajari.api.pipeline.v1.Token.Click;

                        /**
                         * Encodes the specified Click message. Does not implicitly {@link sajari.api.pipeline.v1.Token.Click.verify|verify} messages.
                         * @param message Click message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: sajari.api.pipeline.v1.Token.IClick, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Click message, length delimited. Does not implicitly {@link sajari.api.pipeline.v1.Token.Click.verify|verify} messages.
                         * @param message Click message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: sajari.api.pipeline.v1.Token.IClick, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Click message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Click
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.api.pipeline.v1.Token.Click;

                        /**
                         * Decodes a Click message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Click
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.api.pipeline.v1.Token.Click;

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
                        public static fromObject(object: { [k: string]: any }): sajari.api.pipeline.v1.Token.Click;

                        /**
                         * Creates a plain object from a Click message. Also converts values to other types if specified.
                         * @param message Click
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: sajari.api.pipeline.v1.Token.Click, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                        constructor(properties?: sajari.api.pipeline.v1.Token.IPosNeg);

                        /** PosNeg pos. */
                        public pos: string;

                        /** PosNeg neg. */
                        public neg: string;

                        /**
                         * Creates a new PosNeg instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PosNeg instance
                         */
                        public static create(properties?: sajari.api.pipeline.v1.Token.IPosNeg): sajari.api.pipeline.v1.Token.PosNeg;

                        /**
                         * Encodes the specified PosNeg message. Does not implicitly {@link sajari.api.pipeline.v1.Token.PosNeg.verify|verify} messages.
                         * @param message PosNeg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: sajari.api.pipeline.v1.Token.IPosNeg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PosNeg message, length delimited. Does not implicitly {@link sajari.api.pipeline.v1.Token.PosNeg.verify|verify} messages.
                         * @param message PosNeg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: sajari.api.pipeline.v1.Token.IPosNeg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PosNeg message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PosNeg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.api.pipeline.v1.Token.PosNeg;

                        /**
                         * Decodes a PosNeg message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PosNeg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.api.pipeline.v1.Token.PosNeg;

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
                        public static fromObject(object: { [k: string]: any }): sajari.api.pipeline.v1.Token.PosNeg;

                        /**
                         * Creates a plain object from a PosNeg message. Also converts values to other types if specified.
                         * @param message PosNeg
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: sajari.api.pipeline.v1.Token.PosNeg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PosNeg to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a SearchResponse. */
                interface ISearchResponse {

                    /** SearchResponse values */
                    values?: ({ [k: string]: string }|null);

                    /** SearchResponse searchResponse */
                    searchResponse?: (sajari.api.pipeline.v1.SearchResponse.ISearchResponse|null);

                    /** SearchResponse tokens */
                    tokens?: (sajari.api.pipeline.v1.IToken[]|null);
                }

                /** Represents a SearchResponse. */
                class SearchResponse implements ISearchResponse {

                    /**
                     * Constructs a new SearchResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.api.pipeline.v1.ISearchResponse);

                    /** SearchResponse values. */
                    public values: { [k: string]: string };

                    /** SearchResponse searchResponse. */
                    public searchResponse?: (sajari.api.pipeline.v1.SearchResponse.ISearchResponse|null);

                    /** SearchResponse tokens. */
                    public tokens: sajari.api.pipeline.v1.IToken[];

                    /**
                     * Creates a new SearchResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchResponse instance
                     */
                    public static create(properties?: sajari.api.pipeline.v1.ISearchResponse): sajari.api.pipeline.v1.SearchResponse;

                    /**
                     * Encodes the specified SearchResponse message. Does not implicitly {@link sajari.api.pipeline.v1.SearchResponse.verify|verify} messages.
                     * @param message SearchResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.api.pipeline.v1.ISearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchResponse message, length delimited. Does not implicitly {@link sajari.api.pipeline.v1.SearchResponse.verify|verify} messages.
                     * @param message SearchResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.api.pipeline.v1.ISearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.api.pipeline.v1.SearchResponse;

                    /**
                     * Decodes a SearchResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.api.pipeline.v1.SearchResponse;

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
                    public static fromObject(object: { [k: string]: any }): sajari.api.pipeline.v1.SearchResponse;

                    /**
                     * Creates a plain object from a SearchResponse message. Also converts values to other types if specified.
                     * @param message SearchResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.api.pipeline.v1.SearchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace SearchResponse {

                    /** Properties of a SearchResponse. */
                    interface ISearchResponse {

                        /** SearchResponse reads */
                        reads?: (number|Long|null);

                        /** SearchResponse totalResults */
                        totalResults?: (number|Long|null);

                        /** SearchResponse time */
                        time?: (string|null);

                        /** SearchResponse aggregates */
                        aggregates?: ({ [k: string]: sajari.api.pipeline.v1.SearchResponse.SearchResponse.IAggregateResponse }|null);

                        /** SearchResponse results */
                        results?: (sajari.api.pipeline.v1.SearchResponse.SearchResponse.IResult[]|null);
                    }

                    /** Represents a SearchResponse. */
                    class SearchResponse implements ISearchResponse {

                        /**
                         * Constructs a new SearchResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: sajari.api.pipeline.v1.SearchResponse.ISearchResponse);

                        /** SearchResponse reads. */
                        public reads: (number|Long);

                        /** SearchResponse totalResults. */
                        public totalResults: (number|Long);

                        /** SearchResponse time. */
                        public time: string;

                        /** SearchResponse aggregates. */
                        public aggregates: { [k: string]: sajari.api.pipeline.v1.SearchResponse.SearchResponse.IAggregateResponse };

                        /** SearchResponse results. */
                        public results: sajari.api.pipeline.v1.SearchResponse.SearchResponse.IResult[];

                        /**
                         * Creates a new SearchResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SearchResponse instance
                         */
                        public static create(properties?: sajari.api.pipeline.v1.SearchResponse.ISearchResponse): sajari.api.pipeline.v1.SearchResponse.SearchResponse;

                        /**
                         * Encodes the specified SearchResponse message. Does not implicitly {@link sajari.api.pipeline.v1.SearchResponse.SearchResponse.verify|verify} messages.
                         * @param message SearchResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: sajari.api.pipeline.v1.SearchResponse.ISearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SearchResponse message, length delimited. Does not implicitly {@link sajari.api.pipeline.v1.SearchResponse.SearchResponse.verify|verify} messages.
                         * @param message SearchResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: sajari.api.pipeline.v1.SearchResponse.ISearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SearchResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SearchResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.api.pipeline.v1.SearchResponse.SearchResponse;

                        /**
                         * Decodes a SearchResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SearchResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.api.pipeline.v1.SearchResponse.SearchResponse;

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
                        public static fromObject(object: { [k: string]: any }): sajari.api.pipeline.v1.SearchResponse.SearchResponse;

                        /**
                         * Creates a plain object from a SearchResponse message. Also converts values to other types if specified.
                         * @param message SearchResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: sajari.api.pipeline.v1.SearchResponse.SearchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SearchResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace SearchResponse {

                        /** Properties of an AggregateResponse. */
                        interface IAggregateResponse {

                            /** AggregateResponse metric */
                            metric?: (sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.IMetric|null);

                            /** AggregateResponse count */
                            count?: (sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.ICount|null);

                            /** AggregateResponse buckets */
                            buckets?: (sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.IBuckets|null);
                        }

                        /** Represents an AggregateResponse. */
                        class AggregateResponse implements IAggregateResponse {

                            /**
                             * Constructs a new AggregateResponse.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: sajari.api.pipeline.v1.SearchResponse.SearchResponse.IAggregateResponse);

                            /** AggregateResponse metric. */
                            public metric?: (sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.IMetric|null);

                            /** AggregateResponse count. */
                            public count?: (sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.ICount|null);

                            /** AggregateResponse buckets. */
                            public buckets?: (sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.IBuckets|null);

                            /** AggregateResponse aggregateResponse. */
                            public aggregateResponse?: ("metric"|"count"|"buckets");

                            /**
                             * Creates a new AggregateResponse instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AggregateResponse instance
                             */
                            public static create(properties?: sajari.api.pipeline.v1.SearchResponse.SearchResponse.IAggregateResponse): sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse;

                            /**
                             * Encodes the specified AggregateResponse message. Does not implicitly {@link sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.verify|verify} messages.
                             * @param message AggregateResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: sajari.api.pipeline.v1.SearchResponse.SearchResponse.IAggregateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AggregateResponse message, length delimited. Does not implicitly {@link sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.verify|verify} messages.
                             * @param message AggregateResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: sajari.api.pipeline.v1.SearchResponse.SearchResponse.IAggregateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AggregateResponse message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AggregateResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse;

                            /**
                             * Decodes an AggregateResponse message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AggregateResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse;

                            /**
                             * Verifies an AggregateResponse message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AggregateResponse message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AggregateResponse
                             */
                            public static fromObject(object: { [k: string]: any }): sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse;

                            /**
                             * Creates a plain object from an AggregateResponse message. Also converts values to other types if specified.
                             * @param message AggregateResponse
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AggregateResponse to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        namespace AggregateResponse {

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
                                constructor(properties?: sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.IMetric);

                                /** Metric value. */
                                public value: number;

                                /**
                                 * Creates a new Metric instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns Metric instance
                                 */
                                public static create(properties?: sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.IMetric): sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Metric;

                                /**
                                 * Encodes the specified Metric message. Does not implicitly {@link sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Metric.verify|verify} messages.
                                 * @param message Metric message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.IMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified Metric message, length delimited. Does not implicitly {@link sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Metric.verify|verify} messages.
                                 * @param message Metric message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.IMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a Metric message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns Metric
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Metric;

                                /**
                                 * Decodes a Metric message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns Metric
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Metric;

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
                                public static fromObject(object: { [k: string]: any }): sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Metric;

                                /**
                                 * Creates a plain object from a Metric message. Also converts values to other types if specified.
                                 * @param message Metric
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Metric, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                                constructor(properties?: sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.ICount);

                                /** Count counts. */
                                public counts: { [k: string]: number };

                                /**
                                 * Creates a new Count instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns Count instance
                                 */
                                public static create(properties?: sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.ICount): sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Count;

                                /**
                                 * Encodes the specified Count message. Does not implicitly {@link sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Count.verify|verify} messages.
                                 * @param message Count message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.ICount, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified Count message, length delimited. Does not implicitly {@link sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Count.verify|verify} messages.
                                 * @param message Count message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.ICount, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a Count message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns Count
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Count;

                                /**
                                 * Decodes a Count message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns Count
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Count;

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
                                public static fromObject(object: { [k: string]: any }): sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Count;

                                /**
                                 * Creates a plain object from a Count message. Also converts values to other types if specified.
                                 * @param message Count
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Count, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this Count to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a Buckets. */
                            interface IBuckets {

                                /** Buckets buckets */
                                buckets?: ({ [k: string]: sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Buckets.IBucket }|null);
                            }

                            /** Represents a Buckets. */
                            class Buckets implements IBuckets {

                                /**
                                 * Constructs a new Buckets.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.IBuckets);

                                /** Buckets buckets. */
                                public buckets: { [k: string]: sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Buckets.IBucket };

                                /**
                                 * Creates a new Buckets instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns Buckets instance
                                 */
                                public static create(properties?: sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.IBuckets): sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Buckets;

                                /**
                                 * Encodes the specified Buckets message. Does not implicitly {@link sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Buckets.verify|verify} messages.
                                 * @param message Buckets message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.IBuckets, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified Buckets message, length delimited. Does not implicitly {@link sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Buckets.verify|verify} messages.
                                 * @param message Buckets message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.IBuckets, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a Buckets message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns Buckets
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Buckets;

                                /**
                                 * Decodes a Buckets message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns Buckets
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Buckets;

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
                                public static fromObject(object: { [k: string]: any }): sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Buckets;

                                /**
                                 * Creates a plain object from a Buckets message. Also converts values to other types if specified.
                                 * @param message Buckets
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Buckets, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                                    constructor(properties?: sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Buckets.IBucket);

                                    /** Bucket name. */
                                    public name: string;

                                    /** Bucket count. */
                                    public count: number;

                                    /**
                                     * Creates a new Bucket instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns Bucket instance
                                     */
                                    public static create(properties?: sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Buckets.IBucket): sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Buckets.Bucket;

                                    /**
                                     * Encodes the specified Bucket message. Does not implicitly {@link sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Buckets.Bucket.verify|verify} messages.
                                     * @param message Bucket message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Buckets.IBucket, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified Bucket message, length delimited. Does not implicitly {@link sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Buckets.Bucket.verify|verify} messages.
                                     * @param message Bucket message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Buckets.IBucket, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a Bucket message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns Bucket
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Buckets.Bucket;

                                    /**
                                     * Decodes a Bucket message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns Bucket
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Buckets.Bucket;

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
                                    public static fromObject(object: { [k: string]: any }): sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Buckets.Bucket;

                                    /**
                                     * Creates a plain object from a Bucket message. Also converts values to other types if specified.
                                     * @param message Bucket
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: sajari.api.pipeline.v1.SearchResponse.SearchResponse.AggregateResponse.Buckets.Bucket, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this Bucket to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }
                            }
                        }

                        /** Properties of a Result. */
                        interface IResult {

                            /** Result values */
                            values?: ({ [k: string]: sajari.engine.IValue }|null);

                            /** Result score */
                            score?: (number|null);

                            /** Result indexScore */
                            indexScore?: (number|null);
                        }

                        /** Represents a Result. */
                        class Result implements IResult {

                            /**
                             * Constructs a new Result.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: sajari.api.pipeline.v1.SearchResponse.SearchResponse.IResult);

                            /** Result values. */
                            public values: { [k: string]: sajari.engine.IValue };

                            /** Result score. */
                            public score: number;

                            /** Result indexScore. */
                            public indexScore: number;

                            /**
                             * Creates a new Result instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Result instance
                             */
                            public static create(properties?: sajari.api.pipeline.v1.SearchResponse.SearchResponse.IResult): sajari.api.pipeline.v1.SearchResponse.SearchResponse.Result;

                            /**
                             * Encodes the specified Result message. Does not implicitly {@link sajari.api.pipeline.v1.SearchResponse.SearchResponse.Result.verify|verify} messages.
                             * @param message Result message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: sajari.api.pipeline.v1.SearchResponse.SearchResponse.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Result message, length delimited. Does not implicitly {@link sajari.api.pipeline.v1.SearchResponse.SearchResponse.Result.verify|verify} messages.
                             * @param message Result message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: sajari.api.pipeline.v1.SearchResponse.SearchResponse.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Result message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Result
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.api.pipeline.v1.SearchResponse.SearchResponse.Result;

                            /**
                             * Decodes a Result message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Result
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.api.pipeline.v1.SearchResponse.SearchResponse.Result;

                            /**
                             * Verifies a Result message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Result message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Result
                             */
                            public static fromObject(object: { [k: string]: any }): sajari.api.pipeline.v1.SearchResponse.SearchResponse.Result;

                            /**
                             * Creates a plain object from a Result message. Also converts values to other types if specified.
                             * @param message Result
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: sajari.api.pipeline.v1.SearchResponse.SearchResponse.Result, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Result to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
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
                     * Calls Add.
                     * @param request AddRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AddResponse
                     */
                    public add(request: sajari.api.pipeline.v1.IAddRequest, callback: sajari.api.pipeline.v1.Store.AddCallback): void;

                    /**
                     * Calls Add.
                     * @param request AddRequest message or plain object
                     * @returns Promise
                     */
                    public add(request: sajari.api.pipeline.v1.IAddRequest): Promise<sajari.api.pipeline.v1.AddResponse>;
                }

                namespace Store {

                    /**
                     * Callback as used by {@link sajari.api.pipeline.v1.Store#add}.
                     * @param error Error, if any
                     * @param [response] AddResponse
                     */
                    type AddCallback = (error: (Error|null), response?: sajari.api.pipeline.v1.AddResponse) => void;
                }

                /** Properties of an AddRequest. */
                interface IAddRequest {

                    /** AddRequest pipeline */
                    pipeline?: (sajari.api.pipeline.v1.IPipeline|null);

                    /** AddRequest values */
                    values?: ({ [k: string]: string }|null);

                    /** AddRequest records */
                    records?: (sajari.engine.store.record.IRecord[]|null);
                }

                /** Represents an AddRequest. */
                class AddRequest implements IAddRequest {

                    /**
                     * Constructs a new AddRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.api.pipeline.v1.IAddRequest);

                    /** AddRequest pipeline. */
                    public pipeline?: (sajari.api.pipeline.v1.IPipeline|null);

                    /** AddRequest values. */
                    public values: { [k: string]: string };

                    /** AddRequest records. */
                    public records: sajari.engine.store.record.IRecord[];

                    /**
                     * Creates a new AddRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AddRequest instance
                     */
                    public static create(properties?: sajari.api.pipeline.v1.IAddRequest): sajari.api.pipeline.v1.AddRequest;

                    /**
                     * Encodes the specified AddRequest message. Does not implicitly {@link sajari.api.pipeline.v1.AddRequest.verify|verify} messages.
                     * @param message AddRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.api.pipeline.v1.IAddRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AddRequest message, length delimited. Does not implicitly {@link sajari.api.pipeline.v1.AddRequest.verify|verify} messages.
                     * @param message AddRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.api.pipeline.v1.IAddRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AddRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AddRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.api.pipeline.v1.AddRequest;

                    /**
                     * Decodes an AddRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AddRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.api.pipeline.v1.AddRequest;

                    /**
                     * Verifies an AddRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AddRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AddRequest
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.api.pipeline.v1.AddRequest;

                    /**
                     * Creates a plain object from an AddRequest message. Also converts values to other types if specified.
                     * @param message AddRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.api.pipeline.v1.AddRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AddRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AddResponse. */
                interface IAddResponse {

                    /** AddResponse response */
                    response?: (sajari.engine.store.record.IAddResponse|null);
                }

                /** Represents an AddResponse. */
                class AddResponse implements IAddResponse {

                    /**
                     * Constructs a new AddResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.api.pipeline.v1.IAddResponse);

                    /** AddResponse response. */
                    public response?: (sajari.engine.store.record.IAddResponse|null);

                    /**
                     * Creates a new AddResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AddResponse instance
                     */
                    public static create(properties?: sajari.api.pipeline.v1.IAddResponse): sajari.api.pipeline.v1.AddResponse;

                    /**
                     * Encodes the specified AddResponse message. Does not implicitly {@link sajari.api.pipeline.v1.AddResponse.verify|verify} messages.
                     * @param message AddResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.api.pipeline.v1.IAddResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AddResponse message, length delimited. Does not implicitly {@link sajari.api.pipeline.v1.AddResponse.verify|verify} messages.
                     * @param message AddResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.api.pipeline.v1.IAddResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AddResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AddResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.api.pipeline.v1.AddResponse;

                    /**
                     * Decodes an AddResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AddResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.api.pipeline.v1.AddResponse;

                    /**
                     * Verifies an AddResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AddResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AddResponse
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.api.pipeline.v1.AddResponse;

                    /**
                     * Creates a plain object from an AddResponse message. Also converts values to other types if specified.
                     * @param message AddResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.api.pipeline.v1.AddResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AddResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }

    /** Namespace engine. */
    namespace engine {

        /** Properties of a Value. */
        interface IValue {

            /** Value null */
            "null"?: (boolean|null);

            /** Value single */
            single?: (string|null);

            /** Value repeated */
            repeated?: (sajari.engine.Value.IRepeated|null);
        }

        /** Represents a Value. */
        class Value implements IValue {

            /**
             * Constructs a new Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: sajari.engine.IValue);

            /** Value null. */
            public null: boolean;

            /** Value single. */
            public single: string;

            /** Value repeated. */
            public repeated?: (sajari.engine.Value.IRepeated|null);

            /** Value value. */
            public value?: ("null"|"single"|"repeated");

            /**
             * Creates a new Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Value instance
             */
            public static create(properties?: sajari.engine.IValue): sajari.engine.Value;

            /**
             * Encodes the specified Value message. Does not implicitly {@link sajari.engine.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sajari.engine.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link sajari.engine.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sajari.engine.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.Value;

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.Value;

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
            public static fromObject(object: { [k: string]: any }): sajari.engine.Value;

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @param message Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sajari.engine.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                constructor(properties?: sajari.engine.Value.IRepeated);

                /** Repeated values. */
                public values: string[];

                /**
                 * Creates a new Repeated instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Repeated instance
                 */
                public static create(properties?: sajari.engine.Value.IRepeated): sajari.engine.Value.Repeated;

                /**
                 * Encodes the specified Repeated message. Does not implicitly {@link sajari.engine.Value.Repeated.verify|verify} messages.
                 * @param message Repeated message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.engine.Value.IRepeated, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Repeated message, length delimited. Does not implicitly {@link sajari.engine.Value.Repeated.verify|verify} messages.
                 * @param message Repeated message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.engine.Value.IRepeated, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Repeated message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Repeated
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.Value.Repeated;

                /**
                 * Decodes a Repeated message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Repeated
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.Value.Repeated;

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
                public static fromObject(object: { [k: string]: any }): sajari.engine.Value.Repeated;

                /**
                 * Creates a plain object from a Repeated message. Also converts values to other types if specified.
                 * @param message Repeated
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.engine.Value.Repeated, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Repeated to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace store. */
        namespace store {

            /** Namespace record. */
            namespace record {

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
                     * Calls Add.
                     * @param request Records message or plain object
                     * @param callback Node-style callback called with the error, if any, and AddResponse
                     */
                    public add(request: sajari.engine.store.record.IRecords, callback: sajari.engine.store.record.Store.AddCallback): void;

                    /**
                     * Calls Add.
                     * @param request Records message or plain object
                     * @returns Promise
                     */
                    public add(request: sajari.engine.store.record.IRecords): Promise<sajari.engine.store.record.AddResponse>;

                    /**
                     * Calls Get.
                     * @param request Keys message or plain object
                     * @param callback Node-style callback called with the error, if any, and GetResponse
                     */
                    public get(request: sajari.engine.store.record.IKeys, callback: sajari.engine.store.record.Store.GetCallback): void;

                    /**
                     * Calls Get.
                     * @param request Keys message or plain object
                     * @returns Promise
                     */
                    public get(request: sajari.engine.store.record.IKeys): Promise<sajari.engine.store.record.GetResponse>;

                    /**
                     * Calls Delete.
                     * @param request Keys message or plain object
                     * @param callback Node-style callback called with the error, if any, and DeleteResponse
                     */
                    public delete(request: sajari.engine.store.record.IKeys, callback: sajari.engine.store.record.Store.DeleteCallback): void;

                    /**
                     * Calls Delete.
                     * @param request Keys message or plain object
                     * @returns Promise
                     */
                    public delete(request: sajari.engine.store.record.IKeys): Promise<sajari.engine.store.record.DeleteResponse>;

                    /**
                     * Calls Mutate.
                     * @param request MutateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and MutateResponse
                     */
                    public mutate(request: sajari.engine.store.record.IMutateRequest, callback: sajari.engine.store.record.Store.MutateCallback): void;

                    /**
                     * Calls Mutate.
                     * @param request MutateRequest message or plain object
                     * @returns Promise
                     */
                    public mutate(request: sajari.engine.store.record.IMutateRequest): Promise<sajari.engine.store.record.MutateResponse>;

                    /**
                     * Calls Exists.
                     * @param request Keys message or plain object
                     * @param callback Node-style callback called with the error, if any, and ExistsResponse
                     */
                    public exists(request: sajari.engine.store.record.IKeys, callback: sajari.engine.store.record.Store.ExistsCallback): void;

                    /**
                     * Calls Exists.
                     * @param request Keys message or plain object
                     * @returns Promise
                     */
                    public exists(request: sajari.engine.store.record.IKeys): Promise<sajari.engine.store.record.ExistsResponse>;
                }

                namespace Store {

                    /**
                     * Callback as used by {@link sajari.engine.store.record.Store#add}.
                     * @param error Error, if any
                     * @param [response] AddResponse
                     */
                    type AddCallback = (error: (Error|null), response?: sajari.engine.store.record.AddResponse) => void;

                    /**
                     * Callback as used by {@link sajari.engine.store.record.Store#get}.
                     * @param error Error, if any
                     * @param [response] GetResponse
                     */
                    type GetCallback = (error: (Error|null), response?: sajari.engine.store.record.GetResponse) => void;

                    /**
                     * Callback as used by {@link sajari.engine.store.record.Store#delete_}.
                     * @param error Error, if any
                     * @param [response] DeleteResponse
                     */
                    type DeleteCallback = (error: (Error|null), response?: sajari.engine.store.record.DeleteResponse) => void;

                    /**
                     * Callback as used by {@link sajari.engine.store.record.Store#mutate}.
                     * @param error Error, if any
                     * @param [response] MutateResponse
                     */
                    type MutateCallback = (error: (Error|null), response?: sajari.engine.store.record.MutateResponse) => void;

                    /**
                     * Callback as used by {@link sajari.engine.store.record.Store#exists}.
                     * @param error Error, if any
                     * @param [response] ExistsResponse
                     */
                    type ExistsCallback = (error: (Error|null), response?: sajari.engine.store.record.ExistsResponse) => void;
                }

                /** Properties of an ExistsResponse. */
                interface IExistsResponse {

                    /** ExistsResponse status */
                    status?: (sajari.rpc.IStatus[]|null);
                }

                /** Represents an ExistsResponse. */
                class ExistsResponse implements IExistsResponse {

                    /**
                     * Constructs a new ExistsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.store.record.IExistsResponse);

                    /** ExistsResponse status. */
                    public status: sajari.rpc.IStatus[];

                    /**
                     * Creates a new ExistsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExistsResponse instance
                     */
                    public static create(properties?: sajari.engine.store.record.IExistsResponse): sajari.engine.store.record.ExistsResponse;

                    /**
                     * Encodes the specified ExistsResponse message. Does not implicitly {@link sajari.engine.store.record.ExistsResponse.verify|verify} messages.
                     * @param message ExistsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.store.record.IExistsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExistsResponse message, length delimited. Does not implicitly {@link sajari.engine.store.record.ExistsResponse.verify|verify} messages.
                     * @param message ExistsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.store.record.IExistsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExistsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExistsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.store.record.ExistsResponse;

                    /**
                     * Decodes an ExistsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExistsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.store.record.ExistsResponse;

                    /**
                     * Verifies an ExistsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExistsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExistsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.store.record.ExistsResponse;

                    /**
                     * Creates a plain object from an ExistsResponse message. Also converts values to other types if specified.
                     * @param message ExistsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.store.record.ExistsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExistsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Represents a Score */
                class Score extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Score service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Score service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Score;

                    /**
                     * Calls Set.
                     * @param request SetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SetResponse
                     */
                    public set(request: sajari.engine.store.record.ISetRequest, callback: sajari.engine.store.record.Score.SetCallback): void;

                    /**
                     * Calls Set.
                     * @param request SetRequest message or plain object
                     * @returns Promise
                     */
                    public set(request: sajari.engine.store.record.ISetRequest): Promise<sajari.engine.store.record.SetResponse>;

                    /**
                     * Calls Increment.
                     * @param request IncrementRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and IncrementResponse
                     */
                    public increment(request: sajari.engine.store.record.IIncrementRequest, callback: sajari.engine.store.record.Score.IncrementCallback): void;

                    /**
                     * Calls Increment.
                     * @param request IncrementRequest message or plain object
                     * @returns Promise
                     */
                    public increment(request: sajari.engine.store.record.IIncrementRequest): Promise<sajari.engine.store.record.IncrementResponse>;
                }

                namespace Score {

                    /**
                     * Callback as used by {@link sajari.engine.store.record.Score#set}.
                     * @param error Error, if any
                     * @param [response] SetResponse
                     */
                    type SetCallback = (error: (Error|null), response?: sajari.engine.store.record.SetResponse) => void;

                    /**
                     * Callback as used by {@link sajari.engine.store.record.Score#increment}.
                     * @param error Error, if any
                     * @param [response] IncrementResponse
                     */
                    type IncrementCallback = (error: (Error|null), response?: sajari.engine.store.record.IncrementResponse) => void;
                }

                /** Properties of a Transform. */
                interface ITransform {

                    /** Transform identifier */
                    identifier?: (string|null);
                }

                /** Represents a Transform. */
                class Transform implements ITransform {

                    /**
                     * Constructs a new Transform.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.store.record.ITransform);

                    /** Transform identifier. */
                    public identifier: string;

                    /**
                     * Creates a new Transform instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Transform instance
                     */
                    public static create(properties?: sajari.engine.store.record.ITransform): sajari.engine.store.record.Transform;

                    /**
                     * Encodes the specified Transform message. Does not implicitly {@link sajari.engine.store.record.Transform.verify|verify} messages.
                     * @param message Transform message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.store.record.ITransform, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Transform message, length delimited. Does not implicitly {@link sajari.engine.store.record.Transform.verify|verify} messages.
                     * @param message Transform message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.store.record.ITransform, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Transform message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Transform
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.store.record.Transform;

                    /**
                     * Decodes a Transform message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Transform
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.store.record.Transform;

                    /**
                     * Verifies a Transform message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Transform message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Transform
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.store.record.Transform;

                    /**
                     * Creates a plain object from a Transform message. Also converts values to other types if specified.
                     * @param message Transform
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.store.record.Transform, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Transform to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Record. */
                interface IRecord {

                    /** Record values */
                    values?: ({ [k: string]: sajari.engine.IValue }|null);
                }

                /** Represents a Record. */
                class Record implements IRecord {

                    /**
                     * Constructs a new Record.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.store.record.IRecord);

                    /** Record values. */
                    public values: { [k: string]: sajari.engine.IValue };

                    /**
                     * Creates a new Record instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Record instance
                     */
                    public static create(properties?: sajari.engine.store.record.IRecord): sajari.engine.store.record.Record;

                    /**
                     * Encodes the specified Record message. Does not implicitly {@link sajari.engine.store.record.Record.verify|verify} messages.
                     * @param message Record message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.store.record.IRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Record message, length delimited. Does not implicitly {@link sajari.engine.store.record.Record.verify|verify} messages.
                     * @param message Record message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.store.record.IRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Record message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Record
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.store.record.Record;

                    /**
                     * Decodes a Record message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Record
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.store.record.Record;

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
                    public static fromObject(object: { [k: string]: any }): sajari.engine.store.record.Record;

                    /**
                     * Creates a plain object from a Record message. Also converts values to other types if specified.
                     * @param message Record
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.store.record.Record, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Record to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Records. */
                interface IRecords {

                    /** Records records */
                    records?: (sajari.engine.store.record.IRecord[]|null);

                    /** Records transforms */
                    transforms?: (sajari.engine.store.record.ITransform[]|null);
                }

                /** Represents a Records. */
                class Records implements IRecords {

                    /**
                     * Constructs a new Records.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.store.record.IRecords);

                    /** Records records. */
                    public records: sajari.engine.store.record.IRecord[];

                    /** Records transforms. */
                    public transforms: sajari.engine.store.record.ITransform[];

                    /**
                     * Creates a new Records instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Records instance
                     */
                    public static create(properties?: sajari.engine.store.record.IRecords): sajari.engine.store.record.Records;

                    /**
                     * Encodes the specified Records message. Does not implicitly {@link sajari.engine.store.record.Records.verify|verify} messages.
                     * @param message Records message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.store.record.IRecords, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Records message, length delimited. Does not implicitly {@link sajari.engine.store.record.Records.verify|verify} messages.
                     * @param message Records message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.store.record.IRecords, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Records message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Records
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.store.record.Records;

                    /**
                     * Decodes a Records message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Records
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.store.record.Records;

                    /**
                     * Verifies a Records message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Records message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Records
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.store.record.Records;

                    /**
                     * Creates a plain object from a Records message. Also converts values to other types if specified.
                     * @param message Records
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.store.record.Records, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Records to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AddResponse. */
                interface IAddResponse {

                    /** AddResponse keys */
                    keys?: (sajari.engine.IKey[]|null);

                    /** AddResponse status */
                    status?: (sajari.rpc.IStatus[]|null);
                }

                /** Represents an AddResponse. */
                class AddResponse implements IAddResponse {

                    /**
                     * Constructs a new AddResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.store.record.IAddResponse);

                    /** AddResponse keys. */
                    public keys: sajari.engine.IKey[];

                    /** AddResponse status. */
                    public status: sajari.rpc.IStatus[];

                    /**
                     * Creates a new AddResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AddResponse instance
                     */
                    public static create(properties?: sajari.engine.store.record.IAddResponse): sajari.engine.store.record.AddResponse;

                    /**
                     * Encodes the specified AddResponse message. Does not implicitly {@link sajari.engine.store.record.AddResponse.verify|verify} messages.
                     * @param message AddResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.store.record.IAddResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AddResponse message, length delimited. Does not implicitly {@link sajari.engine.store.record.AddResponse.verify|verify} messages.
                     * @param message AddResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.store.record.IAddResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AddResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AddResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.store.record.AddResponse;

                    /**
                     * Decodes an AddResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AddResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.store.record.AddResponse;

                    /**
                     * Verifies an AddResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AddResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AddResponse
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.store.record.AddResponse;

                    /**
                     * Creates a plain object from an AddResponse message. Also converts values to other types if specified.
                     * @param message AddResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.store.record.AddResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AddResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetResponse. */
                interface IGetResponse {

                    /** GetResponse records */
                    records?: (sajari.engine.store.record.IRecord[]|null);

                    /** GetResponse status */
                    status?: (sajari.rpc.IStatus[]|null);
                }

                /** Represents a GetResponse. */
                class GetResponse implements IGetResponse {

                    /**
                     * Constructs a new GetResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.store.record.IGetResponse);

                    /** GetResponse records. */
                    public records: sajari.engine.store.record.IRecord[];

                    /** GetResponse status. */
                    public status: sajari.rpc.IStatus[];

                    /**
                     * Creates a new GetResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetResponse instance
                     */
                    public static create(properties?: sajari.engine.store.record.IGetResponse): sajari.engine.store.record.GetResponse;

                    /**
                     * Encodes the specified GetResponse message. Does not implicitly {@link sajari.engine.store.record.GetResponse.verify|verify} messages.
                     * @param message GetResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.store.record.IGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetResponse message, length delimited. Does not implicitly {@link sajari.engine.store.record.GetResponse.verify|verify} messages.
                     * @param message GetResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.store.record.IGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.store.record.GetResponse;

                    /**
                     * Decodes a GetResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.store.record.GetResponse;

                    /**
                     * Verifies a GetResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetResponse
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.store.record.GetResponse;

                    /**
                     * Creates a plain object from a GetResponse message. Also converts values to other types if specified.
                     * @param message GetResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.store.record.GetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteResponse. */
                interface IDeleteResponse {

                    /** DeleteResponse status */
                    status?: (sajari.rpc.IStatus[]|null);
                }

                /** Represents a DeleteResponse. */
                class DeleteResponse implements IDeleteResponse {

                    /**
                     * Constructs a new DeleteResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.store.record.IDeleteResponse);

                    /** DeleteResponse status. */
                    public status: sajari.rpc.IStatus[];

                    /**
                     * Creates a new DeleteResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteResponse instance
                     */
                    public static create(properties?: sajari.engine.store.record.IDeleteResponse): sajari.engine.store.record.DeleteResponse;

                    /**
                     * Encodes the specified DeleteResponse message. Does not implicitly {@link sajari.engine.store.record.DeleteResponse.verify|verify} messages.
                     * @param message DeleteResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.store.record.IDeleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteResponse message, length delimited. Does not implicitly {@link sajari.engine.store.record.DeleteResponse.verify|verify} messages.
                     * @param message DeleteResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.store.record.IDeleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.store.record.DeleteResponse;

                    /**
                     * Decodes a DeleteResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.store.record.DeleteResponse;

                    /**
                     * Verifies a DeleteResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteResponse
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.store.record.DeleteResponse;

                    /**
                     * Creates a plain object from a DeleteResponse message. Also converts values to other types if specified.
                     * @param message DeleteResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.store.record.DeleteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Keys. */
                interface IKeys {

                    /** Keys keys */
                    keys?: (sajari.engine.IKey[]|null);
                }

                /** Represents a Keys. */
                class Keys implements IKeys {

                    /**
                     * Constructs a new Keys.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.store.record.IKeys);

                    /** Keys keys. */
                    public keys: sajari.engine.IKey[];

                    /**
                     * Creates a new Keys instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Keys instance
                     */
                    public static create(properties?: sajari.engine.store.record.IKeys): sajari.engine.store.record.Keys;

                    /**
                     * Encodes the specified Keys message. Does not implicitly {@link sajari.engine.store.record.Keys.verify|verify} messages.
                     * @param message Keys message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.store.record.IKeys, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Keys message, length delimited. Does not implicitly {@link sajari.engine.store.record.Keys.verify|verify} messages.
                     * @param message Keys message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.store.record.IKeys, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Keys message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Keys
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.store.record.Keys;

                    /**
                     * Decodes a Keys message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Keys
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.store.record.Keys;

                    /**
                     * Verifies a Keys message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Keys message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Keys
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.store.record.Keys;

                    /**
                     * Creates a plain object from a Keys message. Also converts values to other types if specified.
                     * @param message Keys
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.store.record.Keys, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Keys to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MutateRequest. */
                interface IMutateRequest {

                    /** MutateRequest recordMutations */
                    recordMutations?: (sajari.engine.store.record.MutateRequest.IRecordMutation[]|null);
                }

                /** Represents a MutateRequest. */
                class MutateRequest implements IMutateRequest {

                    /**
                     * Constructs a new MutateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.store.record.IMutateRequest);

                    /** MutateRequest recordMutations. */
                    public recordMutations: sajari.engine.store.record.MutateRequest.IRecordMutation[];

                    /**
                     * Creates a new MutateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MutateRequest instance
                     */
                    public static create(properties?: sajari.engine.store.record.IMutateRequest): sajari.engine.store.record.MutateRequest;

                    /**
                     * Encodes the specified MutateRequest message. Does not implicitly {@link sajari.engine.store.record.MutateRequest.verify|verify} messages.
                     * @param message MutateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.store.record.IMutateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MutateRequest message, length delimited. Does not implicitly {@link sajari.engine.store.record.MutateRequest.verify|verify} messages.
                     * @param message MutateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.store.record.IMutateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MutateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MutateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.store.record.MutateRequest;

                    /**
                     * Decodes a MutateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MutateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.store.record.MutateRequest;

                    /**
                     * Verifies a MutateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MutateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MutateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.store.record.MutateRequest;

                    /**
                     * Creates a plain object from a MutateRequest message. Also converts values to other types if specified.
                     * @param message MutateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.store.record.MutateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MutateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace MutateRequest {

                    /** Properties of a RecordMutation. */
                    interface IRecordMutation {

                        /** RecordMutation key */
                        key?: (sajari.engine.IKey|null);

                        /** RecordMutation fieldMutations */
                        fieldMutations?: (sajari.engine.store.record.MutateRequest.RecordMutation.IFieldMutation[]|null);
                    }

                    /** Represents a RecordMutation. */
                    class RecordMutation implements IRecordMutation {

                        /**
                         * Constructs a new RecordMutation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: sajari.engine.store.record.MutateRequest.IRecordMutation);

                        /** RecordMutation key. */
                        public key?: (sajari.engine.IKey|null);

                        /** RecordMutation fieldMutations. */
                        public fieldMutations: sajari.engine.store.record.MutateRequest.RecordMutation.IFieldMutation[];

                        /**
                         * Creates a new RecordMutation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RecordMutation instance
                         */
                        public static create(properties?: sajari.engine.store.record.MutateRequest.IRecordMutation): sajari.engine.store.record.MutateRequest.RecordMutation;

                        /**
                         * Encodes the specified RecordMutation message. Does not implicitly {@link sajari.engine.store.record.MutateRequest.RecordMutation.verify|verify} messages.
                         * @param message RecordMutation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: sajari.engine.store.record.MutateRequest.IRecordMutation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RecordMutation message, length delimited. Does not implicitly {@link sajari.engine.store.record.MutateRequest.RecordMutation.verify|verify} messages.
                         * @param message RecordMutation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: sajari.engine.store.record.MutateRequest.IRecordMutation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RecordMutation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RecordMutation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.store.record.MutateRequest.RecordMutation;

                        /**
                         * Decodes a RecordMutation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RecordMutation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.store.record.MutateRequest.RecordMutation;

                        /**
                         * Verifies a RecordMutation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RecordMutation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RecordMutation
                         */
                        public static fromObject(object: { [k: string]: any }): sajari.engine.store.record.MutateRequest.RecordMutation;

                        /**
                         * Creates a plain object from a RecordMutation message. Also converts values to other types if specified.
                         * @param message RecordMutation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: sajari.engine.store.record.MutateRequest.RecordMutation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RecordMutation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace RecordMutation {

                        /** Properties of a FieldMutation. */
                        interface IFieldMutation {

                            /** FieldMutation field */
                            field?: (string|null);

                            /** FieldMutation set */
                            set?: (sajari.engine.IValue|null);

                            /** FieldMutation increment */
                            increment?: (sajari.engine.IValue|null);

                            /** FieldMutation append */
                            append?: (sajari.engine.IValue|null);
                        }

                        /** Represents a FieldMutation. */
                        class FieldMutation implements IFieldMutation {

                            /**
                             * Constructs a new FieldMutation.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: sajari.engine.store.record.MutateRequest.RecordMutation.IFieldMutation);

                            /** FieldMutation field. */
                            public field: string;

                            /** FieldMutation set. */
                            public set?: (sajari.engine.IValue|null);

                            /** FieldMutation increment. */
                            public increment?: (sajari.engine.IValue|null);

                            /** FieldMutation append. */
                            public append?: (sajari.engine.IValue|null);

                            /** FieldMutation mutation. */
                            public mutation?: ("set"|"increment"|"append");

                            /**
                             * Creates a new FieldMutation instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns FieldMutation instance
                             */
                            public static create(properties?: sajari.engine.store.record.MutateRequest.RecordMutation.IFieldMutation): sajari.engine.store.record.MutateRequest.RecordMutation.FieldMutation;

                            /**
                             * Encodes the specified FieldMutation message. Does not implicitly {@link sajari.engine.store.record.MutateRequest.RecordMutation.FieldMutation.verify|verify} messages.
                             * @param message FieldMutation message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: sajari.engine.store.record.MutateRequest.RecordMutation.IFieldMutation, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified FieldMutation message, length delimited. Does not implicitly {@link sajari.engine.store.record.MutateRequest.RecordMutation.FieldMutation.verify|verify} messages.
                             * @param message FieldMutation message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: sajari.engine.store.record.MutateRequest.RecordMutation.IFieldMutation, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a FieldMutation message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns FieldMutation
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.store.record.MutateRequest.RecordMutation.FieldMutation;

                            /**
                             * Decodes a FieldMutation message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns FieldMutation
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.store.record.MutateRequest.RecordMutation.FieldMutation;

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
                            public static fromObject(object: { [k: string]: any }): sajari.engine.store.record.MutateRequest.RecordMutation.FieldMutation;

                            /**
                             * Creates a plain object from a FieldMutation message. Also converts values to other types if specified.
                             * @param message FieldMutation
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: sajari.engine.store.record.MutateRequest.RecordMutation.FieldMutation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this FieldMutation to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }
                }

                /** Properties of a MutateResponse. */
                interface IMutateResponse {

                    /** MutateResponse status */
                    status?: (sajari.rpc.IStatus[]|null);
                }

                /** Represents a MutateResponse. */
                class MutateResponse implements IMutateResponse {

                    /**
                     * Constructs a new MutateResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.store.record.IMutateResponse);

                    /** MutateResponse status. */
                    public status: sajari.rpc.IStatus[];

                    /**
                     * Creates a new MutateResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MutateResponse instance
                     */
                    public static create(properties?: sajari.engine.store.record.IMutateResponse): sajari.engine.store.record.MutateResponse;

                    /**
                     * Encodes the specified MutateResponse message. Does not implicitly {@link sajari.engine.store.record.MutateResponse.verify|verify} messages.
                     * @param message MutateResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.store.record.IMutateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MutateResponse message, length delimited. Does not implicitly {@link sajari.engine.store.record.MutateResponse.verify|verify} messages.
                     * @param message MutateResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.store.record.IMutateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MutateResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MutateResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.store.record.MutateResponse;

                    /**
                     * Decodes a MutateResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MutateResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.store.record.MutateResponse;

                    /**
                     * Verifies a MutateResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MutateResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MutateResponse
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.store.record.MutateResponse;

                    /**
                     * Creates a plain object from a MutateResponse message. Also converts values to other types if specified.
                     * @param message MutateResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.store.record.MutateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MutateResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SetRequest. */
                interface ISetRequest {

                    /** SetRequest keysScores */
                    keysScores?: (sajari.engine.store.record.IKeyScores[]|null);
                }

                /** Represents a SetRequest. */
                class SetRequest implements ISetRequest {

                    /**
                     * Constructs a new SetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.store.record.ISetRequest);

                    /** SetRequest keysScores. */
                    public keysScores: sajari.engine.store.record.IKeyScores[];

                    /**
                     * Creates a new SetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SetRequest instance
                     */
                    public static create(properties?: sajari.engine.store.record.ISetRequest): sajari.engine.store.record.SetRequest;

                    /**
                     * Encodes the specified SetRequest message. Does not implicitly {@link sajari.engine.store.record.SetRequest.verify|verify} messages.
                     * @param message SetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.store.record.ISetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SetRequest message, length delimited. Does not implicitly {@link sajari.engine.store.record.SetRequest.verify|verify} messages.
                     * @param message SetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.store.record.ISetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.store.record.SetRequest;

                    /**
                     * Decodes a SetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.store.record.SetRequest;

                    /**
                     * Verifies a SetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.store.record.SetRequest;

                    /**
                     * Creates a plain object from a SetRequest message. Also converts values to other types if specified.
                     * @param message SetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.store.record.SetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SetResponse. */
                interface ISetResponse {

                    /** SetResponse status */
                    status?: (sajari.rpc.IStatus[]|null);
                }

                /** Represents a SetResponse. */
                class SetResponse implements ISetResponse {

                    /**
                     * Constructs a new SetResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.store.record.ISetResponse);

                    /** SetResponse status. */
                    public status: sajari.rpc.IStatus[];

                    /**
                     * Creates a new SetResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SetResponse instance
                     */
                    public static create(properties?: sajari.engine.store.record.ISetResponse): sajari.engine.store.record.SetResponse;

                    /**
                     * Encodes the specified SetResponse message. Does not implicitly {@link sajari.engine.store.record.SetResponse.verify|verify} messages.
                     * @param message SetResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.store.record.ISetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SetResponse message, length delimited. Does not implicitly {@link sajari.engine.store.record.SetResponse.verify|verify} messages.
                     * @param message SetResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.store.record.ISetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SetResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SetResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.store.record.SetResponse;

                    /**
                     * Decodes a SetResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SetResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.store.record.SetResponse;

                    /**
                     * Verifies a SetResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SetResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SetResponse
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.store.record.SetResponse;

                    /**
                     * Creates a plain object from a SetResponse message. Also converts values to other types if specified.
                     * @param message SetResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.store.record.SetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SetResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an IncrementRequest. */
                interface IIncrementRequest {

                    /** IncrementRequest keysScores */
                    keysScores?: (sajari.engine.store.record.IKeyScores[]|null);
                }

                /** Represents an IncrementRequest. */
                class IncrementRequest implements IIncrementRequest {

                    /**
                     * Constructs a new IncrementRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.store.record.IIncrementRequest);

                    /** IncrementRequest keysScores. */
                    public keysScores: sajari.engine.store.record.IKeyScores[];

                    /**
                     * Creates a new IncrementRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IncrementRequest instance
                     */
                    public static create(properties?: sajari.engine.store.record.IIncrementRequest): sajari.engine.store.record.IncrementRequest;

                    /**
                     * Encodes the specified IncrementRequest message. Does not implicitly {@link sajari.engine.store.record.IncrementRequest.verify|verify} messages.
                     * @param message IncrementRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.store.record.IIncrementRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IncrementRequest message, length delimited. Does not implicitly {@link sajari.engine.store.record.IncrementRequest.verify|verify} messages.
                     * @param message IncrementRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.store.record.IIncrementRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IncrementRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IncrementRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.store.record.IncrementRequest;

                    /**
                     * Decodes an IncrementRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IncrementRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.store.record.IncrementRequest;

                    /**
                     * Verifies an IncrementRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IncrementRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IncrementRequest
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.store.record.IncrementRequest;

                    /**
                     * Creates a plain object from an IncrementRequest message. Also converts values to other types if specified.
                     * @param message IncrementRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.store.record.IncrementRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IncrementRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an IncrementResponse. */
                interface IIncrementResponse {

                    /** IncrementResponse status */
                    status?: (sajari.rpc.IStatus[]|null);
                }

                /** Represents an IncrementResponse. */
                class IncrementResponse implements IIncrementResponse {

                    /**
                     * Constructs a new IncrementResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.store.record.IIncrementResponse);

                    /** IncrementResponse status. */
                    public status: sajari.rpc.IStatus[];

                    /**
                     * Creates a new IncrementResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IncrementResponse instance
                     */
                    public static create(properties?: sajari.engine.store.record.IIncrementResponse): sajari.engine.store.record.IncrementResponse;

                    /**
                     * Encodes the specified IncrementResponse message. Does not implicitly {@link sajari.engine.store.record.IncrementResponse.verify|verify} messages.
                     * @param message IncrementResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.store.record.IIncrementResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IncrementResponse message, length delimited. Does not implicitly {@link sajari.engine.store.record.IncrementResponse.verify|verify} messages.
                     * @param message IncrementResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.store.record.IIncrementResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IncrementResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IncrementResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.store.record.IncrementResponse;

                    /**
                     * Decodes an IncrementResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IncrementResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.store.record.IncrementResponse;

                    /**
                     * Verifies an IncrementResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IncrementResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IncrementResponse
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.store.record.IncrementResponse;

                    /**
                     * Creates a plain object from an IncrementResponse message. Also converts values to other types if specified.
                     * @param message IncrementResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.store.record.IncrementResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IncrementResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a KeyScores. */
                interface IKeyScores {

                    /** KeyScores key */
                    key?: (sajari.engine.IKey|null);

                    /** KeyScores scores */
                    scores?: (sajari.engine.store.record.KeyScores.IScore[]|null);
                }

                /** Represents a KeyScores. */
                class KeyScores implements IKeyScores {

                    /**
                     * Constructs a new KeyScores.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.store.record.IKeyScores);

                    /** KeyScores key. */
                    public key?: (sajari.engine.IKey|null);

                    /** KeyScores scores. */
                    public scores: sajari.engine.store.record.KeyScores.IScore[];

                    /**
                     * Creates a new KeyScores instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns KeyScores instance
                     */
                    public static create(properties?: sajari.engine.store.record.IKeyScores): sajari.engine.store.record.KeyScores;

                    /**
                     * Encodes the specified KeyScores message. Does not implicitly {@link sajari.engine.store.record.KeyScores.verify|verify} messages.
                     * @param message KeyScores message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.store.record.IKeyScores, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified KeyScores message, length delimited. Does not implicitly {@link sajari.engine.store.record.KeyScores.verify|verify} messages.
                     * @param message KeyScores message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.store.record.IKeyScores, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a KeyScores message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns KeyScores
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.store.record.KeyScores;

                    /**
                     * Decodes a KeyScores message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns KeyScores
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.store.record.KeyScores;

                    /**
                     * Verifies a KeyScores message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a KeyScores message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns KeyScores
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.store.record.KeyScores;

                    /**
                     * Creates a plain object from a KeyScores message. Also converts values to other types if specified.
                     * @param message KeyScores
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.store.record.KeyScores, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this KeyScores to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace KeyScores {

                    /** Properties of a Score. */
                    interface IScore {

                        /** Score terms */
                        terms?: (string[]|null);

                        /** Score count */
                        count?: (number|null);

                        /** Score score */
                        score?: (number|null);
                    }

                    /** Represents a Score. */
                    class Score implements IScore {

                        /**
                         * Constructs a new Score.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: sajari.engine.store.record.KeyScores.IScore);

                        /** Score terms. */
                        public terms: string[];

                        /** Score count. */
                        public count: number;

                        /** Score score. */
                        public score: number;

                        /**
                         * Creates a new Score instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Score instance
                         */
                        public static create(properties?: sajari.engine.store.record.KeyScores.IScore): sajari.engine.store.record.KeyScores.Score;

                        /**
                         * Encodes the specified Score message. Does not implicitly {@link sajari.engine.store.record.KeyScores.Score.verify|verify} messages.
                         * @param message Score message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: sajari.engine.store.record.KeyScores.IScore, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Score message, length delimited. Does not implicitly {@link sajari.engine.store.record.KeyScores.Score.verify|verify} messages.
                         * @param message Score message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: sajari.engine.store.record.KeyScores.IScore, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Score message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Score
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.store.record.KeyScores.Score;

                        /**
                         * Decodes a Score message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Score
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.store.record.KeyScores.Score;

                        /**
                         * Verifies a Score message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Score message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Score
                         */
                        public static fromObject(object: { [k: string]: any }): sajari.engine.store.record.KeyScores.Score;

                        /**
                         * Creates a plain object from a Score message. Also converts values to other types if specified.
                         * @param message Score
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: sajari.engine.store.record.KeyScores.Score, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Score to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }

            /** Namespace term. */
            namespace term {

                /** Represents a Term */
                class Term extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Term service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Term service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Term;

                    /**
                     * Calls Get.
                     * @param request Values message or plain object
                     * @param callback Node-style callback called with the error, if any, and Infos
                     */
                    public get(request: sajari.engine.store.term.IValues, callback: sajari.engine.store.term.Term.GetCallback): void;

                    /**
                     * Calls Get.
                     * @param request Values message or plain object
                     * @returns Promise
                     */
                    public get(request: sajari.engine.store.term.IValues): Promise<sajari.engine.store.term.Infos>;
                }

                namespace Term {

                    /**
                     * Callback as used by {@link sajari.engine.store.term.Term#get}.
                     * @param error Error, if any
                     * @param [response] Infos
                     */
                    type GetCallback = (error: (Error|null), response?: sajari.engine.store.term.Infos) => void;
                }

                /** Properties of a Values. */
                interface IValues {

                    /** Values values */
                    values?: (string[]|null);
                }

                /** Represents a Values. */
                class Values implements IValues {

                    /**
                     * Constructs a new Values.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.store.term.IValues);

                    /** Values values. */
                    public values: string[];

                    /**
                     * Creates a new Values instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Values instance
                     */
                    public static create(properties?: sajari.engine.store.term.IValues): sajari.engine.store.term.Values;

                    /**
                     * Encodes the specified Values message. Does not implicitly {@link sajari.engine.store.term.Values.verify|verify} messages.
                     * @param message Values message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.store.term.IValues, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Values message, length delimited. Does not implicitly {@link sajari.engine.store.term.Values.verify|verify} messages.
                     * @param message Values message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.store.term.IValues, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Values message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Values
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.store.term.Values;

                    /**
                     * Decodes a Values message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Values
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.store.term.Values;

                    /**
                     * Verifies a Values message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Values message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Values
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.store.term.Values;

                    /**
                     * Creates a plain object from a Values message. Also converts values to other types if specified.
                     * @param message Values
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.store.term.Values, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Values to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Infos. */
                interface IInfos {

                    /** Infos infos */
                    infos?: (sajari.engine.store.term.Infos.IInfo[]|null);
                }

                /** Represents an Infos. */
                class Infos implements IInfos {

                    /**
                     * Constructs a new Infos.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.store.term.IInfos);

                    /** Infos infos. */
                    public infos: sajari.engine.store.term.Infos.IInfo[];

                    /**
                     * Creates a new Infos instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Infos instance
                     */
                    public static create(properties?: sajari.engine.store.term.IInfos): sajari.engine.store.term.Infos;

                    /**
                     * Encodes the specified Infos message. Does not implicitly {@link sajari.engine.store.term.Infos.verify|verify} messages.
                     * @param message Infos message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.store.term.IInfos, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Infos message, length delimited. Does not implicitly {@link sajari.engine.store.term.Infos.verify|verify} messages.
                     * @param message Infos message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.store.term.IInfos, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Infos message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Infos
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.store.term.Infos;

                    /**
                     * Decodes an Infos message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Infos
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.store.term.Infos;

                    /**
                     * Verifies an Infos message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Infos message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Infos
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.store.term.Infos;

                    /**
                     * Creates a plain object from an Infos message. Also converts values to other types if specified.
                     * @param message Infos
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.store.term.Infos, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Infos to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Infos {

                    /** Properties of an Info. */
                    interface IInfo {

                        /** Info id */
                        id?: (number|null);

                        /** Info value */
                        value?: (string|null);

                        /** Info numDocs */
                        numDocs?: (number|null);

                        /** Info numWords */
                        numWords?: (number|null);

                        /** Info hardcoded */
                        hardcoded?: (number|null);

                        /** Info infogain */
                        infogain?: (number|null);

                        /** Info pos */
                        pos?: (number|null);

                        /** Info neg */
                        neg?: (number|null);
                    }

                    /** Represents an Info. */
                    class Info implements IInfo {

                        /**
                         * Constructs a new Info.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: sajari.engine.store.term.Infos.IInfo);

                        /** Info id. */
                        public id: number;

                        /** Info value. */
                        public value: string;

                        /** Info numDocs. */
                        public numDocs: number;

                        /** Info numWords. */
                        public numWords: number;

                        /** Info hardcoded. */
                        public hardcoded: number;

                        /** Info infogain. */
                        public infogain: number;

                        /** Info pos. */
                        public pos: number;

                        /** Info neg. */
                        public neg: number;

                        /**
                         * Creates a new Info instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Info instance
                         */
                        public static create(properties?: sajari.engine.store.term.Infos.IInfo): sajari.engine.store.term.Infos.Info;

                        /**
                         * Encodes the specified Info message. Does not implicitly {@link sajari.engine.store.term.Infos.Info.verify|verify} messages.
                         * @param message Info message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: sajari.engine.store.term.Infos.IInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Info message, length delimited. Does not implicitly {@link sajari.engine.store.term.Infos.Info.verify|verify} messages.
                         * @param message Info message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: sajari.engine.store.term.Infos.IInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Info message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Info
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.store.term.Infos.Info;

                        /**
                         * Decodes an Info message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Info
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.store.term.Infos.Info;

                        /**
                         * Verifies an Info message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Info message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Info
                         */
                        public static fromObject(object: { [k: string]: any }): sajari.engine.store.term.Infos.Info;

                        /**
                         * Creates a plain object from an Info message. Also converts values to other types if specified.
                         * @param message Info
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: sajari.engine.store.term.Infos.Info, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Info to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }
        }

        /** Properties of a Key. */
        interface IKey {

            /** Key field */
            field?: (string|null);

            /** Key value */
            value?: (sajari.engine.IValue|null);
        }

        /** Represents a Key. */
        class Key implements IKey {

            /**
             * Constructs a new Key.
             * @param [properties] Properties to set
             */
            constructor(properties?: sajari.engine.IKey);

            /** Key field. */
            public field: string;

            /** Key value. */
            public value?: (sajari.engine.IValue|null);

            /**
             * Creates a new Key instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Key instance
             */
            public static create(properties?: sajari.engine.IKey): sajari.engine.Key;

            /**
             * Encodes the specified Key message. Does not implicitly {@link sajari.engine.Key.verify|verify} messages.
             * @param message Key message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sajari.engine.IKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Key message, length delimited. Does not implicitly {@link sajari.engine.Key.verify|verify} messages.
             * @param message Key message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sajari.engine.IKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Key message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Key
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.Key;

            /**
             * Decodes a Key message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Key
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.Key;

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
            public static fromObject(object: { [k: string]: any }): sajari.engine.Key;

            /**
             * Creates a plain object from a Key message. Also converts values to other types if specified.
             * @param message Key
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sajari.engine.Key, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Key to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Namespace schema. */
        namespace schema {

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
                 * Calls GetFields.
                 * @param request Empty message or plain object
                 * @param callback Node-style callback called with the error, if any, and Fields
                 */
                public getFields(request: sajari.rpc.IEmpty, callback: sajari.engine.schema.Schema.GetFieldsCallback): void;

                /**
                 * Calls GetFields.
                 * @param request Empty message or plain object
                 * @returns Promise
                 */
                public getFields(request: sajari.rpc.IEmpty): Promise<sajari.engine.schema.Fields>;

                /**
                 * Calls AddFields.
                 * @param request Fields message or plain object
                 * @param callback Node-style callback called with the error, if any, and Response
                 */
                public addFields(request: sajari.engine.schema.IFields, callback: sajari.engine.schema.Schema.AddFieldsCallback): void;

                /**
                 * Calls AddFields.
                 * @param request Fields message or plain object
                 * @returns Promise
                 */
                public addFields(request: sajari.engine.schema.IFields): Promise<sajari.engine.schema.Response>;

                /**
                 * Calls MutateField.
                 * @param request MutateFieldRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Response
                 */
                public mutateField(request: sajari.engine.schema.IMutateFieldRequest, callback: sajari.engine.schema.Schema.MutateFieldCallback): void;

                /**
                 * Calls MutateField.
                 * @param request MutateFieldRequest message or plain object
                 * @returns Promise
                 */
                public mutateField(request: sajari.engine.schema.IMutateFieldRequest): Promise<sajari.engine.schema.Response>;
            }

            namespace Schema {

                /**
                 * Callback as used by {@link sajari.engine.schema.Schema#getFields}.
                 * @param error Error, if any
                 * @param [response] Fields
                 */
                type GetFieldsCallback = (error: (Error|null), response?: sajari.engine.schema.Fields) => void;

                /**
                 * Callback as used by {@link sajari.engine.schema.Schema#addFields}.
                 * @param error Error, if any
                 * @param [response] Response
                 */
                type AddFieldsCallback = (error: (Error|null), response?: sajari.engine.schema.Response) => void;

                /**
                 * Callback as used by {@link sajari.engine.schema.Schema#mutateField}.
                 * @param error Error, if any
                 * @param [response] Response
                 */
                type MutateFieldCallback = (error: (Error|null), response?: sajari.engine.schema.Response) => void;
            }

            /** Properties of a Fields. */
            interface IFields {

                /** Fields fields */
                fields?: (sajari.engine.schema.IField[]|null);
            }

            /** Represents a Fields. */
            class Fields implements IFields {

                /**
                 * Constructs a new Fields.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.engine.schema.IFields);

                /** Fields fields. */
                public fields: sajari.engine.schema.IField[];

                /**
                 * Creates a new Fields instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Fields instance
                 */
                public static create(properties?: sajari.engine.schema.IFields): sajari.engine.schema.Fields;

                /**
                 * Encodes the specified Fields message. Does not implicitly {@link sajari.engine.schema.Fields.verify|verify} messages.
                 * @param message Fields message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.engine.schema.IFields, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Fields message, length delimited. Does not implicitly {@link sajari.engine.schema.Fields.verify|verify} messages.
                 * @param message Fields message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.engine.schema.IFields, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Fields message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Fields
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.schema.Fields;

                /**
                 * Decodes a Fields message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Fields
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.schema.Fields;

                /**
                 * Verifies a Fields message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Fields message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Fields
                 */
                public static fromObject(object: { [k: string]: any }): sajari.engine.schema.Fields;

                /**
                 * Creates a plain object from a Fields message. Also converts values to other types if specified.
                 * @param message Fields
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.engine.schema.Fields, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Fields to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Field. */
            interface IField {

                /** Field id */
                id?: (number|null);

                /** Field name */
                name?: (string|null);

                /** Field description */
                description?: (string|null);

                /** Field type */
                type?: (sajari.engine.schema.Field.Type|null);

                /** Field repeated */
                repeated?: (boolean|null);

                /** Field required */
                required?: (boolean|null);

                /** Field store */
                store?: (boolean|null);

                /** Field indexed */
                indexed?: (boolean|null);

                /** Field unique */
                unique?: (boolean|null);
            }

            /** Represents a Field. */
            class Field implements IField {

                /**
                 * Constructs a new Field.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.engine.schema.IField);

                /** Field id. */
                public id: number;

                /** Field name. */
                public name: string;

                /** Field description. */
                public description: string;

                /** Field type. */
                public type: sajari.engine.schema.Field.Type;

                /** Field repeated. */
                public repeated: boolean;

                /** Field required. */
                public required: boolean;

                /** Field store. */
                public store: boolean;

                /** Field indexed. */
                public indexed: boolean;

                /** Field unique. */
                public unique: boolean;

                /**
                 * Creates a new Field instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Field instance
                 */
                public static create(properties?: sajari.engine.schema.IField): sajari.engine.schema.Field;

                /**
                 * Encodes the specified Field message. Does not implicitly {@link sajari.engine.schema.Field.verify|verify} messages.
                 * @param message Field message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.engine.schema.IField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Field message, length delimited. Does not implicitly {@link sajari.engine.schema.Field.verify|verify} messages.
                 * @param message Field message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.engine.schema.IField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Field message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Field
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.schema.Field;

                /**
                 * Decodes a Field message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Field
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.schema.Field;

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
                public static fromObject(object: { [k: string]: any }): sajari.engine.schema.Field;

                /**
                 * Creates a plain object from a Field message. Also converts values to other types if specified.
                 * @param message Field
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.engine.schema.Field, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    BOOLEAN = 3,
                    TIMESTAMP = 4
                }
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response status */
                status?: (sajari.rpc.IStatus[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.engine.schema.IResponse);

                /** Response status. */
                public status: sajari.rpc.IStatus[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: sajari.engine.schema.IResponse): sajari.engine.schema.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link sajari.engine.schema.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.engine.schema.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link sajari.engine.schema.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.engine.schema.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.schema.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.schema.Response;

                /**
                 * Verifies a Response message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Response message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Response
                 */
                public static fromObject(object: { [k: string]: any }): sajari.engine.schema.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.engine.schema.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MutateFieldRequest. */
            interface IMutateFieldRequest {

                /** MutateFieldRequest name */
                name?: (string|null);

                /** MutateFieldRequest mutations */
                mutations?: (sajari.engine.schema.MutateFieldRequest.IMutation[]|null);
            }

            /** Represents a MutateFieldRequest. */
            class MutateFieldRequest implements IMutateFieldRequest {

                /**
                 * Constructs a new MutateFieldRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sajari.engine.schema.IMutateFieldRequest);

                /** MutateFieldRequest name. */
                public name: string;

                /** MutateFieldRequest mutations. */
                public mutations: sajari.engine.schema.MutateFieldRequest.IMutation[];

                /**
                 * Creates a new MutateFieldRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MutateFieldRequest instance
                 */
                public static create(properties?: sajari.engine.schema.IMutateFieldRequest): sajari.engine.schema.MutateFieldRequest;

                /**
                 * Encodes the specified MutateFieldRequest message. Does not implicitly {@link sajari.engine.schema.MutateFieldRequest.verify|verify} messages.
                 * @param message MutateFieldRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sajari.engine.schema.IMutateFieldRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MutateFieldRequest message, length delimited. Does not implicitly {@link sajari.engine.schema.MutateFieldRequest.verify|verify} messages.
                 * @param message MutateFieldRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sajari.engine.schema.IMutateFieldRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MutateFieldRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MutateFieldRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.schema.MutateFieldRequest;

                /**
                 * Decodes a MutateFieldRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MutateFieldRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.schema.MutateFieldRequest;

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
                public static fromObject(object: { [k: string]: any }): sajari.engine.schema.MutateFieldRequest;

                /**
                 * Creates a plain object from a MutateFieldRequest message. Also converts values to other types if specified.
                 * @param message MutateFieldRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sajari.engine.schema.MutateFieldRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    type?: (sajari.engine.schema.Field.Type|null);

                    /** Mutation repeated */
                    repeated?: (boolean|null);

                    /** Mutation required */
                    required?: (boolean|null);

                    /** Mutation unique */
                    unique?: (boolean|null);

                    /** Mutation indexed */
                    indexed?: (boolean|null);
                }

                /** Represents a Mutation. */
                class Mutation implements IMutation {

                    /**
                     * Constructs a new Mutation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.schema.MutateFieldRequest.IMutation);

                    /** Mutation name. */
                    public name: string;

                    /** Mutation description. */
                    public description: string;

                    /** Mutation type. */
                    public type: sajari.engine.schema.Field.Type;

                    /** Mutation repeated. */
                    public repeated: boolean;

                    /** Mutation required. */
                    public required: boolean;

                    /** Mutation unique. */
                    public unique: boolean;

                    /** Mutation indexed. */
                    public indexed: boolean;

                    /** Mutation mutation. */
                    public mutation?: ("name"|"description"|"type"|"repeated"|"required"|"unique"|"indexed");

                    /**
                     * Creates a new Mutation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Mutation instance
                     */
                    public static create(properties?: sajari.engine.schema.MutateFieldRequest.IMutation): sajari.engine.schema.MutateFieldRequest.Mutation;

                    /**
                     * Encodes the specified Mutation message. Does not implicitly {@link sajari.engine.schema.MutateFieldRequest.Mutation.verify|verify} messages.
                     * @param message Mutation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.schema.MutateFieldRequest.IMutation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Mutation message, length delimited. Does not implicitly {@link sajari.engine.schema.MutateFieldRequest.Mutation.verify|verify} messages.
                     * @param message Mutation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.schema.MutateFieldRequest.IMutation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Mutation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Mutation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.schema.MutateFieldRequest.Mutation;

                    /**
                     * Decodes a Mutation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Mutation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.schema.MutateFieldRequest.Mutation;

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
                    public static fromObject(object: { [k: string]: any }): sajari.engine.schema.MutateFieldRequest.Mutation;

                    /**
                     * Creates a plain object from a Mutation message. Also converts values to other types if specified.
                     * @param message Mutation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.schema.MutateFieldRequest.Mutation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Mutation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }

        /** Namespace query. */
        namespace query {

            /** Namespace v1. */
            namespace v1 {

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
                    public search(request: sajari.engine.query.v1.ISearchRequest, callback: sajari.engine.query.v1.Query.SearchCallback): void;

                    /**
                     * Calls Search.
                     * @param request SearchRequest message or plain object
                     * @returns Promise
                     */
                    public search(request: sajari.engine.query.v1.ISearchRequest): Promise<sajari.engine.query.v1.SearchResponse>;

                    /**
                     * Calls Evaluate.
                     * @param request EvaluateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SearchResponse
                     */
                    public evaluate(request: sajari.engine.query.v1.IEvaluateRequest, callback: sajari.engine.query.v1.Query.EvaluateCallback): void;

                    /**
                     * Calls Evaluate.
                     * @param request EvaluateRequest message or plain object
                     * @returns Promise
                     */
                    public evaluate(request: sajari.engine.query.v1.IEvaluateRequest): Promise<sajari.engine.query.v1.SearchResponse>;

                    /**
                     * Calls Substitute.
                     * @param request SubstituteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SearchRequest
                     */
                    public substitute(request: sajari.engine.query.v1.ISubstituteRequest, callback: sajari.engine.query.v1.Query.SubstituteCallback): void;

                    /**
                     * Calls Substitute.
                     * @param request SubstituteRequest message or plain object
                     * @returns Promise
                     */
                    public substitute(request: sajari.engine.query.v1.ISubstituteRequest): Promise<sajari.engine.query.v1.SearchRequest>;

                    /**
                     * Calls Analyse.
                     * @param request AnalyseRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AnalyseResponse
                     */
                    public analyse(request: sajari.engine.query.v1.IAnalyseRequest, callback: sajari.engine.query.v1.Query.AnalyseCallback): void;

                    /**
                     * Calls Analyse.
                     * @param request AnalyseRequest message or plain object
                     * @returns Promise
                     */
                    public analyse(request: sajari.engine.query.v1.IAnalyseRequest): Promise<sajari.engine.query.v1.AnalyseResponse>;
                }

                namespace Query {

                    /**
                     * Callback as used by {@link sajari.engine.query.v1.Query#search}.
                     * @param error Error, if any
                     * @param [response] SearchResponse
                     */
                    type SearchCallback = (error: (Error|null), response?: sajari.engine.query.v1.SearchResponse) => void;

                    /**
                     * Callback as used by {@link sajari.engine.query.v1.Query#evaluate}.
                     * @param error Error, if any
                     * @param [response] SearchResponse
                     */
                    type EvaluateCallback = (error: (Error|null), response?: sajari.engine.query.v1.SearchResponse) => void;

                    /**
                     * Callback as used by {@link sajari.engine.query.v1.Query#substitute}.
                     * @param error Error, if any
                     * @param [response] SearchRequest
                     */
                    type SubstituteCallback = (error: (Error|null), response?: sajari.engine.query.v1.SearchRequest) => void;

                    /**
                     * Callback as used by {@link sajari.engine.query.v1.Query#analyse}.
                     * @param error Error, if any
                     * @param [response] AnalyseResponse
                     */
                    type AnalyseCallback = (error: (Error|null), response?: sajari.engine.query.v1.AnalyseResponse) => void;
                }

                /** Properties of a SearchRequest. */
                interface ISearchRequest {

                    /** SearchRequest filter */
                    filter?: (sajari.engine.query.v1.IFilter|null);

                    /** SearchRequest indexQuery */
                    indexQuery?: (sajari.engine.query.v1.SearchRequest.IIndexQuery|null);

                    /** SearchRequest featureQuery */
                    featureQuery?: (sajari.engine.query.v1.SearchRequest.IFeatureQuery|null);

                    /** SearchRequest minScoreThreshold */
                    minScoreThreshold?: (number|null);

                    /** SearchRequest offset */
                    offset?: (number|null);

                    /** SearchRequest limit */
                    limit?: (number|null);

                    /** SearchRequest fields */
                    fields?: (string[]|null);

                    /** SearchRequest sort */
                    sort?: (sajari.engine.query.v1.ISort[]|null);

                    /** SearchRequest aggregates */
                    aggregates?: ({ [k: string]: sajari.engine.query.v1.IAggregate }|null);

                    /** SearchRequest transforms */
                    transforms?: (sajari.engine.query.v1.ITransform[]|null);
                }

                /** Represents a SearchRequest. */
                class SearchRequest implements ISearchRequest {

                    /**
                     * Constructs a new SearchRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.query.v1.ISearchRequest);

                    /** SearchRequest filter. */
                    public filter?: (sajari.engine.query.v1.IFilter|null);

                    /** SearchRequest indexQuery. */
                    public indexQuery?: (sajari.engine.query.v1.SearchRequest.IIndexQuery|null);

                    /** SearchRequest featureQuery. */
                    public featureQuery?: (sajari.engine.query.v1.SearchRequest.IFeatureQuery|null);

                    /** SearchRequest minScoreThreshold. */
                    public minScoreThreshold: number;

                    /** SearchRequest offset. */
                    public offset: number;

                    /** SearchRequest limit. */
                    public limit: number;

                    /** SearchRequest fields. */
                    public fields: string[];

                    /** SearchRequest sort. */
                    public sort: sajari.engine.query.v1.ISort[];

                    /** SearchRequest aggregates. */
                    public aggregates: { [k: string]: sajari.engine.query.v1.IAggregate };

                    /** SearchRequest transforms. */
                    public transforms: sajari.engine.query.v1.ITransform[];

                    /**
                     * Creates a new SearchRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchRequest instance
                     */
                    public static create(properties?: sajari.engine.query.v1.ISearchRequest): sajari.engine.query.v1.SearchRequest;

                    /**
                     * Encodes the specified SearchRequest message. Does not implicitly {@link sajari.engine.query.v1.SearchRequest.verify|verify} messages.
                     * @param message SearchRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.query.v1.ISearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchRequest message, length delimited. Does not implicitly {@link sajari.engine.query.v1.SearchRequest.verify|verify} messages.
                     * @param message SearchRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.query.v1.ISearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.SearchRequest;

                    /**
                     * Decodes a SearchRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.SearchRequest;

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
                    public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.SearchRequest;

                    /**
                     * Creates a plain object from a SearchRequest message. Also converts values to other types if specified.
                     * @param message SearchRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.query.v1.SearchRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace SearchRequest {

                    /** Properties of an IndexQuery. */
                    interface IIndexQuery {

                        /** IndexQuery body */
                        body?: (sajari.engine.query.v1.IBody[]|null);

                        /** IndexQuery terms */
                        terms?: (sajari.engine.query.v1.ITerm[]|null);

                        /** IndexQuery instanceBoosts */
                        instanceBoosts?: (sajari.engine.query.v1.IInstanceBoost[]|null);

                        /** IndexQuery instanceScoreMode */
                        instanceScoreMode?: (sajari.engine.query.v1.SearchRequest.IndexQuery.InstanceScoreMode|null);

                        /** IndexQuery fieldBoosts */
                        fieldBoosts?: (sajari.engine.query.v1.SearchRequest.FeatureQuery.IFieldBoost[]|null);
                    }

                    /** Represents an IndexQuery. */
                    class IndexQuery implements IIndexQuery {

                        /**
                         * Constructs a new IndexQuery.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: sajari.engine.query.v1.SearchRequest.IIndexQuery);

                        /** IndexQuery body. */
                        public body: sajari.engine.query.v1.IBody[];

                        /** IndexQuery terms. */
                        public terms: sajari.engine.query.v1.ITerm[];

                        /** IndexQuery instanceBoosts. */
                        public instanceBoosts: sajari.engine.query.v1.IInstanceBoost[];

                        /** IndexQuery instanceScoreMode. */
                        public instanceScoreMode: sajari.engine.query.v1.SearchRequest.IndexQuery.InstanceScoreMode;

                        /** IndexQuery fieldBoosts. */
                        public fieldBoosts: sajari.engine.query.v1.SearchRequest.FeatureQuery.IFieldBoost[];

                        /**
                         * Creates a new IndexQuery instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IndexQuery instance
                         */
                        public static create(properties?: sajari.engine.query.v1.SearchRequest.IIndexQuery): sajari.engine.query.v1.SearchRequest.IndexQuery;

                        /**
                         * Encodes the specified IndexQuery message. Does not implicitly {@link sajari.engine.query.v1.SearchRequest.IndexQuery.verify|verify} messages.
                         * @param message IndexQuery message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: sajari.engine.query.v1.SearchRequest.IIndexQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IndexQuery message, length delimited. Does not implicitly {@link sajari.engine.query.v1.SearchRequest.IndexQuery.verify|verify} messages.
                         * @param message IndexQuery message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: sajari.engine.query.v1.SearchRequest.IIndexQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IndexQuery message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IndexQuery
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.SearchRequest.IndexQuery;

                        /**
                         * Decodes an IndexQuery message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IndexQuery
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.SearchRequest.IndexQuery;

                        /**
                         * Verifies an IndexQuery message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IndexQuery message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IndexQuery
                         */
                        public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.SearchRequest.IndexQuery;

                        /**
                         * Creates a plain object from an IndexQuery message. Also converts values to other types if specified.
                         * @param message IndexQuery
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: sajari.engine.query.v1.SearchRequest.IndexQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IndexQuery to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace IndexQuery {

                        /** InstanceScoreMode enum. */
                        enum InstanceScoreMode {
                            ABS = 0,
                            MAX = 1
                        }
                    }

                    /** Properties of a FeatureQuery. */
                    interface IFeatureQuery {

                        /** FeatureQuery fieldBoosts */
                        fieldBoosts?: (sajari.engine.query.v1.SearchRequest.FeatureQuery.IFieldBoost[]|null);
                    }

                    /** Represents a FeatureQuery. */
                    class FeatureQuery implements IFeatureQuery {

                        /**
                         * Constructs a new FeatureQuery.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: sajari.engine.query.v1.SearchRequest.IFeatureQuery);

                        /** FeatureQuery fieldBoosts. */
                        public fieldBoosts: sajari.engine.query.v1.SearchRequest.FeatureQuery.IFieldBoost[];

                        /**
                         * Creates a new FeatureQuery instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FeatureQuery instance
                         */
                        public static create(properties?: sajari.engine.query.v1.SearchRequest.IFeatureQuery): sajari.engine.query.v1.SearchRequest.FeatureQuery;

                        /**
                         * Encodes the specified FeatureQuery message. Does not implicitly {@link sajari.engine.query.v1.SearchRequest.FeatureQuery.verify|verify} messages.
                         * @param message FeatureQuery message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: sajari.engine.query.v1.SearchRequest.IFeatureQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FeatureQuery message, length delimited. Does not implicitly {@link sajari.engine.query.v1.SearchRequest.FeatureQuery.verify|verify} messages.
                         * @param message FeatureQuery message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: sajari.engine.query.v1.SearchRequest.IFeatureQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FeatureQuery message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FeatureQuery
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.SearchRequest.FeatureQuery;

                        /**
                         * Decodes a FeatureQuery message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FeatureQuery
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.SearchRequest.FeatureQuery;

                        /**
                         * Verifies a FeatureQuery message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FeatureQuery message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FeatureQuery
                         */
                        public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.SearchRequest.FeatureQuery;

                        /**
                         * Creates a plain object from a FeatureQuery message. Also converts values to other types if specified.
                         * @param message FeatureQuery
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: sajari.engine.query.v1.SearchRequest.FeatureQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FeatureQuery to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace FeatureQuery {

                        /** Properties of a FieldBoost. */
                        interface IFieldBoost {

                            /** FieldBoost fieldBoost */
                            fieldBoost?: (sajari.engine.query.v1.IFieldBoost|null);

                            /** FieldBoost value */
                            value?: (number|null);
                        }

                        /** Represents a FieldBoost. */
                        class FieldBoost implements IFieldBoost {

                            /**
                             * Constructs a new FieldBoost.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: sajari.engine.query.v1.SearchRequest.FeatureQuery.IFieldBoost);

                            /** FieldBoost fieldBoost. */
                            public fieldBoost?: (sajari.engine.query.v1.IFieldBoost|null);

                            /** FieldBoost value. */
                            public value: number;

                            /**
                             * Creates a new FieldBoost instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns FieldBoost instance
                             */
                            public static create(properties?: sajari.engine.query.v1.SearchRequest.FeatureQuery.IFieldBoost): sajari.engine.query.v1.SearchRequest.FeatureQuery.FieldBoost;

                            /**
                             * Encodes the specified FieldBoost message. Does not implicitly {@link sajari.engine.query.v1.SearchRequest.FeatureQuery.FieldBoost.verify|verify} messages.
                             * @param message FieldBoost message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: sajari.engine.query.v1.SearchRequest.FeatureQuery.IFieldBoost, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified FieldBoost message, length delimited. Does not implicitly {@link sajari.engine.query.v1.SearchRequest.FeatureQuery.FieldBoost.verify|verify} messages.
                             * @param message FieldBoost message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: sajari.engine.query.v1.SearchRequest.FeatureQuery.IFieldBoost, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a FieldBoost message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns FieldBoost
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.SearchRequest.FeatureQuery.FieldBoost;

                            /**
                             * Decodes a FieldBoost message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns FieldBoost
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.SearchRequest.FeatureQuery.FieldBoost;

                            /**
                             * Verifies a FieldBoost message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a FieldBoost message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns FieldBoost
                             */
                            public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.SearchRequest.FeatureQuery.FieldBoost;

                            /**
                             * Creates a plain object from a FieldBoost message. Also converts values to other types if specified.
                             * @param message FieldBoost
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: sajari.engine.query.v1.SearchRequest.FeatureQuery.FieldBoost, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this FieldBoost to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }
                }

                /** Properties of a Transform. */
                interface ITransform {

                    /** Transform identifier */
                    identifier?: (string|null);
                }

                /** Represents a Transform. */
                class Transform implements ITransform {

                    /**
                     * Constructs a new Transform.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.query.v1.ITransform);

                    /** Transform identifier. */
                    public identifier: string;

                    /**
                     * Creates a new Transform instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Transform instance
                     */
                    public static create(properties?: sajari.engine.query.v1.ITransform): sajari.engine.query.v1.Transform;

                    /**
                     * Encodes the specified Transform message. Does not implicitly {@link sajari.engine.query.v1.Transform.verify|verify} messages.
                     * @param message Transform message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.query.v1.ITransform, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Transform message, length delimited. Does not implicitly {@link sajari.engine.query.v1.Transform.verify|verify} messages.
                     * @param message Transform message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.query.v1.ITransform, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Transform message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Transform
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.Transform;

                    /**
                     * Decodes a Transform message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Transform
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.Transform;

                    /**
                     * Verifies a Transform message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Transform message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Transform
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.Transform;

                    /**
                     * Creates a plain object from a Transform message. Also converts values to other types if specified.
                     * @param message Transform
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.query.v1.Transform, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Transform to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Term. */
                interface ITerm {

                    /** Term value */
                    value?: (string|null);

                    /** Term field */
                    field?: (string|null);

                    /** Term pos */
                    pos?: (number|null);

                    /** Term neg */
                    neg?: (number|null);

                    /** Term weight */
                    weight?: (number|null);

                    /** Term wordOffset */
                    wordOffset?: (number|null);

                    /** Term paraOffset */
                    paraOffset?: (number|null);
                }

                /** Represents a Term. */
                class Term implements ITerm {

                    /**
                     * Constructs a new Term.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.query.v1.ITerm);

                    /** Term value. */
                    public value: string;

                    /** Term field. */
                    public field: string;

                    /** Term pos. */
                    public pos: number;

                    /** Term neg. */
                    public neg: number;

                    /** Term weight. */
                    public weight: number;

                    /** Term wordOffset. */
                    public wordOffset: number;

                    /** Term paraOffset. */
                    public paraOffset: number;

                    /**
                     * Creates a new Term instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Term instance
                     */
                    public static create(properties?: sajari.engine.query.v1.ITerm): sajari.engine.query.v1.Term;

                    /**
                     * Encodes the specified Term message. Does not implicitly {@link sajari.engine.query.v1.Term.verify|verify} messages.
                     * @param message Term message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.query.v1.ITerm, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Term message, length delimited. Does not implicitly {@link sajari.engine.query.v1.Term.verify|verify} messages.
                     * @param message Term message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.query.v1.ITerm, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Term message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Term
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.Term;

                    /**
                     * Decodes a Term message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Term
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.Term;

                    /**
                     * Verifies a Term message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Term message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Term
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.Term;

                    /**
                     * Creates a plain object from a Term message. Also converts values to other types if specified.
                     * @param message Term
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.query.v1.Term, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Term to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an EvaluateRequest. */
                interface IEvaluateRequest {

                    /** EvaluateRequest searchRequest */
                    searchRequest?: (sajari.engine.query.v1.ISearchRequest|null);

                    /** EvaluateRequest record */
                    record?: ({ [k: string]: sajari.engine.IValue }|null);
                }

                /** Represents an EvaluateRequest. */
                class EvaluateRequest implements IEvaluateRequest {

                    /**
                     * Constructs a new EvaluateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.query.v1.IEvaluateRequest);

                    /** EvaluateRequest searchRequest. */
                    public searchRequest?: (sajari.engine.query.v1.ISearchRequest|null);

                    /** EvaluateRequest record. */
                    public record: { [k: string]: sajari.engine.IValue };

                    /**
                     * Creates a new EvaluateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EvaluateRequest instance
                     */
                    public static create(properties?: sajari.engine.query.v1.IEvaluateRequest): sajari.engine.query.v1.EvaluateRequest;

                    /**
                     * Encodes the specified EvaluateRequest message. Does not implicitly {@link sajari.engine.query.v1.EvaluateRequest.verify|verify} messages.
                     * @param message EvaluateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.query.v1.IEvaluateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EvaluateRequest message, length delimited. Does not implicitly {@link sajari.engine.query.v1.EvaluateRequest.verify|verify} messages.
                     * @param message EvaluateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.query.v1.IEvaluateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EvaluateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EvaluateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.EvaluateRequest;

                    /**
                     * Decodes an EvaluateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EvaluateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.EvaluateRequest;

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
                    public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.EvaluateRequest;

                    /**
                     * Creates a plain object from an EvaluateRequest message. Also converts values to other types if specified.
                     * @param message EvaluateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.query.v1.EvaluateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EvaluateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SubstituteRequest. */
                interface ISubstituteRequest {

                    /** SubstituteRequest searchRequest */
                    searchRequest?: (sajari.engine.query.v1.ISearchRequest|null);

                    /** SubstituteRequest record */
                    record?: ({ [k: string]: sajari.engine.IValue }|null);
                }

                /** Represents a SubstituteRequest. */
                class SubstituteRequest implements ISubstituteRequest {

                    /**
                     * Constructs a new SubstituteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.query.v1.ISubstituteRequest);

                    /** SubstituteRequest searchRequest. */
                    public searchRequest?: (sajari.engine.query.v1.ISearchRequest|null);

                    /** SubstituteRequest record. */
                    public record: { [k: string]: sajari.engine.IValue };

                    /**
                     * Creates a new SubstituteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SubstituteRequest instance
                     */
                    public static create(properties?: sajari.engine.query.v1.ISubstituteRequest): sajari.engine.query.v1.SubstituteRequest;

                    /**
                     * Encodes the specified SubstituteRequest message. Does not implicitly {@link sajari.engine.query.v1.SubstituteRequest.verify|verify} messages.
                     * @param message SubstituteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.query.v1.ISubstituteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SubstituteRequest message, length delimited. Does not implicitly {@link sajari.engine.query.v1.SubstituteRequest.verify|verify} messages.
                     * @param message SubstituteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.query.v1.ISubstituteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SubstituteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SubstituteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.SubstituteRequest;

                    /**
                     * Decodes a SubstituteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SubstituteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.SubstituteRequest;

                    /**
                     * Verifies a SubstituteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SubstituteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SubstituteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.SubstituteRequest;

                    /**
                     * Creates a plain object from a SubstituteRequest message. Also converts values to other types if specified.
                     * @param message SubstituteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.query.v1.SubstituteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SubstituteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Body. */
                interface IBody {

                    /** Body text */
                    text?: (string|null);

                    /** Body weight */
                    weight?: (number|null);
                }

                /** Represents a Body. */
                class Body implements IBody {

                    /**
                     * Constructs a new Body.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.query.v1.IBody);

                    /** Body text. */
                    public text: string;

                    /** Body weight. */
                    public weight: number;

                    /**
                     * Creates a new Body instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Body instance
                     */
                    public static create(properties?: sajari.engine.query.v1.IBody): sajari.engine.query.v1.Body;

                    /**
                     * Encodes the specified Body message. Does not implicitly {@link sajari.engine.query.v1.Body.verify|verify} messages.
                     * @param message Body message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.query.v1.IBody, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Body message, length delimited. Does not implicitly {@link sajari.engine.query.v1.Body.verify|verify} messages.
                     * @param message Body message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.query.v1.IBody, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Body message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Body
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.Body;

                    /**
                     * Decodes a Body message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Body
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.Body;

                    /**
                     * Verifies a Body message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Body message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Body
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.Body;

                    /**
                     * Creates a plain object from a Body message. Also converts values to other types if specified.
                     * @param message Body
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.query.v1.Body, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Body to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Aggregate. */
                interface IAggregate {

                    /** Aggregate metric */
                    metric?: (sajari.engine.query.v1.Aggregate.IMetric|null);

                    /** Aggregate count */
                    count?: (sajari.engine.query.v1.Aggregate.ICount|null);

                    /** Aggregate bucket */
                    bucket?: (sajari.engine.query.v1.Aggregate.IBucket|null);
                }

                /** Represents an Aggregate. */
                class Aggregate implements IAggregate {

                    /**
                     * Constructs a new Aggregate.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.query.v1.IAggregate);

                    /** Aggregate metric. */
                    public metric?: (sajari.engine.query.v1.Aggregate.IMetric|null);

                    /** Aggregate count. */
                    public count?: (sajari.engine.query.v1.Aggregate.ICount|null);

                    /** Aggregate bucket. */
                    public bucket?: (sajari.engine.query.v1.Aggregate.IBucket|null);

                    /** Aggregate aggregate. */
                    public aggregate?: ("metric"|"count"|"bucket");

                    /**
                     * Creates a new Aggregate instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Aggregate instance
                     */
                    public static create(properties?: sajari.engine.query.v1.IAggregate): sajari.engine.query.v1.Aggregate;

                    /**
                     * Encodes the specified Aggregate message. Does not implicitly {@link sajari.engine.query.v1.Aggregate.verify|verify} messages.
                     * @param message Aggregate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.query.v1.IAggregate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Aggregate message, length delimited. Does not implicitly {@link sajari.engine.query.v1.Aggregate.verify|verify} messages.
                     * @param message Aggregate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.query.v1.IAggregate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Aggregate message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Aggregate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.Aggregate;

                    /**
                     * Decodes an Aggregate message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Aggregate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.Aggregate;

                    /**
                     * Verifies an Aggregate message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Aggregate message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Aggregate
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.Aggregate;

                    /**
                     * Creates a plain object from an Aggregate message. Also converts values to other types if specified.
                     * @param message Aggregate
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.query.v1.Aggregate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Aggregate to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Aggregate {

                    /** Properties of a Metric. */
                    interface IMetric {

                        /** Metric field */
                        field?: (string|null);

                        /** Metric type */
                        type?: (sajari.engine.query.v1.Aggregate.Metric.Type|null);
                    }

                    /** Represents a Metric. */
                    class Metric implements IMetric {

                        /**
                         * Constructs a new Metric.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: sajari.engine.query.v1.Aggregate.IMetric);

                        /** Metric field. */
                        public field: string;

                        /** Metric type. */
                        public type: sajari.engine.query.v1.Aggregate.Metric.Type;

                        /**
                         * Creates a new Metric instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Metric instance
                         */
                        public static create(properties?: sajari.engine.query.v1.Aggregate.IMetric): sajari.engine.query.v1.Aggregate.Metric;

                        /**
                         * Encodes the specified Metric message. Does not implicitly {@link sajari.engine.query.v1.Aggregate.Metric.verify|verify} messages.
                         * @param message Metric message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: sajari.engine.query.v1.Aggregate.IMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Metric message, length delimited. Does not implicitly {@link sajari.engine.query.v1.Aggregate.Metric.verify|verify} messages.
                         * @param message Metric message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: sajari.engine.query.v1.Aggregate.IMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Metric message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Metric
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.Aggregate.Metric;

                        /**
                         * Decodes a Metric message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Metric
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.Aggregate.Metric;

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
                        public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.Aggregate.Metric;

                        /**
                         * Creates a plain object from a Metric message. Also converts values to other types if specified.
                         * @param message Metric
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: sajari.engine.query.v1.Aggregate.Metric, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Metric to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Metric {

                        /** Type enum. */
                        enum Type {
                            AVG = 0,
                            MIN = 1,
                            MAX = 2,
                            SUM = 3
                        }
                    }

                    /** Properties of a Count. */
                    interface ICount {

                        /** Count field */
                        field?: (string|null);

                        /** Count min */
                        min?: (number|null);
                    }

                    /** Represents a Count. */
                    class Count implements ICount {

                        /**
                         * Constructs a new Count.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: sajari.engine.query.v1.Aggregate.ICount);

                        /** Count field. */
                        public field: string;

                        /** Count min. */
                        public min: number;

                        /**
                         * Creates a new Count instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Count instance
                         */
                        public static create(properties?: sajari.engine.query.v1.Aggregate.ICount): sajari.engine.query.v1.Aggregate.Count;

                        /**
                         * Encodes the specified Count message. Does not implicitly {@link sajari.engine.query.v1.Aggregate.Count.verify|verify} messages.
                         * @param message Count message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: sajari.engine.query.v1.Aggregate.ICount, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Count message, length delimited. Does not implicitly {@link sajari.engine.query.v1.Aggregate.Count.verify|verify} messages.
                         * @param message Count message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: sajari.engine.query.v1.Aggregate.ICount, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Count message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Count
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.Aggregate.Count;

                        /**
                         * Decodes a Count message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Count
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.Aggregate.Count;

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
                        public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.Aggregate.Count;

                        /**
                         * Creates a plain object from a Count message. Also converts values to other types if specified.
                         * @param message Count
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: sajari.engine.query.v1.Aggregate.Count, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Count to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Bucket. */
                    interface IBucket {

                        /** Bucket buckets */
                        buckets?: (sajari.engine.query.v1.Aggregate.Bucket.IBucket[]|null);
                    }

                    /** Represents a Bucket. */
                    class Bucket implements IBucket {

                        /**
                         * Constructs a new Bucket.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: sajari.engine.query.v1.Aggregate.IBucket);

                        /** Bucket buckets. */
                        public buckets: sajari.engine.query.v1.Aggregate.Bucket.IBucket[];

                        /**
                         * Creates a new Bucket instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Bucket instance
                         */
                        public static create(properties?: sajari.engine.query.v1.Aggregate.IBucket): sajari.engine.query.v1.Aggregate.Bucket;

                        /**
                         * Encodes the specified Bucket message. Does not implicitly {@link sajari.engine.query.v1.Aggregate.Bucket.verify|verify} messages.
                         * @param message Bucket message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: sajari.engine.query.v1.Aggregate.IBucket, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Bucket message, length delimited. Does not implicitly {@link sajari.engine.query.v1.Aggregate.Bucket.verify|verify} messages.
                         * @param message Bucket message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: sajari.engine.query.v1.Aggregate.IBucket, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Bucket message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Bucket
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.Aggregate.Bucket;

                        /**
                         * Decodes a Bucket message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Bucket
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.Aggregate.Bucket;

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
                        public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.Aggregate.Bucket;

                        /**
                         * Creates a plain object from a Bucket message. Also converts values to other types if specified.
                         * @param message Bucket
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: sajari.engine.query.v1.Aggregate.Bucket, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Bucket to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Bucket {

                        /** Properties of a Bucket. */
                        interface IBucket {

                            /** Bucket name */
                            name?: (string|null);

                            /** Bucket filter */
                            filter?: (sajari.engine.query.v1.IFilter|null);
                        }

                        /** Represents a Bucket. */
                        class Bucket implements IBucket {

                            /**
                             * Constructs a new Bucket.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: sajari.engine.query.v1.Aggregate.Bucket.IBucket);

                            /** Bucket name. */
                            public name: string;

                            /** Bucket filter. */
                            public filter?: (sajari.engine.query.v1.IFilter|null);

                            /**
                             * Creates a new Bucket instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Bucket instance
                             */
                            public static create(properties?: sajari.engine.query.v1.Aggregate.Bucket.IBucket): sajari.engine.query.v1.Aggregate.Bucket.Bucket;

                            /**
                             * Encodes the specified Bucket message. Does not implicitly {@link sajari.engine.query.v1.Aggregate.Bucket.Bucket.verify|verify} messages.
                             * @param message Bucket message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: sajari.engine.query.v1.Aggregate.Bucket.IBucket, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Bucket message, length delimited. Does not implicitly {@link sajari.engine.query.v1.Aggregate.Bucket.Bucket.verify|verify} messages.
                             * @param message Bucket message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: sajari.engine.query.v1.Aggregate.Bucket.IBucket, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Bucket message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Bucket
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.Aggregate.Bucket.Bucket;

                            /**
                             * Decodes a Bucket message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Bucket
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.Aggregate.Bucket.Bucket;

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
                            public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.Aggregate.Bucket.Bucket;

                            /**
                             * Creates a plain object from a Bucket message. Also converts values to other types if specified.
                             * @param message Bucket
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: sajari.engine.query.v1.Aggregate.Bucket.Bucket, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Bucket to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }
                }

                /** Properties of a Sort. */
                interface ISort {

                    /** Sort score */
                    score?: (boolean|null);

                    /** Sort queryScore */
                    queryScore?: (boolean|null);

                    /** Sort featureScore */
                    featureScore?: (boolean|null);

                    /** Sort field */
                    field?: (string|null);

                    /** Sort order */
                    order?: (sajari.engine.query.v1.Sort.Order|null);
                }

                /** Represents a Sort. */
                class Sort implements ISort {

                    /**
                     * Constructs a new Sort.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.query.v1.ISort);

                    /** Sort score. */
                    public score: boolean;

                    /** Sort queryScore. */
                    public queryScore: boolean;

                    /** Sort featureScore. */
                    public featureScore: boolean;

                    /** Sort field. */
                    public field: string;

                    /** Sort order. */
                    public order: sajari.engine.query.v1.Sort.Order;

                    /** Sort type. */
                    public type?: ("score"|"queryScore"|"featureScore"|"field");

                    /**
                     * Creates a new Sort instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Sort instance
                     */
                    public static create(properties?: sajari.engine.query.v1.ISort): sajari.engine.query.v1.Sort;

                    /**
                     * Encodes the specified Sort message. Does not implicitly {@link sajari.engine.query.v1.Sort.verify|verify} messages.
                     * @param message Sort message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.query.v1.ISort, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Sort message, length delimited. Does not implicitly {@link sajari.engine.query.v1.Sort.verify|verify} messages.
                     * @param message Sort message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.query.v1.ISort, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Sort message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Sort
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.Sort;

                    /**
                     * Decodes a Sort message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Sort
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.Sort;

                    /**
                     * Verifies a Sort message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Sort message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Sort
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.Sort;

                    /**
                     * Creates a plain object from a Sort message. Also converts values to other types if specified.
                     * @param message Sort
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.query.v1.Sort, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Sort to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Sort {

                    /** Order enum. */
                    enum Order {
                        ASC = 0,
                        DESC = 1
                    }
                }

                /** Properties of a Filter. */
                interface IFilter {

                    /** Filter combinator */
                    combinator?: (sajari.engine.query.v1.Filter.ICombinator|null);

                    /** Filter field */
                    field?: (sajari.engine.query.v1.Filter.IField|null);

                    /** Filter geo */
                    geo?: (sajari.engine.query.v1.Filter.IGeo|null);
                }

                /** Represents a Filter. */
                class Filter implements IFilter {

                    /**
                     * Constructs a new Filter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.query.v1.IFilter);

                    /** Filter combinator. */
                    public combinator?: (sajari.engine.query.v1.Filter.ICombinator|null);

                    /** Filter field. */
                    public field?: (sajari.engine.query.v1.Filter.IField|null);

                    /** Filter geo. */
                    public geo?: (sajari.engine.query.v1.Filter.IGeo|null);

                    /** Filter filter. */
                    public filter?: ("combinator"|"field"|"geo");

                    /**
                     * Creates a new Filter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Filter instance
                     */
                    public static create(properties?: sajari.engine.query.v1.IFilter): sajari.engine.query.v1.Filter;

                    /**
                     * Encodes the specified Filter message. Does not implicitly {@link sajari.engine.query.v1.Filter.verify|verify} messages.
                     * @param message Filter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.query.v1.IFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Filter message, length delimited. Does not implicitly {@link sajari.engine.query.v1.Filter.verify|verify} messages.
                     * @param message Filter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.query.v1.IFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Filter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Filter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.Filter;

                    /**
                     * Decodes a Filter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Filter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.Filter;

                    /**
                     * Verifies a Filter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Filter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Filter
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.Filter;

                    /**
                     * Creates a plain object from a Filter message. Also converts values to other types if specified.
                     * @param message Filter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.query.v1.Filter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Filter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Filter {

                    /** Properties of a Field. */
                    interface IField {

                        /** Field operator */
                        operator?: (sajari.engine.query.v1.Filter.Field.Operator|null);

                        /** Field field */
                        field?: (string|null);

                        /** Field value */
                        value?: (sajari.engine.IValue|null);
                    }

                    /** Represents a Field. */
                    class Field implements IField {

                        /**
                         * Constructs a new Field.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: sajari.engine.query.v1.Filter.IField);

                        /** Field operator. */
                        public operator: sajari.engine.query.v1.Filter.Field.Operator;

                        /** Field field. */
                        public field: string;

                        /** Field value. */
                        public value?: (sajari.engine.IValue|null);

                        /**
                         * Creates a new Field instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Field instance
                         */
                        public static create(properties?: sajari.engine.query.v1.Filter.IField): sajari.engine.query.v1.Filter.Field;

                        /**
                         * Encodes the specified Field message. Does not implicitly {@link sajari.engine.query.v1.Filter.Field.verify|verify} messages.
                         * @param message Field message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: sajari.engine.query.v1.Filter.IField, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Field message, length delimited. Does not implicitly {@link sajari.engine.query.v1.Filter.Field.verify|verify} messages.
                         * @param message Field message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: sajari.engine.query.v1.Filter.IField, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Field message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Field
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.Filter.Field;

                        /**
                         * Decodes a Field message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Field
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.Filter.Field;

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
                        public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.Filter.Field;

                        /**
                         * Creates a plain object from a Field message. Also converts values to other types if specified.
                         * @param message Field
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: sajari.engine.query.v1.Filter.Field, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Field to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Field {

                        /** Operator enum. */
                        enum Operator {
                            EQUAL_TO = 0,
                            NOT_EQUAL_TO = 1,
                            GREATER_THAN = 2,
                            GREATER_THAN_OR_EQUAL_TO = 3,
                            LESS_THAN = 4,
                            LESS_THAN_OR_EQUAL_TO = 5,
                            CONTAINS = 6,
                            DOES_NOT_CONTAIN = 7,
                            HAS_SUFFIX = 8,
                            HAS_PREFIX = 9
                        }
                    }

                    /** Properties of a Geo. */
                    interface IGeo {

                        /** Geo fieldLat */
                        fieldLat?: (string|null);

                        /** Geo fieldLng */
                        fieldLng?: (string|null);

                        /** Geo lat */
                        lat?: (number|null);

                        /** Geo lng */
                        lng?: (number|null);

                        /** Geo radius */
                        radius?: (number|null);

                        /** Geo region */
                        region?: (sajari.engine.query.v1.Filter.Geo.Region|null);
                    }

                    /** Represents a Geo. */
                    class Geo implements IGeo {

                        /**
                         * Constructs a new Geo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: sajari.engine.query.v1.Filter.IGeo);

                        /** Geo fieldLat. */
                        public fieldLat: string;

                        /** Geo fieldLng. */
                        public fieldLng: string;

                        /** Geo lat. */
                        public lat: number;

                        /** Geo lng. */
                        public lng: number;

                        /** Geo radius. */
                        public radius: number;

                        /** Geo region. */
                        public region: sajari.engine.query.v1.Filter.Geo.Region;

                        /**
                         * Creates a new Geo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Geo instance
                         */
                        public static create(properties?: sajari.engine.query.v1.Filter.IGeo): sajari.engine.query.v1.Filter.Geo;

                        /**
                         * Encodes the specified Geo message. Does not implicitly {@link sajari.engine.query.v1.Filter.Geo.verify|verify} messages.
                         * @param message Geo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: sajari.engine.query.v1.Filter.IGeo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Geo message, length delimited. Does not implicitly {@link sajari.engine.query.v1.Filter.Geo.verify|verify} messages.
                         * @param message Geo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: sajari.engine.query.v1.Filter.IGeo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Geo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Geo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.Filter.Geo;

                        /**
                         * Decodes a Geo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Geo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.Filter.Geo;

                        /**
                         * Verifies a Geo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Geo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Geo
                         */
                        public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.Filter.Geo;

                        /**
                         * Creates a plain object from a Geo message. Also converts values to other types if specified.
                         * @param message Geo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: sajari.engine.query.v1.Filter.Geo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Geo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Geo {

                        /** Region enum. */
                        enum Region {
                            INSIDE = 0,
                            OUTSIDE = 1
                        }
                    }

                    /** Properties of a Combinator. */
                    interface ICombinator {

                        /** Combinator operator */
                        operator?: (sajari.engine.query.v1.Filter.Combinator.Operator|null);

                        /** Combinator filters */
                        filters?: (sajari.engine.query.v1.IFilter[]|null);
                    }

                    /** Represents a Combinator. */
                    class Combinator implements ICombinator {

                        /**
                         * Constructs a new Combinator.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: sajari.engine.query.v1.Filter.ICombinator);

                        /** Combinator operator. */
                        public operator: sajari.engine.query.v1.Filter.Combinator.Operator;

                        /** Combinator filters. */
                        public filters: sajari.engine.query.v1.IFilter[];

                        /**
                         * Creates a new Combinator instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Combinator instance
                         */
                        public static create(properties?: sajari.engine.query.v1.Filter.ICombinator): sajari.engine.query.v1.Filter.Combinator;

                        /**
                         * Encodes the specified Combinator message. Does not implicitly {@link sajari.engine.query.v1.Filter.Combinator.verify|verify} messages.
                         * @param message Combinator message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: sajari.engine.query.v1.Filter.ICombinator, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Combinator message, length delimited. Does not implicitly {@link sajari.engine.query.v1.Filter.Combinator.verify|verify} messages.
                         * @param message Combinator message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: sajari.engine.query.v1.Filter.ICombinator, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Combinator message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Combinator
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.Filter.Combinator;

                        /**
                         * Decodes a Combinator message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Combinator
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.Filter.Combinator;

                        /**
                         * Verifies a Combinator message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Combinator message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Combinator
                         */
                        public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.Filter.Combinator;

                        /**
                         * Creates a plain object from a Combinator message. Also converts values to other types if specified.
                         * @param message Combinator
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: sajari.engine.query.v1.Filter.Combinator, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Combinator to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Combinator {

                        /** Operator enum. */
                        enum Operator {
                            ALL = 0,
                            ANY = 1,
                            ONE = 2,
                            NONE = 3
                        }
                    }
                }

                /** Properties of a FieldBoost. */
                interface IFieldBoost {

                    /** FieldBoost filter */
                    filter?: (sajari.engine.query.v1.FieldBoost.IFilter|null);

                    /** FieldBoost interval */
                    interval?: (sajari.engine.query.v1.FieldBoost.IInterval|null);

                    /** FieldBoost element */
                    element?: (sajari.engine.query.v1.FieldBoost.IElement|null);

                    /** FieldBoost text */
                    text?: (sajari.engine.query.v1.FieldBoost.IText|null);
                }

                /** Represents a FieldBoost. */
                class FieldBoost implements IFieldBoost {

                    /**
                     * Constructs a new FieldBoost.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.query.v1.IFieldBoost);

                    /** FieldBoost filter. */
                    public filter?: (sajari.engine.query.v1.FieldBoost.IFilter|null);

                    /** FieldBoost interval. */
                    public interval?: (sajari.engine.query.v1.FieldBoost.IInterval|null);

                    /** FieldBoost element. */
                    public element?: (sajari.engine.query.v1.FieldBoost.IElement|null);

                    /** FieldBoost text. */
                    public text?: (sajari.engine.query.v1.FieldBoost.IText|null);

                    /** FieldBoost fieldBoost. */
                    public fieldBoost?: ("filter"|"interval"|"element"|"text");

                    /**
                     * Creates a new FieldBoost instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FieldBoost instance
                     */
                    public static create(properties?: sajari.engine.query.v1.IFieldBoost): sajari.engine.query.v1.FieldBoost;

                    /**
                     * Encodes the specified FieldBoost message. Does not implicitly {@link sajari.engine.query.v1.FieldBoost.verify|verify} messages.
                     * @param message FieldBoost message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.query.v1.IFieldBoost, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FieldBoost message, length delimited. Does not implicitly {@link sajari.engine.query.v1.FieldBoost.verify|verify} messages.
                     * @param message FieldBoost message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.query.v1.IFieldBoost, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FieldBoost message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FieldBoost
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.FieldBoost;

                    /**
                     * Decodes a FieldBoost message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FieldBoost
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.FieldBoost;

                    /**
                     * Verifies a FieldBoost message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FieldBoost message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FieldBoost
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.FieldBoost;

                    /**
                     * Creates a plain object from a FieldBoost message. Also converts values to other types if specified.
                     * @param message FieldBoost
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.query.v1.FieldBoost, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FieldBoost to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace FieldBoost {

                    /** Properties of a Filter. */
                    interface IFilter {

                        /** Filter filter */
                        filter?: (sajari.engine.query.v1.IFilter|null);

                        /** Filter value */
                        value?: (number|null);
                    }

                    /** Represents a Filter. */
                    class Filter implements IFilter {

                        /**
                         * Constructs a new Filter.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: sajari.engine.query.v1.FieldBoost.IFilter);

                        /** Filter filter. */
                        public filter?: (sajari.engine.query.v1.IFilter|null);

                        /** Filter value. */
                        public value: number;

                        /**
                         * Creates a new Filter instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Filter instance
                         */
                        public static create(properties?: sajari.engine.query.v1.FieldBoost.IFilter): sajari.engine.query.v1.FieldBoost.Filter;

                        /**
                         * Encodes the specified Filter message. Does not implicitly {@link sajari.engine.query.v1.FieldBoost.Filter.verify|verify} messages.
                         * @param message Filter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: sajari.engine.query.v1.FieldBoost.IFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Filter message, length delimited. Does not implicitly {@link sajari.engine.query.v1.FieldBoost.Filter.verify|verify} messages.
                         * @param message Filter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: sajari.engine.query.v1.FieldBoost.IFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Filter message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Filter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.FieldBoost.Filter;

                        /**
                         * Decodes a Filter message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Filter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.FieldBoost.Filter;

                        /**
                         * Verifies a Filter message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Filter message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Filter
                         */
                        public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.FieldBoost.Filter;

                        /**
                         * Creates a plain object from a Filter message. Also converts values to other types if specified.
                         * @param message Filter
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: sajari.engine.query.v1.FieldBoost.Filter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Filter to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an Interval. */
                    interface IInterval {

                        /** Interval field */
                        field?: (string|null);

                        /** Interval points */
                        points?: (sajari.engine.query.v1.FieldBoost.Interval.IPoint[]|null);
                    }

                    /** Represents an Interval. */
                    class Interval implements IInterval {

                        /**
                         * Constructs a new Interval.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: sajari.engine.query.v1.FieldBoost.IInterval);

                        /** Interval field. */
                        public field: string;

                        /** Interval points. */
                        public points: sajari.engine.query.v1.FieldBoost.Interval.IPoint[];

                        /**
                         * Creates a new Interval instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Interval instance
                         */
                        public static create(properties?: sajari.engine.query.v1.FieldBoost.IInterval): sajari.engine.query.v1.FieldBoost.Interval;

                        /**
                         * Encodes the specified Interval message. Does not implicitly {@link sajari.engine.query.v1.FieldBoost.Interval.verify|verify} messages.
                         * @param message Interval message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: sajari.engine.query.v1.FieldBoost.IInterval, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Interval message, length delimited. Does not implicitly {@link sajari.engine.query.v1.FieldBoost.Interval.verify|verify} messages.
                         * @param message Interval message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: sajari.engine.query.v1.FieldBoost.IInterval, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Interval message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Interval
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.FieldBoost.Interval;

                        /**
                         * Decodes an Interval message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Interval
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.FieldBoost.Interval;

                        /**
                         * Verifies an Interval message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Interval message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Interval
                         */
                        public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.FieldBoost.Interval;

                        /**
                         * Creates a plain object from an Interval message. Also converts values to other types if specified.
                         * @param message Interval
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: sajari.engine.query.v1.FieldBoost.Interval, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Interval to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Interval {

                        /** Properties of a Point. */
                        interface IPoint {

                            /** Point point */
                            point?: (number|null);

                            /** Point value */
                            value?: (number|null);
                        }

                        /** Represents a Point. */
                        class Point implements IPoint {

                            /**
                             * Constructs a new Point.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: sajari.engine.query.v1.FieldBoost.Interval.IPoint);

                            /** Point point. */
                            public point: number;

                            /** Point value. */
                            public value: number;

                            /**
                             * Creates a new Point instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Point instance
                             */
                            public static create(properties?: sajari.engine.query.v1.FieldBoost.Interval.IPoint): sajari.engine.query.v1.FieldBoost.Interval.Point;

                            /**
                             * Encodes the specified Point message. Does not implicitly {@link sajari.engine.query.v1.FieldBoost.Interval.Point.verify|verify} messages.
                             * @param message Point message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: sajari.engine.query.v1.FieldBoost.Interval.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Point message, length delimited. Does not implicitly {@link sajari.engine.query.v1.FieldBoost.Interval.Point.verify|verify} messages.
                             * @param message Point message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: sajari.engine.query.v1.FieldBoost.Interval.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Point message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Point
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.FieldBoost.Interval.Point;

                            /**
                             * Decodes a Point message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Point
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.FieldBoost.Interval.Point;

                            /**
                             * Verifies a Point message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Point message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Point
                             */
                            public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.FieldBoost.Interval.Point;

                            /**
                             * Creates a plain object from a Point message. Also converts values to other types if specified.
                             * @param message Point
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: sajari.engine.query.v1.FieldBoost.Interval.Point, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Point to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Properties of an Element. */
                    interface IElement {

                        /** Element field */
                        field?: (string|null);

                        /** Element elts */
                        elts?: (string[]|null);
                    }

                    /** Represents an Element. */
                    class Element implements IElement {

                        /**
                         * Constructs a new Element.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: sajari.engine.query.v1.FieldBoost.IElement);

                        /** Element field. */
                        public field: string;

                        /** Element elts. */
                        public elts: string[];

                        /**
                         * Creates a new Element instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Element instance
                         */
                        public static create(properties?: sajari.engine.query.v1.FieldBoost.IElement): sajari.engine.query.v1.FieldBoost.Element;

                        /**
                         * Encodes the specified Element message. Does not implicitly {@link sajari.engine.query.v1.FieldBoost.Element.verify|verify} messages.
                         * @param message Element message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: sajari.engine.query.v1.FieldBoost.IElement, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Element message, length delimited. Does not implicitly {@link sajari.engine.query.v1.FieldBoost.Element.verify|verify} messages.
                         * @param message Element message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: sajari.engine.query.v1.FieldBoost.IElement, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Element message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Element
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.FieldBoost.Element;

                        /**
                         * Decodes an Element message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Element
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.FieldBoost.Element;

                        /**
                         * Verifies an Element message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Element message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Element
                         */
                        public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.FieldBoost.Element;

                        /**
                         * Creates a plain object from an Element message. Also converts values to other types if specified.
                         * @param message Element
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: sajari.engine.query.v1.FieldBoost.Element, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Element to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Text. */
                    interface IText {

                        /** Text field */
                        field?: (string|null);

                        /** Text text */
                        text?: (string|null);
                    }

                    /** Represents a Text. */
                    class Text implements IText {

                        /**
                         * Constructs a new Text.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: sajari.engine.query.v1.FieldBoost.IText);

                        /** Text field. */
                        public field: string;

                        /** Text text. */
                        public text: string;

                        /**
                         * Creates a new Text instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Text instance
                         */
                        public static create(properties?: sajari.engine.query.v1.FieldBoost.IText): sajari.engine.query.v1.FieldBoost.Text;

                        /**
                         * Encodes the specified Text message. Does not implicitly {@link sajari.engine.query.v1.FieldBoost.Text.verify|verify} messages.
                         * @param message Text message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: sajari.engine.query.v1.FieldBoost.IText, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Text message, length delimited. Does not implicitly {@link sajari.engine.query.v1.FieldBoost.Text.verify|verify} messages.
                         * @param message Text message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: sajari.engine.query.v1.FieldBoost.IText, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Text message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Text
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.FieldBoost.Text;

                        /**
                         * Decodes a Text message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Text
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.FieldBoost.Text;

                        /**
                         * Verifies a Text message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Text message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Text
                         */
                        public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.FieldBoost.Text;

                        /**
                         * Creates a plain object from a Text message. Also converts values to other types if specified.
                         * @param message Text
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: sajari.engine.query.v1.FieldBoost.Text, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Text to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of an InstanceBoost. */
                interface IInstanceBoost {

                    /** InstanceBoost field */
                    field?: (sajari.engine.query.v1.InstanceBoost.IField|null);

                    /** InstanceBoost score */
                    score?: (sajari.engine.query.v1.InstanceBoost.IScore|null);
                }

                /** Represents an InstanceBoost. */
                class InstanceBoost implements IInstanceBoost {

                    /**
                     * Constructs a new InstanceBoost.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.query.v1.IInstanceBoost);

                    /** InstanceBoost field. */
                    public field?: (sajari.engine.query.v1.InstanceBoost.IField|null);

                    /** InstanceBoost score. */
                    public score?: (sajari.engine.query.v1.InstanceBoost.IScore|null);

                    /** InstanceBoost instanceBoost. */
                    public instanceBoost?: ("field"|"score");

                    /**
                     * Creates a new InstanceBoost instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InstanceBoost instance
                     */
                    public static create(properties?: sajari.engine.query.v1.IInstanceBoost): sajari.engine.query.v1.InstanceBoost;

                    /**
                     * Encodes the specified InstanceBoost message. Does not implicitly {@link sajari.engine.query.v1.InstanceBoost.verify|verify} messages.
                     * @param message InstanceBoost message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.query.v1.IInstanceBoost, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InstanceBoost message, length delimited. Does not implicitly {@link sajari.engine.query.v1.InstanceBoost.verify|verify} messages.
                     * @param message InstanceBoost message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.query.v1.IInstanceBoost, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InstanceBoost message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InstanceBoost
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.InstanceBoost;

                    /**
                     * Decodes an InstanceBoost message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InstanceBoost
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.InstanceBoost;

                    /**
                     * Verifies an InstanceBoost message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InstanceBoost message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InstanceBoost
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.InstanceBoost;

                    /**
                     * Creates a plain object from an InstanceBoost message. Also converts values to other types if specified.
                     * @param message InstanceBoost
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.query.v1.InstanceBoost, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InstanceBoost to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace InstanceBoost {

                    /** Properties of a Field. */
                    interface IField {

                        /** Field field */
                        field?: (string|null);

                        /** Field value */
                        value?: (number|null);
                    }

                    /** Represents a Field. */
                    class Field implements IField {

                        /**
                         * Constructs a new Field.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: sajari.engine.query.v1.InstanceBoost.IField);

                        /** Field field. */
                        public field: string;

                        /** Field value. */
                        public value: number;

                        /**
                         * Creates a new Field instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Field instance
                         */
                        public static create(properties?: sajari.engine.query.v1.InstanceBoost.IField): sajari.engine.query.v1.InstanceBoost.Field;

                        /**
                         * Encodes the specified Field message. Does not implicitly {@link sajari.engine.query.v1.InstanceBoost.Field.verify|verify} messages.
                         * @param message Field message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: sajari.engine.query.v1.InstanceBoost.IField, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Field message, length delimited. Does not implicitly {@link sajari.engine.query.v1.InstanceBoost.Field.verify|verify} messages.
                         * @param message Field message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: sajari.engine.query.v1.InstanceBoost.IField, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Field message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Field
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.InstanceBoost.Field;

                        /**
                         * Decodes a Field message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Field
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.InstanceBoost.Field;

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
                        public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.InstanceBoost.Field;

                        /**
                         * Creates a plain object from a Field message. Also converts values to other types if specified.
                         * @param message Field
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: sajari.engine.query.v1.InstanceBoost.Field, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Field to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Score. */
                    interface IScore {

                        /** Score threshold */
                        threshold?: (number|null);

                        /** Score minCount */
                        minCount?: (number|null);
                    }

                    /** Represents a Score. */
                    class Score implements IScore {

                        /**
                         * Constructs a new Score.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: sajari.engine.query.v1.InstanceBoost.IScore);

                        /** Score threshold. */
                        public threshold: number;

                        /** Score minCount. */
                        public minCount: number;

                        /**
                         * Creates a new Score instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Score instance
                         */
                        public static create(properties?: sajari.engine.query.v1.InstanceBoost.IScore): sajari.engine.query.v1.InstanceBoost.Score;

                        /**
                         * Encodes the specified Score message. Does not implicitly {@link sajari.engine.query.v1.InstanceBoost.Score.verify|verify} messages.
                         * @param message Score message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: sajari.engine.query.v1.InstanceBoost.IScore, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Score message, length delimited. Does not implicitly {@link sajari.engine.query.v1.InstanceBoost.Score.verify|verify} messages.
                         * @param message Score message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: sajari.engine.query.v1.InstanceBoost.IScore, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Score message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Score
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.InstanceBoost.Score;

                        /**
                         * Decodes a Score message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Score
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.InstanceBoost.Score;

                        /**
                         * Verifies a Score message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Score message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Score
                         */
                        public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.InstanceBoost.Score;

                        /**
                         * Creates a plain object from a Score message. Also converts values to other types if specified.
                         * @param message Score
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: sajari.engine.query.v1.InstanceBoost.Score, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Score to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of an AggregateResponse. */
                interface IAggregateResponse {

                    /** AggregateResponse metric */
                    metric?: (sajari.engine.query.v1.AggregateResponse.IMetric|null);

                    /** AggregateResponse count */
                    count?: (sajari.engine.query.v1.AggregateResponse.ICount|null);

                    /** AggregateResponse buckets */
                    buckets?: (sajari.engine.query.v1.AggregateResponse.IBuckets|null);
                }

                /** Represents an AggregateResponse. */
                class AggregateResponse implements IAggregateResponse {

                    /**
                     * Constructs a new AggregateResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.query.v1.IAggregateResponse);

                    /** AggregateResponse metric. */
                    public metric?: (sajari.engine.query.v1.AggregateResponse.IMetric|null);

                    /** AggregateResponse count. */
                    public count?: (sajari.engine.query.v1.AggregateResponse.ICount|null);

                    /** AggregateResponse buckets. */
                    public buckets?: (sajari.engine.query.v1.AggregateResponse.IBuckets|null);

                    /** AggregateResponse aggregateResponse. */
                    public aggregateResponse?: ("metric"|"count"|"buckets");

                    /**
                     * Creates a new AggregateResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AggregateResponse instance
                     */
                    public static create(properties?: sajari.engine.query.v1.IAggregateResponse): sajari.engine.query.v1.AggregateResponse;

                    /**
                     * Encodes the specified AggregateResponse message. Does not implicitly {@link sajari.engine.query.v1.AggregateResponse.verify|verify} messages.
                     * @param message AggregateResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.query.v1.IAggregateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AggregateResponse message, length delimited. Does not implicitly {@link sajari.engine.query.v1.AggregateResponse.verify|verify} messages.
                     * @param message AggregateResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.query.v1.IAggregateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AggregateResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AggregateResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.AggregateResponse;

                    /**
                     * Decodes an AggregateResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AggregateResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.AggregateResponse;

                    /**
                     * Verifies an AggregateResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AggregateResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AggregateResponse
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.AggregateResponse;

                    /**
                     * Creates a plain object from an AggregateResponse message. Also converts values to other types if specified.
                     * @param message AggregateResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.query.v1.AggregateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AggregateResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace AggregateResponse {

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
                        constructor(properties?: sajari.engine.query.v1.AggregateResponse.IMetric);

                        /** Metric value. */
                        public value: number;

                        /**
                         * Creates a new Metric instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Metric instance
                         */
                        public static create(properties?: sajari.engine.query.v1.AggregateResponse.IMetric): sajari.engine.query.v1.AggregateResponse.Metric;

                        /**
                         * Encodes the specified Metric message. Does not implicitly {@link sajari.engine.query.v1.AggregateResponse.Metric.verify|verify} messages.
                         * @param message Metric message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: sajari.engine.query.v1.AggregateResponse.IMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Metric message, length delimited. Does not implicitly {@link sajari.engine.query.v1.AggregateResponse.Metric.verify|verify} messages.
                         * @param message Metric message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: sajari.engine.query.v1.AggregateResponse.IMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Metric message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Metric
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.AggregateResponse.Metric;

                        /**
                         * Decodes a Metric message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Metric
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.AggregateResponse.Metric;

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
                        public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.AggregateResponse.Metric;

                        /**
                         * Creates a plain object from a Metric message. Also converts values to other types if specified.
                         * @param message Metric
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: sajari.engine.query.v1.AggregateResponse.Metric, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                        constructor(properties?: sajari.engine.query.v1.AggregateResponse.ICount);

                        /** Count counts. */
                        public counts: { [k: string]: number };

                        /**
                         * Creates a new Count instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Count instance
                         */
                        public static create(properties?: sajari.engine.query.v1.AggregateResponse.ICount): sajari.engine.query.v1.AggregateResponse.Count;

                        /**
                         * Encodes the specified Count message. Does not implicitly {@link sajari.engine.query.v1.AggregateResponse.Count.verify|verify} messages.
                         * @param message Count message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: sajari.engine.query.v1.AggregateResponse.ICount, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Count message, length delimited. Does not implicitly {@link sajari.engine.query.v1.AggregateResponse.Count.verify|verify} messages.
                         * @param message Count message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: sajari.engine.query.v1.AggregateResponse.ICount, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Count message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Count
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.AggregateResponse.Count;

                        /**
                         * Decodes a Count message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Count
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.AggregateResponse.Count;

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
                        public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.AggregateResponse.Count;

                        /**
                         * Creates a plain object from a Count message. Also converts values to other types if specified.
                         * @param message Count
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: sajari.engine.query.v1.AggregateResponse.Count, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Count to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Buckets. */
                    interface IBuckets {

                        /** Buckets buckets */
                        buckets?: ({ [k: string]: sajari.engine.query.v1.AggregateResponse.Buckets.IBucket }|null);
                    }

                    /** Represents a Buckets. */
                    class Buckets implements IBuckets {

                        /**
                         * Constructs a new Buckets.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: sajari.engine.query.v1.AggregateResponse.IBuckets);

                        /** Buckets buckets. */
                        public buckets: { [k: string]: sajari.engine.query.v1.AggregateResponse.Buckets.IBucket };

                        /**
                         * Creates a new Buckets instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Buckets instance
                         */
                        public static create(properties?: sajari.engine.query.v1.AggregateResponse.IBuckets): sajari.engine.query.v1.AggregateResponse.Buckets;

                        /**
                         * Encodes the specified Buckets message. Does not implicitly {@link sajari.engine.query.v1.AggregateResponse.Buckets.verify|verify} messages.
                         * @param message Buckets message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: sajari.engine.query.v1.AggregateResponse.IBuckets, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Buckets message, length delimited. Does not implicitly {@link sajari.engine.query.v1.AggregateResponse.Buckets.verify|verify} messages.
                         * @param message Buckets message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: sajari.engine.query.v1.AggregateResponse.IBuckets, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Buckets message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Buckets
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.AggregateResponse.Buckets;

                        /**
                         * Decodes a Buckets message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Buckets
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.AggregateResponse.Buckets;

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
                        public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.AggregateResponse.Buckets;

                        /**
                         * Creates a plain object from a Buckets message. Also converts values to other types if specified.
                         * @param message Buckets
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: sajari.engine.query.v1.AggregateResponse.Buckets, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                            constructor(properties?: sajari.engine.query.v1.AggregateResponse.Buckets.IBucket);

                            /** Bucket name. */
                            public name: string;

                            /** Bucket count. */
                            public count: number;

                            /**
                             * Creates a new Bucket instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Bucket instance
                             */
                            public static create(properties?: sajari.engine.query.v1.AggregateResponse.Buckets.IBucket): sajari.engine.query.v1.AggregateResponse.Buckets.Bucket;

                            /**
                             * Encodes the specified Bucket message. Does not implicitly {@link sajari.engine.query.v1.AggregateResponse.Buckets.Bucket.verify|verify} messages.
                             * @param message Bucket message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: sajari.engine.query.v1.AggregateResponse.Buckets.IBucket, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Bucket message, length delimited. Does not implicitly {@link sajari.engine.query.v1.AggregateResponse.Buckets.Bucket.verify|verify} messages.
                             * @param message Bucket message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: sajari.engine.query.v1.AggregateResponse.Buckets.IBucket, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Bucket message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Bucket
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.AggregateResponse.Buckets.Bucket;

                            /**
                             * Decodes a Bucket message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Bucket
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.AggregateResponse.Buckets.Bucket;

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
                            public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.AggregateResponse.Buckets.Bucket;

                            /**
                             * Creates a plain object from a Bucket message. Also converts values to other types if specified.
                             * @param message Bucket
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: sajari.engine.query.v1.AggregateResponse.Buckets.Bucket, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Bucket to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }
                }

                /** Properties of a SearchResponse. */
                interface ISearchResponse {

                    /** SearchResponse reads */
                    reads?: (number|Long|null);

                    /** SearchResponse totalResults */
                    totalResults?: (number|Long|null);

                    /** SearchResponse time */
                    time?: (string|null);

                    /** SearchResponse aggregates */
                    aggregates?: ({ [k: string]: sajari.engine.query.v1.IAggregateResponse }|null);

                    /** SearchResponse results */
                    results?: (sajari.engine.query.v1.IResult[]|null);
                }

                /** Represents a SearchResponse. */
                class SearchResponse implements ISearchResponse {

                    /**
                     * Constructs a new SearchResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.query.v1.ISearchResponse);

                    /** SearchResponse reads. */
                    public reads: (number|Long);

                    /** SearchResponse totalResults. */
                    public totalResults: (number|Long);

                    /** SearchResponse time. */
                    public time: string;

                    /** SearchResponse aggregates. */
                    public aggregates: { [k: string]: sajari.engine.query.v1.IAggregateResponse };

                    /** SearchResponse results. */
                    public results: sajari.engine.query.v1.IResult[];

                    /**
                     * Creates a new SearchResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchResponse instance
                     */
                    public static create(properties?: sajari.engine.query.v1.ISearchResponse): sajari.engine.query.v1.SearchResponse;

                    /**
                     * Encodes the specified SearchResponse message. Does not implicitly {@link sajari.engine.query.v1.SearchResponse.verify|verify} messages.
                     * @param message SearchResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.query.v1.ISearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchResponse message, length delimited. Does not implicitly {@link sajari.engine.query.v1.SearchResponse.verify|verify} messages.
                     * @param message SearchResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.query.v1.ISearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.SearchResponse;

                    /**
                     * Decodes a SearchResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.SearchResponse;

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
                    public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.SearchResponse;

                    /**
                     * Creates a plain object from a SearchResponse message. Also converts values to other types if specified.
                     * @param message SearchResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.query.v1.SearchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Result. */
                interface IResult {

                    /** Result values */
                    values?: ({ [k: string]: sajari.engine.IValue }|null);

                    /** Result score */
                    score?: (number|null);

                    /** Result indexScore */
                    indexScore?: (number|null);
                }

                /** Represents a Result. */
                class Result implements IResult {

                    /**
                     * Constructs a new Result.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.query.v1.IResult);

                    /** Result values. */
                    public values: { [k: string]: sajari.engine.IValue };

                    /** Result score. */
                    public score: number;

                    /** Result indexScore. */
                    public indexScore: number;

                    /**
                     * Creates a new Result instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Result instance
                     */
                    public static create(properties?: sajari.engine.query.v1.IResult): sajari.engine.query.v1.Result;

                    /**
                     * Encodes the specified Result message. Does not implicitly {@link sajari.engine.query.v1.Result.verify|verify} messages.
                     * @param message Result message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.query.v1.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Result message, length delimited. Does not implicitly {@link sajari.engine.query.v1.Result.verify|verify} messages.
                     * @param message Result message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.query.v1.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Result message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Result
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.Result;

                    /**
                     * Decodes a Result message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Result
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.Result;

                    /**
                     * Verifies a Result message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Result message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Result
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.Result;

                    /**
                     * Creates a plain object from a Result message. Also converts values to other types if specified.
                     * @param message Result
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.query.v1.Result, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Result to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnalyseRequest. */
                interface IAnalyseRequest {

                    /** AnalyseRequest searchRequest */
                    searchRequest?: (sajari.engine.query.v1.ISearchRequest|null);

                    /** AnalyseRequest keys */
                    keys?: (sajari.engine.IKey[]|null);
                }

                /** Represents an AnalyseRequest. */
                class AnalyseRequest implements IAnalyseRequest {

                    /**
                     * Constructs a new AnalyseRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.query.v1.IAnalyseRequest);

                    /** AnalyseRequest searchRequest. */
                    public searchRequest?: (sajari.engine.query.v1.ISearchRequest|null);

                    /** AnalyseRequest keys. */
                    public keys: sajari.engine.IKey[];

                    /**
                     * Creates a new AnalyseRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnalyseRequest instance
                     */
                    public static create(properties?: sajari.engine.query.v1.IAnalyseRequest): sajari.engine.query.v1.AnalyseRequest;

                    /**
                     * Encodes the specified AnalyseRequest message. Does not implicitly {@link sajari.engine.query.v1.AnalyseRequest.verify|verify} messages.
                     * @param message AnalyseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.query.v1.IAnalyseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnalyseRequest message, length delimited. Does not implicitly {@link sajari.engine.query.v1.AnalyseRequest.verify|verify} messages.
                     * @param message AnalyseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.query.v1.IAnalyseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnalyseRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnalyseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.AnalyseRequest;

                    /**
                     * Decodes an AnalyseRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnalyseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.AnalyseRequest;

                    /**
                     * Verifies an AnalyseRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnalyseRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnalyseRequest
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.AnalyseRequest;

                    /**
                     * Creates a plain object from an AnalyseRequest message. Also converts values to other types if specified.
                     * @param message AnalyseRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.query.v1.AnalyseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnalyseRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnalyseResponse. */
                interface IAnalyseResponse {

                    /** AnalyseResponse terms */
                    terms?: (sajari.engine.query.v1.AnalyseResponse.ITerms[]|null);

                    /** AnalyseResponse status */
                    status?: (sajari.rpc.IStatus[]|null);
                }

                /** Represents an AnalyseResponse. */
                class AnalyseResponse implements IAnalyseResponse {

                    /**
                     * Constructs a new AnalyseResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: sajari.engine.query.v1.IAnalyseResponse);

                    /** AnalyseResponse terms. */
                    public terms: sajari.engine.query.v1.AnalyseResponse.ITerms[];

                    /** AnalyseResponse status. */
                    public status: sajari.rpc.IStatus[];

                    /**
                     * Creates a new AnalyseResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnalyseResponse instance
                     */
                    public static create(properties?: sajari.engine.query.v1.IAnalyseResponse): sajari.engine.query.v1.AnalyseResponse;

                    /**
                     * Encodes the specified AnalyseResponse message. Does not implicitly {@link sajari.engine.query.v1.AnalyseResponse.verify|verify} messages.
                     * @param message AnalyseResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: sajari.engine.query.v1.IAnalyseResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnalyseResponse message, length delimited. Does not implicitly {@link sajari.engine.query.v1.AnalyseResponse.verify|verify} messages.
                     * @param message AnalyseResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: sajari.engine.query.v1.IAnalyseResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnalyseResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnalyseResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.AnalyseResponse;

                    /**
                     * Decodes an AnalyseResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnalyseResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.AnalyseResponse;

                    /**
                     * Verifies an AnalyseResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnalyseResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnalyseResponse
                     */
                    public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.AnalyseResponse;

                    /**
                     * Creates a plain object from an AnalyseResponse message. Also converts values to other types if specified.
                     * @param message AnalyseResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: sajari.engine.query.v1.AnalyseResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnalyseResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace AnalyseResponse {

                    /** Properties of a Terms. */
                    interface ITerms {

                        /** Terms terms */
                        terms?: (string[]|null);
                    }

                    /** Represents a Terms. */
                    class Terms implements ITerms {

                        /**
                         * Constructs a new Terms.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: sajari.engine.query.v1.AnalyseResponse.ITerms);

                        /** Terms terms. */
                        public terms: string[];

                        /**
                         * Creates a new Terms instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Terms instance
                         */
                        public static create(properties?: sajari.engine.query.v1.AnalyseResponse.ITerms): sajari.engine.query.v1.AnalyseResponse.Terms;

                        /**
                         * Encodes the specified Terms message. Does not implicitly {@link sajari.engine.query.v1.AnalyseResponse.Terms.verify|verify} messages.
                         * @param message Terms message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: sajari.engine.query.v1.AnalyseResponse.ITerms, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Terms message, length delimited. Does not implicitly {@link sajari.engine.query.v1.AnalyseResponse.Terms.verify|verify} messages.
                         * @param message Terms message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: sajari.engine.query.v1.AnalyseResponse.ITerms, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Terms message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Terms
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.engine.query.v1.AnalyseResponse.Terms;

                        /**
                         * Decodes a Terms message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Terms
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.engine.query.v1.AnalyseResponse.Terms;

                        /**
                         * Verifies a Terms message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Terms message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Terms
                         */
                        public static fromObject(object: { [k: string]: any }): sajari.engine.query.v1.AnalyseResponse.Terms;

                        /**
                         * Creates a plain object from a Terms message. Also converts values to other types if specified.
                         * @param message Terms
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: sajari.engine.query.v1.AnalyseResponse.Terms, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Terms to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }
        }
    }

    /** Namespace rpc. */
    namespace rpc {

        /** Properties of a Status. */
        interface IStatus {

            /** Status code */
            code?: (number|null);

            /** Status message */
            message?: (string|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: sajari.rpc.IStatus);

            /** Status code. */
            public code: number;

            /** Status message. */
            public message: string;

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: sajari.rpc.IStatus): sajari.rpc.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link sajari.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sajari.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link sajari.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sajari.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.rpc.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.rpc.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): sajari.rpc.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sajari.rpc.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: sajari.rpc.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: sajari.rpc.IEmpty): sajari.rpc.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link sajari.rpc.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sajari.rpc.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link sajari.rpc.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sajari.rpc.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sajari.rpc.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sajari.rpc.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): sajari.rpc.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sajari.rpc.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

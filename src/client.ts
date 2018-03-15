import {
	Client as GrpcClient,
	Metadata,
	credentials as grpcCredentials,
	loadObject as grpcLoadObject,
	GrpcObject,
	CallCredentials
} from "grpc";

// @ts-ignore
import proto from "../generated/proto-defs";
import { Pipeline } from "./pipeline";

declare var VERSION: string;

const API_ENDPOINT = "api.sajari.com:443";
export const USER_AGENT = `sdk-node-${VERSION}`;

export interface IClient {
	queryClient: GrpcClient;
	storeClient: GrpcClient;
	metadata: Metadata;

	pipeline(name: string): Pipeline;
}

export type ClientOption = (client: Client) => void;

export const withEndpoint = (endpoint: string): ClientOption => {
	return function(client: Client): void {
		client.endpoint = endpoint;
	};
};

export class Client {
	project: string;
	collection: string;
	endpoint: string = API_ENDPOINT;
	queryClient: GrpcClient;
	storeClient: GrpcClient;
	metadata: Metadata;

	constructor(
		project: string,
		collection: string,
		credentials: { key: string; secret: string },
		...options: ClientOption[]
	) {
		this.project = project;
		this.collection = collection;

		this.metadata = new Metadata();
		this.metadata.add("project", project);
		this.metadata.add("collection", collection);

		const creds = grpcCredentials.createFromMetadataGenerator(
			(params, callback) => {
				const md = new Metadata();
				md.add(
					"authorization",
					`keysecret ${credentials.key} ${credentials.secret}`
				);
				callback(null, md);
			}
		);

		options.forEach((option) => option(this));

		this.queryClient = createClient(
			"sajari.api.pipeline.v1.Query",
			this.endpoint,
			creds
		);
		this.storeClient = createClient(
			"sajari.api.pipeline.v1.Store",
			this.endpoint,
			creds
		);
	}

	pipeline(name: string): Pipeline {
		return new Pipeline(this, name);
	}
}

const createClient = (
	service: string,
	endpoint: string,
	creds: CallCredentials
): GrpcClient => {
	const ServiceProto = proto.lookup(service);
	const ServiceClient: GrpcClient = grpcLoadObject(ServiceProto, {
		protobufjsVersion: 6
	});

	// @ts-ignore
	return new ServiceClient(
		endpoint,
		grpcCredentials.combineChannelCredentials(
			grpcCredentials.createSsl(),
			creds
		),
		{
			"grpc.primary_user_agent": USER_AGENT,
			"grpc.default_authority": "api.sajari.com"
		}
	);
};

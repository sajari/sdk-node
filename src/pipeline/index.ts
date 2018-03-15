import { ServiceError } from "grpc";
import { sajari } from "../../generated/proto";

import { ISession } from "../session";
import { IClient } from "../client";
import { Values } from "../utils";

import {
	createSearchRequest,
	processSearchResponse,
	SearchResponse
} from "./search";
import { createAddRequest, processAddResponse, Record, Key } from "./add";

// Pipeline is a handler for a named pipeline.
export class Pipeline {
	client: IClient;
	name: string;

	constructor(client: IClient, name: string) {
		this.client = client;
		this.name = name;
	}

	// search runs a search query defined by a pipline with the given values and
	// tracking configuration.  Returns the query results and returned values (which could have
	// been modified in the pipeline).
	search(values: Values, session: ISession): Promise<SearchResponse> {
		const tracking = session.next(values);

		return new Promise((resolve, reject) => {
			// @ts-ignore
			this.client.queryClient.search(
				createSearchRequest(this.name, values, tracking),
				this.client.metadata,
				(
					err: ServiceError,
					response: sajari.api.pipeline.v1.SearchResponse
				) => {
					if (err) {
						return reject(err);
					}

					const results = processSearchResponse(
						<sajari.api.pipeline.v1.SearchResponse.SearchResponse>response.searchResponse,
						<sajari.api.pipeline.v1.Token[]>response.tokens
					);
					return resolve({ results, values: response.values });
				}
			);
		});
	}

	// Add a record to a collection using a pipeline, returning the unique key which can be used
	// to retrieve the respective record.
	add(values: Values, record: Record): Promise<Key> {
		return new Promise((resolve, reject) => {
			// @ts-ignore
			this.client.storeClient.add(
				createAddRequest(this.name, values, [record]),
				this.client.metadata,
				(
					err: ServiceError,
					response: sajari.api.pipeline.v1.AddResponse
				) => {
					if (err) {
						return reject(err);
					}

					const res = processAddResponse(
						<sajari.engine.store.record.AddResponse>response.response
					);
					if (res instanceof Error) {
						return reject(res);
					}

					return resolve(<Key>res);
				}
			);
		});
	}
}

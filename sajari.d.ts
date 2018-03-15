declare namespace sajari {
	export class Client {
		constructor(
			project: string,
			collection: string,
			credentials: { key: string; secret: string }
		);

		pipeline(name: string): Pipeline;
	}

	export class Pipeline {
		search(values: Values, session: ISession): Promise<SearchResponse>;
		add(values: Values, record: Record): Promise<Key>;
	}

	export interface ISession {
		next(values: Values): Tracking;
		reset(): void;
	}

	export const TrackingNone = "";
	export const TrackingClick = "CLICK";
	export const TrackingPosNeg = "POS_NEG";

	export type TrackingType = "" | "CLICK" | "POS_NEG";

	export type Tracking = {
		type: TrackingType;
		queryId: string;
		sequence: number;
		field: string;
		data: Values;
	};

	export type Values = { [k: string]: string };

	export type Key = {
		field: string;
		value: any;
	};

	export type Record = { [id: string]: any };

	export type Result = {
		score: number;
		indexScore: number;
		values: { [id: string]: any };
		tokens: { [id: string]: any };
	};

	export type SearchResults = {
		reads: number;
		totalResults: number;
		time: number;
		aggregates: { [id: string]: any } | null;
		results: Result[] | null;
	};

	export type SearchResponse = {
		results: SearchResults;
		values: Values | null;
	};
}

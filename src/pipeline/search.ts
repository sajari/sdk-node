import { sajari } from "../../generated/proto";

import {
	Tracking,
	TrackingType,
	TrackingNone,
	TrackingClick,
	TrackingPosNeg
} from "../session";

import { Values } from "../utils";

export type SearchResult = {
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
	results: SearchResult[] | null;
};

export type SearchResponse = {
	results: SearchResults;
	values: Values | null;
};

// const createTrackingType = (
// 	type: TrackingType
// ): sajari.api.pipeline.v1.SearchRequest.Tracking.Type => {
// 	switch (type) {
// 		case TrackingNone:
// 			return sajari.api.pipeline.v1.SearchRequest.Tracking.Type.NONE;
// 		case TrackingClick:
// 			return sajari.api.pipeline.v1.SearchRequest.Tracking.Type.CLICK;
// 		case TrackingPosNeg:
// 			return sajari.api.pipeline.v1.SearchRequest.Tracking.Type.POS_NEG;
// 		default:
// 			return sajari.api.pipeline.v1.SearchRequest.Tracking.Type.NONE;
// 	}
// };

export const createSearchRequest = (
	pipeline: string,
	values: Values,
	tracking: Tracking
): { [k: string]: any } => {
	return {
		pipeline: { name: pipeline },
		tracking,
		values
	};
};

export const processSearchResponse = (
	response: sajari.api.pipeline.v1.SearchResponse.SearchResponse,
	tokens: sajari.api.pipeline.v1.Token[]
): SearchResults => {
	const results = response.results.map(
		(
			result: sajari.api.pipeline.v1.SearchResponse.SearchResponse.Result,
			index: number
		): SearchResult => {
			const values: Values = Object.keys(result.values).reduce(
				(obj: Values, key): Object => {
					obj[key] = valueFromProto(<sajari.engine.Value>result
						.values[key]);
					return obj;
				},
				{}
			);

			const res = {
				score: result.score,
				indexScore: result.indexScore,
				values,
				tokens: {}
			};

			if (tokens.length > index) {
				const token = <sajari.api.pipeline.v1.Token>tokens[index];
				switch (token.token) {
					case "click":
						res.tokens = { click: token.click.token };
						break;

					case "posNeg":
						res.tokens = {
							pos: token.posNeg.pos,
							neg: token.posNeg.neg
						};
						break;

					default:
						break;
				}
			}

			return res;
		}
	);

	return {
		reads: <number>response.reads,
		totalResults: <number>response.totalResults,
		time: parseFloat(response.time),
		aggregates: null, // TODO(@benhinchley): process aggregates response
		results
	};
};

const valueFromProto = (v: sajari.engine.Value): any => {
	switch (v.value) {
		case "single":
			return v.single;
		case "repeated":
			return v.repeated.values.join(",");
		default:
			break;
	}
};

import { Values } from "./utils";

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

export interface ISession {
	next(values: Values): Tracking;
	reset(): void;
}

const randString = (): string => {
	let queryID = "";
	for (let i = 0; i < 16; i++) {
		queryID += "abcdefghijklmnopqrstuvwxyz0123456789".charAt(
			Math.floor(Math.random() * 36)
		);
	}
	return queryID;
};

export class Session implements ISession {
	queryID: string = "";
	sequence: number = 0;

	trackingType: TrackingType;
	field: string;
	sessionData: Values;

	constructor(trackingType: TrackingType, field: string, data: Values = {}) {
		this.trackingType = trackingType;
		this.field = field;
		this.sessionData = data;
	}

	next(values: Values): Tracking {
		if (this.queryID === "") {
			this.queryID = randString();
			this.sequence = 0;
		} else {
			this.sequence++;
		}

		return {
			type: this.trackingType,
			queryId: this.queryID,
			sequence: this.sequence,
			field: this.field,
			data: this.sessionData
		};
	}

	reset(): void {
		this.queryID = "";
		this.sequence = 0;
	}
}

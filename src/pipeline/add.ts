import { sajari } from "../../generated/proto";
import { Values } from "../utils";

export type Key = {
	field: string;
	value: any;
};

export type Record = { [id: string]: any };

export const createAddRequest = (
	pipeline: string,
	values: Values,
	records: Record[]
): { [k: string]: any } => {
	return {
		pipeline: { name: pipeline },
		values,
		records
	};
};

export const processAddResponse = (
	response: sajari.engine.store.record.AddResponse
): Error | Key => {
	return { field: "", value: "" };
};

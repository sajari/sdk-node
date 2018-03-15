import { sajari } from "../../generated/proto";
import { Values, errorFromRecordStatus, valueFromProto } from "../utils";

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
	const keys = response.keys
		.map((key) => {
			if (
				(<sajari.engine.Key>key).field === "" &&
				(<sajari.engine.Key>key).value === undefined
			) {
				return null;
			}
			const value = valueFromProto(<sajari.engine.Value>key.value);
			if (!value) {
				return null;
			}
			return { field: (<sajari.engine.Key>key).field, value };
		})
		.filter((x) => !!x);

	const key = keys[0];
	if (!key) {
		const err = errorFromRecordStatus(<sajari.rpc.Status[]>response.status);
		if (!!err) return <Error>err;
	}
	return <Key>key;
};

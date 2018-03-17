import { sajari } from "../generated/proto";
import { ServiceError, status as grpcCodes } from "grpc";

export type Values = { [id: string]: string };

export const valueFromProto = (
	v: sajari.engine.Value
): string[] | string | null => {
	switch (v.value) {
		case "single":
			return v.single;
		case "repeated":
			return (<sajari.engine.Value.Repeated>v.repeated).values;
		default:
			return null;
	}
};

export const errorFromRecordStatus = (
	status: sajari.rpc.Status[]
): MultiError | null => {
	const errors = status
		.map((status) => {
			switch (status.code) {
				case grpcCodes.OK:
					return null;
				case grpcCodes.NOT_FOUND:
					return new Error("sajari: no such record");
				default:
					const error: ServiceError = new Error(status.message);
					error.code = status.code;
					return error;
			}
		})
		.filter((x) => !!x);

	if (errors.length < 1) return null;
	return new MultiError(<Error[]>errors);
};

export class MultiError extends Error {
	errors: Error[];

	constructor(errors: Error[]) {
		super();

		this.errors = errors;
		this.message = this._message();
	}

	private _message(): string {
		let n = this.errors.length;
		let msg = this.errors[0].message;

		if (n === 1) {
			return msg;
		} else if (n === 2) {
			return `${msg} (and 1 other error)`;
		}
		return `${msg} (and ${n - 1} other errors)`;
	}
}

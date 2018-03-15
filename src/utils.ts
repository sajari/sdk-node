import { sajari } from "../generated/proto";
import { ServiceError, status as grpcCodes } from "grpc";

export type Values = { [id: string]: string | string[] };

export const valueFromProto = (
	v: sajari.engine.Value
): string[] | string | null => {
	switch (v.value) {
		case "single":
			return v.single;
		case "repeated":
			return v.repeated.values;
		default:
			return null;
	}
};

export const errorFromRecordStatus = (
	status: sajari.rpc.Status[]
): Error | null => {
	const errors = status
		.map((status) => {
			switch (status.code) {
				case grpcCodes.OK:
					return null;
				case grpcCodes.NOT_FOUND:
					return new Error("no such record");
				default:
					const error: ServiceError = new Error(status.message);
					error.code = status.code;
					return error;
			}
		})
		.filter((x) => !!x);

	if (errors.length < 1) return null;
	return errors[0];
};

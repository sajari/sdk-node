import { sajari } from "../../generated/proto";
import { TrackingType } from "./session";

describe("TrackingType", () => {
  test("TrackingType.toProto", () => {
    expect(TrackingType.toProto(TrackingType.Click)).toBe(
      sajari.api.query.v1.SearchRequest.Tracking.Type.CLICK
    );
  });
});

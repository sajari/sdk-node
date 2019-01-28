import { sajari } from "../../generated/proto";
import { TrackingType } from "./session";
import { createSearchRequest, parseSearchResponse } from "./search";

test("createSearchRequest", () => {
  let req = createSearchRequest(
    { name: "test" },
    { q: "hello world" },
    { type: TrackingType.None }
  );
  let proto = sajari.api.pipeline.v1.SearchRequest.create({
    pipeline: { name: "test" },
    values: { q: "hello world" },
    tracking: sajari.api.query.v1.SearchRequest.Tracking.create({
      type: sajari.api.query.v1.SearchRequest.Tracking.Type.NONE
    })
  });

  expect(req).toEqual(proto);
});

test("parseSearchResponse", () => {
  let proto = sajari.api.pipeline.v1.SearchResponse.create({
    searchResponse: sajari.engine.query.v1.SearchResponse.create({
      reads: 1,
      time: "0.1",
      totalResults: 1,
      results: [
        sajari.engine.query.v1.Result.create({
          score: 0.8,
          indexScore: 1,
          values: {
            foo: sajari.engine.Value.create({ single: "bar" })
          }
        })
      ]
    })
  });

  let expected = {
    reads: 1,
    time: 0.1,
    totalResults: 1,
    results: [
      { score: 0.8, indexScore: 1, values: { foo: "bar" }, tokens: undefined }
    ],
    aggregates: {},
    aggregateFilters: {}
  };

  let res = parseSearchResponse(proto);
  expect(res).toEqual(expected);
});

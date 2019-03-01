import { sajari, google } from "../../generated/proto";
import { parseSearchResponse } from "./search";

test("parseSearchResponse", () => {
  let proto = sajari.pipeline.v2.SearchResponse.create({
    queryResults: sajari.pipeline.v2.QueryResults.create({
      reads: 1,
      latency: google.protobuf.Duration.create({ seconds: 100 }),
      totalResults: 1,
      results: [
        sajari.engine.v2.QueryResult.create({
          score: 0.8,
          indexScore: 1,
          values: {
            foo: sajari.engine.v2.Value.create({ single: "bar" })
          }
        })
      ]
    })
  });

  let expected = {
    reads: 1,
    latency: 100,
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

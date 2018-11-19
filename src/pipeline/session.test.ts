import { sajari } from "../../generated/proto";
import { TrackingType, Token, DefaultSession } from "./session";

describe("TrackingType", () => {
  test.each([
    [TrackingType.Click, sajari.api.query.v1.SearchRequest.Tracking.Type.CLICK],
    [
      TrackingType.PosNeg,
      sajari.api.query.v1.SearchRequest.Tracking.Type.POS_NEG
    ],
    [TrackingType.None, sajari.api.query.v1.SearchRequest.Tracking.Type.NONE],
    ["invalid", sajari.api.query.v1.SearchRequest.Tracking.Type.NONE]
  ])("TrackingType.toProto", (arg, expected) => {
    expect(TrackingType.toProto(arg)).toBe(expected);
  });
});

describe("Token", () => {
  test.each([
    [
      sajari.api.query.v1.Token.create({
        click: sajari.api.query.v1.Token.Click.create({ token: "123456789" })
      }),
      { click: "123456789" }
    ],
    [
      sajari.api.query.v1.Token.create({
        posNeg: sajari.api.query.v1.Token.PosNeg.create({
          pos: "123456789",
          neg: "123456789"
        })
      }),
      { pos: "123456789", neg: "123456789" }
    ]
  ])("Token.fromProto valid", (arg, expected) => {
    expect(Token.fromProto(arg)).toEqual(expected);
  });

  test.each([
    [sajari.api.query.v1.Token.create({})],
    // @ts-ignore: purposefully incorrect value being passed
    [sajari.api.query.v1.Token.create({ retro: "this" })],
    [
      sajari.api.query.v1.Token.create({
        click: sajari.api.query.v1.Token.Click.create({})
      })
    ],
    [
      sajari.api.query.v1.Token.create({
        posNeg: sajari.api.query.v1.Token.PosNeg.create({
          neg: "123456789"
        })
      })
    ]
  ])("Token.fromProto invalid", (arg) => {
    expect(() => Token.fromProto(arg)).toThrowError();
  });
});

describe("DefaultSession", () => {
  const session = new DefaultSession(TrackingType.Click, "id", {
    hello: "world"
  });
  test("next", () => {
    const tracking = session.next({ foo: "bar" });
    expect(tracking.field).toBe("id");
  });
});

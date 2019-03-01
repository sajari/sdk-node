import { sajari } from "../../generated/proto";
import {
  TrackingType,
  TrackingTypeToProto,
  TokenFromProto,
  DefaultSession,
  Token,
  PosNegToken,
  ClickToken
} from "./session";

describe("TrackingType", () => {
  test.each<[TrackingType | string, sajari.pipeline.v2.Tracking.Type]>([
    [TrackingType.Click, sajari.pipeline.v2.Tracking.Type.CLICK],
    [TrackingType.PosNeg, sajari.pipeline.v2.Tracking.Type.POS_NEG],
    [TrackingType.None, sajari.pipeline.v2.Tracking.Type.NONE],
    ["invalid", sajari.pipeline.v2.Tracking.Type.NONE]
  ])("TrackingType.toProto", (arg, expected) => {
    expect(TrackingTypeToProto(arg as any)).toBe(expected);
  });
});

describe("Token", () => {
  test.each<[sajari.pipeline.v2.Token, Token]>([
    [
      sajari.pipeline.v2.Token.create({
        click: sajari.pipeline.v2.Token.Click.create({ token: "123456789" })
      }),
      { click: "123456789" }
    ],
    [
      sajari.pipeline.v2.Token.create({
        posNeg: sajari.pipeline.v2.Token.PosNeg.create({
          pos: "123456789",
          neg: "123456789"
        })
      }),
      { pos: "123456789", neg: "123456789" }
    ]
  ])("TokenFromProto valid", (arg, expected) => {
    expect(TokenFromProto(arg)).toEqual(expected);
  });

  test.each([
    [sajari.pipeline.v2.Token.create({})],
    // @ts-ignore: purposefully incorrect value being passed
    [sajari.pipeline.v2.Token.create({ retro: "this" })],
    [
      sajari.pipeline.v2.Token.create({
        click: sajari.pipeline.v2.Token.Click.create({})
      })
    ],
    [
      sajari.pipeline.v2.Token.create({
        posNeg: sajari.pipeline.v2.Token.PosNeg.create({
          neg: "123456789"
        })
      })
    ]
  ])("TokenFromProto invalid", (arg) => {
    expect(() => TokenFromProto(arg)).toThrowError();
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

import { skipSpace, parseExpression } from "./12-laguage";

describe("test skipSpace", () => {
  it("skips the initial spaces", () => {
    expect(skipSpace("   2 ")).toEqual("2 ");
  });

  it("leaves the spaces in the end of the sting", () => {
    expect(skipSpace("2   ")).toEqual("2   ");
  });
});

describe("parseExpression", () => {
  const assert = parseExpression("string");
  const result = {
    expr: {
      name: "string",
      type: "word",
    },
    rest: "",
  };
  expect(assert).toStrictEqual(result);
});

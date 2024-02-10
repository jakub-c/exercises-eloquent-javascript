import jest from "jest-mock";

import { range } from "./utils";

it("returns an array of integers from 0 to 5", () => {
  const assert = range(0, 5);

  expect(assert).toStrictEqual([0, 1, 2, 3, 4]);
});

it("returns an array of integers from 1 to 5", () => {
  const assert = range(1, 5);

  expect(assert).toStrictEqual([1, 2, 3, 4]);
});

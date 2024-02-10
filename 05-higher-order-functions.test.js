import jest from "jest-mock";

import {
  flatten,
  loop,
  every,
  dominantDirection,
} from "./05-higher-order-functions.js";

describe("Flattening", () => {
  test("flatten returns one dimensional array", () => {
    const assert = flatten([[1, 2, 3], [4, 5], [6]]);

    expect(assert).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe("Your own loop", () => {
  test("loop prints out 3, 2, 1 to the console", () => {
    console.log = jest.fn();
    loop(
      3,
      (n) => n > 0,
      (n) => n - 1,
      console.log
    );

    expect(console.log.mock.calls[0][0]).toBe(3);
    expect(console.log.mock.calls[1][0]).toBe(2);
    expect(console.log.mock.calls[2][0]).toBe(1);
  });
});

describe("Everything", () => {
  test("function every returns true because all elements are lower than 10", () => {
    const assert = every([1, 3, 5], (n) => n < 10);
    expect(assert).toBe(true);
  });

  test("function every returns false because not all elements are lower than 10", () => {
    const assert = every([2, 4, 16], (n) => n < 10);
    expect(assert).toBe(false);
  });

  test("function every returns true for emoty array", () => {
    const assert = every([], (n) => n < 10);
    expect(assert).toBe(true);
  });
});

describe("Dominant writing direction", () => {
  test("dominant direction of Hello! is ltr", () => {
    const assert = dominantDirection("Hello!");
    expect(assert).toBe("ltr");
  });

  test("dominant direction of 'Hey, مساء الخير' is rtl", () => {
    const assert = dominantDirection("Hey, مساء الخير");
    expect(assert).toBe("rtl");
  });
});

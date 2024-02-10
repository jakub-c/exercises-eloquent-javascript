import { min, isEven, countChar, countBs } from "./03-functions.js";

describe("Minimum", () => {
  it("returns 0", () => {
    const assert = min(0, 10);

    expect(assert).toEqual(0);
  });

  it("returns -10", () => {
    const assert = min(0, -10);

    expect(assert).toEqual(-10);
  });
});

describe("Recursion", () => {
  it("returns true for 50", () => {
    const assert = isEven(50);

    expect(assert).toBe(true);
  });

  it("returns true for 75", () => {
    const assert = isEven(75);

    expect(assert).toBe(false);
  });

  it("returns false for -1", () => {
    const assert = isEven(-1);

    expect(assert).toBe(false);
  });

  it("returns false for -75", () => {
    const assert = isEven(-75);

    expect(assert).toBe(false);
  });
});

describe("Bean counting", () => {
  it("finds 4 occurrences of character k", () => {
    const assert = countChar("kakkerlak", "k");

    expect(assert).toBe(4);
  });

  it("finds 2 occurrences of character B", () => {
    const assert = countBs("BBC");

    expect(assert).toBe(2);
  });
});

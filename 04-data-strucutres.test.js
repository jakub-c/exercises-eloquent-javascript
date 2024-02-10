import {
  rangeInclusive,
  sum,
  reverseArray,
  reverseArrayInPlace,
  arrayToList,
  listToArray,
  prepend,
  nth,
  deepEqual,
} from "./04-data-structures.js";

describe("The sum of a range", () => {
  test("rangeInclusive returns an array with numbers from 1 to 10 (inclusive)", () => {
    const assert = rangeInclusive(0, 10);

    expect(assert).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test("rangeInclusive returns an array with numbers from 1 to 10 (inclusive), separated by the step of 2", () => {
    const assert = rangeInclusive(1, 10, 2);

    expect(assert).toEqual([1, 3, 5, 7, 9]);
  });

  test("rangeInclusive works with negative numbers", () => {
    const assert = rangeInclusive(5, 2, -1);

    expect(assert).toEqual([5, 4, 3, 2]);
  });

  test("sum returns a sum of all numbers in an array", () => {
    const assert = sum([1, 2, 3]);

    expect(assert).toEqual(6);
  });

  test("sum of range from 1 to 10 returns 55", () => {
    const assert = sum(rangeInclusive(1, 10));

    expect(assert).toEqual(55);
  });
});

describe("Reversing an array", () => {
  test("reverseArray returns a new reversed array", () => {
    const arr = [1, 2, 3, 4, 5];
    const assert = reverseArray(arr);

    expect(arr).toEqual([1, 2, 3, 4, 5]);
    expect(assert).toEqual([5, 4, 3, 2, 1]);
  });

  test("reverseArrayInPlace modifies the array given as the argument", () => {
    let arrayValue = [1, 2, 3, 4, 5];
    reverseArrayInPlace(arrayValue);

    expect(arrayValue).toEqual([5, 4, 3, 2, 1]);
  });
});

describe("A list", () => {
  test("arrayToList returns a list", () => {
    const assert = arrayToList([10, 20]);
    const result = {
      value: 10,
      rest: { value: 20, rest: null },
    };

    expect(assert).toEqual(result);
  });

  test("arrayToList returns a list", () => {
    const assert = arrayToList([10, 20, 30]);
    const result = {
      value: 10,
      rest: { value: 20, rest: { value: 30, rest: null } },
    };

    expect(assert).toEqual(result);
  });

  test("listToArray returns an array", () => {
    const assert = listToArray(arrayToList([10, 20, 30]));

    expect(assert).toEqual([10, 20, 30]);
  });
  test("prepend returns a list", () => {
    const assert = prepend(10, prepend(20, null));

    expect(assert).toEqual({ value: 10, rest: { value: 20, rest: null } });
  });

  test("nth returns 20, a number on the first position in the list", () => {
    const assert = nth(arrayToList([10, 20, 30]), 1);

    expect(assert).toEqual(20);
  });

  test("nth returns undefined, because the the selected position doesn't exist", () => {
    const assert = nth(arrayToList([10, 20, 30]), 3);

    expect(assert).toBe(undefined);
  });
});

describe("Deep comparison", () => {
  test("deepEqual returns true for two objects that are the same", () => {
    const obj = { here: { is: "an" }, object: 2 };
    const assert = deepEqual(obj, obj);
    expect(assert).toBe(true);
  });

  test("deepEqual returns false for different objects", () => {
    const obj = { here: { is: "an" }, object: 2 };
    const assert = deepEqual(obj, { here: 1, object: 2 });

    expect(assert).toBe(false);
  });

  test("deepEqual returns true for two same objects declared separatley", () => {
    const obj = { here: { is: "an" }, object: 2 };
    const assert = deepEqual(obj, { here: { is: "an" }, object: 2 });

    expect(assert).toBe(true);
  });

  test("deepEqual returns false for a second object with an extra value", () => {
    const obj = { here: { is: "an" }, object: 2 };
    const assert = deepEqual(obj, {
      here: { is: "an" },
      object: 2,
      extraVal: true,
    });

    expect(assert).toBe(false);
  });
});

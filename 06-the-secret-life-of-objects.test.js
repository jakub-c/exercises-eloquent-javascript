import { Group, Vec } from "./06-the-secret-life-of-objects.js";

// test("flj", () => {
//   const assert = new Vec(1, 2).plus(new Vec(2, 3));

//   expect(assert.x).toBe(3);
//   expect(assert.y).toBe(5);
// });

describe("Groups", () => {
  test("10 exists in the Group created from a [10,20] array", () => {
    const group = Group.from([10, 20]);
    const assert = group.has(10);

    expect(assert).toBe(true);
  });

  test("30 does not exist in the Group created from a [10,20] array", () => {
    const group = Group.from([10, 20]);
    const assert = group.has(30);

    expect(assert).toBe(false);
  });

  test("10 does not exist after re-adding it and removing from the Group created from a [10,20] array", () => {
    const group = Group.from([10, 20]);
    group.add(10);
    group.delete(10);
    const assert = group.has(10);

    expect(assert).toBe(false);
  });
});

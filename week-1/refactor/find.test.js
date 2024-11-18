// Refactored version of find should still pass the tests below:

const find = require("./find.js");

test("returns index when target is in array", () => {
  const currentOutput = find(["a", "b", "o", "d", "i", "j", "f", "c"], "c");
  const targetOutput = 7;

  expect(currentOutput).toBe(targetOutput);
});

test("returns -1 when target not in array", () => {
  const currentOutput = find([1, 2, 3, 4], 9);
  const targetOutput = -1;

  expect(currentOutput).toBe(targetOutput);
});

test("returns index of first match", () => {
  const currentOutput = find([3, 2, 2, 3, 1, 6, 2], 1);
  const targetOutput = 4;

  expect(currentOutput).toBe(targetOutput);
});

test("returns -1 for empty array", () => {
  const currentOutput = find([]);
  const targetOutput = -1;

  expect(currentOutput).toBe(targetOutput);
});

test("searches for null", () => {
  const currentOutput = find(["b", "z", "a", "l", "t", null], null);
  const targetOutput = 5;

  expect(currentOutput).toBe(targetOutput);
});

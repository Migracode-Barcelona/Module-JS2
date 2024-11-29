/**
 * tally array
 *
 * In this task, you'll need to implement a function called tally
 * that will take a list of items and count the frequency of each item
 * in an array
 *
 * For example:
 *
 * tally(['a']), target output: { a: 1 }
 * tally(['a','a','a']), target output: { a: 3 }
 * tally(['a','a','b','c']), target output: { a : 2, b: 1, c: 1 }
 */

// Acceptance criteria:

// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item

// Given an empty array
// When passed to tally
// Then it should return an empty object

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error

const tally = require("./tally");

// Test for valid inputs
test("returns correct counts for a single item array", () => {
  expect(tally(["a"])).toEqual({ a: 1 });
});

test("returns correct counts for multiple identical items", () => {
  expect(tally(["a", "a", "a"])).toEqual({ a: 3 });
});

test("returns correct counts for multiple unique items", () => {
  expect(tally(["a", "a", "b", "c"])).toEqual({ a: 2, b: 1, c: 1 });
  expect(tally(["x", "y", "z"])).toEqual({ x: 1, y: 1, z: 1 });
});

// Test for an empty array
test("returns an empty object for an empty array", () => {
  expect(tally([])).toEqual({});
});

// Test for arrays with mixed types
test("returns correct counts for arrays with different types of items", () => {
  expect(tally([1, "a", 1, "b", "a"])).toEqual({ 1: 2, a: 2, b: 1 });
  expect(tally([true, false, true, null])).toEqual({
    true: 2,
    false: 1,
    null: 1,
  });
});

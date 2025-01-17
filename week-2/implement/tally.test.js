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

const tally = require("./tally");

// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item
test("Given a function called tally, when passed an array of items, then it should return an object containing the count for each unique item", () => {
  expect(tally(["a", "b", "c"])).toEqual({ a: 1, b: 1, c: 1 });
});

// Given an empty array
// When passed to tally
// Then it should return an empty object
test("Given an empty array, when passed to tally, then it should return an empty object", () => {
  expect(tally([])).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("Given an array with duplicate items, when passed to tally, then it should return counts for each unique item", () => {
  expect(tally(["a", "a", "b", "b", "b"])).toEqual({ a: 2, b: 3 });
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("Given an invalid input like a string, when passed to tally, then it should throw an error", () => {
  expect(() => tally("invalid input")).toThrow("Input must be an array");
});

// Given an array with mixed data types
// When passed to tally
// Then it should count each unique item

test("Given an array with mixed data types, when passed to tally, then it should count each unique item", () => {
  expect(tally(["a", 3, 4, "b", 3])).toEqual({ a: 1, 3: 2, 4: 1, b: 1 });
});

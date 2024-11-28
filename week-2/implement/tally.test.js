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

test("tallies a single item in an array", () => {
  expect(tally(["a"])).toEqual({ a: 1 });
});
test("tallies an array with duplicate items", () => {
  expect(tally(["a", "a", "a"])).toEqual({ a: 3 });
});
test("Given an empty array,it should return an empty object", () => {
  expect(tally([])).toEqual({});
});
test("Given an invalid input,it should throw an error", () => {
  expect(() => tally("invalid")).toThrow(
    "Invalid input,input must be an array"
  );
  expect(() => tally(123)).toThrow("Invalid input,input must be an array");
  expect(() => tally(null)).toThrow("Invalid input,input must be an array");
});

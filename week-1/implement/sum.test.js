/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum");
// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0

// Given an array with just one number
// When passed to the sum function
// Then it should return that number

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
// Example usage

describe("Apply sum to different criteria", () => {
  test("given an empty array", () => {
    expect(sum([])).toEqual(0);
  });

  test("Given an array with just one number", () => {
    expect(sum([60])).toEqual(60);
  });

  test("given an array with numeric and non-numerical values", () => {
    expect(sum(["Lesotho", -60, "Australia", 90])).toEqual(30);
  });

  test("given an array with positive and negative numbers", () => {
    expect(sum([-30, -70, 500, 470])).toEqual(870);
  });
});

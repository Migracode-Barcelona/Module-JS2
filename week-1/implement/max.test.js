/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 80 (sum ignores any non-numerical elements)
*/

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
//test.todo("given an empty array, returns -Infinity");

// Given an array with one number
// When passed to the max function
// Then it should return that number

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

const max = require("./max.js");

describe("Apply max to different criteria", () => {
  test("given an empty array", () => {
    expect(max([])).toEqual(-Infinity);
  });

  test("given an array with positive and negative numbers", () => {
    expect(max([-9, -60, -10, 0])).toEqual(0);
  });

  test("given an array with numeric and non-numerical values", () => {
    expect(max(["Lesotho", -60, "Australia", 90])).toEqual(90);
  });

  test("given an array with different numbers", () => {
    expect(max([30, 70, 500, 470])).toEqual(500);
  });
});

/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)
*/
const max = require("./max");
describe('max', () => {
  
  // Test when the array is empty
  test('returns -Infinity when the array is empty', () => {
    expect(max([])).toBe(-Infinity);
  });

  // Test when the array contains both positive and negative numbers
  test('returns the largest number when the array contains both positive and negative numbers', () => {
    expect(max([1, -2, 3, -5, 4])).toBe(4); // Largest number is 4
  });

  // Test when the array contains decimal numbers
  test('returns the largest decimal number', () => {
    expect(max([1.2, 3.5, -1.5, 4.1])).toBe(4.1); // Largest decimal is 4.1
  });

  // Test when the array contains non-numeric values
  test('returns the largest number and ignores non-numeric values', () => {
    expect(max([10, "apple", 5, "banana", 7, null, true, undefined])).toBe(10); // Largest number is 10
    expect(max([null, "test", true, "123", 25, 50])).toBe(50); // Largest number is 50
  });

  // Test when the array contains only non-numeric values
  test('returns -Infinity if there are no numeric values', () => {
    expect(max(["apple", "banana", "cherry", true, null])).toBe(-Infinity); // No numeric values
  });

  // Test when the array contains only one number
  test('returns the only element if the array has one number', () => {
    expect(max([42])).toBe(42); // Only one number
  });

  // Test when the array contains all the same number
  test('returns the number if all elements are the same', () => {
    expect(max([7, 7, 7, 7])).toBe(7); // All elements are the same
  });
});


// Given an empty array
// When passed to the max function
// Then it should return -Infinity

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

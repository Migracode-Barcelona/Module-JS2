/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

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
// Import the sum function if it’s in a different file
// const sum = require('./path/to/your/sumFunction');
const sum = require("./sum");
describe("sum function", () => {
    test("Given an empty array, it should return 0", () => {
        expect(sum([])).toBe(0);
    });

    test("Given an array with just one number, it should return that number", () => {
        expect(sum([10])).toBe(10);
    });

    test("Given an array containing negative numbers, it should return the correct total sum", () => {
        expect(sum([10, -5, -5])).toBe(0);
    });

    test("Given an array with decimal/float numbers, it should return the correct total sum", () => {
        expect(sum([1.5, 2.5, 3.5])).toBe(7.5);
    });

    test("Given an array containing non-number values, it should ignore the non-numerical values and return the sum of the numerical elements", () => {
        expect(sum([10, "a", true, 20, null, undefined, 30])).toBe(60);
    });
});

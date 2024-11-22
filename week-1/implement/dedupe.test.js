const removeDuplicates = require("./dedupe");
describe("removeDuplicate",() =>{
    test("removes duplicate number from an array",() =>{
         expect(removeDuplicates([1, 2, 3, 3, 4, 5, 1])).toEqual([1, 2, 3, 4, 5]);
    });
 test("removes duplicate characters from an array", () => {
        expect(removeDuplicates(['a', 'b', 'a', 'c', 'b'])).toEqual(['a', 'b', 'c']);
    });

    test("works with a mixed array of numbers and characters", () => {
        expect(removeDuplicates([1, 'a', 2, 'a', 3, 'b', 1])).toEqual([1, 'a', 2, 3, 'b']);
    });

    test("returns an empty array if the input is an empty array", () => {
        expect(removeDuplicates([])).toEqual([]);
    });

    test("returns the same array if there are no duplicates", () => {
        expect(removeDuplicates([1, 2, 3, 'a', 'b'])).toEqual([1, 2, 3, 'a', 'b']);
    });

    test("removes duplicates from an array with only duplicates", () => {
        expect(removeDuplicates([5, 5, 5, 5])).toEqual([5]);
    });
})
/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values

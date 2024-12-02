const dedupe = require("./dedupe.js");
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
//test.todo("given an empty array, it returns an empty array");

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values


describe("dedupe function", () => {
    
    test("given an empty array, it returns an empty array", () => {
        // Arrange
        const input = [];
        const expected = [];

        // Act
        const result = dedupe(input);

        // Assert
        expect(result).toEqual(expected);
    });

    test("given an array with no duplicates, it returns a copy of the original array", () => {
        // Arrange
        const input = [1, 2, 3];
        const expected = [1, 2, 3];

        // Act
        const result = dedupe(input);

        // Assert
        expect(result).toEqual(expected);
        expect(result).not.toBe(input);  ac
    });

    test("given an array with strings or numbers, it removes the duplicate values", () => {
        // Arrange
        const input = ['a', 'b', 'a', 1, 2, 2, 3];
        const expected = ['a', 'b', 1, 2, 3];

        // Act
        const result = dedupe(input);

        // Assert
        expect(result).toEqual(expected);
    });
});

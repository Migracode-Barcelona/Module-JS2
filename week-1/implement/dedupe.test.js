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
test.todo("given an empty array, it returns an empty array");

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values

describe("Apply dedupe to different criteria", () => {
  test("given an empty array", () => {
    expect(dedupe([])).toStrictEqual([]);
  });

  test("given an array with no duplicates", () => {
    expect(dedupe([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test("given an array with strings/ numbers of duplicates", () => {
    expect(
      dedupe(["Flour", "Milk", "Butter", "Bread", "Milk", "Sardines", "Flour"])
    ).toEqual(["Flour", "Milk", "Butter", "Bread", "Sardines"]);

    expect(dedupe([9, 8, 7, 6, 5, 8, 8, 0, 5, 4, 0, 3, 2, 2, 2, 2, 1])).toEqual(
      [9, 8, 7, 6, 5, 0, 4, 3, 2, 1]
    );
  });
});

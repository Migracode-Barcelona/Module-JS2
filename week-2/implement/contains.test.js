const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({ a : 1, b: 2 },'a') // returns true
as the object contains a key of 'a'

E.g. contains({a : 1, b : 2},'c') // returns false
as the object doesn't contains a key of 'c'
*/

// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise

// Given an empty object
// When passed to contains
// Then it should return false

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

// Given invalid parameters like arrays
// When passed to contains
// Then it should return false or throw an error

describe("contains function", () => {
  // Test for valid inputs
  test("returns true when the object contains the specified property", () => {
    expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
  });

  test("returns false when the object does not contain the specified property", () => {
    expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
    expect(contains({ x: 42 }, "y")).toBe(false);
  });

  // Test for empty objects
  test("returns false when the object is empty", () => {
    expect(contains({}, "a")).toBe(false);
  });

  // Test for invalid parameters
  test("throws an error when the first argument is not an object", () => {
    expect(() => contains(null, "a")).toThrow(
      "Invalid input: First argument must be an object"
    );
    expect(() => contains(42, "a")).toThrow(
      "Invalid input: First argument must be an object"
    );
    expect(() => contains("string", "a")).toThrow(
      "Invalid input: First argument must be an object"
    );
    expect(() => contains([1, 2, 3], "a")).toThrow(
      "Invalid input: First argument must be an object"
    );
  });

  test("throws an error when the second argument is not a string", () => {
    expect(() => contains({ a: 1 }, 123)).toThrow(
      "Invalid input: Second argument must be a string"
    );
    expect(() => contains({ a: 1 }, null)).toThrow(
      "Invalid input: Second argument must be a string"
    );
    expect(() => contains({ a: 1 }, ["a"])).toThrow(
      "Invalid input: Second argument must be a string"
    );
  });
});

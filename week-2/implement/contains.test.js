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
test("should return true if the object contains the property", () => {
  const obj = { a: 1, b: 2 };
  expect(contains(obj, "a")).toBe(true); // 'a' exists
  expect(contains(obj, "b")).toBe(true); // 'b' exists
});

test("should return false if the object does not contain the property", () => {
  const obj = { a: 1, b: 2 };
  expect(contains(obj, "c")).toBe(false); // 'c' does not exist
});

// Given an empty object
// When passed to contains
// Then it should return false
test("should return false when passed an empty object", () => {
  const obj = {};
  expect(contains(obj, "a")).toBe(false); // Empty object, no properties
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("should return true when passed an object with properties and an existing property", () => {
  const obj = { name: "John", age: 30 };
  expect(contains(obj, "name")).toBe(true); // 'name' exists
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("should return false when passed an object with properties and a non-existent property", () => {
  const obj = { name: "John", age: 30 };
  expect(contains(obj, "address")).toBe(false); // 'address' does not exist
});

// Given invalid parameters like arrays
// When passed to contains
// Then it should return false or throw an error
test("should return false when passed an array", () => {
  const arr = [1, 2, 3];
  expect(contains(arr, "0")).toBe(false); // Arrays do not have properties in the same way
});

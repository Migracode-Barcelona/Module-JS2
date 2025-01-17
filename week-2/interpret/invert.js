// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
// The return value is { key: 2 } because the code incorrectly assigns key as a fixed property, not using the object’s value as the key.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// The return value is { key: 2 } because of the same error in assigning the key.

// c) What is the target return value when invert is called with {a : 1, b: 2}
// The target output should be { "1": "a", "2": "b" }, where keys and values are swapped.

// d) What does Object.entries return? Why is it needed in this program?
// Object.entries returns an array of [key, value] pairs, allowing iteration over the object properties.

// e) Explain why the current return value is different from the target output
// The return value is wrong because it assigns to invertedObj.key instead of using the value as the key and the key as the value.

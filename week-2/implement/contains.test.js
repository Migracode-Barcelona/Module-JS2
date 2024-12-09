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

test('when passed a correct key to a property returns true', () => {
    expect(contains({ a: 1 }, 'a')).toBe(true);
})

test('when passed an empty object return false', () => {
    expect(contains({}, 'a')).toBe(false);
});

test('when passed an incorrect key to a property returns false', () => {
    expect(contains({a:1}, 'b')).toBe(false);
});

test('when passed an array returns false',() => {
    const array = ['a', 'b', 'c'];
    expect(contains (array, 'b')).toBe(false)
});



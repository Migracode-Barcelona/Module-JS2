// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

//Answer: a for loop is not really used with objects but instead usually with arrays and strings- what we can do instead is
//Object.values() together with a `for...of` loop, the syntax used here is Object.values(obj) and in this case the object is author

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (let value of Object.values(author)) {
  console.log(value);
}

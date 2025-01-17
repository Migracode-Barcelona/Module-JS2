// Predict and explain first...

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address.houseNumber}`);

// Explanation:
// The original code uses address[0], which would try to access the first element of an array, but address is an object, not an array.
//changing to address.houseNumber to correctly access the houseNumber property of the address object.

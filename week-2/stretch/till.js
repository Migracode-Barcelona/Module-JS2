// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    // Convert the coin value from a string like "1p" to a number (e.g., 1)
    const coinValue = parseInt(coin.replace(/[^0-9]/g, ""), 10); // Remove non-numeric characters and parse as integer

    if (!isNaN(coinValue)) {
      // Ensure coinValue is a valid number
      total += coinValue * quantity;
    }
  }

  return `£${(total / 100).toFixed(2)}`;
}

// Test the implementation
function testTotalTill() {
  const till = {
    "1p": 10,
    "5p": 6,
    "50p": 4,
    "20p": 10,
  };

  const expectedOutput = "£4.40";
  const result = totalTill(till);

  console.assert(
    result === expectedOutput,
    `Expected ${expectedOutput} but got ${result}`
  );
  console.log("Test passed!");
}

testTotalTill();

// a) What is the target output when totalTill is called with the till object

/*
const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};

*/

// b) Why do we need to use Object.entries inside the for...of loop in this function?

/*
Object.entries(till) returns an array of key-value pairs from the till object, where each element is an array [key, value].
 This allows you to destructure the key as coin and the value as quantity within the loop.
*/

// c) What does coin * quantity evaluate to inside the for...of loop?
/*
coin is a string representing the denomination and quantity is a number representing how many coins of that denomination are present.

The expression coin * quantity tries to multiply a string by a number, which will result in NaN (not a number)
 in JavaScript because the * operator requires numeric operands.
*/

// d) Write a test for this function to check it works and then fix the implementation of totalTill
// Test the implementation
function testTotalTill() {
  const till = {
    "1p": 10,
    "5p": 6,
    "50p": 4,
    "20p": 10,
  };

  const expectedOutput = "£4.40";
  const result = totalTill(till);

  console.assert(
    result === expectedOutput,
    `Expected ${expectedOutput} but got ${result}`
  );
  console.log("Test passed!");
}

// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const coinValue = parseInt(coin.replace("p", ""), 10);

    if (isNaN(coinValue)) {
      continue;
    }
    total += coinValue * quantity;
  }

  return `£${(total / 100).toFixed(2)}`;
}
const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};

const totalAmount = totalTill(till);
module.exports = totalTill;

// a) What is the target output when totalTill is called with the till object
//Answer:NaN

// b) Why do we need to use Object.entries inside the for...of loop in this function?
//Answer:it allows us to iterate over the key and value pairs of an object in a structured way.

// c) What does coin * quantity evaluate to inside the for...of loop?
//Answer: its evaluating the product of two value coin and quantity.

// d) Write a test for this function to check it works and then fix the implementation of totalTill

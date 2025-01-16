function max(array) {
  let maxValue = -Infinity; // Start with -Infinity as the initial maximum

  for (let item of array) {
    if (typeof item === "number" && item > maxValue) {
      maxValue = item; // Update maxValue if the current item is a number and larger
    }
  }

  return maxValue; // Return the largest value found, or -Infinity if none
}

module.exports = max;

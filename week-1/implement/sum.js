function sum(arr) {
  return arr.reduce((total, current) => {
    // Only add numbers, ignore non-numeric values
    if (typeof current === "number") {
      return total + current;
    }
    return total;
  }, 0);
}

module.exports = sum;

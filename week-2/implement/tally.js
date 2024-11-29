function tally(array) {
  // Check if input is a valid array
  if (!Array.isArray(array)) {
    return "Invalid input: Input must be an array";
  }

  // Use a reducer to tally counts
  return array.reduce((counts, item) => {
    if (counts[item]) {
      counts[item]++;
    } else {
      counts[item] = 1;
    }
    return counts;
  }, {});
}

module.exports = tally;

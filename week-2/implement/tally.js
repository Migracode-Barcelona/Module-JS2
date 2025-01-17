function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }

  // Use an object to store the counts
  const counts = {};

  // Iterate over the array and count occurrences
  for (const item of items) {
    counts[item] = (counts[item] || 0) + 1;
  }

  return counts;
}

module.exports = tally;

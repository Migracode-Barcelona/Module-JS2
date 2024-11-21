function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("Invalid input: Expected an array");
  }

  return items.reduce((counts, item) => {
    counts[item] = (counts[item] || 0) + 1;
    return counts;
  }, {});
}
console.log(tally(["a", "a", "a"]));
module.exports = tally;

function dedupe(input) {
  return [...new Set(input)];
}
console.log(dedupe([1, 1, 1, 1, 2, 1, 3, 3]));
module.exports = dedupe;

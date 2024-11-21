function dedupe(input) {
  const array = [...new Set(input)];
  return array;
}
console.log(dedupe([1, 1, 2, 2, 3, 3, 3, 2, 3]));
module.exports = dedupe;

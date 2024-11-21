function sum(numArray) {
  if (numArray.length === 0) {
    return 0;
  }

  const filteredArray = numArray.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  let total = 0;
  for (let i = 0; i < filteredArray.length; i++) {
    total += filteredArray[i];
  }

  return total;
}

module.exports = sum;

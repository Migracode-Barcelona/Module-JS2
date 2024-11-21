function max(numberArray) {
  if (numberArray.length === 0) {
    return -Infinity;
  }

  const numericArray = numberArray.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  const maxNum = Math.max(...numericArray);

  return maxNum;
}

module.exports = max;

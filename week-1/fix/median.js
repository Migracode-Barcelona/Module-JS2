// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

function calculateMedian(list) {
  const listLength = list.length;
  const middleIndex = Math.floor(listLength / 2);
  const medianForOdd = list[middleIndex];
  const sumOfEvenSet = list[middleIndex] + list[middleIndex - 1];
  const averageEven = sumOfEvenSet / 2;

  if (listLength % 2 === 0) {
    return averageEven;
  } else return medianForOdd;
}

module.exports = calculateMedian;

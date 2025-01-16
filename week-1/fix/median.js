// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

function calculateMedian(list) {
  // const middleIndex = Math.floor(list.length / 2);
  // const median = list.splice(middleIndex, 1)[0];
  // return median;

  list.sort((a, b) => a - b);
  const middleIndex = Math.floor(list.length / 2);

  // Check if the length is odd or even
  if (list.length % 2 === 0) {
    return (list[middleIndex - 1] + list[middleIndex]) / 2;
  } else {
    return list[middleIndex];
  }
}

module.exports = calculateMedian;

// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

function calculateMedian(list) {
  // Step 1: Sort the list in ascending order
  const sortedList = [...list].sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedList.length / 2);

  // Step 2: Check if the list length is odd or even and calculate the median accordingly
  if (sortedList.length % 2 !== 0) {
    // Odd length: return the middle element
    return sortedList[middleIndex];
  } else {
    // Even length: return the average of the two middle elements
    return (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
  }
}

module.exports = calculateMedian;

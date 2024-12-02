// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

function calculateMedian(list) {
  if (!Array.isArray(list) || list.length === 0) {
    throw new Error("Input must be a non-empty array.");
  }

  // Sort the list in ascending order
  const sortedList = [...list].sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedList.length / 2);

  // Check if the number of elements is even or odd
  if (sortedList.length % 2 === 0) {
    // For even, return the average of the two middle values
    return (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
  } else {
    // For odd, return the middle value
    return sortedList[middleIndex];
  }
}

module.exports = calculateMedian;

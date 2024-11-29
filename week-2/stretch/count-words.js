/*
  Count the number of times a word appears in a given string.

  Write a function called countWords that
    - takes a string as an argument
    - returns an object where
          - the keys are the words from the string and
          - the values are the number of times the word appears in the string

  Example
  If we call countWords like this:

  countWords("you and me and you") then the target output is { you: 2, and: 2, me: 1 }

  To complete this exercise you should understand
    - Strings and string manipulation
    - Loops
    - Comparison inside if statements
    - Setting values on an object

## Advanced challenges

1. Remove all of the punctuation (e.g. ".", ",", "!", "?") to tidy up the results

2. Ignore the case of the words to find more unique words. e.g. (A === a, Hello === hello)

3. Order the results to find out which word is the most common in the chapter
*/

function countWords(inputString) {
  if (typeof inputString !== "string") {
    throw new Error("Invalid input: Input must be a string");
  }

  //Normalize the string (remove punctuation and convert to lowercase)
  const cleanedString = inputString
    .replace(/[.,!?]/g, "") // Remove punctuation
    .toLowerCase(); // Convert to lowercase for case insensitivity

  // Split the string into words
  const words = cleanedString.split(/\s+/); // Split by spaces (handles multiple spaces)

  // Count the frequency of each word
  const wordCounts = {};
  for (const word of words) {
    if (word) {
      // Avoid empty strings
      wordCounts[word] = (wordCounts[word] || 0) + 1;
    }
  }

  //  (Advanced Challenge 3): Sort by frequency (optional)
  const sortedWordCounts = Object.entries(wordCounts)
    .sort((a, b) => b[1] - a[1]) // Sort by count in descending order
    .reduce((acc, [word, count]) => {
      acc[word] = count;
      return acc;
    }, {});

  return sortedWordCounts;
}

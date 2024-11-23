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
function countWords(str){
  if(!typeof str === "string"){
    throw new Error("input must be a string");
  }
  // remove punctuation and change the string to lowercase
  // also split the string into words
  const myString = str.replace(/[.,!?]/g, '').toLowerCase().split(/\s+/);
   const count ={};
   for (const element of myString) {
       if(element){
        count[element] = (count[element] || 0)+1;
       }
   }
   return count;
  }
console.log(countWords("you and me and you!"));
console.log(countWords("Hello, hello! How are you?"));
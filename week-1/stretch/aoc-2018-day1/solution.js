const fs = require("fs");

// Read the input file asynchronously
fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // Split the input data by newlines, filter out any empty lines, and map them to integers
  const changes = data
    .split("\n") // Split the file content by newline characters
    .filter(Boolean) // Remove any empty lines
    .map(Number); // Convert each line to a number

  // Calculate the resulting frequency using reduce
  const resultingFrequency = changes.reduce((acc, curr) => acc + curr, 0);

  // Output the final result
  console.log("Resulting Frequency:", resultingFrequency);
});

//Resulting Frequency is 529

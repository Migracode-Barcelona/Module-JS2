// Helper function to track the frequency of each value
function trackFrequency(list) {
  let freqs = new Map();
  for (let num of list) {
    if (typeof num !== "number") continue;
    freqs.set(num, (freqs.get(num) || 0) + 1);
  }
  return freqs;
}

// Helper function to find the value with the highest frequency
function findMode(freqs) {
  let maxFreq = 0;
  let mode;
  for (let [num, freq] of freqs) {
    if (freq > maxFreq) {
      mode = num;
      maxFreq = freq;
    }
  }
  return maxFreq === 0 ? NaN : mode;
}

// Main function that calculates the mode
function calculateMode(list) {
  const freqs = trackFrequency(list);
  return findMode(freqs);
}

module.exports = calculateMode;

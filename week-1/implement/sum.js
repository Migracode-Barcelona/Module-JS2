const sumElements = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] === "number" && !Number.isNaN(nums[i])) {
      sum += nums[i];
    }
  }
  return sum;
};

module.exports = sumElements;

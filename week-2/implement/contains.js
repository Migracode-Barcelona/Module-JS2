function contains(obj, prop) {
  // Validate input: obj should be an object, and prop should be a string
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new Error("Invalid input: First argument must be an object");
  }
  if (typeof prop !== "string") {
    throw new Error("Invalid input: Second argument must be a string");
  }

  // Check if the property exists in the object
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = contains;

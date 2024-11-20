function contains(obj,key) {
  if(typeof obj === "object" || obj === null || Array.isArray(obj) || typeof key !== "string"){
    return false;
  }
  return true;
}

module.exports = contains;

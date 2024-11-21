function contains(obj, key) {
  if (key in obj) {
    return true;
  } else {
    return false;
  }
}

module.exports = contains;

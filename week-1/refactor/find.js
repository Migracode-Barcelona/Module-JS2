// Refactor the implementation of find to use a for...of loop

function find(list, target) {
  for (const [index, element] of list.entries()) {
    if (element === target) {
      return index;
    }
  }
  return -1;
}

module.exports = find;

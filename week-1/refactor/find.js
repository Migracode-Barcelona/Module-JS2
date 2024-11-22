// Refactor the implementation of find to use a for...of loop

function find(list, target) {
  for (const [element,index] of list.entries()) {
    if (element === target) {
      return index;
    }
  }
  return -1;
}
module.exports = find;

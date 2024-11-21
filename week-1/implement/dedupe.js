function dedupe(input) {
  const emptyArray = [];
  const noDuplicates = input.filter(
    (item, index) => input.indexOf(item) === index
  );

  if (input !== noDuplicates) {
    return noDuplicates;
  }

  if (input === noDuplicates) {
    return input;
  }

  elseif(input === emptyArray);
  return emptyArray;
}

module.exports = dedupe;

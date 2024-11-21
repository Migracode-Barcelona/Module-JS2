function createLookup(countryCurrencyPairs) {
  return countryCurrencyPairs.reduce((lookup, pair) => {
    const [countryCode, currencyCode] = pair; // Destructure the pair
    lookup[countryCode] = currencyCode; // Add the key-value pair to the object
    return lookup; // Return the updated object
  }, {});
}

module.exports = createLookup;

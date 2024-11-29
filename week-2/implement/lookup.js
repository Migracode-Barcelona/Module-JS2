function createLookup(countryCurrencyCodes) {
  // implementation here

  let currencyCodeLookup = {};

  for (let countryCurrencyCode of countryCurrencyCodes) {
    let countryCode = countryCurrencyCode[0];
    let currencyCode = countryCurrencyCode[1];
    currencyCodeLookup[countryCode] = currencyCode;
  }

  return currencyCodeLookup;
}
module.exports = createLookup;

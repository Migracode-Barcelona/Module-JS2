function createLookup(countryCurrencyPairs) {
  const lookUp ={};
  for (const [countryCode,CurrencyCode] of countryCurrencyPairs) {
    lookUp[countryCode] = CurrencyCode;
  }
  return lookUp;
}
// const countryCurrencyPairs = [['US' , 'USD'], ['CA', 'CAD']];
// const result = createLookup(countryCurrencyPairs);
// console.log(result);
module.exports = createLookup;
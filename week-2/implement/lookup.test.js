const createLookup = require("./lookup.js");


/* ======= Test suite is provided below... =====
 */

test("converts a single pair of currency codes", () => {
  expect(createLookup([["GB", "GBP"]])).toEqual({
    GB: "GBP",
  });
  expect(createLookup([["DE", "EUR"]])).toEqual({
    DE: "EUR",
  });
});



test("creates a country currency code lookup for multiple codes", ()=>{
  expect(createLookup([["GB", "GBP"], ["DE", "EUR"]])).toEqual({
    GB: "GBP",  DE: "EUR",
  });
})



// Create a lookup objeclot of key value pairs from an array of code pairs

// Acceptance Criteria:

// Given
//  - An array of arrays representing country code and currency code pairs
//    e.g. [['US', 'USD'], ['CA', 'CAD']]

// When
//  - createLookup function is called with the country-currency array as an argument

// Then
//  - It should return an object where:
//  - The keys are the country codes
//  - The values are the corresponding currency codes

// Example
// Given: [['US', 'USD'], ['CA', 'CAD']]

// When
// createLookup(countryCurrencyPairs) is called

// Then
// It should return:
//  {
//    'US': 'USD',
//    'CA': 'CAD'
//  }
// */

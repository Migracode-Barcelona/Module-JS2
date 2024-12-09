function createLookup(countryCurrencyPairs) {
const lookup = {}

      for (let i = 0; i < countryCurrencyPairs.length; i++) {
      const pair = countryCurrencyPairs[i];
      const country = pair[0];
      const currency = pair[1];
    
      lookup[country] = currency;
    }
    return lookup;    
}
    
 
module.exports= createLookup
      



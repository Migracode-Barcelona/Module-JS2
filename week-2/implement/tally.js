
function tally(array){

   if (!Array.isArray(array)) {
    throw new Error("Input must be an array"); // Throw an error for invalid input
}
    let resultObject = {};
    for (let i=0; i< array.length; i++) {
        let item = array[i]; // Get the value of the current key
        if (resultObject[item]!==undefined){

            resultObject[item] +=1
        }

    else  {
        resultObject[item] = 1
    }
}
    return resultObject
}




module.exports =tally


// Plan: * Initialize an empty object for storing frequencies.
// Looping through the array:
//              If the item is already in the object, increment its count.
//              If it is not I wil add it to object with a count +1.
//            last : Return the frequency object
//  * 
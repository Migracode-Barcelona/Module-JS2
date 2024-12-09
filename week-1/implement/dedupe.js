// //In this kata, you will need to deduplicate the elements of an array

// E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']
// E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
// */

function dedupe(array) {

        const result = [];
        
        for (let item of array) {
            if (!result.includes(item)) {
                result.push(item); // Add the item only if it's not already in the result
            }
        }
        
        return result;
    }

    module.exports = dedupe;

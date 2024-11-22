function maximum(arr){
 if(arr.length === 0){
    return -Infinity;
 }
 const nonNumeric = arr.filter(item => typeof item === 'number' && !isNaN(item));
 if(nonNumeric.length === 0){
    return -Infinity;
 }
 return Math.max(...nonNumeric);
}
module.exports = maximum
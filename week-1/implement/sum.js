function sum(arr){
    const nonNumerical = arr.filter(item => typeof item === "number" && !isNaN(item));
     const sumAll = nonNumerical.reduce((a,c)=>a+c,0);
    if(nonNumerical === 0){
        return null;
    }
    return sumAll;
}
module.exports = sum;
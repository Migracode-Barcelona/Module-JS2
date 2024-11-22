function sum(arr){
    const numerical = arr.filter(item => typeof item === "number" && !isNaN(item));
     const sumAll = nonNumerical.reduce((a,c)=>a+c,0);
    if(numerical === 0){
        return null;
    }
    return sumAll;
}
module.exports = sum;
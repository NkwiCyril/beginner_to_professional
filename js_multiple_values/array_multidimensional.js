// multidimensional array: array that contains other arrays known as subarrays and
// the subs can in turn contain other arrays and so on.

let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];

let arrOfArrays = [someValues1, someValues2, someValues3];
console.log(arrOfArrays);

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// PRACTICE 3.3

let array = [1, 2, 3];
let nestArray = [array, array, array];

console.log(nestArray[0][1]);
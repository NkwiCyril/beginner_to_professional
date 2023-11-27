// creating an array

// 1. using the Array contructor function
let array = new Array("apples", "oranges", "bananas");

// 2. Simply using the square brackets
let newArray = ["apples", false, 7, 34.343, 3405n];

console.log(array);
console.log(newArray);

let arr3 = new Array(10); // updates or set array length
let arr4 = [10];

// working with the typeof operator

console.log(typeof newArray[0]);
console.log(typeof newArray[1]);
console.log(typeof newArray[2]);
console.log(typeof newArray[3]);

// the value of an index in an array can be manipulated depending on the scope of the variable

newArray[0] = "Tesla";
console.log(newArray);

// in-built function to get the length of an array
// creating an array

// 1. using the Array contructor function
let fruits = new Array("apples", "oranges", "bananas");

// 2. Simply using the square brackets
let randomThings = ["apples", false, 7, 34.343, 3405n];

console.log(fruits);
console.log(randomThings);

let arr3 = new Array(10); // updates or set array length
let arr4 = [10];

// working with the typeof operator: used to get the datatype of a value

console.log(typeof randomThings[0]);
console.log(typeof randomThings[1]);
console.log(typeof randomThings[2]);
console.log(typeof randomThings[3]);

// the value of an index in an array can be manipulated depending on the scope of the variable

randomThings[0] = "Tesla";
console.log(randomThings);

// in-built function to get the length of an array (.length)

console.log("Number of random things in the array: ", randomThings.length);
console.log("Number of fruits in the fruits array: ", fruits.length);

var numbers = [235, 45, 22];
numbers[5] = 34;

console.log(numbers.length);
console.log(numbers);

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// EXERCISE 3.1

let shoppingList = ["Milk", "Bread", "Apples"]; // creting the array
console.log("Number of items to purchase: ", shoppingList.length); // logging out the number of items
shoppingList[1] = "Bananas"; // Update "Bread" to "Bananas."
console.log(shoppingList); // logging out final list of items

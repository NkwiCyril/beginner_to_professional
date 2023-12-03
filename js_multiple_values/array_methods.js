// methods are functions on certain objects
function push(numArray, num) {
  let len = numArray.length;
  numArray[len] = num;

  return numArray;
}

// adding and replacing elements

// using the push() in-built method
favoriteFruits = ["grapefruit", "guava", "mango"];
favoriteFruits.push("orange", "pineapple"); // add element to the end of the array

let newLen = favoriteFruits.push("coconut");
console.log(favoriteFruits);
console.log(newLen);

// what if I want to add elements into the a specific index
// we use the splice() in-built method
// using splice() we can also do replacements in an array

let replacedFruit = favoriteFruits.splice(1, 1, "strawberries");
console.log(favoriteFruits);
console.log(replacedFruit);

let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2, 0, "square", "trapezoid");
console.log(arrOfShapes);

// how to add one array to another
// using the concat() in-built function

let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6); // does not modify the existing array

let newArr = arr5.concat(arr6);

console.log(arr7);
console.log(newArr);

// deleting elements using the pop() in-built method
// removes the last element of an array i.e. it removes element at array.length - 1

arr5.pop();
console.log(arr5);

// deleting the elements using the shift() in-built method
// removes the first element of the array

arr5.shift();
console.log(arr5);


// the splice() in-built method can be used to build to delete elements from the index we specify

newArr.splice(2, newArr.length) // (start deleting here, number of elements to delete from the start)
console.log(newArr);

// one can use the 'delete' operator
// after using delete, it removes the specified element and leaves that index vacant
delete newArr[0]
console.log(newArr);


// FINDING ELEMENTS
// using the find() in-built method to check whether an element is present in the array

names = ['Nkwi', 'Cyril', 'Akinimbom']
let findValue = names.find((e) => e === 'hello')

console.log(findValue);

// using indexOf() method to find the index of an element
let firstName = names[0].indexOf('N', 0)
console.log(firstName);


// SORTING 
// using the sort() in-built method

let sortMe = [1,7,84,3,5]
let sortedArray = sortMe.sort()
console.log(sortMe);

// working with the splice(), shift() and delete methods

let testArray = [1,2,4,5,6]

testArray.splice(0,0) // removes 1 from index 0 to the last index
// testArray.shift() // removes the first element of the array
delete testArray[0] // removes the first element of the array but does not tamper with the available space or length of that array
console.log(testArray);

// REVERSING AN ARRAY
// using the reverse() method to reverse the content of an array

let reverseMe = [1,4,2,5,6] // reverses from index 0 => N to N => 0
reverseMe.reverse()
console.log(reverseMe);

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// PRACTICE EXERCISE 3.2

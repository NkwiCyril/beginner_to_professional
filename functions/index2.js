let names = ["john", "maru", "joe", "chris"];

//using the arrow function to acess all names in the names array

names.forEach((name) => {
  console.log("Hello " + name[0].toUpperCase() + name.slice(1));
});

// spread operator to get all names in names list
console.log([{ ...names }]);

var addTwoNumbers = (x, y) => x + y;

let result = addTwoNumbers(4, 5);
console.log(result);

let resultsArr = [];
for (let i = 0; i < 10; i++) {
  let result = addTwoNumbers(i, 2 * i);
  resultsArr.push(result);
}
console.log(resultsArr);

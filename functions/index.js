// closure with functions

function newFunc(x) {
  function hello(y) {
    return x + y;
  }

  return hello; // rather return a poiter to the hello(10,5,"+") function
}

const greetMe = newFunc(2);
const value = greetMe(90);
console.log(value);

// variable containing a function to print some information on console
let varContainingFunction = function () {
  let varInFunction = "I'm in a function.";
  console.log("hi there!", varInFunction);
};
varContainingFunction(10, 5, "+");

// working with arguments and parameters

function numOperation(x, y, op) {
  switch (op) {
    case "+":
      console.log("Addition operation");
      return x + y;
    case "-":
      console.log("Subtraction operation");
      return x - y;
    case "/":
      console.log("Division operation");
      return x / y;
    case "*":
      console.log("Multiplication operation");
      return x * y;
    case "%":
      console.log("Modulo operation");
      return x % y;
    default:
      return "Incorrect operation.";
  }
}

console.log(numOperation(10, 5, "+"));
console.log(numOperation(10, 5, "-"));
console.log(numOperation(10, 5, "*"));
console.log(numOperation(10, 5, "/"));
console.log(numOperation(10, 5, "%"));
console.log(numOperation(10, 5, "+"));
console.log(numOperation(10, 5, "n"));

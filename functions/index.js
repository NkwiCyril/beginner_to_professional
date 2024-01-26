
// closure with functions

function newFunc(x) {
  function hello(y) {
    return x + y;
  }

  return hello; // rather return a poiter to the hello() function
}

const greetMe = newFunc(2);
const value = greetMe(90);
console.log(value);


// variable containing a function to print some information on console
let varContainingFunction = function() { 
  let varInFunction = "I'm in a function."; 
  console.log("hi there!", varInFunction); 
}; 
varContainingFunction(); 
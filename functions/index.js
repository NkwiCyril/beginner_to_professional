
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

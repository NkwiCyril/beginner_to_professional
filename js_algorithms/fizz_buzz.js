// Write a program that prints the numbers from 1 to 100.
// But for multiples of 3, print "Fizz" instead of the number,
// and for the multiples of 5, print "Buzz".
// For numbers that are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    // if number is multiple of 3 and 5, replace with FizzBuzz
    num = "FizzBuzz";
  } else if (num % 3 == 0) {
    // if number is multiple of 3, replace with Fizz
    num = "Fizz";
  } else if (num % 5 == 0) {
    // if multiple of 5, replace with Buzz
    num = "Buzz";
  }
  return num;
}

for (let i = 1; i <= 100; i++) {
  // printout all numbers from 1->100 and make necessary replacements as in fizzBuzz()
  console.log(i + ": " + fizzBuzz(i));
}

// using ternary conditions
var fizzBuzz2 = (num) =>
  num % 3 === 0 && num % 5 == 0
    ? "FizzBuzz"
    : num % 3 === 0
    ? "Fizz"
    : num % 5 === 0
    ? "Buzz"
    : num;

for (let i = 1; i <= 100; i++) 
  console.log(i + ": " + fizzBuzz2(i));


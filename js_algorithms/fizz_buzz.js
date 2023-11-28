// Write a program that prints the numbers from 1 to 100.
// But for multiples of 3, print "Fizz" instead of the number,
// and for the multiples of 5, print "Buzz".
// For numbers that are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz(array) {

  for (let i = 0; i < array.length; i++) {

    if (array[i] % 3 == 0 && array[i] % 5 == 0) { // if number is multiple of 3 and 5
      array[i] = "FizzBuzz";
    } else if (array[i] % 3 == 0) { // if number is multiple of 3 
      array[i] = "Fizz";
    } else if (array[i] % 5 == 0) {
      array[i] = "Buzz";
    }
  }

  return array;
}

console.log(fizzBuzz([1, 3, 6, 8, 3, 7, 5, 3, 15]));

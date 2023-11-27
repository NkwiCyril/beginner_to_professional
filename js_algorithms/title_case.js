// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCaseTest(str) {
  let inc = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      inc++;
    }
  }

  return inc;
}

// can I get the number of whitespaces in a string? Yes.
// Therefore I have access to all the whitespaces. Good
// Now, I need to get the guys(characters) found after each whitespace.
// Anytime I see them in my way (loop), I .toUpperCase
// Simple right...Let's get to work

function titleCase(str) {
  let words = str.toLowerCase().split(" ");

  let finalWord = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return finalWord.join(' ');
}

console.log(titleCase("HELLO WORLD"));

console.log(titleCase("sHort aND TaLl"));

let request = "availablee";
let response = false;

let newRespose =
  request == "available" ? (response = true) : (response = false);

let result = newRespose ? "response proceeding..." : "no response"; // conditional ternary operators

console.log(result);

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// PRACTICE EXERCISE 4.1

let myVar = false;
console.log(myVar);

if (myVar) {
  console.log("this is my variable");
}

if (!myVar) {
  console.log("this is not my value");
}

////////////////////////////////////////////////////////////////////
// else if

let age = 10;
let cost = 0;
let message;
if (age < 3) {
  cost = 0;
  message = "Access is free under three.";
} else if (age >= 3 && age < 12) {
  cost = 5;
  message = "With the child discount, the fee is 5 dollars";
} else if (age >= 12 && age < 65) {
  cost = 10;
  message = "A regular ticket costs 10 dollars.";
} else {
  cost = 7;
  message = "A ticket is 7 dollars.";
}
console.log(message);
console.log("Your Total cost " + cost);

let verification =
  userAge >= 21
    ? console.log("entry confirmed!\nYou are eligible to purchase alcohol.")
    : userAge >= 19
    ? "entry confirmed!\n But you cannot purchase alcohol."
    : console.log("ENTRY DENIED!");


//////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// PRACTICE 4.4


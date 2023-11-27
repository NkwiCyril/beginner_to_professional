// primitive datatypes
/**
 * String
 * Number
 * BigInt
 * Boolean
 * Symbol
 * Undefined
 * null
 */

// Strings: array of characters

let string = "This is  string";

// Number: represent numbers, store both signed and unsigned numbers, decimal number, floating point
let intNr = 1;
let decNr = 1.5;
let expNr = 1.4e15;
let octNr = 0o10; // Octal number; decimal version would be 8
let hexNr = 0x3e8; //hexadecimal; decimal version would be 1000
let binNr = 0b101; //binary; decimal version would be 5

// BigInt: represented by the postfix 'n'

let bigNum = 2324244341434n;
console.log(bigNum);
console.log(typeof bigNum);
console.log(typeof string);
console.log(typeof octNr);
console.log(typeof binNr);

// boolean: 2 states, true or false
let onBed = false;
let offBed = true;

if (offBed) {
  console.log("NEVER SLEEP!! KEEP GOING!");
} else {
  console.log("Wake up!!");
}

let str = "Hello";
let nr = 7;
let bigNr = 12345678901234n;
let bool = true;
let sym = Symbol("unique");
let undef = undefined;
let unknown = null;

console.log("str", typeof str);
console.log("nr", typeof nr);
console.log("bigNr", typeof bigNr);
console.log("bool", typeof bool);
console.log("sym", typeof sym);
console.log("undef", typeof undef);
console.log("unknown", typeof unknown);


// the Symbol datatype 

let string1 = "This is code.";
let string2 = "This is code.";

console.log("They are the same: ", string1 === string2);
console.log("They are the same: ", Symbol(string1) === Symbol(string2)); // every symbol is unique no matter the parameters placed in it
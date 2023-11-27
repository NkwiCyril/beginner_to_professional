// to declare variables, we need the following variables
// let, const, var; depends on the scope of that variable
// var has a global scope while let has a block scope

let f = 34;
var b = 4;

for (let i = 0; i < 3; i++) {
  let a = 23;
  console.log(f);
}

let firstname = "nkwi";
firstname = "cyril";
console.log(firstname);

// it is best for values of variables to be entered dynamically
// Strings: Can use single quotes(''), double quotes(""), backticks(``)

var number = 54;

let singleString = "This is number one";
let doubleString = "This is number two";
let multipleString = `This is the string with the backtick: ${number}`;
console.log(singleString);
console.log(doubleString);
console.log(multipleString);

let funActivity = "Let's learn javascript to the fullest.";
console.log(funActivity);

let question = "Do you want to learn JavaScript? 'Yes!'";
console.log(question);

let language = "JavaScript";
let message = `I am learning ${language}`;
console.log(); // takes me to the next line
console.log(message);

// escape characters help in adding multiple quotes in a string (just one of the importances)
// use of the backslash character (/)

let newMessage = 'Hello! what\'s your name? Is it "Cyril"';
console.log(newMessage);
let string = "This is a \n newline."; // escape character to go to the nextline
console.log(string);

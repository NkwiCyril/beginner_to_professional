let reverseString = function (string) {
  let newString = string.reverse(); // reverses the order of an array without creating a new one.
  let new2 = newString.join(""); // removes the quotation marks

  return new2;
};

let string = reverseString(["jello", "hello"]);
console.log(string);

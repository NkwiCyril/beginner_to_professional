function confirmEnding(str, target) {
  // time to follow the my pseudocode

  var lastElements = [];
  var len = str.length;

  if (str.length === 0) {
    return null; // since the is no value
  } else {
    for (let i = len - 1; i >= 0; i--) {
      lastElements.unshift(str[i]);
      if (lastElements.join("") === target) {
        return true;
      }
    }
    return false;
  }
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("bastian", "an"));
console.log(confirmEnding("This is a whole new level", "level"));
console.log(confirmEnding("Be the dullest in the room", "an"));
console.log(confirmEnding("Welcome to the American corner", "corner"));

function reapeatString(str, num) {
  let string = str;
  if (num < 0 || str == "") {
    return "";
  } else {
    for (let i = 0; i < num - 1; i++) {
      string = string + str;
    }
  }

  return string;
}

console.log(reapeatString("abc", -3));
console.log(reapeatString("*", 3));
console.log(reapeatString("*", 8));

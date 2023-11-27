function truncateString(str, num) {
  let string = "";
  if (num < str.length) {
    for (let i = 0; i < num; i++) {
      string = string + str[i];
    }
    return `${string}...`;
  } else {
    return str;
  }
}

console.log(truncateString("Hello", 2));
console.log(truncateString("A_", 1));
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length + 2
  )
);

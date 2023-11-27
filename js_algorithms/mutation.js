function mutation(array) {
  let string1 = array[0].toLowerCase();
  let string2 = array[1].toLowerCase();

  for (let i = 0; i < string2.length; i++) {
    let stringChar2 = string2[i];
    if (!string1.includes(stringChar2)) {
      return false;
    }
  }

  return true;
}

console.log(mutation(["ate", "date"]));

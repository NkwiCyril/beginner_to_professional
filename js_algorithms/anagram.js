function anagramDecode(string1, string2) {
  let string1Array = string1.split("");
  let string2Array = string2.split("");

  string1Array = string1Array.sort();
  string2Array = string2Array.sort();

  if (string1Array.length != string2Array.length) {
    console.log("They are not anagrams");
    return false;
  } else {
		console.log("They are anagrams");
		return true;
	}
}

console.log(anagramDecode("listen", "silent"));

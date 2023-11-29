function chunkArrayInGroups(arr, size) {
  var newArray = [];

  for (let start = 0; start < arr.length; start += size) {
    let newArr = arr.slice(start, start + size);

    newArray.push(newArr);
  }

  return newArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

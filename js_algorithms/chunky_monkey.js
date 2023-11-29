function chunkArrayInGroups(arr, size) {
  var array2D = [];

  for (let start = 0; start < arr.length; start += size) {
    let newArr = arr.slice(start, start + size);

    array2D.push(newArr);
  }

  return array2D;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

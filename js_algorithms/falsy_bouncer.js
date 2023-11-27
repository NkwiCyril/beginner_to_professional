function bouncer(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let entry = arr[i];
    if (entry) {
        newArray.push(entry)
    }
  }
  return newArray;
}

function bouncerMethod2(arr) {
    let result = arr.filter((e) =>  e);
    return result
}
console.log(bouncer([false, null, 7, "ate", "", false, 9, '']));
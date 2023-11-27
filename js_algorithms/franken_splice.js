function frankenSplice(arr1, arr2, n) {
  let newArr1 = arr1.slice(0).reverse(); // create new array so I don't tamper with the old array
  let newArr2 = arr2.slice(0);

  let lenArr2 = newArr2.length - 1;
  let copyArr2 = newArr2.slice(0);

  console.log(copyArr2);

  newArr1.map(
    // get an element in arr1
    (number) => copyArr2.splice(n, 0, number)
  ); // add that number at the nth position as required in the params

  copyArr2.push(arr2[lenArr2]);

  return copyArr2;
}

console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
);
console.log(frankenSplice([1, 2, 3, 4], [], 0));


function frankenSplice2(arr1, arr2, n) {

  let copyArr1 = arr1.slice(0)
  let copyArr2 = arr2.slice(0)

  copyArr1.reverse()

  copyArr1.map((element) => copyArr2.splice(n, 0, element));

  return copyArr2
  
}

console.log(frankenSplice2([1, 2], ["a", "b"], 1));
console.log(frankenSplice2(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));

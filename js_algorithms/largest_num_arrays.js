function largestOfFour(array) {
  let arr = [];

  for (let i = 0; i < array.length; i++) {	// n + 1
    let newArr = array[i]; // constant runtime
	 let max = array[i][0];
    for (let j = 0; j < newArr.length; j++) {	// n * n + 1
      if (newArr[j + 1] > max) { // n * n
        max = newArr[j + 1];
      }
    }
    arr.push(max);
  }

  return arr;
}

// time complexity: O(n*n)
console.log(
  largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

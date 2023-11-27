function largestNum(array) {
  let max = array[0];

  if (array.length === 0) {
    return null;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] > max) {
      max = array[i + 1];
    }
  }
  return max;
}

// let num = [[1,2,3,4], [15,46,2,3]];
// for (let i = 0; i < num.length; i++) {
//     for (let j = 0; j < num[i].length; j++) {
//         console.log(num[i][j]);
//     }
// }

console.log(largestNum([1, 4, 3, 2]));

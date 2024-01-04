var n = 1;
var array = [];

while (n < 11) {

  array.push(n);

  var subArray = [];
  let x = 0;
  while (x < n) {
    subArray.push(x);
    x++;
  }
  array.push(subArray);
  n++;
}

console.log(array);

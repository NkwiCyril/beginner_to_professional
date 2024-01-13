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

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// Project 5.4

var myTable = [];

var row = 3;
var column = 7;
var counter = 0;

for (counter; counter < row; counter++) {
  let tempTable = [];

  for (let j = 0; j < column; j++) {
    tempTable.push[j];
  }
}

console.table(myTable);

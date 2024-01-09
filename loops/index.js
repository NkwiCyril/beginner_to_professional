// while loop printing numbers from 0 to 10

let n = 0;

while (n < 10) {
  console.log(n);
  n++;
}

// consider the program below that makes use of the while loop

let studentList = ["mariah", "doku", "haaland", "grealish", "cyril"];
var notFound = true;

while (notFound && studentList.length > 0) {
  if (studentList[0] === "grealish") {
    console.log("student found!");
    notFound = false;
  } else {
    console.log("student not found");
    studentList.shift();
  }
}
console.table(studentList);

// filling an array with the fibonacci sequence

let nr1 = 0;
let nr2 = 1;

let fibArray = [];

while (fibArray.length < 10) {
  fibArray.push(nr1);
  nr1 += nr2;
  let temp = nr1;
  nr1 = nr2;
  nr2 = temp;
}

console.log(fibArray);

var array = [];

for (let i = 0; i < 4; i++) {
  array.push([]);
  for (let j = 0; j < 8; j++) {
    array[i].push(j);
  }
}

console.table(array);

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
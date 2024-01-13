var names = ['Nkwi', 'Cyril', 'Akini', 'Miriam', 'Ajong', "Mukete", 'Musoh']
var newNames = [];

for (let i = 0; i < names.length; i++) {
  if (names[i][0] === 'M' || names[i][0] === 'A')  {
    delete names[i];
  } else {
    newNames.push(names[i])
  }
}

console.log(newNames);
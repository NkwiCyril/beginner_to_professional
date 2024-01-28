let names = ["john", "maru", "joe", "chris"];

//using the arrow function to acess all names in the names array

names.forEach((name) => {
  console.log("Hello " + name[0].toUpperCase() + name.slice(1));
});

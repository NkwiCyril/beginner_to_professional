
var arr = ["Mill", "Jof", "Max", "Fineas"];

let car = {
  model: "Golf",
  make: "Volkswagen",
  year: 1999,
  color: "black",
};


for (let prop in car) {
  console.log(car[prop]);
}

// converting from objects to an array
// lets convert car to an array

let carKeyArray = Object.keys(car); // gets the properties of object car and displays 
console.log(carKeyArray);

let carValueArray = Object.values(car);
console.log(carValueArray);

// now let us put key: value keys together

for (let i = 0; i < carKeyArray.length; i++) {
    
    console.log( carKeyArray[i] + ": " + carValueArray[i] );

}

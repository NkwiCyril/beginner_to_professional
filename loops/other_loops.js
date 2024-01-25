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
  console.log(carKeyArray[i] + ": " + carValueArray[i]);
}

// create array for each key-value pair in the object placed as input
var carKeyValue = Object.entries(car);

for (const [key, value] of carKeyValue) {
  console.log(key + ": " + value);
}

// now, using break and continue statements when looping through objects
//consider the various cars below
let cars = [
  {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
  },
  {
    model: "Picanto",
    make: "Kia",
    year: 2020,
    color: "red",
  },
  {
    model: "Peugeot",
    make: "208",
    year: 2021,
    color: "black",
  },
  {
    model: "Fiat",
    make: "Punto",
    year: 2020,
    color: "black",
  },
];

for (let i = 0; i < cars.length; i++) {
    if (cars[i].year >= 2020 && cars[i].color == "black" ) {
        console.log("I have found my new car: ", cars[i]);
        break;
    }
}

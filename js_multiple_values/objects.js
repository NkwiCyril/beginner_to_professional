// simple object with 3 common properties
var dog = {
  name: "German-sherpard",
  age: 20,
  location: "Bonduma gate opposite Nabesk",
};

// oject with methods or functions as properties they can perform

var cat = {
  name: "Tom",
  age: 15,
  sound: "meow meow",
  sayMeow: function () {
    return `${cat.name} says ${cat.sound}`;
  },
};

console.log(cat.sayMeow());

// using 'this' keyword
// when the name of the object is changed, no error occurs at the level of the methods

let obj2 = {
  myName: "Nkwi Cyril",
  sayHello: function () {
    return "Hello, World! Hello " + this.myName;
  },
};

console.log(obj2.sayHello());

// contructors

// Constructors use the keyword 'this' to set properties of the object they will create.
// Inside the constructor, 'this' refers to the new object it will create.
// Constructors define properties and behaviors instead of returning a value as other functions might.

class Dog {
  constructor() {
    this.name = "Django";
    this.breed = "Full-breed";
    this.type = "German sherpard";
    this.age = 20;
  }
}

let newDog = new Dog();
let breed = newDog.breed;
let dogName = newDog.name;
console.log(breed, dogName);

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// PRACTICE 3.4

var myCar = {
  make: "Toyota",
  model: "Camry 2021",
  fuel_type: "gasoline",
  number_of_seats: 5,
};
let propColor = "color";
myCar[propColor] = "red";

propColor = "forSale";
myCar[propColor] = true;

console.log("Car made by " + myCar.make + " and model is " + myCar.model);

console.log(myCar);

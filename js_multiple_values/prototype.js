function Dog(name, height, age) {
  this.name = name;
  this.height = height;
  this.age = age;
}

Dog.prototype.numLegs = 4;
Dog.prototype.breed = "german sherpard"

let beagle = new Dog("Snoopy");
console.log(beagle.constructor); // logs the constructor of the object beagle

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for (let prop in beagle)
  beagle.hasOwnProperty(prop) ? ownProps.push(prop) : prototypeProps.push(prop);

console.log(ownProps);
console.log(prototypeProps);

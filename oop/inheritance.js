class Animal {
  constructor(name, type, group) {
    this.name = name;
    this.type = type;
    this.group = group;
  }
}

// using the the 'new' keyword to create an instance of a constructor function
var Lion = new Animal("Lion", "wild", true);
console.log(Lion.group);

var leopard = Object.create(Animal.prototype);
console.log(leopard);
leopard.name = "leo";
leopard.type = "wild";
leopard.group = false;

console.log(leopard);
console.log(Lion);


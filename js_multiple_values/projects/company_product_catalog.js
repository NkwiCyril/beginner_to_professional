// In this project, you will implement a data structure for a product
// catalog and create queries to retrieve data.
// 1. Create an array to hold an inventory of store items.
// 2. Create three items, each having the properties of name, model,
// cost, and quantity.
// 3. Add all three objects to the main array using an array method,
// and then log the inventory array to the console.
// 4. Access the quantity element of your third item, and log it to the
// console. Experiment by adding and accessing more elements
// within your data structure.

let inventory = [];

let item1 = {
    name: "pen",
    model: "bic",
    cost: "100 XAF",
    quantity: 200
}

let item2 = {
    name: "mouse",
    model: "hp",
    cost: "10000 XAF",
    quantity: 17
}

let item3 = {
    name: "anti-blue light",
    model: "lacoste",
    cost: "20000 XAF",
    quantity: 12
}

inventory.push(item1, item2, item3);

console.log(inventory);

console.log(inventory[2]["quantity"]);


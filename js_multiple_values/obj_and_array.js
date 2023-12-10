// objects in objects

let company = {
  companyName: "Healthy Candy",
  activity: "food manufacturing",
  //   having an object in an object
  address: {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida",
  },
  yearOfEstablishment: 2021,
};

// modification of the zipcode

company.address.zipcode = "33117";
company["address"]["gps"] = 123;

//  arrays in objects

let category = {
  fun: "FossBall",
  fruit: ["orange", "guava", "mango"],
  work: [],
};

// objects in arrays

let student_infos = [
  {
    name: "Nkwi Cyril",
    registration_number: "FE21A281",
    age: 21,
    undergraduate: true,
  },
  {
    name: "Ajim",
    registration_number: "FE21A200",
    age: 17,
    undergraduate: false,
  },
  {
    name: "Afu",
    registration_number: "FE21A280",
    age: 15,
    undergraduate: false,
  },
  {
    name: "Noura",
    registration_number: "FE21A300",
    age: 26,
    undergraduate: true,
  },
];

console.log(student_infos[1]);

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// PROJECT 3.5

let people = {
    friends: [

    ]
}

let friend1 = {
    first_name: 'Nkwi',
    last_name: 'Akini',
    id: 0
}
let friend2 = {
    first_name: 'Afu',
    last_name: 'Bemsi',
    id: 1
}
let friend3 = {
    first_name: 'Ajim',
    last_name: 'Sydney',
    id: 2
}

// people["friends"]["friend1"] = friend1
// people["friends"]["friend2"] = friend2
// people["friends"]["friend3"] = friend3

people["friends"].push(friend1,friend2,friend3);
console.log(people);
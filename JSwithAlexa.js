// Variable- these change value throughout the script
// let stri = "Hello World!",
//   int1 = 23,
//   obj1 = {
//     firstName: "Alexa",
//     lastName: "Lopez",
//     age: 23,
//     swe: true,
//   },
//   arr1 = [1, 2, 3, 4],
//   bool1 = true;

// console.log(int1);
// console.log(obj1.lastName);

// obj1.petName = "BobBob";

// console.log(obj1);
// console.log(obj1.petName);

// PushManager.arr1()
// let guests = [
//   {
//     firstName: "Some",
//     lastName: "Thing",
//     species: "Rabbit",
//   },
// ];
// const desserts = [
//   "Carrot Cake",
//   "Cheesecake",
//   "Chocolate Brownie",
//   "Lemon Tart",
//   "Strawberry Shortcake",
// ];
// const teaCupColors = ["Blue", "Green", "Red", "Yellow", "Purple"];
// const teaPlateColors = ["Light Blue", "Light Green", "Pink", "Orange", "Gray"];
// for (let guest of guests) {
//   const randomIndex = Math.floor(Math.random() * desserts.length);
//   guest.smallDessert = desserts[randomIndex];
// }
// for (let guest of guests) {
//   const randomCupIndex = Math.floor(Math.random() * teaCupColors.length);
//   const randomPlateIndex = Math.floor(Math.random() * teaPlateColors.length);
//   guest.teaCup = true;
//   guest.teaCupColor = teaCupColors[randomCupIndex];
//   guest.teaPlate = true;
//   guest.teaPlateColor = teaPlateColors[randomPlateIndex];
// }
// console.log(guests);

let guests = [
  {
    firstName: "Va",

    lastName: "Mouse",

    species: "Human",
  },

  {
    firstName: "Toua",

    lastName: "View",

    species: "Human",
  },

  {
    firstName: "Faitou",

    lastName: "Lor",

    species: "Human",
  },

  {
    firstName: "Jose",

    lastName: "Rublacaba",

    species: "Human",
  },

  {
    firstName: "Luciano",

    lastName: "Salinas",

    species: "Human",
  },

  {
    firstName: "Marcelis",

    lastName: "Wallace",

    species: "Human",
  },

  {
    firstName: "Derris",

    lastName: "Sylvester",

    species: "Human",
  },

  {
    firstName: "Milton",

    lastName: "Scott",

    species: "Human",
  },

  {
    firstName: "Marisol",

    lastName: "Mercado",

    species: "Human",
  },

  {
    firstName: "Michael",

    lastName: "Alfaro",

    species: "Human",
  },
];

let teaPartyTable = {};

for (let i = 0; i < guests.length; i++) {
  let guest = guests[i];

  smallDessertOptions = [
    "Chocolate Pudding",
    "Vanilla Ice Cream",
    "Strawberry Short Cake",
    "Lemon Cake",
    "Red Velvet Cake",
    "Peach Cobbler",
    "Macadamia Nut Cookie",
    "Blueberry Muffin",
    "Tubby Custard",
  ];

  smallDessert =
    smallDessertOptions[Math.floor(smallDessertOptions.length * Math.random())];

  teaGuest = {};

  teaGuest.firstName = guest.firstName;

  teaGuest.lastName = guest.lastName;

  teaGuest.species = guest.species;

  teaGuest.teaCup = true;

  teaGuest.teaPlate = true;

  teaGuest.smallDessert = `${smallDessert}`;

  teaPartyTable[guest.firstName] = teaGuest;
}

for (let guest in teaPartyTable) {
  console.log(`First Name: ${teaPartyTable[guest].firstName}`);

  console.log(`Last Name: ${teaPartyTable[guest].lastName}`);

  console.log(`Species: ${teaPartyTable[guest].species}`);

  console.log(`Tea Cup: ${teaPartyTable[guest].teaCup}`);

  console.log(`Tea Plate: ${teaPartyTable[guest].teaPlate}`);

  console.log(`Small Dessert: ${teaPartyTable[guest].smallDessert}`);

  console.log();
}

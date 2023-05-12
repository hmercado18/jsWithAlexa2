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
let guests = [
  {
    firstName: "Some",
    lastName: "Thing",
    species: "Rabbit",
  },
];
const desserts = [
  "Carrot Cake",
  "Cheesecake",
  "Chocolate Brownie",
  "Lemon Tart",
  "Strawberry Shortcake",
];
const teaCupColors = ["Blue", "Green", "Red", "Yellow", "Purple"];
const teaPlateColors = ["Light Blue", "Light Green", "Pink", "Orange", "Gray"];
for (let guest of guests) {
  const randomIndex = Math.floor(Math.random() * desserts.length);
  guest.smallDessert = desserts[randomIndex];
}
for (let guest of guests) {
  const randomCupIndex = Math.floor(Math.random() * teaCupColors.length);
  const randomPlateIndex = Math.floor(Math.random() * teaPlateColors.length);
  guest.teaCup = true;
  guest.teaCupColor = teaCupColors[randomCupIndex];
  guest.teaPlate = true;
  guest.teaPlateColor = teaPlateColors[randomPlateIndex];
}
console.log(guests);

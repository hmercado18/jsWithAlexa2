// Define the list of guests
let guests = [
  { firstName: "Alice", lastName: "Liddell", species: "Human" },
  { firstName: "Cheshire", lastName: "Cat", species: "Cat" },
  { firstName: "Mad", lastName: "Hatter", species: "Human" },
  { firstName: "White", lastName: "Rabbit", species: "Rabbit" },
  { firstName: "Queen", lastName: "of Hearts", species: "Human" },
  { firstName: "Caterpillar", lastName: "Dream", species: "Insect" },
  { firstName: "Tweedledee", lastName: "Roger", species: "Human" },
  { firstName: "Tweedledum", lastName: "Roger", species: "Human" },
  { firstName: "March", lastName: "Hare", species: "Rabbit" },
  { firstName: "Dormouse", lastName: "Bornous", species: "Rodent" },
];

//Generate random Tea cup/plate color function
function generateRandomColor() {
  let colors = ["red", "blue", "green", "light blue", "yellow", "orange"];

  const colorsIndex = Math.floor(Math.random() * 5);
  const colorsChoice = colors[colorsIndex];

  return colorsChoice;
}
//console.log(generateRandomColor())

//Generate random dessert function
function generateRandomDesserts() {
  let desserts = [
    "Chocolate Cake",
    "Apple Pie",
    "Ice Cream",
    "Cheesecake",
    "Brownie",
    "Strawberry Shortcake",
  ];

  const dessertsIndex = Math.floor(Math.random() * 6);
  const dessertsChoice = desserts[dessertsIndex];

  return dessertsChoice;
}
//console.log(generateRandomDesserts())

// Loop through the first 3 guests only
for (let i = 0; i < 10; i++) {
  let guest = guests[i];

  // Assign a tea cup and tea plate to the guest
  guest.teaCup = true;
  guest.teaCupColor = generateRandomColor(); // Call a function to generate a random color
  guest.teaPlate = true;
  guest.teaPlateColor = generateRandomColor(); // Call a function to generate a random color

  // Assign a random dessert to the guest
  guest.smallDessert = generateRandomDesserts(); // Call a function to generate a random dessert
}

// Print the updated guest objects
console.log(guests);

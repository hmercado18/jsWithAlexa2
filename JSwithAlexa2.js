// Input array of 5 random numbers (including negative numbers)
let numbers = [4, -3, 5, 7, 10];

// Loop through the array and compare each pair of adjacent numbers
for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    // If the first number is greater than the second number, swap their positions
    if (numbers[i] > numbers[j]) {
      let temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
    }
  }
}

// Print out the sorted array
console.log(numbers); // Output: [-3, 4, 5, 7, 10]

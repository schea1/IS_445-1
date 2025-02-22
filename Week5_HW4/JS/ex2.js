// Write code for a function

// TODO:  your code here


// Test your function
let deg212 = 212;
let converted212 = fahrenheitToCelsius(deg212);
console.log(`Water's boiling temperature is ${deg212} Fahrenheit or ${converted212} Celsius`);

// Note the following:
//   Input: Fahrenheit temperature
//   Return: Fahrenheit temperature converted to Celsius

// Create input and output variables and test


// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit)

{
  const celsius=(fahrenheit-32)*(5/9);
  return celsius;
}


// Test with 32 degrees Fahrenheit (No variables)
console.log(`32 degrees Fahrenheit = ${fahrenheitToCelsius(32)} degrees Celsius`);

// Test with 98.7 degrees Fahrenheit and format the result to 2 decimal places
let deg98pt7 = 98.7;
console.log(`Temperature of ${deg98pt7} Fahrenheit is ${fahrenheitToCelsius(deg98pt7).toFixed(2)} degrees Celsius`);
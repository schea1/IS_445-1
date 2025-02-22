const values = [5, 10, 8, 1, 3, 10];

// Initialize variables for sum, min, and max
let sum = 0;
let min = values[0]; // Assume the first element is the smallest
let max = values[0]; // Assume the first element is the largest

// Iterate through the array
for (let i = 0; i < values.length; i++) {
    // Add the current value to the sum
    sum += values[i];

    // Update min if the current value is smaller
    if (values[i] < min) {
        min = values[i];
    }

    // Update max if the current value is bigger

    if (values[i] > max) {
        max = values[i];
    }
}

// Display the results
console.log(`Sum of all array values: ${sum}`);
console.log(`Minimum value: ${min}`);
console.log(`Maximum value: ${max}`);
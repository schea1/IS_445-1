function arrayInfo(arr)

{

  // Create and return the object
  return {
      firstElement: arr[0], // First element of the array
      lastElement: arr[arr.length - 1], // Last element of the array
      length: arr.length // Length of the array
  };
}

// Testing the case

const example1 = [4, 8, 12, 5, 20];
const example2 = ["a", 2, "Hello", 6, [4, 5], "bye", { name: "Alice", score: 98 }];

// Showing results

console.log(arrayInfo(example1));
console.log(arrayInfo(example2));

//Sorry, I missed class last week so I didn't understand too much.
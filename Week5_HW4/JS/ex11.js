// Function to determine if a number entered is even
const isEven = (n1) => {
    return n1 % 2 === 0;
  };
  
  // Test the function with the numbers from 1 to 10
  for (let i = 1; i < 11; i++) {
    console.log(`${i} - ${isEven(i)}`);
  }
  
  // Test with 4 and 5
  const is4even = isEven(4);
  const is5even = isEven(5);
  console.log(is4even); // true
  console.log(is5even); // false
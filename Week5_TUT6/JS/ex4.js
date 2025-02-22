const anArray = [];
for (let i = 1; i <= 12; i++) {
  anArray.push(i);
}

//FILTER METHOD - Use the filter method to produce the following
//Write your code prior to the console.log(...) statement

//1.  An array of all the even numbers
const isEven = (num) => num % 2 === 0;
const evenNumbers = anArray.filter(isEven);
console.log(evenNumbers);  //[2, 4, 6, 8, 10, 12]

//2. An array of all the numbers divisible by 3 OR 5

const isDivBy3or5 = anArray.filter(elem => elem % 3 === 0 || elem % 5 === 0);

const divBy3or5 = anArray.filter(isDivBy3or5);
console.log(divBy3or5); //[3, 5, 6, 9, 10, 12]

//MAP METHOD - Use the map method to produce the following

//3.  An array of each number multiplied by 3
const multipBy3 = anArray.map(num => num * 3);
console.log(multipBy3); //[3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36]


//FILTER AND MAP

//4.  An array of numbers divisible by 4 that are multiplied by 3
const divBy4MultipBy3 = anArray.filter(x => x % 4 === 0).map(x => x * 3);

//REDUCE METHOD

//5.  The sum of all the numbers
const arraySum = anArray.reduce((sum, elem) => sum + elem, 0);
console.log(arraySum); //78

//6.  The sum of all the numbers squared (square each number, then add them up)
const arraySquaredSum = anArray.map(x => x ** 2).reduce((acc, elem) => acc + elem, 0);

// Method two, not daisy chaining
const arraySquared = anArray.reduce((acc, elem) => acc + elem ** 2, 0);
let myInt = 5;
let myFloat = 6.667;
console.log(typeof myInt);
console.log(typeof myFloat);
//Useful Number methods
let lotsOfDecimal = 1.75694049;
console.log(lotsOfDecimal);
let twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);
//converting to number data types
let myNumber = "74";
console.log(myNumber + 3);
//string
console.log(typeof myNumber);
//to fix calculation
console.log(Number(myNumber) + 3);
//converts to number

//assesment 1
/*
Let's start out by testing your knowledge of basic math operators. You will have to create four numeric values, then add the first two together, then subtract the fourth from the third, then multiply the two secondary results together to get a result of 48. Finally, we need to write a test that proves that this value is an even number.
*/

let num1 = 12,
  num2 = 12,
  num3 = 10,
  num4 = 12;
let add = num1 + num2;
let subs = num4 - num3;
let multiply = add * subs;
if (multiply % 2 == 0) {
  console.log("even");
}

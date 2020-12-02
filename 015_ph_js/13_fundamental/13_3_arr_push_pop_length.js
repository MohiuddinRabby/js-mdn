const arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.push(6);
//add element last of arr
console.log(arr);
arr.push(7);
console.log(arr);
arr.pop();
console.log(arr);
arr.pop();
//delete last element of arr
console.log(arr);
arr.unshift(6);
//unshift add element to the first index of arr
console.log(arr);
const slices = arr.splice(4, 3);
console.log(slices);
const fruits = [`mango`, `orange`, "palm"];
console.log(fruits);
fruits.push(`orange`);
console.log(fruits);
fruits.unshift(`apple`);
console.log(fruits);
const fruitSlices = fruits.slice(0, 3);
//[ 'apple', 'mango', 'orange' ]
console.log(fruitSlices);
// const fruitsSplices = fruits.splice(0,2)
// console.log(fruits,fruitsSplices);
console.log(fruits);
fruits.shift()
console.log(fruits);
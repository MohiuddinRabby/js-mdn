let shopping = ["bread", "milk", "cheese", "butter"];
// console.log(shopping);
let sequence = [1, 2, 3, 4, 5, 6, 7];
//multidimensional array
let random = ["tree", 1, 66, [0, 1, 2, 3, 4]];
// console.log(random[3][2]);
//2
//Converting between strings and arrays
let myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
let myArr = myData.split(",");
// console.log(myArr);
//push pop
let myArray = [
  "Manchester",
  "London",
  "Liverpool",
  "Birmingham",
  "Leeds",
  "Carlisle",
];
myArray.push("cardiff");
// console.log(myArray);
function getDistrict() {
  fetch("https://bdapis.herokuapp.com/api/v1.0/districts")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
getDistrict();

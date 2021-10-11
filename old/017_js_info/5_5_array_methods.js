// arr splice
const arr = ["i", "study", "js"];
arr.splice(1, 1);
//
let arrTwo = ["lets", "study", "js", "right", "now"];
arrTwo.splice(0, 3, "lets", "dance");
//
let arrThree = ["i", "study", "js"];
arrThree.splice(2, 0);
// arr slice
let arrSlice = ["js", "is", "fun"];
const sliceResult = arrSlice.slice(0, 2);
// arr concat
let arrConcat = [1, 2, 3];
// console.log(arrConcat.concat([4, 5]));
let newArrConcat = arrConcat.concat([4, 5]);
// arr find
let items = [
  { id: 1, itemName: "itemOne" },
  { id: 2, itemName: "itemTwo" },
  { id: 3, itemName: "itemThree" },
];
let findItems = items.findIndex((item) => item.id === 2);
findItems = items.find((item) => item.id === 2);

// arr filter
let filterItems = [
  { id: 1, itemName: "item One" },
  { id: 2, itemName: "item Two" },
  { id: 3, itemName: "item Three" },
];
let filteredItems = filterItems.filter((item) => item.id < 3);
// arr sort
let arrSort = [2, 10, 13, 15, 1, 7];
// console.log(arrSort.sort());
// [ 1, 10, 13, 15, 2, 7 ]
function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
let result = arrSort.sort(compare);
console.log(result);

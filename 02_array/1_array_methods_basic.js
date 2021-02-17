let vegetables = ["Cabbage", "Turnip", "Radish", "Carrot"];
function removeItems(arr, startIndex, numberOfItemsToRemove) {
  arr.splice(startIndex, numberOfItemsToRemove);
  console.log(arr);
}
removeItems(vegetables, 1, 1);

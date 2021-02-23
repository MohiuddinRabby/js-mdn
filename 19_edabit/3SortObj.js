function sortDrinkByPrice(arr) {
  const compare = arr.sort((a, b) => a.price - b.price);
  return compare;
}
sortDrinkByPrice([
  { name: "lime", price: 10 },
  { name: "lemonade", price: 50 },
  { name: "lemonade lime", price: 5 },
]);

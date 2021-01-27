const obj = {
  name: "doe",
  age: 20,
};
for (let item of Object.values(obj)) {
    // console.log(item);
}
const fruitsPrice = {
  mango: 10,
  orange: 15,
  palm: 7,
};
let doublePrice = Object.fromEntries(
  Object.entries(fruitsPrice).map(([key, value]) => [key, value * 2])
);
console.log(doublePrice);
// { mango: 20, orange: 30, palm: 14 }

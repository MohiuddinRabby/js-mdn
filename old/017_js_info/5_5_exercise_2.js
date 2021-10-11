let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];
function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}
sortByAge(users);
console.log(users[1].name);
console.log(users);

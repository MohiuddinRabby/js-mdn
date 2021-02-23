// step1
const str = "Mountains";
const strSplit = str.split("");
const strReverse = strSplit.reverse();
const strJoin = strReverse.join("");
console.log(`step-1: `, strJoin);
// step2
const testString = "Mountains";
let newTestString = "";
for (let char of testString) {
  newTestString = char + newTestString;
}

console.log(newTestString);

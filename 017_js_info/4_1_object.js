//ex-1
const ageInfo = {
  doe: 20,
  john: 20,
  smith: 20,
};
ageInfo.mike = 30;
delete ageInfo.mike;
let sum = 0;
for (let item in ageInfo) {
  sum = ageInfo[item] + sum;
}
// console.log(sum);
//ex-2
let menu = {
  width: 200,
  height: 300,
  title: "my menu",
};
console.log("before", menu);
function multiplyNumeric(object) {
  for (let check in object) {
    if (typeof object[check] === "string") {
      //   object[check] *= 2;
      console.log(object[check]);
    }
  }
}
multiplyNumeric(menu);
// console.log("after", menu);

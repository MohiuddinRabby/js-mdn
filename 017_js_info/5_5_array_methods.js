// arr splice
// const str = ["i", "learn", "javascript"];
// str.splice(2, 1, "from js.info");
// console.log(str);
function camelize(str) {
  let splitStr = str.split("-");
  let joinStr = splitStr.join("");
  console.log(joinStr);
}
camelize("Hello-hi");
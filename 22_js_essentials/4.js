// object cloning
const objOne = {
  fname: "jane",
  lname: "doe",
};
const objTwo = Object.assign({}, objOne);
objTwo.fname = "John";
console.log(objTwo);
console.log(objOne);

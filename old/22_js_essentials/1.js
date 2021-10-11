const person = { fname: "Jane" };
person.fname = "john";
person.lname = "Doe";
console.log(person);
const revString = function (str) {
  return str.split("").reverse().join("");
};
console.log(revString("Hello world"));

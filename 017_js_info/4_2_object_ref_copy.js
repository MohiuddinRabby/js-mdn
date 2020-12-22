const bluePrint = {
  name: "john",
  age: 20,
  address: "dhaka",
};
/**
 * this process modifies the orginal object
const carbonCopy = bluePrint;
carbonCopy.mobile = 19984;
console.log(carbonCopy);
console.log(bluePrint);
 */
// this process doesn't modifies the orginal object
const carbonCopy = {};
for (let items in bluePrint) {
  carbonCopy[items] = bluePrint[items];
}
console.log(carbonCopy);
carbonCopy.mobile = 12345;
console.log(carbonCopy);

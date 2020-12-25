// const str = `string`;
// for (let strings in str) {
//   console.log(str[strings]);
// }
//Getting a substring
const str = "Stringify";
console.log(str.slice(0, 3));
// Accessing characters
const strTwo = `string`;
// prints frist and last value of string
console.log(strTwo.charAt(0), strTwo[strTwo.length - 1]);
const checkSpam = (str) => {
  let convertStrToLower = str.toLowerCase();
  if (convertStrToLower.includes("xxx") || convertStrToLower.includes("porn")) {
    console.log("No Result Found");
  } else {
    console.log(str);
  }
};
checkSpam("Good Morning");

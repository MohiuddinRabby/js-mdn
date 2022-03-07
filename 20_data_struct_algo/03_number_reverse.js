function reverseNumber(num) {
  const result = num.toString().split("").reverse().join("");
  return parseInt(result) * Math.sign(num);
}
console.log(reverseNumber(-100));

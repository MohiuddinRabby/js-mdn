function isChristmas(dateToTest) {
  return (
    dateToTest.getFullYear() &&
    // getMonth is 0-indexed
    dateToTest.getMonth() === 11 &&
    dateToTest.getDate() == 24
  );
}

console.log(isChristmas(new Date("11/24/2030")));
// => true

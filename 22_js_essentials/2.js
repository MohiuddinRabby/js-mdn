const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const summation = (arr) => {
  return arr.reduce((o, arr) => o + arr);
};
console.log(summation(nums));

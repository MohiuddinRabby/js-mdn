const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const res = num.splice(-4, 10);
console.log(res);
console.log(num);
const newNum = [11, 12, 13];
const newRes = res.concat(newNum);
console.log(newRes);

// sum
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
function sumSalaries(salaries) {
  let sum = 0;
  for (let values of Object.values(salaries)) {
    sum = sum + values;
  }
  console.log(sum);
}
sumSalaries(salaries);

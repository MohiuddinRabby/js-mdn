let user = { name: "John", years: 30 };

let { name, years: age, isAdmin = false } = user;
// console.log(isAdmin);
let salaries = {
  John: 100,
  Pete: 300,
  Smith: 2450,
  Dave: 2450,
  Mary: 250,
};
function topSalary(salaries) {
  let maxPaid = 0;
  let maxName;
  for (const [name, salary] of Object.entries(salaries)) {
    if (salary > maxPaid) {
      maxPaid = salary;
      maxName = name;
    }
  }
  console.log(maxPaid);
  console.log(maxName);
}

topSalary(salaries);
// const arr = [5, 2, 10, 7, 1];
// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

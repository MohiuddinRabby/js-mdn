// count
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
function countFromObj(obj) {
  let count = Object.entries(obj);
  console.log(count.length);
}
countFromObj(salaries)
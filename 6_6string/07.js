/*
7. Write a JavaScript function to parameterize a string. Go to the editor
Test Data :
console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa"
*/
function stringParameterize(email) {
  return email.trim().split(" ").join("-");
}
console.log(stringParameterize(" This is a string "));

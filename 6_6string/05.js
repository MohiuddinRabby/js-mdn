/*
5. Write a JavaScript function to convert a string in abbreviated form. Go to the editor
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S."
*/
function abbrevName(string) {
  const splitString = string.trim().split(" ");
  return `${splitString[0] + " " + splitString[1].substring(0, 1) + "."}`;
}
console.log(abbrevName(" Golam Mohiuddin "));

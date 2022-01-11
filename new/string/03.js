// Write a JavaScript function to split a string and convert it into an array of words
function stringToArray(string) {
  // console.log(string.split(" "));
  // [ 'This', 'is', '', 'a', '', 'string' ]
  console.log(string.replace(/\s+/g, " ").split(" "));
  //remove white spaces from middle of string
}
stringToArray("This is  a  string");

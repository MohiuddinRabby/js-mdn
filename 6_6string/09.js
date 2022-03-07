/*
10. Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. Go to the editor
Test Data :
console.log(swapcase('AaBbc'));
"aAbBC"
*/
function swapcase(string) {
  return string.replace(/([a-z]+)|([A-Z]+)/g, (match, char) => {
    console.log("match", match);
    return char ? match.toUpperCase() : match.toLowerCase();
  });
}
console.log(swapcase("tHiS"));

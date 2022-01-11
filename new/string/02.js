// Write a JavaScript function to check whether a string is blank or not
function checkBlankStr(string) {
  if (string.trim().length === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(checkBlankStr(""));

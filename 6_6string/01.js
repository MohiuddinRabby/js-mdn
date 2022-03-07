// Write a JavaScript function to check whether an `input` is a string or not
function checkString(string) {
  if (typeof string === "string") {
    return true;
  } else {
    return false;
  }
}
console.log(checkString(1));

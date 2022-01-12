// Write a JavaScript function to capitalize the first letter of a string
function capitalizeStr(string) {
  const splitStr = string.trim().toLowerCase().split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    console.log(splitStr[i][0].toUpperCase() + splitStr[i].substring(1));
  }
}
capitalizeStr("this is a string");

// count repeated char
function anagram(str) {
  const strObj = {};
  for (let items of str) {
    if (strObj[items]) {
      strObj[items]++;
    } else {
      strObj[items] = 1;
    }
  }
  return strObj;
}
console.log(anagram("dog"));

function sentenceCapitalization(str) {
  let capitalizeSentenct = [];
  console.log(capitalizeSentenct);
  let strArray = str.split(" ");
  for (let index in strArray) {
    let charArray = strArray[index].split("");
    charArray[0] = charArray[0].toUpperCase();
    let tempStr = charArray.join("");
    capitalizeSentenct.push(tempStr);
    // if (index === 0) {
    //   capitalizeSentenct += tempStr;
    // } else {
    //   capitalizeSentenct += " " + tempStr;
    // }
  }
  return capitalizeSentenct.join(" ");
}
console.log(sentenceCapitalization("Hello this is a demo string"));

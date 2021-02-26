function plindrome(string) {
  const reverseStr = string.split("").reverse().join("");
  if (reverseStr === string) {
    console.log(reverseStr);
  } else {
    console.log(`${string} is not a plindrome`);
  }
}
plindrome("madam");

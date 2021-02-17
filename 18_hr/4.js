function regexVar(string) {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */
  const re = new RegExp(/^(.).*\1$/);
  /*
   * Do not remove the return statement
   */
  const vowels = ["a", "e", "i", "o", "u"];
  if (string.length >= 3) {
    for (let item of string)
      if (vowels.includes(item)) {
        console.log(re.test(string));
        // re.test - to test the string matches with the regEx
        break;
      }
  } else {
    console.log(`string must be 3 char`);
  }
}
regexVar("aooa");
regexVar("aoo");

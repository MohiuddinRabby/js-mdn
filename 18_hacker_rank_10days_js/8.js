/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  try {
    const splitStr = s.split("");
    const rev = splitStr.reverse();
    const joinStr = rev.join("");
    console.log(joinStr);
  } catch (err) {
    console.log(err.message);
    console.log(s);
  }
}
reverseString("1234");

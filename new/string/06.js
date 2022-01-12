/*
6. Write a JavaScript function to hide email addresses to protect from unauthorized user. Go to the editor
Test Data :
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"
*/
function protectEmail(email) {
  const splitEmail = email.trim().split("@");
  return `${splitEmail[0].substring(0, 5)}...@${[splitEmail[1]]}`;
}
console.log(protectEmail("test_email@gamil.com"));

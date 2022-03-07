//string methods
let email = "test_email@gmail.com";
let newStr = "";
for (let i = 0; i < email.length; i++) {
  newStr = newStr + email[i].replace("e", "5");
}
console.log(newStr);

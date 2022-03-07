const personOne = { id: 1, name: "doe", phone: 12345 };
const personTwo = { id: 2, name: "john", phone: 67890 };
const personOnePhone = personOne.phone;
console.log(personOnePhone);
//12345
personOne.phone = 111213;
console.log(personOne);
//{ id: 1, name: 'doe', phone: 111213 }
const phoneWithIndex = personOne["phone"];
console.log(phoneWithIndex);
// 111213
for (const keys in personOne) {
  console.log(`${keys} : ${personOne[keys]}`);
}
/** 
id : 1
name : doe
phone : 111213
*/
personTwo.address = "12/A,Dhaka";
console.log(personTwo);
// { id: 2, name: 'john', phone: 67890, address: '12/A,Dhaka' }

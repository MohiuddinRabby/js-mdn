//spread operator(...spread)
const personName = ["pName1", "pName2", "pName3", "pName4", "pName5"];
const personEmail = ["p1@mail.com", "p2@mail.com", "p3@mail.com"];
const pDetails = [...personName,'pDetails added',...personEmail];
// console.log(pDetails)
const personDetails = {
  name: "name1",
  email: "p1@mail.com",
  assingedTask: ["task1", "task2", "task3", "taks4"],
};
const name = ['rabby','m@mail']
function displayEmail (personEmail,personName){
    console.log(`${personEmail} ${personName}`)
}
displayEmail(...name)

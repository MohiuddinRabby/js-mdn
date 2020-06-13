//arrow function

//regular func
const name = ["testname1", "testname2", "testname3"];
function getName() {
  name.map((name) => {
    console.log(`Full name is ${name} arr`);
  });
}
getName();
//with arrow func
const getNames = name.map(name=>`hello ${name}`);
console.log(getNames)

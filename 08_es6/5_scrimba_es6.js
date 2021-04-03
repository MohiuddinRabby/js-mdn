//for loop
// Challenge - For Of Loop

// Using the For of Loop, iterate through the array and print into the console, a message like:
// Tom lives in Lisbon

const students = [
  { name: "John", city: "New York" },
  { name: "Peter", city: "Paris" },
  { name: "Kate", city: "Sidney" },
];
for (let msg of students) {
  // console.log(`${students[msg].name} lives in ${students[msg].city}`);
  console.log(`${msg.name} lives in ${msg.city}`);
}

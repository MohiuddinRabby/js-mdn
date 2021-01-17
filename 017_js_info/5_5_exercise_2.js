let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];
function sortUsers(users) {
  users.map((items) => ({
    fullName: `${items.name} ${items.surname}`,
    id: `${items.id}`,
  }));
}
console.log(usersMapped[0].fullName);

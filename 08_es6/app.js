//CONST LET
/**
 const name = 'JOhn';
let name = 'john'
name = 'doe';
name = 'John Doe'
console.log(name)
 */

//ARROW FUNCTION
// function sayHello(){
//     console.log('Hello');
// }
// sayHello();

// const sayHello = (name) => {
//   console.log(`hello ${name}`);
// };
// sayHello('Doe');

//foreach
//map
//filter
const personOne = [
    {
        id:1,
        name:'bob',
    },
    {
        id:2,
        name:'doe'
    },
    {
        id:3,
        name:'john'
    }
];
const personTwo = personOne.filter(person=>person.id !==2)
console.log(personTwo)

//spread
const arr = [1,2,3]
const arr2 = [...arr,4]
console.log(arr2)
//destructing
//classess
//subclassess
//modules

/** 
 * ex-1
const Person=()=>{
    const personDetails = [{name:'jon',age:22},{name:'doe',age:22}];
    const personDetails2 = [...personDetails];
    console.log(personDetails2)
}
Person()
*/

/**
*ex-2 (map)

const personDetails = [
  { name: "jon", age: 22 },
  { name: "doe", age: 22 },
];
const personInfo = personDetails.map(pd=>pd);
console.log('person info',personInfo)
*/

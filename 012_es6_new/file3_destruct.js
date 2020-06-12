//destructuring
const Person = {
    first:'jon',
    last:'doe',
    website:'jondoe.com',
    phone: '000999222'
}
const {first,last,website,phone} = Person;
//////////////////////////////////////////
const organization = {
    name:'company1',
    web:'com1.co.org',
    socilaLinks:{
        facebook:'www.fb.com/com1',
        twitter:'www.twt.com/com1'
    },
    address:'address12'
}
// const fb = organization.socilaLinks.facebook;
// console.log(fb)
/*step 1
const {facebook,twitter} = organization.socilaLinks;
console.log(twitter,twitter)
*/
/**step2
 * 

const {facebook:fb,twitter:tweet} = organization.socilaLinks;
console.log(fb,tweet);
 */
/** 
const names = ['name1','name20','name3','name4','name5'];
const [name1,name2,name3,name4,name5] = names;
console.log(name1);
*/

//swap with es6
let calling = 'Mr Calling';
let inQue = 'Mr Que';
/*
let temp = calling;
calling = inQue
inQue = temp;
console.log(inQue)//Mr calling
console.log(calling)//Mr que
*/
console.log(calling,inQue);
[calling,inQue] = [inQue,calling];
console.log(calling,inQue);



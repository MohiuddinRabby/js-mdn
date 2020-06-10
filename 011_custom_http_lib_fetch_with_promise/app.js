
let http = new CustomHttpLib;
//get users
http.get('https://jsonplaceholder.typicode.com/users')
.then(data=>{console.log(data)})
.catch(err=>{console.log(err)})

//user data
const data ={
name:'John doe',
email:'doej@mail.com'
}
//create post
http.post('https://jsonplaceholder.typicode.com/users',data)
.then(data=>{console.log(data)})
.catch(err=>{console.log(err)})
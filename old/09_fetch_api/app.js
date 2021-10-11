document.getElementById('text-data').addEventListener('click',getTextData);
document.getElementById('json-data').addEventListener('click',getJsonData);
document.getElementById('api-data').addEventListener('click',getAPIData);
//get text data
function getTextData(e){
    fetch('data.txt')
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        console.log(data)
        document.querySelector('.output').innerHTML=data;
    })
    e.preventDefault();

}
//get json data from file

function getJsonData(){
    fetch('post.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let output= '';
        data.forEach(function(post){
            output += `
            <li><b>${post.title}</b></li>
            <li>${post.body}</li>
            `
        })
        document.querySelector('.output').innerHTML=output
    })
}

//get api data
function getAPIData(){
    fetch('http://api.icndb.com/jokes/random/5')
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        console.log(data)
        let output = '';
        let count = '';
        data.value.map(joke=>{
            count = Number(count+1);
            output+=`<li>${count} -- ${joke.joke}</li>`
        });
        document.querySelector('.output').innerHTML=output;
    });
}
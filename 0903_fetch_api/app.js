document.getElementById('text-data').addEventListener('click',getTextData);
document.getElementById('json-data').addEventListener('click',getJsonData);
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
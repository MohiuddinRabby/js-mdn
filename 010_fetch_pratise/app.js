const btn = document.getElementById('btn')
btn.addEventListener('click',jsonPlace)
function jsonPlace(){
    fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        console.log(data);
        let output = '';
            data.map(body=>{
                output+=`<li>-00-${body.body}</li>`;
            })
            document.querySelector('.output').innerHTML = output
    })
}
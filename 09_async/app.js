document.getElementById('btn').addEventListener('click',getData);
function getData(){
    //create an xhr object
    const xhr = new XMLHttpRequest();
    //open file
    xhr.open('GET','data.txt',true);
    xhr.onload = function (){
        //http responses
        //200 == ok
        //403 == forbidden
        //404 == Not found
        if(this.status == 200){
            console.log(this.responseText);
        }
    }
    xhr.send();
}
document.querySelector(".get-jokes").addEventListener("click", getJokes);
function getJokes(e) {
  const numberOfJokes = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();
  xhr.open('GET',`http://api.icndb.com/jokes/random/${numberOfJokes}`,true);
  xhr.onload = function (){
      if(this.status===200){
          const resoponse = JSON.parse(this.responseText);
          console.log(resoponse)
          let output = '';
          if(resoponse.type === 'success'){
            resoponse.value.forEach(function(joke){
              output += `<li>${joke.joke}</li>`
            });
          }else{
            output+='<li>Something went wrong</li>'
          } 
          document.querySelector('.jokes').innerHTML = output;
      }
  }  
xhr.send();

  e.preventDefault();
}

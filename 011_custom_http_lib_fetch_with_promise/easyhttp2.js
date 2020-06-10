/**
 * @version 1.0.0
 * @license MIT
 * @author Mohiuddin
 */

class CustomHttpLib {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .then((err) => reject(err));
    });
  }
  //make POST request
  post(url,dataToSend) {
    return new Promise((resolve, reject) => {
      fetch(url,{
          method:'POST',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(dataToSend)
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .then((err) => reject(err));
    });
  }
}

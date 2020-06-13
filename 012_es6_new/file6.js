//promise
/**
 * promise is something that will happen now and between ending time
 */
const postPromise = fetch("https://jsonplaceholder.typicode.com/posts/1");
postPromise.then((res) => res.json()).then((data) => console.log(data));


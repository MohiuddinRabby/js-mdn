const hello = () => {
  console.log(`hello`);
};
const helloTwo = () => {
  setTimeout(() => {
    console.log(`hello 2`);
  }, 2000);
};
const helloThree = () => {
  console.log(`hello 3`);
};
hello();
helloTwo();
helloThree();

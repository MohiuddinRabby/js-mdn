// promise
/**example-1 */
const buySomething = (cardNumber) => {
  return new Promise((resolve, reject) => {
    if (cardNumber <= 10) {
      reject("Buying unsuccessful");
    } else {
      resolve("Buying success");
    }
  });
};
// buySomething(10)
//   .then((success) => console.log(success))
//   .catch((err) => console.log(err));
/**example-2 */
const userData = new Promise((resolve, reject) => {
  let error = true;
  if (error) {
    reject("Data not found");
  } else {
    resolve({
      userName: "Doe",
      address: "Dhaka",
    });
  }
});
userData.then((data) => console.log(data)).catch((err) => console.log(err));

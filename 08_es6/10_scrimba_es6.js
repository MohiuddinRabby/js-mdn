//aync-await promise
const restaurant = () => {
  let customerOnTable = true;
  return new Promise((resolve, reject) => {
    if (!customerOnTable) {
      reject("Table Empty !");
    } else {
      resolve("Take Order From customer");
    }
  });
};
const takeOrder = (restaurant) => {
  console.log(restaurant);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Taken order & processing");
    }, 3000);
  });
};
const processedOrder = (takeOrder) => {
  console.log(takeOrder);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Order complete");
    }, 2000);
  });
};
const deliverOrder = (processedOrder) => {
  console.log(processedOrder);
};
restaurant().then(takeOrder).then(processedOrder).then(deliverOrder);

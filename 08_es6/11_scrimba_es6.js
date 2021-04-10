//async-await
const restaurant = () => {
  let customerOnTable = true;
  return new Promise((resolve, reject) => {
    if (!customerOnTable) {
      reject("No Order");
    } else {
      resolve("Take order from customer");
    }
  });
};
const takeOrderNprocess = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Took order and proccessing");
    }, 5000);
  });
};
const deliverOrder = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Order Delivered");
    }, 1000);
  });
};
const result = async () => {
  const restaurantFunction = await restaurant();
  console.log("0", restaurantFunction);
  const takeOrderNprocessFunction = await takeOrderNprocess();
  // console.log("5", takeOrderNprocessFunction);
  const deliverOrderFunction = await deliverOrder();
  console.log("1", deliverOrderFunction);
};
result();

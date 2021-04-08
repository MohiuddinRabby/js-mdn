const restaurant = () => {
  let customerOnTable = true;
  return new Promise((resolve, reject) => {
    if (!customerOnTable) {
      reject("No Order");
    } else {
      resolve("Get Order");
    }
  });
};
const getOrder = (restaurant) => {
  console.log(restaurant);
  setTimeout(() => {
    let orderDetails = {
      menu: "Drinks",
      item: "Orange Juice",
    };
    for (let detailsOf in orderDetails) {
      console.log(`order :  ${orderDetails[detailsOf]}`);
    }
  }, 3000);
};
restaurant().then(getOrder);

const restaurant = (callback) => {
  let customerOnTable = true;
  if (!customerOnTable) {
    console.log("Table Empty! No order");
  } else {
    console.log("Get Order from Cutomer");
    callback();
  }
};
const getOrderAndProcess = (callback) => {
  setTimeout(() => {
    console.log("Got Order &  Processing");
    callback();
  }, 3000);
};
const deliverOrder = () => {
  setTimeout(() => {
    console.log("Processed and delivered");
  }, 2000);
};
restaurant(() => {
  getOrderAndProcess(() => {
    deliverOrder();
  });
});

// async await - callback
const getOrder = (callback) => {
  console.log(`Get Order from customer`);
  callback();
};
const orderConfirmed = (callback) => {
  setTimeout(() => {
    console.log(`Order received from customer`);
    callback();
  }, 2000);
};
const processingOrder = (callback) => {
  setTimeout(() => {
    console.log(`Processing Order`);
    callback();
  }, 3000);
};
const deliverOrder = (callback) => {
  setTimeout(() => {
    console.log("Order delivered");
    callback();
  }, 2000);
};
getOrder(() => {
  orderConfirmed(() => {
    processingOrder(() => {
      deliverOrder(() => {});
    });
  });
});

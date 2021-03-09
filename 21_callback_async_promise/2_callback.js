// callback
const takeOrder = (customer, callback) => {
  console.log(`take order from ${customer}`);
  callback(customer);
};
const processOrder = (customer, callback) => {
  console.log(`processing order for ${customer}`);
  setTimeout(() => {
    console.log(`cooking complete`);
    console.log(`order processed for ${customer}`);
    callback(customer);
  }, 3000);
};
const completeOrder = (customer) => {
  console.log(`completed order for ${customer}`);
};
takeOrder("john", (customer) => {
  processOrder(customer, (customer) => {
    completeOrder(customer);
  });
});

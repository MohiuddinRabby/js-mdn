const getOrder = () => {
  console.log(`processing order for customer-1`);
  let currentTime = new Date().getTime();
  //   while (currentTime + 3000 >= new Date().getTime());
  setTimeout(() => {
    console.log(`Making customer-1 order`), 3000;
  });
  console.log(`order processed for customer-1`);
};
console.log(`Take order for customer-1`);
getOrder();
console.log(`completed order for customer-1`);

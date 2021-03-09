//callback
const getUpTime = (getUpTime, callback) => {
  console.log(`get up at : ${getUpTime}`);
  callback(getUpTime);
};

const coffeeTime = (coffeeTime) => {
  //   setTimeout(() => {
  console.log(`coffee at ${coffeeTime}`);
  //   }, 2000);
};
const dressTime = (callback) => {
  console.log(`dress at : 20`);
  callback();
};
const brushTime = (brushTime, callback) => {
  setTimeout(() => {
    console.log(`brush at : ${brushTime}`);
    callback(brushTime);
  }, 1000);
};
getUpTime(10, () => {
  brushTime(10.15, () => {
    dressTime(() => {
      coffeeTime(10.35);
    });
  });
});

// callback
const userOneMsg = (userOneName, callback) => {
  console.log(`${userOneName} messaged`);
  callback();
};
const userTwoMsg = (userTwoName, callback) => {
  console.log(`${userTwoName} bloked for 2 second`);
  setTimeout(() => {
    console.log(`${userTwoName} messaged`);
    callback();
  }, 2000);
};
const userThreeMsg = (userThreeName) => {
  console.log(`${userThreeName} messaged`);
};
// userOneMsg("John");
// userTwoMsg("Smith");
// userThreeMsg("Mike");
userOneMsg("John", () => {
  userTwoMsg("Smith", () => {
    userThreeMsg("Mike");
  });
});

function hrProblemTwo(secondInt, secondFloat, secondString) {
  const firstInt = 10;
  const firstFloat = 5.8;
  const firstString = "is a string";
  secondInt = parseInt(secondInt);
  console.log(firstInt + secondInt);
  secondFloat = parseFloat(secondFloat);
  console.log(firstFloat + secondFloat);
  console.log(secondString + " " + firstString);
}
hrProblemTwo(10.3, 4, "this");

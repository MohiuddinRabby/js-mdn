const convertToFeet = (feet) => {
  const inch = 12;
  const result = feet / inch;
  console.log(`${result.toFixed(2)} inch`);
};
convertToFeet(10);
convertToFeet(5);
convertToFeet(144);

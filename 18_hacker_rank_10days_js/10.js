function matchHouses(step) {
  let count = 0;
  if (step > 0) {
    for (let i = 0; i < step; i++) {
      count = step * 6 - i;
    }
  } else {
    count = 0;
  }
  return count;
}
matchHouses(0);

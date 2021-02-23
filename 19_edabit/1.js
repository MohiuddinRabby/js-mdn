function minMax(arr) {
  let min = arr[0];
  let max = arr[0];
  //find min from arr
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  //find max from arr
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return [min, max];
}
minMax([-2, -56, -7]);

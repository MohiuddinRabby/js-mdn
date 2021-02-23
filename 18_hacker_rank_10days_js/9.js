function isPositive(a) {
  if (a > 0) {
    return "YES";
  } else {
    throw a === 0 ? new Error("Zero Error") : new Error("Negative Error");
  }
}
isPositive(1);
isPositive(-3);
isPositive(0);

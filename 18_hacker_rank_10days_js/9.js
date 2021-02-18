function isPositive(a) {
  try {
    if (a > 0) {
      throw (message = "YES");
    }
  } catch (err) {
    if (a == 0) {
      throw (err.message = "Zero Error");
    } else if (a < 0) {
      throw (err.message = "Negative Error");
    }
  }
}
isPositive(1);

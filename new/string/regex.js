function regexStr(str) {
  console.log(str.match(/(color|colour) blind/gi));
}
regexStr(
  "My favourite color is Blue. I believe most of the people are not colour blind. color blind Is the hex code is #89890 !. Every one has a fav colorrr or Color"
);

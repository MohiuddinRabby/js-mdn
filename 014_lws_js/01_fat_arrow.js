const javascript = {
  name: "javascript",
  libs: ["react", "angular", "vue"],
  msg: console.log("msg"),
  printLibs: function () {
    this.libs.map((lib) => console.log(`${lib}`));
  },
};
javascript.printLibs();

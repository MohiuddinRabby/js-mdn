const data = [
  { id: 1, name: "data one", category: "sme" },
  { id: 12, name: "data ones", category: "sme" },
  { id: 11, name: "data oness", category: "erp" },
  { id: 14, name: "data onesss", category: "sme" },
  { id: 15, name: "data onessss", category: "erp" },
];
const smeProducts = data.find((smeItems) => smeItems.category === "sme");
console.log(smeProducts);

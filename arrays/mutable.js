const products = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];

const myProducts = [];

const findProduct = products.find((product) => product.id === "🍔");

if (findProduct) {
  myProducts.push(findProduct);
}

console.log(myProducts);

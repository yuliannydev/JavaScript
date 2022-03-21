const products = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];
/* find solo retorna un objeto, y es el primer objeto que
 haga match con el elemento que está buscando */

/* find recibe una funcion que es donde se va hacer la condicional */

const rta = products.find((element) => element.id === "🥞");

console.log("rta", rta);

/* Si find no encuentra el elemento, retorna undefined */

const rta1 = products.find((element) => element.id === "🥇");

console.log("rta1", rta1);

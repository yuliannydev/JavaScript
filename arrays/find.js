const products = [
  { title: "Pizza", price: 121, id: "π" },
  { title: "Burger", price: 121, id: "π" },
  { title: "Hot cakes", price: 121, id: "π₯" },
];
/* find solo retorna un objeto, y es el primer objeto que
 haga match con el elemento que estΓ‘ buscando */

/* find recibe una funcion que es donde se va hacer la condicional */

const rta = products.find((element) => element.id === "π₯");

console.log("rta", rta);

/* Si find no encuentra el elemento, retorna undefined */

const rta1 = products.find((element) => element.id === "π₯");

console.log("rta1", rta1);

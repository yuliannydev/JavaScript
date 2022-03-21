/* Permite hacer ordenamiento dentro de los arrays */
/* Es un método mutable */

const months = ["March", "Jan", "Feb", "Dec"];

/* Ordena por el orden del codifo ASCII */
console.log(months.sort());

const numbers = [1, 30, 4, 21, 100000];

/* para obtener los numeros de menos a mayor */
console.log(numbers.sort((a, b) => a - b));

const words = [
  "réservé",
  "premier",
  "communiqué",
  "café",
  "adieu",
  "éclair",
  "banana",
];

/* Ordena por el orden del codifo ASCII */
console.log(words.sort());

const orders = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

/* Ordena de mayor a menor */
console.log(orders.sort((a, b) => b.total - a.total));

/* orden alfabetico, orden ASCII */
console.log(orders.sort((a, b) => a - b));

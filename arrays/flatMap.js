/* FlatMap nos permite mapear cada elemento para llegar al elemento
* que se quiere en especifico y luego aplana el resultado
* convirtiendolo en una nueva raiz */

const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
  { userId: 2, username: "Mike", attributes: ["Lovely", ['Example']]},
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
];

const otherUsers = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
  { userId: 2, username: "Mike", attributes: ["Lovely"]},
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
];

const rta = users.map(user => user.attributes).flat(2);
const rta1 = otherUsers.flatMap(user => user.attributes);

console.log('Map y flat', rta);
console.log('FlatMap', rta1);

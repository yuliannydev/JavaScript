/* Flat toma los elementos de los arrays y lo colocan en un solo array */

const Matriz = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
];

/* Flat puede recibir la cantidad de niveles en las que se quiere que
* entre a aplanar */
const MatrizNivel3 = [
  [1,2,3],
  [4,5,6, [1,[2]]],
  [7,8,9],
];

const rta = Matriz.flat();
const rta1 = MatrizNivel3.flat(3);

console.log('Matriz', rta);
console.log('Matriz nivel 3', rta1);

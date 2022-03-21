/* El método concat nos permitía fusionar dos o más array
* o dos o más string */
/* Es un método inmutable */
/* concat genera un nuevo array */

const array1 = ['Hello'];

const array2 = ['World'];

const array3 = ['xd'];

const a = 'La letra a';
const b = 'La letra b';

array1.concat(`${array2} ${array3}`);

array1.concat(array2, array3);

a.concat(`, ${b}`);

/* Clonar los arrays con el operador de propagacion spread operator */
const newArray = [...array1, ...array2, ...array3];

console.log(array1, array2);
console.log(newArray);

/* Join sirve para unificar un array de string */

const elements = ["Air", "Water", "Fire"];

const rta = elements.join("-").toLowerCase();

console.log(rta);

const movie = "Alicia en el país de las Maravillas";

/* El método split permite convertir en un string un array */

const rta1 = movie.split(" ").join("-").toLowerCase();

/* Cada espacio del split, separa el array en string */
/* Luego une los string por un - */
/* y lowerCase pasa todas las mayúsculas a minúsculas */

console.log("rta1", rta1);

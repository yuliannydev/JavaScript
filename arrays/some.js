/* Si alguno cumple con la condicional, retorna un true 
  - Siempre retorna un booleano
  - 
*/
const data = [
  {
    "name": "yulianny",
    "age": 31,
    "city": "Upata",
    "live": true
  },
  {
    "name": "Luke Skywalker",
    "age": 31,
    "city": "Tatooine",
    "live": true
  },
  {
    "name": "C-3PO",
    "age": 31,
    "city": "Star wars",
    "live": true
  },
  {
    "name": "Darth Vader",
    "age": 31,
    "city": "Star wars",
    "live": false
  },
  {
    "name": "Leia Organa",
    "age": 31,
    "city": "Tatooine",
    "live": true
  },
]

  const rta = data.some(element => element.live);
  console.log("rta", rta);

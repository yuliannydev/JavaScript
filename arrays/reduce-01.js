const totals = [1, 3, 2, 3];
const data = [
  "Maria",
  "Josea",
  "Laura",
  "Josefa",
  "Josefa",
  "Maria",
  "Maria",
  "Josea",
];

const rta = data.reduce(( obj, item) => {
/*  if(!obj[item]) {
    obj[item] = 1; 
  } else {
    obj[item] = obj[item] + 1;
  } 
  return obj;*/
obj[item] ? obj[item] += 1 : obj[item] = 1;
  return obj;
}, {});

console.log(rta)

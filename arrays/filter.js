const data = [
  { name: "Nathalie", single: "false" },
  { name: "Yulianny", single: "false" },
  { name: "Gio", single: "false" },
  { name: "Maryu", single: "false" },
];

/* filter retorna un array */

const searchName = (query) => {
  return data.filter((item) => {
    return item.name.toString().toLowerCase().includes(query.toLowerCase());
  });
};
console.log(searchName("mar"));

const personSingle = (query) => {
  return data.filter((data) => data.single !== "true");
};

console.log(personSingle());

const data = [
  {
    "name": "yulianny",
    "age": 31,
    "city": "Upata",
  },
  {
    "name": "Luke Skywalker",
    "age": 31,
    "city": "Tatooine",
  },
  {
    "name": "C-3PO",
    "age": 31,
    "city": "Star wars",
  },
  {
    "name": "Darth Vader",
    "age": 31,
    "city": "Star wars",
  },
  {
    "name": "Leia Organa",
    "age": 31,
    "city": "Tatooine",
  },
]

  const searchCity = data.map(item => item.city).reduce((obj, item) => {
    obj[item] ? obj[item] += 1 : obj[item] = 1;
    return obj;
    }, {});

  console.log(searchCity);

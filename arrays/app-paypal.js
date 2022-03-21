const data = [
{
  "name": "Yulianny",
  "country": "Colombia",
  "paypal": {
    "use": "no",
    "why": "attention client",
    "better": "is empty"
  }
},
  {
  "name": "Nath",
  "country": "Colombia",
  "paypal": {
    "use": "no",
    "why": "much %",
    "better": "is empty"
  }
},
  {
  "name": "Gio",
  "country": "Colombia",
  "paypal": {
    "use": "no",
    "why": "difficult use",
    "better": "is empty"
  }
},
  {
  "name": "Maryu",
  "country": "Colombia",
  "paypal": {
    "use": "no",
    "why": "difficult use",
    "better": "is empty"
  }
},
  {
  "name": "Jose",

  "country": "Colombia",
  "paypal": {
    "use": "no",
    "why": "attention client",
    "better": "is empty"
  }
},
  {
  "name": "Maryu",
  "country": "Colombia",
  "paypal": {
    "use": "no",
    "why": "much %",
    "better": "is empty"
  }
},
  {
  "name": "Laura",
  "country": "Venezuela",
  "paypal": {
    "use": "yes",
    "why": "is empty",
    "better": "attention"
  }
},
  {
  "name": "Pepe",
  "country": "Mexico",
  "paypal": {
    "use": "yes",
    "why": "is empty",
    "better": "attention"
  }
},,
];

  const useApp = data.map(item => item.paypal.use).reduce((object, element) => {
  object[element] ? object[element] += 1 : object[element] = 1;
  return object;
  }, {});
  // console.log(useApp)

  const country = data.map(item => item.country).reduce((object, element) => {
  object[element] ? object[element] += 1 : object[element] = 1;
  return object;
  }, {});
 // console.log(country)


  const whyNotUse = data.map(item => item.paypal.why).reduce((object, element) => {
  object[element] ? object[element] += 1 : object[element] = 1;
  return object;
  }, {});
 // console.log(whyNotUse)


  const improveApp = data.map(item => item.paypal.better).reduce((object, element) => {
  object[element] ? object[element] += 1 : object[element] = 1;
  return object;
  }, {});
  console.log(improveApp)


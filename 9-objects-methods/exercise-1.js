const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

Object.keys(person).forEach(key => {
  console.log(`${key}: ${person[key]}`);
});

//If I use just Object.keys, it will print just the keys.
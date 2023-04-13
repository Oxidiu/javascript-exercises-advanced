const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon"

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);

//The name is modified in both person1 and person2 objects, because they're not actually two different objects, but two different adrdresses to the same object.

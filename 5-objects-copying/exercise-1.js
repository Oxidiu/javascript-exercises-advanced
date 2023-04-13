const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

let person2 = person1;

person2.firstName = "Simon"

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);

//The name is modified in both person1 and person2 objects, because they're not actually two different objects, but two different adrdresses to the same object.

person2 = {...person1}; // This way one can actually copy an object and have a whole new object because this way, a new object is created and all the key-values from the last obj will be copied to it.
person2.firstName = "Oliver";

console.log(person1)
console.log(person2) // Now we see if we modify the second object, the first one will remain intact.



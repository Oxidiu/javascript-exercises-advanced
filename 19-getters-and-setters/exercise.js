class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName,
    this._lastName = lastName
  }
  //How to set a setter?
  get firstName() {
    return this._firstName;
  }
  set firstName(updatedFirstname) {
    this._firstName = updatedFirstname
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(updatedLastname) {
    this._lastName = updatedLastname;
  }

  get fullName() {
    return `${this._firstName} ${this.lastName}`
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);
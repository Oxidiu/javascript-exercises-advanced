const fruits = [
    { name: 'apple', color: 'red', price: 0.5 },
    { name: 'banana', color: 'yellow', price: 0.25 },
    { name: 'orange', color: 'orange', price: 0.4 },
    { name: 'grape', color: 'purple', price: 0.1 },
    { name: 'kiwi', color: 'green', price: 0.35 },
    { name: 'strawberry', color: 'red', price: 0.15 },
    { name: 'mango', color: 'orange', price: 0.75 },
    { name: 'pineapple', color: 'yellow', price: 1.0 },
    { name: 'watermelon', color: 'green', price: 2.5 },
    { name: 'pear', color: 'green', price: 0.3 }
];
class Fruit {
    constructor(name, color, price) {
        this._name = name;
        this._color = color
        this._price = price
    }
    get name() {
        return this._name
    } 
    set name(newName) {
        this._name = newName
    }
    get color() {
        return this._color
    }
    set color(newColor) {
        this._color = newColor
    }
    get price() {
        return this._price
    }
    set price(newPrice) {
        this._price = newPrice
    }
    getDescription() {
        const {name, color, price} = this
        return `The ${name} is ${color} and it costs ${price}`
    }
}


const instancesOfFruit = [];

for (let i = 0; i < fruits.length; i++) {

    const newFruit = new Fruit(fruits[i].name, fruits[i].color, fruits[i].price)
    instancesOfFruit.push(newFruit)
}


class FruitStore {
    constructor(fruits) {
        this._fruits = fruits;
    }
    get fruits() {
        return this._fruits
    }
    set fruits(newFruits) {
        this._fruits = newFruits
    }

    addFruit(fruitObj) {
        this._fruits.push(fruitObj)
    }

    removeFruit(fruitObj) {
        this._fruits.splice(this._fruits.indexOf(fruitObj), 1)
    }
    getFruitsByColor(color) {
        return this._fruits.filter(fruit => fruit.color === color)
    }
    getTotalRevenue() {
        return this._fruits.reduce((total, current) => total + current.price, 0)
    }
    getFruitsNames() {
        return this._fruits.map(fruit => fruit.name)
    }
}

const instanceOfFruitStore = new FruitStore(fruits)

console.log("Red fruits:");
const redFruits = instanceOfFruitStore.getFruitsByColor("red");
console.log(redFruits)

console.log("Description of a random fruit:")
console.log(instancesOfFruit[Math.floor(Math.random() * instancesOfFruit.length)].getDescription());

console.log("Total revenue:")
console.log(instanceOfFruitStore.getTotalRevenue())

console.log("Fruit Names:")
console.log(instanceOfFruitStore.getFruitsNames())

console.log("instanceOfFruitStore converted to JSON:")
console.log(JSON.stringify(instanceOfFruitStore))
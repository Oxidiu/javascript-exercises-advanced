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

Create a class called Fruit, that has three properties, _name, _color, and _price.
Create another class called FruitStore, which has an array property called "_fruits".
Write getters and setters for all the properties.

In the class Fruit:

write a method called "getDescription", which returns a string in the format "The NAME fruit is COLOR and costs $PRICE."

use destructuring to get the values of name, color, and price in the method getDescription

In the class FruitStore:

write a method called "addFruit", which receives a Fruit object and adds it to the _fruits array.

write a method called "removeFruit", which receives a Fruit object and removes it from the _fruits array.

write a method called "getFruitsByColor", which receives a color string and returns an array of fruits that have that color. Use the filter() method.

write a method called "getTotalRevenue", which returns the total revenue generated by the store. Use the reduce() method.

write a method called "getFruitNames", which returns an array of all the fruit names in the store. Use the map() method.

Create an instance of FruitStore and add all the fruits from the array "fruits" to it.

Call the "getFruitsByColor" method for the color "red" and console.log the result.

Call the "getDescription" method for at least one fruit and console.log the result.

Call the "getTotalRevenue" method and console.log the result.

Call the "getFruitNames" method and console.log the result.

Convert the FruitStore object to JSON, and then convert the JSON back to a regular FruitStore object.
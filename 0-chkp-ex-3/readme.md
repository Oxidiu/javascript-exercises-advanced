Consider the following array of objects:

javascript
Copy code
const products = [
  { id: 1, name: 'iPhone', price: 1000 },
  { id: 2, name: 'Samsung Galaxy', price: 900 },
  { id: 3, name: 'Google Pixel', price: 800 },
  { id: 4, name: 'OnePlus', price: 700 },
  { id: 5, name: 'Xiaomi', price: 600 },
  { id: 6, name: 'Huawei', price: 500 },
];
Create a class called Product that has three properties: _id, _name, and _price. Write getters and setters for all the properties.

Create another class called Cart, which has a property called _items, which is an array of objects that represents the products in the cart. Write a getter for _items.

Add a method to the Cart class called addToCart, which takes a Product object as an argument and adds it to the _items array.

Add a method to the Cart class called removeFromCart, which takes an id as an argument and removes the product with that id from the _items array.

Add a method to the Cart class called total, which returns the total cost of all the products in the _items array.

Add a method to the Cart class called emptyCart, which removes all the products from the _items array.

Create a new instance of the Cart class called myCart.

Use the addToCart method to add the Product with id of 1 to myCart.

Use the total method to calculate the total cost of the products in myCart.

Use the removeFromCart method to remove the Product with id of 2 from myCart.

Use the emptyCart method to remove all the products from myCart.

Create a class called DataProcessor, which has two static methods:

getTotalPrice(products: Product[]): number: which receives an array of Product objects and returns the total cost of all the products.

findCheapestProduct(products: Product[]): Product: which receives an array of Product objects and returns the cheapest Product.

Use the getTotalPrice method of the DataProcessor class to calculate the total cost of all the products in the products array.

Use the findCheapestProduct method of the DataProcessor class to find the cheapest Product in the products array.

Use destructuring to extract the name and price properties of the cheapest Product found in the previous step.

Use the typeof operator to determine the type of the _price property of the Product class.
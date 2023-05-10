const orders = [
{ id: 1, customer: 'Alice', product: 'Shirt', price: 20 },
{ id: 2, customer: 'Bob', product: 'Shoes', price: 50 },
{ id: 3, customer: 'Charlie', product: 'Hat', price: 10 },
{ id: 4, customer: 'David', product: 'Socks', price: 5 },
{ id: 5, customer: 'Eva', product: 'Jacket', price: 100 },
{ id: 6, customer: 'Frank', product: 'Pants', price: 30 },
];

Create a class called Order that has four properties: _id, _customer, _product, and _price. Write getters and setters for all the properties.

Create another class called OrderManager, which has a property called _orders, which is an array of objects that represents the orders. Write a getter for _orders.

Add a method to the OrderManager class called addOrder, which takes an Order object as an argument and adds it to the _orders array.

Add a method to the OrderManager class called removeOrder, which takes an id as an argument and removes the order with that id from the _orders array.

Add a method to the OrderManager class called total, which returns the total cost of all the orders in the _orders array.

Add a method to the OrderManager class called emptyOrders, which removes all the orders from the _orders array.

Create a new instance of the OrderManager class called myOrders.

Create a new instance of the Order class called newOrder, with _id = 7, _customer = 'Grace', _product = 'Bag', _price = 25.

Use the addOrder method to add the newOrder to myOrders.

Use the total method to calculate the total cost of the orders in myOrders.

Use the removeOrder method to remove the order with id of 3 from myOrders.

Use the emptyOrders method to remove all the orders from myOrders.

Create a class called OrderFetcher, which has one static method:

fetchOrders(): Promise<Order[]>: which returns a promise that resolves with an array of Order objects. Simulate an asynchronous call by wrapping the orders array with a setTimeout function that resolves after 2 seconds.

Call the fetchOrders method and use .then() to console.log the array of orders returned.

Create a new method on the OrderManager class called fetchOrders, which calls the OrderFetcher's fetchOrders method to get an array of orders and adds them to the _orders array using the addOrder method.

Create a new instance of the OrderManager class called fetchedOrders.

Call the fetchOrders method on fetchedOrders to populate the _orders array with orders.

Use the total method to calculate the total cost of the orders in fetchedOrders. Note that this will include the orders fetched from the fetchOrders method.

Convert the array of Order objects to JSON using JSON.stringify.

Use a JavaScript Promise to delay for 1 second, then parse the JSON back into an array of Order objects using JSON.parse.
const orders = [
    { id: 1, customer: 'Alice', product: 'Shirt', price: 20 },
    { id: 2, customer: 'Bob', product: 'Shoes', price: 50 },
    { id: 3, customer: 'Charlie', product: 'Hat', price: 10 },
    { id: 4, customer: 'David', product: 'Socks', price: 5 },
    { id: 5, customer: 'Eva', product: 'Jacket', price: 100 },
    { id: 6, customer: 'Frank', product: 'Pants', price: 30 },
];

class Order {
    constructor(id, customer, product, price) {
        this._id = id;
        this._customer = customer;
        this._product = product;
        this._price = price;
    }

    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value
    }

    get customer() {
        return this._customer;
    }
    set customer(value) {
        this._customer = value
    }

    get product() {
        return this._product
    }
    set product(value) {
        this._product = value
    }
}

class OrderManager {
    constructor(orders = []) {
        this._orders = orders
    }
    get orders() {
        return this._orders
    }
    addOrder(orderObj) {
        if(orderObj instanceof Order) {
            this._orders.push(orderObj)
        }
    }
    removeOrder(id) {
        this._orders = this._orders.filter((order) => order.id !== id)
    }
    total() {
        return this._orders.reduce((total, current) => total + current._price, 0)
    }
    emptyOrders() {
        this._orders = []
    }
    fetchOrders() {
        OrderFetcher.fetchOrders()
            .then((result) => {
                this._orders = result
                console.log("Orders Fetched")
                
                console.log(this._orders)
                
            })
            .catch("error")
    }
}

console.log("myOrders:")
const classedOrders = []
for (let i = 0; i < orders.length; i++) {
    const newOrder = new Order (orders[i].id, orders[i].customer, orders[i].product, orders[i].price )
    classedOrders.push(newOrder)
};

const myOrders = new OrderManager(classedOrders);
console.log(myOrders)

const newOrder = new Order (7, "Grace", "Bag", 25);
myOrders.addOrder(newOrder);
console.log(myOrders)

console.log("Total:")
console.log(myOrders.total())

console.log("Removed order 3")
myOrders.removeOrder(3)
console.log(myOrders)

// console.log("Orders emptied")
// myOrders.emptyOrders()
// console.log(myOrders)

console.log("Fetched orders after 2 seconds")
class OrderFetcher {
    static fetchOrders () {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(classedOrders) 
                reject("Error")
            }, 2000)
        })
        
        
    }
}
// OrderFetcher.fetchOrders()
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error))

const fetchedOrders = new OrderManager()
console.log("Fetched Orders");
fetchedOrders.fetchOrders()
    // .then(() => {
    //     const total = fetchedOrders.total()
    //     console.log(`Total: ${total}`)
    // })
setTimeout(() => {
    console.log("Total cost of orders in fetchedOrders:");
    console.log(fetchedOrders.total());
}, 2000);




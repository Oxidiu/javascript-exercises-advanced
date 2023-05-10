const products = [
    { id: 1, name: 'iPhone', price: 1000 },
    { id: 2, name: 'Samsung Galaxy', price: 900 },
    { id: 3, name: 'Google Pixel', price: 800 },
    { id: 4, name: 'OnePlus', price: 700 },
    { id: 5, name: 'Xiaomi', price: 600 },
    { id: 6, name: 'Huawei', price: 500 },
];


class Product {
    constructor(id, name, price) {
        this._id = id;
        this._name = name;
        this._price = price;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
}

class Cart {
    constructor(items = []) {
        this._items = items;
    }
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
    }
    addToCart(productObj) {
        this._items.push(productObj);
    }
    removeFromCart(productId) {
        this._items = this._items.filter((item) => item.id !== productId);
    }
    total() {
        return this._items.reduce((total, item) => total + item.price, 0);
    }
    emptyCart() {
        this._items = [];
    }
}

class DataProcessor {
    static getTotalPrice(arr) {
        if(arr.every((elem) => elem instanceof Product)){
            return arr.reduce((total, item) => total + item.price, 0);
        } else {
            return "There are no products"
        }
    }
    static findCheapestProduct(arr) {

        if(arr.every((elem) => elem instanceof Product)){

            return arr.reduce((cheapest, item) => cheapest.price < item.price ? cheapest : item) 
        }
    }
}

const myCart = new Cart()


const instancesOfProduct = [] 
for (let i = 0; i < products.length; i++) {
    const product = new Product(products[i].id, products[i].name, products[i].price)
    instancesOfProduct.push(product)
}




//-----------------Loggings------------------
console.log("Adding product to cart...")
myCart.addToCart(instancesOfProduct[0])
console.log("Products currently in the cart:")
console.log(myCart)

console.log("Total:")
let total = myCart.total()
console.log(total)

console.log("Added another product...")
myCart.addToCart(instancesOfProduct[1])
console.log("Products currently in the cart:")
console.log(myCart)

console.log("Total:")
total = myCart.total()
console.log(total)

console.log("Removing product from the cart:")
myCart.removeFromCart(2)
console.log("Products currently in the cart:")
console.log(myCart)

console.log("Total:")
total = myCart.total()
console.log(total)

console.log("Emptying cart...")
myCart.emptyCart()
console.log("Products currently in the cart:")
console.log(myCart)

console.log("Added another product...")
myCart.addToCart(instancesOfProduct[0])
console.log("Products currently in the cart:")
console.log(myCart)

console.log("Added another product...")
myCart.addToCart(instancesOfProduct[1])
console.log("Products currently in the cart:")
console.log(myCart)

console.log("Added another product...")
myCart.addToCart(instancesOfProduct[2])
console.log("Products currently in the cart:")
console.log(myCart)

console.log("Total Price:")
console.log(DataProcessor.getTotalPrice(myCart.items))

console.log("Cheapest Product:")
console.log(DataProcessor.findCheapestProduct(myCart.items))

const {name, price} = DataProcessor.findCheapestProduct(myCart.items)
console.log(name, price)





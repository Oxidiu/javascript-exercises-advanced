function printHello() {
    console.log("Hello")
}
// const printHello = () => console.log("Hello")
function repeatHello(callback) {
    setInterval(callback, 1000)
}

// printHello()
repeatHello(printHello)

//"The callback function must be an arrow function, can you also explain why?" 
// ↑ It seems it works with normal function as well.
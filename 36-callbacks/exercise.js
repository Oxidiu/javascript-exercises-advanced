let greeting = () => console.log("Hello")
const repeatHello = (callback) => {
    let repeating = setInterval(callback, 1000);
    setTimeout(() => clearInterval(repeating), 5000)
}
repeatHello(greeting)
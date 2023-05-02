
let greeting = () => console.log("Hi")
// const printAsyncName = (callback, name) => {
//     setTimeout(() => {
//         callback();
//         setTimeout(() => {
//             console.log(name)
//         }, 1000)
//     }, 1000)
// }
// printAsyncName(greeting, "Oxide")


const printAsyncName2 = (callback, name) => {
    let greeting2 = setInterval(callback, 1000)
    setTimeout(() => {
        clearInterval(greeting2);
        console.log(name)
    }, 2000);
}
printAsyncName2(greeting, "Oxide")

// wrote it in two different ways
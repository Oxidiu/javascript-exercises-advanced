const isLogged = true;
const myFirstPromise = (isLogged) => {
    return new Promise((resolve, reject) => {
        if (isLogged === true) {
            const rand = Math.random()
            resolve(rand);
        } else {
            reject(new Error("User not logged in"));
        }
    });
};

const mySecondPromise = (inputNumber) => {
    return new Promise((resolve, reject) => {
        if (inputNumber > 0.5) {
            resolve({name: "John", age: 24})
        } else {
            reject(new Error("Input number is not greater than 0.5"));
        }
    })
}
myFirstPromise(isLogged)
.then(mySecondPromise)
.then((details) => console.log(details))
.catch((error) => console.error(error))


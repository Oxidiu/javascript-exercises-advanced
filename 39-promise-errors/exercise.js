let isLogged = true;
const firstPromise = (isLogged) => {
    return new Promise((resolve, reject) =>{
        if(isLogged === true) {
            let rand = Math.random()
            resolve(rand);
        } else {
            reject(new Error("User not logged in"));
        }
    })
}

const secondPromise = (number) => {
    return new Promise((resolve, reject) =>{
        if(number > 0.5){
            resolve({name: "John", age: 24});
        } else {
            reject(new Error ("number is less than 0.5"));
        }
    })
}

firstPromise(isLogged)
    .then(secondPromise)
    .then(result => console.log(result))
    .catch(err => console.error(err))
    .finally(console.log("This message will appear regardless of resolve or reject"))
const number = 15;
let myPromise = new Promise((resolve, reject) =>{
    if(number > 10) {
        return resolve();
    } else {
        return reject();
    };
})
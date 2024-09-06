// The Promise object represents the eventual completion (or failure) 
//of an asynchronous operation and its resulting value.


//creating a promise 
let promiseOne = new Promise(function (resolve, reject) {
    //performs an Async task
    //such as DB calls, Cryptography calls, Network calls
    setTimeout(function () {
        console.log('Async task is completed!');
        //will call resolve to consume a promise
        resolve()
    }, 1000)
})

//consuming a promise
promiseOne.then(function () {
    console.log('Promise consumed!');
})

//another way
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Asynce task 2 completed');
        resolve()
    }, 1000)
}).then(function () {
    console.log('Asynce task 2 resolved/consumed');

})

//another promise
let promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        //passing data in resolve 
        resolve({ name: "Abhishek", email: "bansodabhishek7@gmail.com" })
    }, 1000)
})

promiseThree.then(function (userData) {
    //receiving the data from resolve
    console.log(userData);
})

//another promise
let promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: 'ABANSOD', password: 'enigma@123' })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
    // return user.password
}).then((username) => {
    console.log(username);
    // console.log(password); 
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('The promise is either resolved or rejected');

})

//another promise
let promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ language: 'JavaScript', code: '23456' })
        } else {
            reject('ERROR: Javascript went wrong')
        }
    }, 1000)
})

async function consumepromiseFive() {
    try {
        let response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumepromiseFive()

//using .then and .catch method
// promiseFive.then( (user) =>{
//     console.log(user);
//     return user.language
// } ).then((language) => {
//     console.log(language);
// }).catch((error) => {
//     console.log(error);
// }).finally('The promise is either resolved or rejected')



//tryiing to get the response/data from URL : https://jsonplaceholder.typicode.com/users -> collection of users

//using async and await method****************
// async function getAllUser(){
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/users')

//         let data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('Error', error);
//     }
// }
// getAllUser()


//using .then and .catch********************
fetch('https://jsonplaceholder.typicode.com/users').then( (response) => {
    let data = response.json()
    return data
}).then((data) =>{
    console.log(data);
}).catch((error) => {
    console.log('Error', error);
})
 
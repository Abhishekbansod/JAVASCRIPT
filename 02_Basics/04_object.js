// Object Declaration using Constructor -> singleton object

const myObject = new Object()

//input values
myObject.name = "Abhishek"
myObject.id = 1307755
myObject.password = "abhi123"
myObject.isUserLoggedIn = false

//console.log(myObject);

//Object inside the object
const user1 = {
    emailId : "bansod@gmail.com",
    userName : {
        userFullName : {
            firstName : "Abhishek",
            lastName : "Bansod"
        }
    }
}

//access the object elements, display firstName & lastName
console.log(user1.userName.userFullName.firstName)
console.log(user1.userName.userFullName.lastName);

//How to combine tow objects together using spread operator

const obj1 = {
    1 : "a",
    2 : "b",
    3 : "c"
}

const obj2 = {
    4 : "x",
    5 : "y",
    6 : "z"
}

//combining two objects using spread operator(...) -> mostly used to combine objects
const obj3 = {...obj1, ...obj2}
console.log(obj3);

//another way to combine two objects using Object.assign() method
// const obj4 = Object.assign({}, obj1, obj2)
// console.log(obj4);

//
const allUserDetails = [
    {
        id : 1307755,
        name : "abc",
        email : "abc@gmail.com"
    },
    {
        id : 1304567,
        name : "xyz",
        email : "xyz@gmail.com"
    },
    {
        id : 1459078,
        name : "lmn",
        email : "lmn@gmail.com"
    }
]

//how to access the details
console.log(allUserDetails[0].email);
console.log(allUserDetails[1].email);
console.log(allUserDetails[2].name);


//Interesting & important concept of key, values
//how to access keys & values of objects
console.log(myObject);
console.log(Object.keys(myObject)); //will return key values of myObject
console.log(Object.values(myObject)); //will return values of myObject


//used to check if given property is available or not(in given object)
//console.log(myObject.hasOwnProperty("isUserLoggedIn"));
//Types of Data-Types
//1 - Primitive Data Types
//2 - Reference (Non Primitive) Data Types


//Primitive Data Types
//7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt etc.

let customerEmail = "bansodabhishek7@gmail.com"
let userId = 1237755
let userAnotherId = 137755.46
let isUserLoggedIn = true;
let userName;  // OR let userName = undefined;

//Symbol
const id = Symbol('245')
const anotherId = Symbol('245') 
console.log(id == anotherId);

let BigInt = 49857459437928n;

//Reference (Non Primitive) Data Types
//3 Types : Arrays, Objects, Functions

//Array
const marvelHeroes = ["Captain America", "Iron-Man", "Thor", "Ant-Man", "Spider-Man"]

//object
const myInformation = {
    Name: "Abhishek",
    age: 23,
    userId: 1307755,
    office: "Infosys"
}

//function
const myFunction = function(){
    console.log("This is my first function declaration!");
}

//typeof operator
console.log(typeof userId);
console.log(typeof customerEmail);
console.log(typeof isUserLoggedIn);
console.log(typeof id);
console.log(typeof id);
console.log(typeof marvelHeroes);
console.log(typeof myInformation);
console.log(typeof myFunction);







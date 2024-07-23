//Interview Question
//How to declare a symbol & take the symbol value as input in Object, display it

const mySymbol = Symbol("key1")

//creating object
const myObject = {
    name : "Abhishek",
    age : 24,
    company : "Infosys",
    [mySymbol] : "uniqueKey", //declare symbol in [] -> square brackets
    isUserLoggedIn : true
}

//access & display symbol value 
console.log(myObject[mySymbol]);

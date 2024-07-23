//Object literals

const myObject = {
    name : "Abhishek",
    "full name" : "Abhishek Bansod",
    age : 24,
    id : 1307755,
    isUserLoggedIn : false,
    lastLoggedInDay : ["Monday", "Friday", "Sunday"]
}

//how to access object elements
console.log(myObject.name); //normal way to access obejct elements
console.log(myObject["lastLoggedInDay"]); //another way to access object elements

//console.log(myObject.full name); not possible also throw an error
//Ideal way to access object elements
console.log(myObject["full name"]);

//how to change values of elements & freeze the object so that values can't be changed
// myObject.age = 35
// console.log(myObject);

//Object.freeze(myObject) //used to freeze myObject, now values can't be changed
//now try to change the values
// myObject.name = "Bansod" //values won't be changed
// console.log(myObject);


//function creation with object
//first function 
myObject.greetingsOne = function(){
    console.log("Hellow JS User!");
}

//Another function 
myObject.greetingsTwo = function(){
    console.log(`Hellow JS User, ${this.name}`);
}

//calling the functions
console.log(myObject.greetingsOne());
console.log(myObject.greetingsTwo());
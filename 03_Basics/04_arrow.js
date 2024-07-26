//this keyword & arrow function

//this keyword refers to the current context of the object
const user = {
    username  : "abhishek",
    userId : 1307755,

    displayUser : function(){
        console.log(`Hellow my name is ${this.username} with my userID : ${this.userId}`);
        // console.log(this); //refers to the current context of object
    }
}
// console.log(this); //will return object -> {} -> there is not current context
// user.displayUser()
// user.username = "Rahul"
// user.displayUser()


//We can't use this keyword inside the function to access the data/value - IMP TO REMEMBER
// function myFunction (){
//     let name = "abhishek"
//     console.log(this) //returns too much information
//     console.log(this.name); //returns undefined - as it is running on node
// }
// myFunction()

const myFunction = function (){
    let name = "abhishek"
    console.log(this); //returns too much information
    console.log(this.name); //returns undefined - as it is running on node
}
myFunction()

//arrow function declaration
const function1 = () => {
    let name = "abhi"
    console.log(this); //returns global object - {}
    console.log(this.name); //returns undefined
}
function1()

//one way -> {} make sure to add return
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(44, 100));

//another way -> () no need to add return -> will use this cases mostly in React.js
const addTwoNos = (num1, num2) => (
    num1 + num2
)
console.log(addTwoNos(22, 44));

//if we know there's only one statement inside the () or {} then it can be written as below
// const addTwoNumbers = (num1, num2) => num1 + num2
// console.log(addTwoNumbers(45, 95));

// const addTwoNumbers = (num1, num2) => ({username : "abhi"})
// console.log(addTwoNumbers(45, 95));


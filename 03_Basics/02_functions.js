//**************Functions with array & objects********************

//rest operator (... converts the arguments into an array -> ...num1 gives o/p as [ 100, 200, 3000, 500, 345 ])
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(100, 200, 3000, 500, 345));

//another method with same implementation -> Interview Question
// function calculateCartPrice(num1, num2, ...num3){
//     return num3
// }
// console.log(calculateCartPrice(549, 640, 584, 8493, 4834));

//functions with object
myObject = {
    name : "Abhishek",
    company : "Infosys Limited",
    experience : "18 Months"
}

//object -> parameter passed, anything can be passed here. e.g. value, data etc. any name should be fine
function displayEmployeeDetails(object){
    console.log(`Hello Everyone my name is ${object.name} and I'm working at ${object.company} with ${object.experience} experience.`);
}
//while calling function, object(object name) should be passed as an argument
displayEmployeeDetails(myObject) 

//another way to pass object as an argument
// displayEmployeeDetails({
//     name : "Preety",
//     company : "Tesla"
// })


//functions with Array
const myArray = [230, 456, 789, 450, 894]

function returnFourthArrElement(arr){
    return arr[3]
}
console.log("Value at fourth position : ", returnFourthArrElement(myArray));

//another way to pass array an argument
//console.log(returnFourthArrElement([230, 456, 789, 894]));
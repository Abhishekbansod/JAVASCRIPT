function myFunction(){
    console.log("This is a function");
}
//myFunction -> function reference, myFunction() -> function call
//myFunction()

//normal function which displayes addition of two numbers

function addTwoNumbers(num1, num2){
    // let result = num1 + num2 
    // return result

    //can directly return the sum 
    return num1 + num2
    console.log("Result is :"); //it won't be displayed because function has already returned something
    //function execution stops after return statement & nothing executed after that
}
//addTwoNumbers(44, 44) -> it won't display the result, need to print/display as well
const result = addTwoNumbers(4, 5)
console.log(result);


//another basic function for userLoggedIn or not
function userLoggedInMessage(username){
    return `${username} has just logged in!`
}
//need to display as well
console.log(userLoggedInMessage("Abhishek"))
console.log(userLoggedInMessage(""));
console.log(userLoggedInMessage()); //could be an interview question -> undefined


//same function with more info
// function userLoggedInMessage(username){
//     if(!username){
//         console.log("Please enter an username!");
//         return
//     }
//     return `${username} has logged in!`
// }
// console.log(userLoggedInMessage());
// console.log(userLoggedInMessage("abhi"))
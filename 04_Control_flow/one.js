//Control flow statements
//if & if-else statement

//conditional operatiors that can be used
//>, >=, <, <=, ==, !=, ===, !==

//check temp is above 50 or not
// let temp = 45
// if(temp <= 50){
//     console.log("temp is lesser than 50 or equal to 50");
// }else{
//     console.log("temp is greater than 50");
// }


// let myScore = 67
// let myName = "Abhishek"
// if(myScore > 100){
//     console.log(`${myName}, your score is : ${myScore} which is greated than 100!`);
// }else{
//     console.log(`${myName}, your score is lesser than 100!`);
// }


//if - else if statement 
// let myGameScore = 945
// if(myGameScore < 500){
//     console.log(`Your game score is : ${myGameScore} which is lesser than 500`);
// } else if(myGameScore < 750){
//     console.log(`Your game score is : ${myGameScore} which is lesser than 750`);
// }else if(myGameScore < 900){
//     console.log(`Your game score is : ${myGameScore} which is lesser than 900`);
// }else{
//     console.log(`Your game score is : ${myGameScore} which is lesser than 1000`);
// }


// use of &&, || during the control flow

//use of && --> both conditions should be true then if block will execute otherwise else will execute
let userName = "Abhishek"
let isUserLoggedIn = true
let userCreditCard = false
let store = "Sabhya Sachi"

if(isUserLoggedIn && userCreditCard){
    console.log(`${userName}, you are allowed to purchase from ${store}!`);
}else{
    console.log(`${userName}, you are not allowed to purchase from ${store}!`);
}


//use of || --> even if one condition is true out of all mentioned conditions then if block will execute
let user = "Preety"
let userHasCreditCard = true
let userHasDebitCard = false
let storeName = "Gada Electronics"

if(userHasCreditCard || userHasDebitCard){
    console.log(`${user}, you are allowed to purchase from ${storeName}!`)
}else{
    console.log(`${user}, you are not allowed to purchase from ${storeName}!`)
}
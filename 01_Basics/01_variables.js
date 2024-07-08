const userId = 1307755
let userEmailId = "bansodabhishek7@gmail.com"
var userPassword = "Abhishek@123"
userCity = "Nagpur" //not the ideal way to initialize variable
let userState; //not initialize the variable value & try to display it will give undefined as output

/*
Prefer not to use var
because of issue in block scope and functinal scope
*/

//reassign the values & try to display on terminal
//userId = 45678    -> can't change the value of const variable because in JS it is not allowed.
userEmailId = "abhi@gmail.com"
userPassword = "bansod@123"
userCity = "Bangalore"


//console.log([userEmailId, userPassword,userCity]);
console.table([userId, userEmailId, userPassword, userCity, userState]) // It is used to display more than one values
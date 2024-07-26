//declaring variables

//whenever any variable is declared with "var" then we can access it's value through-out the program
//In below case var1, var2 are not accessible outside if() but var3(var var3) is accessible because of global level scope

//var var3 = 400
if(true){
    let var1 = 10
    const var2 = 20
    //console.log(var3);
    var var3 = 30 //global level scope
}

//console.log(var1);
//console.log(var2);
console.log(var3);


//Nested functions for scope understanding
function myFunction1 (){
    let myName = "abhishek"

    function myFunction2 (){
        let myLastName = "bansod"
        console.log("Inside the function 2 : ", myName);
    }
    //console.log(myLastName); //will give an error as it is out of scope ie myFunction2
    myFunction2()
}
myFunction1()


//Nested if for scope understanding
if(true){
    let myFirstName = "Abhishek"

    if(true){
        let myLastName = " Bansod"
        console.log(myFirstName + myLastName);
    }
    //console.log(myLastName); will throw an error as it is out of scope
}
//console.log(myFirstName); //will throw an error as it is out of scope


//+++++++++++++++++Interesting Concept(Mini Hoisting)+++++++++++++++++++++++++

//function to add 1 in given number -> ideal way to declare function
console.log(addOne(10)); //calling function before its initialization -> will run without any error
function addOne (number){
    return number + 1
}


//function to add 2 in given number -> another way to declare function
//when we declare function as below, then we cannot call function before its initialization

//console.log(addTwo(10)); //Cannot access 'addTwo' before initialization -> will throw an error
let addTwo = function (number){
    return number + 2
}
console.log(addTwo(100)); //ideal way to call function in such cases
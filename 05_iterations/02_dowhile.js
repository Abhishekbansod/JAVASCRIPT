//while and do while loop in JavaScript

//while loop with examples
let index = 0
while (index <= 10) {
    //console.log(`The value of index is : ${index}`);
    index = index + 2
}

//while with an array
let i = 0;
let myArray = ["Batman", "Superman", "Flash", "Wonder Women", "Spider Man", "Iron Man"]
while(i < myArray.length){
    //console.log(`The value at ${i} position is : ${myArray[i]}`);
    i++
}


//do while loop with example

let myScore = 5
// let myScore = 45
do{
    console.log(`My score is : ${myScore}`);
    myScore++
}while(myScore <= 10)

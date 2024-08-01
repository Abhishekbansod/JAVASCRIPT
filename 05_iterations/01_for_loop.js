//for loop

//program to print numbers from 1 to 10
for(let index = 1; index <= 10; index++){

    let numbers = index
    if(numbers%2 == 0){
        //console.log(`${numbers} is even number`);
    }
    //console.log(numbers);

    // if(index == 10){
    //     console.log("10 will be displayed");
    // }
    // console.log(index);
}


//loop inside loop
for(let i = 1; i <= 10; i++){
    //console.log(`Outer loop value i is : ${i}`);
    for(let j = 1; j <= 10; j++){
        //console.log(`Inner loop value j is : ${j} and inner loop value of i is ${i}`);

        //display the multiplication of i and j
        //console.log(`${i} * ${j} = ${i * j}`);
    }
}

//for loop with an array
let mySuperheroes = ["Iron-Man", "Captain-America", "Spider-Man", "Captain-Marvel", "Thor", "Super-Man"]
//console.log(`Array length is: ${mySuperheroes.length}`);

//console.log(mySuperheroes[3]);
for(let index = 0; index < mySuperheroes.length; index++){
    //console.log(mySuperheroes[index]);
}


//break statement with an array
for(let index = 1; index <= 10; index++){

    if(index == 4){
        //console.log(`Value ${index} detected so exiting loop!`);
        break
    }
    //console.log(`Value of index is : ${index}`);
}


//break statement with one more example
//stop displaying values if number is even
let myArray = [23, 45, 67, 89, 20, 97, 60]
for (let index = 0; index < myArray.length; index++) {

    if(myArray[index] % 2 == 0){
        console.log(`${myArray[index]} is even number so exiting loop!`);
        break
    }
    console.log(myArray[index]);    
}


//continue statement
for (let index = 1; index <= 10; index++) {

    if(index == 6){
        console.log(`${index} is detected so directly jump to next iteration`);
        continue
    }
    console.log(`The value is ${index}`);
}
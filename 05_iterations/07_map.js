//map is used to iterate over an array (every single element of the array will be iterated)
//map automatically returns just like filter method

let numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//adding 10 to every single array element/value
let displayNumbers = numbersList.map( (numbers) => {
    return (numbers + 10)
})
console.log(displayNumbers);


//trying same thing with forEach -> it won't return/it just displays the values
numbersList.forEach( (numbers) => {
    // if(numbers > 5){
    //     console.log(numbers + 10);
    // }

    //console.log(numbers + 100);
})


//chaining with map and filter

let myArrayListOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let mynumbers = myArrayListOfNumbers.map( (numbers) => {
    return (numbers * 10) //will return an array by multi by 10 to declared array
}).map( (numbers) => {
    return (numbers + 10) //will return an array by adding 10 to previous array(array that we got after 1st map)
}).filter( (numbers) => {
    return (numbers >= 80) //will return an array by implementing the condition(condition will be applied to array that we got after 2nd map)
})

console.log(mynumbers);
//reduce method is mostly used while calculating the sum
//when we calculate the shopping cart sum -> in this case we can case we can reduce method
//In reduce method -> two below parameters are passed 
//1) accumulator -> takes value as 0(given after arrow function)
//2) currentValue -> it holds the current value from given array

myArrayOfPrice = [1, 2, 3, 4]

let totalPrice = myArrayOfPrice.reduce(  (accumulator, currentValue) => {
    console.log(`accumulator : ${accumulator} and currentValue : ${currentValue}`);
    return accumulator + currentValue
}, 0)

console.log(totalPrice);


//try to calculate the sum of all coursePrice's from below array using reduce method
//Calculating the whole shopping price of courses
let shoppingCart = [
    {
        courseName : "JS Course",
        coursePrice : 4999
    },
    {
        courseName : "HTML Course",
        coursePrice : 499
    },
    {
        courseName : "MERN Stack Course",
        coursePrice : 9999
    },
    {
        courseName : "MEAN Stack Course",
        coursePrice : 12999
    },
]

//fetching all coursePrice values from an array & adding them together using reduce
let totalSum = shoppingCart.reduce( (accumulator, items) => {
    console.log(`accumulator : ${accumulator} and coursePrice : ${items.coursePrice}`);
    return (accumulator + items.coursePrice)
}, 0)

console.log(totalSum);

console.log(Math);

//Important methods in Math
//Math.abs() -> converts negative value to positive.
console.log(Math.abs(-10));

//The Math.round() static method returns the value of a number rounded to the nearest integer.
console.log(Math.round(45.77));

//The Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number.
console.log(Math.ceil(45.67));

//The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
console.log(Math.floor(45.67));

//It calculates the square root of given number
console.log(Math.sqrt(100));

//It calculates the power of the given number
console.log(Math.pow(2, 5));

//Both calculates min & max number available in the array
console.log(Math.min(1, 3, 5, 7));
console.log(Math.max(1, 3, 5, 7));

//Important -> Math.random() method 
console.log(Math.random()); //value ranges from 0 to 1 (0 <= value < 1)
console.log(Math.random() * 10); //value ranged from 0 to 9
console.log((Math.random() * 10) + 1); //value ranges from 1 to 10

//Math.floor() can also be used with Math.random() method to get the lowest value(rounded value)
console.log(Math.floor((Math.random() * 10) + 1)) //will get lowest rounded value

//How to calculate the values from given range
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min))
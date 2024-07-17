//string to Number conversion
// let score = "345aa"
// console.log(typeof score);
// let scoreInInteger = Number(score) // converted the string value to Integer
// console.log(typeof scoreInInteger);
// console.log(scoreInInteger);


//Number to string conversion
// let score = 456
// console.log(typeof score);
// let scoreInString = String(score)
// console.log(typeof scoreInString);
// console.log(scoreInString);


// Conversion for null
// let score = null
// console.log(typeof score);
// let scoreInString = String(score)
// let scoreInInteger = Number(score)
// console.log(typeof scoreInString);
// console.log(typeof scoreInInteger);
// console.log(scoreInString);
// console.log(scoreInInteger);


//Conversion for undefined
// let score = undefined
// console.log(typeof score);
// let scoreInString = String(score)
// let scoreInInteger = Number(score)
// console.log(typeof scoreInString);
// console.log(typeof scoreInInteger);
// console.log(scoreInString);
// console.log(scoreInInteger);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;


//boolean conversion
let isLoggedIn = "1"; //inputs can be taken as -> 1, 0, "", "Abhishek"
//console.log(typeof isLoggedIn);
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

 // if we enter below values what will be the o/p shown below
 // 1 => true, 0 => false
 // "" => false, "abhi" => true;


 //****************Basic Operations******************
//  console.log(2+2); //Additon
//  console.log(2-2); //Substraction
//  console.log(3*2); // Multiplication
//  console.log(6/4); //Division
//  console.log(2%3); //Remainder
//  console.log(2**3); //It means 2 raise to the power 3

//Basic 
let str1 = "Abhishek"
let str2 = " Bansod"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); //Convert it to string, o/p 12
// console.log(1 + "2"); //Convert it to string, o/p 12

//Not the ideal way to write this type of codes
// console.log(1 + 2 + "3"); //will add 1 & 2 then convert it to string so o/p 33
// console.log("1" + 2 + 3); //first element is string so whole thing will be considered string, o/p 123
// console.log(1 + 2 + 3 + "4");

//ideal ways to write above codes
// console.log((1 + 2) + "3");
// console.log("1" + (2 + 3));
// console.log((1 + 2 + 3) * 6);
// console.log(((8 + 8) / 2) * 2);


//Postfix & Prefix 

//If used postfix, with operator after operand (for example, x++), 
//the increment operator increments and returns the value before incrementing.
let x = 6
let y = x++ //It will directly assign x value to y then increment will happen
console.log([x, y]); 

//If used prefix, with operator before operand (for example, ++x),
//the increment operator increments and returns the value after incrementing.
let a = 10;
let b = ++a; //first increment will happen then value will be assigned to b.
console.log([a, b]);
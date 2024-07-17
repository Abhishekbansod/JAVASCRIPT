//Basic Comparison operations

//Compairing same data types
// console.log(2 > 1);
// console.log(2 < 1);
// console.log(3 <= 4);
// console.log(2 >= 4);
// console.log(2 == 2);
// console.log(5 != 6);

//Compairing diff data types
// console.log("2" > 1);
// console.log("023" > 1);

//Important to remember
// console.log(null > 0); //comparision
// console.log(null == 0); //equality check 
// console.log(null >= 0); //comparision
// console.log(null <= 0); //comparision

/*The reason is that an equality check "=="  & comparision > < >= <= works differently in JS
Comparision converts null to a number, treating it as 0, 
that's why console.log(null >= 0), console.log(null <= 0) are true & 
console.log(null > 0), console.log(null == 0) are false*/

//In case of undefined, the o/p will be false in all cases
// console.log(undefined > 0); 
// console.log(undefined == 0); 
// console.log(undefined >= 0); 
// console.log(undefined <= 0);


//Strict Check using "===", it checks value as well as data type
console.log("45" === 45); // value same but data type different - false
console.log(45 === 45); // value & data type same - true
console.log(56 == 78); // data type same but values different - false
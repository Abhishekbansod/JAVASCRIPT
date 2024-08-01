//Nullish Coalescing Operator (??): mostly used with null and undefined

let value1;
value1 = 5 ?? 10 //returns 5, first place value
// value1 = 10 ?? 5 //returns 10, first place value
// value1 = null ?? 20 //returns 20
// value1 = undefined ?? 40 //returns 40
// value1 = null ?? 10 ?? 20 // returns 10, value after null
// value1 = undefined ?? 20 ?? 40 //returns 20

//value1 = 23 ?? undefined ?? 69 //returns 23, first place value

console.log(value1);


//Terniary Operator
//syntax
//condition ? true : false

//with example
let coursePrice = 9999

coursePrice >= 1000 ? console.log("Course Price is expensive for me") : console.log("Course Price is affordable for me");
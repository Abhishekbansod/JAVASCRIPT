//In JS indexing of months starts from 0, eg Jan - 0, Feb - 1.......Dec - 11 etc.

let myDate = new Date() //Declaration
console.log("Basics :-");
console.log(myDate); 
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

//Interview question, what is the typeof date?
console.log(typeof myDate);

//Input date -> Date added from end
let createdDate1 = new Date(2024, 6, 18) // 6 - july month
console.log("For createdDate1 :-");

console.log(createdDate1.toString());
console.log(createdDate1.toDateString());
console.log(createdDate1.toLocaleString());
console.log(createdDate1.toLocaleDateString());


let createdDate2 = new Date(2024, 6, 18, 22, 40)
console.log("For createdDate2 :-");

console.log(createdDate2.toString());
console.log(createdDate2.toDateString());
console.log(createdDate2.toLocaleString());
console.log(createdDate2.toLocaleDateString());


let createdDate3 = new Date("7-18-2024") //followed format - mm/dd/yy
console.log("For createdDate3 :-");

console.log(createdDate3.toString());
console.log(createdDate3.toDateString());
console.log(createdDate3.toLocaleString());
console.log(createdDate3.toLocaleDateString());

//timestamp concept - Important Concept as per Interview POV
let myTimestamp = Date.now(); // Timestamp declaration

console.log("Timestamp Concept :-");
console.log(myTimestamp); //will return value/timestamp in milisecond

//how to get the value in miliseconds from given Date
console.log(createdDate3.getTime()); //will return value in milisecond

//Interview question
//how to convert the milisecond value to seconds
console.log("Interview Question :-");

let myTimestamp1 = Date.now();
console.log(myTimestamp1);
console.log(myTimestamp1 / 1000); //will return value in seconds but with decimal
console.log(Math.round(myTimestamp1/1000)); // will return value in seconds without decimal
console.log(Math.floor(Date.now() / 1000)); //we can use floor as well

//More on Date 
let newDate = new Date()
console.log("More Date Methods :-");

console.log(newDate);
console.log(newDate.getDay()); //will return day
console.log(newDate.getMonth()); //will return month but with JS indexing i.e Jan-0, Feb-1, March-2... Dec-11
console.log(newDate.getMonth() + 1); // will return the exact month without JS indexing
console.log(newDate.getFullYear()); //will return the year

//Important method toLocalString() -> to get the suggestions (cntrl + space) inside object {}
//console.log(newDate.toLocaleString()); // o/p - 20/7/2024, 11:32:43 am

newDate.toLocaleString('default', {
    weekday : 'long'
})  //-> similarly type weekday : '' ,more suggestions will come. Also we have to print it.

newDate.toLocaleString('default', {
    day : '2-digit'
})

newDate.toLocaleString('default', {
    month : 'long'
})

//similarly we can change/customize the date & make it visible on frontend as per our need.
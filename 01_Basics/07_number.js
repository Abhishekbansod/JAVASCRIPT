const num1 = 400;
console.log(num1);

//another way to declare the variable as number
const num2 = new Number(500)
console.log(num2);

//different methods of Number

//toString() method to convert the number into string
console.log(num2.toString());

//string operations on number
console.log(num2.toString().length);
console.log(num2.toString().charAt(2));
console.log(num2.toString().indexOf('5'));


//The toFixed() method of Number values returns a string 
//representing this number using fixed-point notation with the specified number of decimal places.
const num3 = 545.46789
console.log(num3.toFixed(1));
console.log(num3.toFixed(2));
console.log(num3.toFixed(3));


//The toPrecision() method of Number values returns a string representing 
//this number to the specified number of significant digits.
const num4 = 786.456
console.log(num4.toPrecision(1));
console.log(num4.toPrecision(2));
console.log(num4.toPrecision(3));

//The toLocaleString() method of Number values returns a string 
//with a language-sensitive representation of this number.
const num5 = 10000000
console.log(num5.toLocaleString());
console.log(num5.toLocaleString('en-IN'));
console.log(num5.toLocaleString('en-US'));



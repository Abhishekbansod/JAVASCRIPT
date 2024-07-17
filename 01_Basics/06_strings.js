const myName = "Abhishek"
const myAge = 23
const myCity = "Nagpur"

//concatenation with diff ways
console.log(myName + myAge + " Bansod"); //normal way or outdated
console.log(`Hello Everyone, my name is ${myName} and my age is ${myAge} and I belongs from ${myCity}`); //widely used by developers

//Another way to declare String
const myNewName = new String("Abhishekbansod")

//some operations on strings
console.log(myNewName[0]); //return char at 0th position
console.log(myNewName.length); //return length of string

console.log(myNewName.toUpperCase()); //return string in uppercase

console.log(myNewName.charAt(3)); //display char present at 3 position

console.log(myNewName.indexOf('b')); //returns the position/index at which char is present

console.log(myNewName.substring(0, 4));

console.log(myNewName.slice(1, 5));

//trim function - > The trim() method of String values removes whitespace from both ends of this string 
//and returns a new string, without modifying the original string.
const newString = "   Real Madrid   "
console.log(newString);
console.log(newString.trim()); 
console.log(newString.trimStart()); //removes spaces from the start only & keep other spaces
console.log(newString.trimEnd()); //removes spaced from the end only & keep other spaces


//replace function -> The replace() method of String values returns a new string with one, 
//some, or all matches of a pattern replaced by a replacement. 
const url = "https://github.com/Abhishekbansod/JAVASCRIPT"
console.log(url.replace("Abhishekbansod", "ABHISHEKBANSOD"));


//indludes function -> The includes() method of String values performs a case-sensitive search 
//to determine whether a given string may be found within this string, returning true or false as appropriate.
const stringName = "Hello Everyone, my name Abhishek & I belongs to Maharashtra from Nagpur."
console.log(stringName.includes("Nagpur"));
console.log(stringName.includes("Barcelona"));


//split function -> The split() method of String values takes a pattern and 
//divides this string into an ordered list of substrings by searching for the pattern, 
//puts these substrings into an array, and returns the array.
const statement1 = "Hello Everyone, my name Abhishek & I belongs to Maharashtra from Nagpur"
const statement2 = "Hello-Everyone-my-name-Abhishek"
console.log(statement1.split(" "));
console.log(statement2.split("-"));
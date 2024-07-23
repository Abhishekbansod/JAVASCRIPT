//Arrays

//Array declaration -> Method 1
const myArray1 = [10, 20, 20, 40, 50] 

const myArray2 = ["Captain America", "Iron-Man", "Thor", "Spider-Man"]

const myArray3 = ["Abhishek", 23, "Bansod", true]

//Array declaration -> Method 2
const myArray4 = new Array(10, 20, 30, "Abhishek", "Infosys", true)

console.log(myArray1[0]); //displaying value at index 0
//console.log(myArray3[1]); //displaying value at index 1
//console.log(myArray3[3]); //displaying value at index 3

//Array Methods
const array1 = [10, 20, 30, 40]

//push method -> used to add elementes in an array
array1.push(45)
array1.push(90)
console.log(array1);

//pop method -> used to remove/delete last array element 
array1.pop()
console.log(array1); //will remove last array element

//unshift method -> adds the specified elements to the beginning of an array and returns the new length of the array
const array2 = [10, 20, 30, 40]
array2.unshift(23) //will add 23 at the begining/at 0th index & return new length of array
console.log(array2);

//shift method -> it removes the first element from an array and returns that removed element. 
//This method changes the length of the array.
const array3 = [10, 20, 30, 40]
array3.shift() //will remove the element at 0th index & change the length of array
console.log(array3);

//includes method & indexof method in array
const array4 = [10, 20, 30, 40]
console.log(array4.includes(10)); //will return true as 10 is present in given array
console.log(array4.includes(45)); //will return -false as 45 is not present.

console.log(array4.indexOf(40)); //will return 3 as 40 is present at index 3
console.log(array4.indexOf(90)); //will return -1 as 90 is not present in given array

//join method -> creates and returns a new string by concatenating all of the elements in this array, 
//separated by commas or a specified separator string
const array5 = [10, 20, 30, 40, 50]
const newArray5 = array5.join()

console.log(array5); //will return the given array 
console.log(newArray5); //will return exact array but its datatype will be string
console.log(typeof newArray5); //will return string 
 

//slice and splice method -> Interview question *Imp*
const myArr = [0, 1, 2, 3, 4, 5]
console.log("Original Array", myArr);

//slice method
//1 -> returns portion of an array into a new array object selected from start to end (end not included).
//2 -> The original array will not be modified.
const myNewArr1 = myArr.slice(1, 4)
console.log(myNewArr1); //will return o/p as [1, 2, 3], slice does not include end index


console.log("Original Array after slice operation->", myArr); //original array after performing slice

//splice method
//1 -> returns portion of an array into a new array object selected from start to end (end included). 
//2 -> The original array will be modified.
const myNewArr2 = myArr.splice(1, 4)
console.log(myNewArr2); //will return o/p as [1, 2, 3, 4], splice includes end index & update the original array as well

console.log("Original array after splice operation ->", myArr); //Original array gets updated

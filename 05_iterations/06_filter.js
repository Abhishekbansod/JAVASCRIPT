//forEach loop --> it doesn't return back anything
//it is mostly used to print/display an array elements on frontend
//But in Production not everytime we will have to display the data
//sometimes there will be a requirement to return & display the data as well
//to avoid/return the data, we use filter in  javascript
//filter -> automatically returns the value & we just need to display it

let codingLanguages = ["Java", "C++", "Ruby", "Javascript", "Go", "C Language"]
const myLanguages = codingLanguages.forEach((items) => {
    //console.log(items);
    return items
})
//console.log(myLanguages);  //will display array elements with "undefined" 


//Introduction to filter
let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//using filter
let displayNumbers = myNumbers.filter((numbers) => {
    return (numbers > 5)
})
// console.log(displayNumbers);


//using forEach --> Need to write logic/create one more array to store required numbers/display the array as well
//to avoid all these steps mostly filter is used instead of forEach
let newArrayOfNumbers = []
myNumbers.forEach((num) => {
    if (num > 5) {
        newArrayOfNumbers.push(num)
    }
})
// console.log(newArrayOfNumbers);


//for practicing filter --> filter the values from below data/database using the filter method
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

//trying to get the required data using filter method
//accessing diff diff values/data --> check below operations
let myBooks = books.filter( (bookItems) => {
    return (bookItems.genre === "Science")
  })

myBooks = books.filter( (bookItems) => {
    return (bookItems.genre === "Fiction" || bookItems.edition > 2000)
})

myBooks = books.filter( (bookItems) => {
    return (bookItems.genre === "Non-Fiction" && bookItems.edition >= 2010)
})
console.log(myBooks);



//trying to get the required data from database using forEach method
//will need to create a separate array to store the that we get from database
let myArray = [] //new array to store data 
let myBooksData = books.forEach( (bookItems) => {
    if(bookItems.edition >= 2010){
        myArray.push(bookItems)
    }
})
// console.log(myArray);
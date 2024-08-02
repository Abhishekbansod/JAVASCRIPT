//forEach loop with an array --> mostly this loop is used with array

let codingLanguages = ["Java", "C++", "Ruby", "Javascript", "Go", "C Language"]

//with normal function
codingLanguages.forEach( function name(index){
    //console.log(index);
} )

//with callback function
codingLanguages.forEach( (index) => {
    //console.log(index);
} )

//another way
// function printMe (value){
//     console.log(value);
// }
// codingLanguages.forEach(printMe)

//Important --> values hold by callback function in below code --> array items, array index, whole array
codingLanguages.forEach( (value, index, Array) => {
    //console.log(value, index, Array);

    //console.log(`The value at index ${index} is : ${value}`);
} )


//M.Imp 
//iterate over an array containing multiple objects using forEach 
let superHeroes = [
    {
        brand : "Marvel",
        name : "Ironman"
    },
    {
        brand : "DC",
        name : "Superman"
    },
    {
        brand : "Harry Potter",
        name : "Ronn Wisely"
    },
    {
        brand : "Stranger Things",
        name : "Dustin"
    },
]

superHeroes.forEach( (items) => {

    console.log(items.brand);
    console.log(items.name);
    console.log(`${items.name} belongs to ${items.brand}`);
} )

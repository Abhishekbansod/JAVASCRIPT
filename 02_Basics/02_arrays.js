const marvelHeroes = ["Captain-America", "Iron-Man", "Thor", "Spider-Man"]
const dcHeroes = ["Bat-Man", "Super-Man", "Wonder-Women", "Flash"]

//pushing the dc heroes to marvelHeroes -> not the ideal way to do it.
//marvelHeroes.push(dcHeroes)
//console.log(marvelHeroes);

//Concat method can be used to combine two arrays
// const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes); 

//spread operator(...) -> Used to combine two arrays which spreads the given arrays & combine them(as a element)
const all_Heroes = [...marvelHeroes, ...dcHeroes] //will return combined elements of both array/combine two arrays
console.log(all_Heroes);


//How to check the given element is array or not
console.log(Array.isArray("Abhishek Bansod")); //will return false as "Abhishek Bansod" is not array
console.log(Array.isArray(marvelHeroes)); //will return true as marvelHeroes is array


//How to create an array from element/object etc
console.log(Array.from("Abhishek")); //returns an array
//console.log(Array.from(["Abhi", "Bansod", "Chintu", "Ruby"]));
//console.log(Array.from([1, 2, 3, 4]));

//Interview question *Imp*
console.log(Array.from({name : "Abhishek"})); //will return [], can't read the object

//of method -> converts the set values into an array
let value1 = 100
let value2 = 200
let value3 = 300

console.log(Array.of(value1, value2, value3));

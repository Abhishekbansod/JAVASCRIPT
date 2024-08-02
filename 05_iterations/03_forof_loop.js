//OTHER IMPORTANT LOOPS IN JS 

//1--> for of loop

//printing the array values
let myArray = [23, 45, 67, 89, 56, 78]
for (const arr of myArray) {
    //console.log(arr);
    //console.log(`The value is : ${arr}`);
}

//performing loop on string
let myName = "Abhishek bansod"
for (const eachChar of myName) {
    if(eachChar == " "){
        // continue
        break
    }
    //console.log(`The each character values is : ${eachChar}`);
}


//Maps 
//Map is a collection of unique key-values & order of the values is same here while inserting & displaying

let map = new Map()

map.set('MH', "Maharashtra")
map.set('KR', "Karnataka")
map.set('TN', "TamilNadu")
map.set('MP', "MadhyaPradesh")
map.set('UP', "UttarPradesh")
map.set('MH', "Maharashtra") //won't be displayed as map is collection unique key-values

//console.log(map);

for (const eachMapValue of map) {
    //console.log(eachMapValue);
}
//other way to display key & values 
for (const [key, value] of map) {
    //console.log(key,' :- ',value);   
}


//iternate over object using forof loop --> not possible 
let myObject = {
    name : "abhishek",
    id : 1307755,
    comapny : "Infosys"
}

// for (const [key, value] of myObject) {
//     //console.log(key, value); //won't be able to iterate over object  - throws an error
// }
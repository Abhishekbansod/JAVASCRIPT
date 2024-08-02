//iterate on object using forin loop --> iterating on object is not possible with forof loop
let myObject = {
    JS : "Javascript",
    PY : "Python",
    CPP : "C++ Programming",
    CSS : "Cascading style sheet"
}
for (const key in myObject) {
    //console.log(`For ${key} key the value is : ${myObject[key]}`);
}


//iterate on array using forin loop
let superHeroes = ["Superman", "Batman", "Ironman", "Spiderman", "Thor"]

for (const key in superHeroes) {

    if(superHeroes[key] == "Ironman"){
        // break
        //continue
    }
    //console.log(`The value at ${key} position is : ${superHeroes[key]}`);
}


//try to iterate over map using forin loop
//can't use forin loop with map
let myMap = new Map()

myMap.set("IN", "India")
myMap.set("MH", "Maharashtra")
myMap.set("UP", "UttarPradesh")
myMap.set("MP", "MadhyaPradesh")
myMap.set("GJ", "Gujrat")

for (const key in myMap) {
    console.log(myMap[key]); //won;t display anything on terminal
}
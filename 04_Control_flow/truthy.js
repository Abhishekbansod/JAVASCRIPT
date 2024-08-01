//Important truthy & falsy values to remember

//falsy values
// false, 0, -0, BinInt -> 0n, "", null, undefined, NaN

//truthy values
// "false", "0", " ", [], {}, function(){}

//how to check array is empty or not
let emailList = []
if(emailList.length === 0){
    console.log("Array is empty");
}else{
    console.log("Array is not empty");
}


//how to check object is empty or not
let myObject = {}

if (Object.values(myObject).length === 0) {
    console.log("Object is empty");
}else{
    console.log("Object is having some values");
}

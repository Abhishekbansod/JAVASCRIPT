//Switch case in JavaScript
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


let month = 7
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 7:
        console.log("July");
        break;

    default:
        console.log("Please initialise the month value/provide value from [1, 2, 3, 7]");
        break;
}


let myMonth = "Feb"
switch (myMonth) {
    case "Jan":
        console.log("It is january month");
        break;
    case "Feb":
        console.log("It is february month");
        break;
    case "March":
        console.log("It is march month");
        break;
    case "April":
        console.log("It is april month");
        break;

    default:
        console.log("Please enter a valid value!");
        break;
}
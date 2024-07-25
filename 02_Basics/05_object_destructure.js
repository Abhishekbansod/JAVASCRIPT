//how to destructure the object so that we don't need to access object elements again
//and again with object name & object element name which you want to access

//create an object

const myObject = {
    courseName: "JS with Projects",
    coursePrice: "999",
    courseTutor: "Abhishek Bansod",
    courseValidity: "Lifetime Access"
}

//normal way to access object elements
myObject.courseName
myObject.courseValidity
myObject.coursePrice

//how to destructure the object & access myObject elements
const { courseTutor, courseValidity, courseName, coursePrice } = myObject

//display myObject elements -> no need to access it using object name like myObject.courseName
console.log(courseName);
console.log(coursePrice);

//naming myObject elements while destructuring & displaying 
const { courseTutor: tutor, courseValidity: validity } = myObject
console.log(tutor);
console.log(validity);


//JSON -> Data comes in the form of JSON 
//API's are used to fetch the data from database

//how does JSON looks 
// {
//     "name" : "abhishek",
//     "id" : 1307755,
//     "company" : "Infosys",
//     "experience" : "18 Months"
// }

//JSON -> in Array format as well
[
    {
        "name": "abhishek",
        "id": 1307755,
        "company": "Infosys",
        "experience": "18 Months"
    },
    {
        "name": "abhishek",
        "id": 1307755,
        "company": "Infosys",
        "experience": "18 Months"
    },
    {
        "name": "abhishek",
        "id": 1307755,
        "company": "Infosys",
        "experience": "18 Months"
    }
]
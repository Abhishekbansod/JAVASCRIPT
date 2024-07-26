//Immediately Invoked Function Expression(IIFE)

//Global scope se hone wale pollution ko htane ke liye hum use krte hai IIFE
//pollutions like variable declaration


//format of IIFE
//()(); -> make sure to terminate(;) the statement while 


(function displayDbStatus (){

    //named IIFE -> displayDbStatus
    console.log(`DB1 IS CONNECTED`);
} )();


//using arrow function -> unnamed IIFE
(() => {
    console.log(`DB2 IS CONNECTED`);
}) ();

//IIFE with parameter
(
    (data) => {
        console.log(`DB3 IS CONNECTED with ${data}`);
    }
) ("database");
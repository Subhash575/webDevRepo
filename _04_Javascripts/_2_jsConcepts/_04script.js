/*
Doing I/O bound tasks in the real world
What if you were tasked with doing 3 things
1.Boil some water.
2.Do some laundry
3.Send a package via mail

Would you do these 
1.One by one (synchronously)
2.Context switch between them (Concurrently)
3.Start all 3 tasks together, and wait for them to finish. The first one that finishes gets catered to first.
"3pt which javascripts do."
*/

//Asynchornus in Js
function print(err, data) {
    //Here first parameter is for "Error" and second for "file contetnt"
    if(err){
        console.log("File is not found");
    }
    else{
        console.log(data);
    }
    //This will return null if no error.
    //For more understanding about log we print. 
}

const fs = require("fs");
fs.readFile("b.txt", "utf-8", print); //asynchronously
// readFile is "asynchronous" in nature it take 3 parameter: file, encoding, function
// were function is generally user define.
fs.readFile("c.txt", "utf-8", print); //asynchronously
// Here in above cases print function is call back after reading is compelete by the
// readFile method.
// console.log("!Done");
//(imp)Above Asynchornus asked in interview which will print first.

function myPrint(err, data) {
    if(err){
        console.log("File is not found");
    }
    else{
        console.log(data);
    }   
}
fs.readFile("./Javascripts/a.txt", "utf-8", myPrint);

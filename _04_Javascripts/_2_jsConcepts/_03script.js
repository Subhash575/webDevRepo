/*
(imp)The "parseInt method" parses a value as a string and returns the first integer.
A radix parameter specifies the number system to use:
2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal.
If radix is omitted, JavaScript assumes radix 10. If the value begins with "0x", JavaScript assumes radix 16.

Notes
If the first character cannot be converted, NaN is returned.
Leading and trailing spaces are ignored.
Only the first integer found is returned.

parseInt(string, radix)
*/
parseInt("010");
parseInt("10", 8);
parseInt("0x10");
parseInt("10", 16);
console.log(parseInt("10", 16));
console.log(parseInt("10", 10));

// Q:function to add two numbers

// 1.When input is string we can use "parseInt" to convert into integer.
// 2.Way is using Typescript.
function sumOfNum(x, y) {
    return parseInt(x) + parseInt(y);    
}
console.log(sumOfNum("34", 6));

// Q: Find Sum from one to Number
function sum(n) {
    
    let ans = 0;
    for(let i = 1; i <= n; i++){
        ans += i;
    }
    return ans;   
}
console.log(sum(5));
/*
 sum of natural : n*(n+1)/2;
*/

// ##Synchronous code:-
//Synchronous code is executed line by line,in the order it is written. Here each
//operation is waiting for compeletion of previous operation before going to next line.

/*
 ##I/O heavy operations
I/O (Input/Output) heavy operations refer to tasks in a computer program that involve a lot of data transfer between the program and external systems or devices. These operations usually require waiting for data to be read from or written to sources like disks, networks, databases, or other external devices, which can be time-consuming compared to in-memory computations.
Examples of I/O Heavy Operations:
Reading a file
Starting a clock
HTTP Requests

We’re going to introduce imports/requires next. A require statement lets you import code/functions export from another file/module.

Let’s try to write code to do an I/O heavy operation - 
Create a file in there (a.txt) with some text inside
Write the code to read a file synchronously
*/

/*
The Node.js file system module allows you to work with the file system on your computer.
To include the File System module, use the require() method:
var fs = require('fs');
Common use for the File System module:
Read files
Create files
Update files
Delete files
Rename files
for more refer from w3 school
*/

//###
//For importing we use the below code.
//fs is external library/module that stand for file system.
const fsa = require("fs");

// In first parameter you need to add the part of file from where you need to read.
const contents = fsa.readFileSync("./Javascripts/a.txt", "utf-8");
//utf-8 is stand for encoding here utf-8 refer to english language encoding.
//If you not write utf-8 it will print different value.
console.log(contents);

//another ex:-
const content2 = fsa.readFileSync("b.txt", "utf-8");
console.log(content2);

//there is method is fs module which is: readFile();
//which means read file asynchoronusly.


//### I/O bound tasks vs CPU bound tasks
/*
#CPU bound tasks
CPU-bound tasks are operations that are limited by the speed and power of the CPU. These tasks require significant computation and processing power, meaning that the performance bottleneck is the CPU itself.
ex:-
*/
let ans = 0;
for (let i = 1; i <= 1000000; i++) {
	ans = ans + i
}
console.log(ans);	
/*
A real world example of a CPU intensive task is running for 3 miles. Your legs/brain have to constantly be engaged for 3 miles while you run.
*/

/*
#I/O bound tasks
I/O-bound tasks are operations that are limited by the system’s input/output capabilities, such as disk I/O, network I/O, or any other form of data transfer. These tasks spend most of their time waiting for I/O operations to complete.
*/
const fs = require("fs");
const contents3 = fs.readFileSync("c.txt", "utf-8");
console.log(contents3);
/*
A real world example of an I/O bound task would be Boiling water. I don’t have to do much, I just have to put the water on the kettle, and my brain can be occupied elsewhere.
*/

//First known about "function argument"
//calculator for +,-,*,/:-
function add(x, y){
    return x+y;
}
function sub(x, y){
    return x-y;
}
function multi(x, y){
    return x*y;
}
function divide(x, y){
    return x/y;
}
// Passing in what needs to be done as an argument.
//Here we Passing function to another function as a argument.
function doOperation(x, y, op){
    return op(x, y);
}
console.log(divide(10, 3));
console.log(doOperation(9, 2, sub));
// Promise class:-
/*
Promise class give you the promise means it will return you something in the future.
*/

function logName() {
  console.log("Subhash");
}

setTimeout(logName, 3000);
//remember: logName is callback.
//Above approach is callback base approach:-

// We can do something(Above) similar by two ways:-
//1. callback based approach
//2. promise based approach
//promise is the cleaner way to do that.
/*
defining a promise is hard.
using a promise is easy.
Defination:-
A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
Promises are used to handle asynchronous operations more effectively than traditional callback functions, providing a cleaner and more manageable way to deal with code that executes asynchronously, such as API calls, file I/O, or timers.
Ex:- To demonstrate:
*/

function setTimeoutPromisefied(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
  //It will return the object of the promise class.
  // let p = new Promise(resolve => setTimeout(resolve, ms));
  // return p;
}

function callback() {
  console.log("3 sec is passed.");
}

//method 1 : using callback approach.
setTimeout(callback, 3000);

//method 2 : using promise approach.
setTimeoutPromisefied(3000).then(callback);

// understanding of promisefied statement:-
// How it work

//first way to understand:-
function promisefiedCall(resolve) {
  setTimeout(resolve, 3000);
}

promisefiedCall(function () {
  console.log("say Goodbye");
});

//second way to understand:-
function waitFor3S(resolve) {
  console.log(resolve); // this resolve contain the main function here and it will print.
  setTimeout(resolve, 3000);
}

function main() {
  console.log("How are you");
}

waitFor3S(main);

//In above two approach we wrap it inside the function otherwise it is callback approach. If we don't wrap it
//inside the wrapper function(for understanding).

// third way somewhat similar to actual approach.

function waitFor(resolve) {
  setTimeout(resolve, 3000);
}

function promiseFiedPrintAddress() {
  return new Promise(waitFor);
}

function printAddress() {
  console.log("Hisar");
}

promiseFiedPrintAddress().then(printAddress);
//Remember If "waitFor" is call then it will take input from the ".then" which will done by Promise class
//This is actually some-what similar to actual promise code but here we don't pass time as Parameter.

//some simple example for understanding Promise:-

function random() {}

const p = new Promise(random);
console.log(p);
// if we log it after calling empty function it will print: Promise { <pending> }
//According to defination of promise it will return something eventually.

//ex:-
function inform(resolve) {
  setTimeout(resolve, 3000);
}
//remember this inform take parameter from ".then" of object

function work() {
  console.log("Do your work");
}
const pt = new Promise(inform);
pt.then(work);
//It take the function as parameter which we need to print.
//In actuall code of promise we use "func(params).then(callback)"
//Here parameter in general is in second.

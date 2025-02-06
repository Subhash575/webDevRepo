// ## (Imp):- This is important for understanding.
// another asynchronous function:- setTimeout()
function myFunc(params) {
    console.log("click the button");   
}

console.log("HI");
//setTimeout() is global function.

//This is IO intensive.
//Here callback as function(for understanding)
setTimeout(myFunc, 1000);
//Here 5000 means 5 sec
console.log("Welcome to loope");

let ans = 0;
//This is CPU intensive.
for(let i = 0; i <= 1000000000; i++){
    ans += i;
}
console.log(ans+ " is expensive.");
//## Imp:-
//We need to check which will print first. Here CPU intensive task is print first even
// if the IO intensive function execute quickly bcs at that pt thread
// is busy doing the work(CPU intensive) here work is iterating
//Therefore first : console.log(ans+ " is expensive."); will print
//Then IO intensive task is done here that task is print: console.log("HI");


// ### JS Architecture for async code
// How JS executes asynchronous code - http://latentflip.com/loupe/
//Below content read then go to provide above link.

/*
1. Call Stack:-
 The call stack is a data structure that keeps track of the function calls in your program. It operates in a "Last In, First Out" (LIFO) manner, meaning the last function that was called is the first one to be executed and removed from the stack.

 When a function is called, it gets pushed onto the call stack. When the function completes, it's popped off the stack.
 ex:-
*/
function first() {
    console.log("First");
  }
  function second() {
    first();
    console.log("Second");
  }
  second();

/*
2. Web APIs
Web APIs are provided by the browser (or the Node.js runtime) and allow you to perform tasks that are outside the scope of the JavaScript language itself, such as making network requests, setting timers, or handling DOM events.

3. Callback Queue 
The callback queue is a list of tasks (callbacks) that are waiting to be executed once the call stack is empty. These tasks are added to the queue by Web APIs after they have completed their operation.

4. Event loop
The event loop constantly checks if the call stack is empty. If it is, and there are callbacks in the callback queue, it will push the first callback from the queue onto the call stack for execution.
*/

// (imp)Any IO work is asynchronous.
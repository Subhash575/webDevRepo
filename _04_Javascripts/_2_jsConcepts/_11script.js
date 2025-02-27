/*
Async await syntax
The async and await syntax in JavaScript provides a way to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain. 
It builds on top of Promises and allows you to avoid chaining .then() and .catch() methods while still working with asynchronous operations.
async/await is essentially syntactic sugar on top of Promises. 
*/

function setTimeoutPromiseFied(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

//async function:-

async function solve() {
  // await keyword use here
  await setTimeoutPromiseFied(1000);
  console.log("hi");
  await setTimeoutPromiseFied(3000);
  console.log("hello");
  await setTimeoutPromiseFied(5000);
  console.log("hi there");
}
//Another the hood async, await using the "Promise" but look like synchronous but
//actually asynchronous.
//It make the code even simpler.
solve();

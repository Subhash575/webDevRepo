//Some more example:-
function fn(resolve) {
  resolve();
  console.log("After resolve");
}

const p = new Promise(fn);
p.then(function () {
  console.log("After Promise");
});

//Arrow Function:-
/*
An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
Arrow functions cannot use yield within their body and cannot be created as generator functions.

ex: For understanding arrow function:-

// Traditional anonymous function
(function (a) {
  return a + 100;
});

// 1. Remove the word "function" and place arrow between the argument and opening body brace
(a) => {
  return a + 100;
};

// 2. Remove the body braces and word "return" — the return is implied.
(a) => a + 100;

// 3. Remove the parameter parentheses
a => a + 100;

*/

/*
Q: Write code that
logs hi after 1 second
logs hello 3 seconds after step 1
logs hello there 5 seconds after step 2
*/

//syntax also using arrow function refer: arrow function from the mdn.
// setTimeout(() => {

// }, timeout);

//extra pt: function with no name is called anonymous function
//Callback Hell
//Bcs Here nesting of function

//callback Base approach:-
setTimeout(function () {
  console.log("hi with callback approach");
  setTimeout(function () {
    console.log("hello with callback approach");
    setTimeout(function () {
      console.log("hello there with callback approach");
    }, 5000);
  }, 3000);
}, 1000);

//Not using anonymous function we can get rid of the callback hell without promise

function fn3() {
  console.log("hello there without using anonymus fn");
}

function fn2() {
  console.log("hello without using anonymus fn");
  setTimeout(fn3, 5000);
}

function fn1() {
  console.log("hi without using anonymus fn");
  setTimeout(fn2, 3000);
}
setTimeout(fn1, 1000);

//promisefied Base approach:-
function setTimeoutPromiseFied(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

/*

setTimeoutPromiseFied(1000).then(function () {
  console.log("hi using promise");
  setTimeoutPromiseFied(3000).then(function () {
    console.log("hello using promise");
    setTimeoutPromiseFied(5000).then(function () {
      console.log("hello there using promise");
    });
  });
});

*/

//Here is not callback hell but then hell as you can see.

//using concept of "promise chaining":-
//we can make our code simpler

setTimeoutPromiseFied(1000)
  .then(function () {
    console.log("hi using promise chaining");
    return setTimeoutPromiseFied(3000);
  })
  .then(function () {
    console.log("hello using promise chaining");
    return setTimeoutPromiseFied(5000);
  })
  .then(function () {
    console.log("hello there using promise chaining");
  });
//It will use promise chaining concept because it use the fact that it return promise
// and after that use '.then' method.

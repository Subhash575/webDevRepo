//Code to understand the flow of promise

console.log("---Top of the code--");
function readTheFile(resolve) {
  {
    console.log("Read the file is called");
    setTimeout(function () {
      console.log("callback based setTimeout compeleted!");
      //(imp) resolve; //It will not print callback function value until paranethsis is
      //   not use.
      resolve();
    }, 3000);
  }
}

function promiseFiedSetTimeOut() {
  console.log("promiseFiedSetTimeOut is called");
  return new Promise(readTheFile);
}

function callback() {
  console.log("Timer is done");
}

const p = promiseFiedSetTimeOut();
p.then(callback);

console.log("---end of the code--");

//Creating own Promise class and read the file.
class Promise1 {
  constructor(fn) {
    // Define AfterDone as an arrow function
    const AfterDone = () => {
      if (this.resolve) {
        this.resolve(); // Call stored resolve function
      }
    };

    fn(AfterDone); // Pass AfterDone to the function
  }

  //Above resolve is somewhat equal to callback here.
  then(callback) {
    this.resolve = callback; // Store the callback for later execution
  }
}

function wrapperFunc(rsolve) {
  setTimeout(function () {
    rsolve();
  }, 5000);
}

function promiseMySetTimeout() {
  return new Promise1(wrapperFunc);
}

function call() {
  console.log("sucessfully timing is done");
}
promiseMySetTimeout().then(call);

//why arrow is use here:-
/*
If you want to fix the issue using the arrow function (=>), the key idea is that arrow functions do not have their own this. Instead, they inherit this from the surrounding scope, which is what we need in this case.
*/

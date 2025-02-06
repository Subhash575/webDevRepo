// Javascript is interpreted, singlethread(one process), garbage collection and 
//loosely type.

var a = 1;
a = "Subhash";
a = true;
console.log(a);

// Here we changing the data type of variable which cannot we allowed in c++
//bcs c++ is statistically typed language and JS is "Dynamically type language"
//pt: C++ type cast bool to a number.

// ## Variable in Javascripts:- 
// variable can be declare using let, const, var

let isName = "Subhash";   // can we reassigned.
const val = 5;   // we cannot change it value/reassigned.
var id = 45;  // older way to declare variable and "functional scope"
console.log(val);
console.log(id);

// ## Datatype in Javascripts:-
// Number, string, boolean, array
let num = 56;
let tea = "green tea";
let isActive = true;
let arr = [45, 56, "Subhash", true, 58];
//You can create array of different datatype. You can see above ex.
console.log(arr);
console.log(arr.length);
console.log(arr[2]);


// ## Operator in Javascripts
//some basic operator in Js:-
// arithmetic operator, comparsion operator, logical operator
let nums = 3 + 4;
console.log(nums);
let ischeck = (7===5);
console.log(ischeck);
let isWork = (6 && 7);
console.log(isWork);


// ## Function in Javascripts
// We can declare function using function keyword in JS.

//function declaration.
function greet(pName) {
    return "Hello, " + pName;
}

//function call
let message = greet("Ramesh");
console.log(message);

// ## if-else in js:-
function vote(age){
    if(age >= 18){
       return true;   
    }else{
        return false;
    }
}

let isVote = vote(35);
console.log("You can vote: " + isVote);


// ## loop in js:- for, while loop
//for
console.log("For loops is js:-");
for(let i = 0; i < 5; i++){
    console.log(i);  
}

//while
console.log("while loops is js:-");
let j = 5;
while(j){
    console.log(j);
    j-=1;
}









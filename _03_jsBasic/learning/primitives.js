//Number
let balance = 120;
// typeof()function in Javascript.
console.log(balance);
console.log(typeof(balance));
console.log();

// Object
//Here we convert primitive data-type into non-primitive(Object) data-type.
//In javascript we can say everything is object.

let anotherBalance = new Number(120);

console.log(anotherBalance)
console.log(anotherBalance.valueOf());
console.log(typeof(anotherBalance));


//Boolean
// One way:-
let isActive = true;

// Another way:-
let isChecked = new Boolean(true);
console.log(isChecked.valueOf());


// null and undefined
console.log();
console.log("About null and undefined:- ");

let firstName;
console.log(typeof(firstName));
//It will print "undefined" bcs it exist but defination is not their

console.log(typeof(gameBoy));
//Above code also print "undefined" if we not declare anything

//Here we explicity define "null" and "undefined"
let t1 = null;
let t2 = undefined;
console.log(t1);
console.log(t2);
//Always remember "null" means empty, and "undefined" means not defined value.
console.log();

//String
//Imp:- Interview "String"
//Learning more during building a project.
console.log("Strings:-");
console.log();

//Many way of define a string in JS.
let s1 = "Hello"; //using double quote
let s2 = 'Hi';    //using single quote

//another way is using back text.This back text present below esc key.

let greetMessage = `Good Morning`;


let oldGreet = s1 + "Subhash";
console.log(oldGreet);
//It will not print the "space" b/w the string  when we concatenate the string.
//To solve this we write like that--> s1 + " Subhash" to get the "space" b/w
// the string but in case of multiple string it will become complex
//therefor we use the "back text" for defining the string.
//(Imp) here we directly add variable in the string using $ symbol this we
// called "String interpolation".
let greet = `${s1} Subhash !`;
console.log(greet);

//This "back text" also do computation here
let value = `Value is: ${2*2}`;
console.log(value);

//Symbol
//Symbol:- It actually uniquely identifies or gives you a unique value
//altogether 
//what the value is going to be, sometimes you can control it, sometimes you
//don't control it you can just "name" that value. But it's a uniqueness that's
//guaranteed that the only thing

let sm1 = Symbol();
let sm2 = Symbol();
console.log(sm1 == sm2);
//They are unique therefore it is not equal.

console.log(sm1);
//This will print:- Symbol()

let x = Symbol("Subhash");
let y = Symbol("Subhash");
console.log(x == y);
//Above is not equal bcs behind the scene the generating thing is different or
//unique here we only give the same name.

//refer from the mdn docs according to need.











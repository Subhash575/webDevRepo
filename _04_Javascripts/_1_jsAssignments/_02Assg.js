// 1.Write function take object as input and greet them with their name and age.

function greetMsg(user) {
    console.log("Hello, " +user.name+ " your age is " +user.age);
    if(user.age >= 18){
        console.log("You can vote");  
     }else{
        console.log("You can not vote");   
     }
}

let user = {
    name:"Suraj",
    age:20   
}

greetMsg(user);

console.log();

//2. Create an function that array of object as input and return user whose
//age is greater than  18 and are male.

function printData(arr) {
    //Here we define empty arr2.
    //instead of empty array we can use the filter in JS.
    let arr2 = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].gender === "male" && arr[i].age >= 18){
            // console.log(arr[i].Name);
            arr2.push(arr[i]);
        }
    }
    return arr2;
    
}

const arr = [
    {
        Name: "Ganesh",
        gender: "male",
        age: 17
    },
    {
        Name: "Vishal",
        gender: "male",
        age: 21
    },
    {
        Name: "Riya",
        gender: "female",
        age: 19
    },
    {
        Name: "Vansika",
        gender: "female",
        age: 18
    },
    {
        Name: "Ranvijavy",
        gender: "male",
        age: 34
    }
]

const op = printData(arr);
console.log(op);


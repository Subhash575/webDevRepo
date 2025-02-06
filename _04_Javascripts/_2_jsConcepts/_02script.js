// complex types in JS.
// ## Object:-
/*
Object in js is collection of key-value pairs.
Each key is string
Value can be any valid javascript data-type, including another object also.
*/

// Array in js is similar to array/vector in C++/arrayList in java.

//Similarly "Object in Js":
//Is similar to "map in C++"/similar to Hashmap in Java/Hashmap in Rust.

//For define name, id at one place or aggregating data we can use the object.
let user = {
  pName: "Subhash",
  id: 67,
};
//Here we use "+" symbol for concatenation of string.
console.log("Advisor " + user.pName + " has id no: " + user.id);
//another way:
console.log(user["pName"]); //bcs key value-pair therefore we can do that.
console.log(user["id"]);

// ## Arrays of Objects.
const Employee = [
  {
    Name: "Rakesh",
    age: 34,
  },
  {
    Name: "Sonam",
    age: 38,
  },
  34,
  true,
  {
    cities: [
      "delhi",
      "chandigardh",
      "Banglore",
      { contury: "India", lang: "Hindi" },
    ]
    //Here we have complex nested object.
    //Here you can went as deep as you can in Js(Arrays)
  },
  {
    //Also function can be use here.
    star: function pRank() {
      return true;
    }
  },
];

console.log(Employee[0]);
console.log(Employee[1].age);
console.log(Employee[3]);
console.log(Employee[4].cities[3].contury);
console.log(Employee[5]["star"]);
console.log(Employee[5].star);
console.log(Employee[5].star());

// ## Object of Objects
let Data = {
  Name: "Naresh",
  age: 45,
  address: {
    city1: "Hisar",
    city2: "Jind",
    city3: "Bhiwani",
  },
};
console.log(Data.address.city2);
